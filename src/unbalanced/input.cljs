(ns unbalanced.input
  (:require [cljs.core.async :as a]
            [goog.events :as events])
  (:require-macros [unbalanced.macros :refer [!]]))

(defrecord Input [click direction mouse])

(defn singleton-chan []
  (a/chan (a/dropping-buffer 1)))

(defn get-input-context []
  (let [{:keys [click direction mouse]
         :as input}
        (->> {:mouse (atom [##NaN ##NaN])}
             map->Input
             (into {} (map (fn [[k v :as e]]
                             (if v e [k (singleton-chan)]))))
             map->Input)]
    (events/listen
      js/window "mousemove"
      (fn [event]
        (reset! mouse [(! event :-clientX) (! event :-clientY)])))
    (events/listen
      js/window "click"
      (fn [event]
        (a/put! click [(! event :-clientX) (! event :-clientY)])))
    (events/listen
      js/window "keydown"
      (fn [event]
        (some->>
          (case (! event :-key)
            ("w" "W" "ArrowUp") :up
            ("a" "A" "ArrowLeft") :left
            ("s" "S" "ArrowDown") :down
            ("d" "D" "ArrowRight") :right
            nil)
          (a/put! direction))))
    (let [min-dist-squared (* 150 150)
          allowed-time 200
          start (atom nil)]
      (events/listen
        js/window "touchstart"
        (fn [event]
          (let [touch (first (! event :-changedTouches))]
            (reset! start {:x (! touch :-pageX)
                           :y (! touch :-pageY)
                           :time (js/Date.now)})
            (! event :preventDefault))))
      (events/listen
        js/window "touchmove"
        (fn [event] (! event :preventDefault)))
      (events/listen
        js/window "touchend"
        (fn [event]
          (let [touch (first (! event :-changedTouches))
                {start-x :x, start-y :y, start-time :time} @start
                elapsed-time (- (js/Date.now) start-time)]
            (when (<= elapsed-time allowed-time)
              (let [x (! touch :-pageX)
                    y (! touch :-pageY)
                    dx (- x start-x)
                    dy (- y start-y)]
                (when (>= min-dist-squared (+ (* dx dx) (* dy dy)))
                  (some->>
                    (case (Math/floor
                            (/ (Math/atan2 dy dx)
                               (/ Math/PI 8)))
                      (-1 0) :right
                      (3 4) :up
                      (8 -8) :left
                      (-4 -3) :down
                      nil)
                    (a/put! direction))))))
          (! event :preventDefault))))
    input))
