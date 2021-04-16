(ns evalorder.core
  (:require [reagent.dom :as rd]
            [reagent.core :as reagent]
            [evalorder.lang.reader :as reader]
            [evalorder.lang.evaluator :as ev])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defn edit-level [level]
  [:textarea {:class "editor code"
              :spellCheck "false"
              :onChange
              (fn [event]
                (reset! level (-> event (! :-target) (! :-value))))
              :value @level}])

(defn read-level [level-string]
  (reader/read-all level-string))

(defn level-form [form index]
  (let [state (reagent/atom form)]
    (fn []
      (let [value @state]
        [:span {:tabIndex 0
                :class "expr"
                :onKeyPress
                (fn [event]
                  (when (and (-> event (! :-key) (= "Enter"))
                             (not (-> event (! :-ctrlKey))))
                    (reset! state (ev/evaluate value))
                    (! event :stopPropagation)))}
         (condp #(%1 %2) value

           seq?
           `[:span
             "("
             ~@(interpose
                 " "
                 (for [[subform k] (map vector value (range))]
                   ^{:key k} [level-form subform k]))
             ")"]

           string? [:span {:class "string"} (ev/->str value)]
           keyword? [:span {:class "keyword"} (ev/->str value)]
           number? [:span {:class "number"} (ev/->str value)]
           symbol? [:span {:class (if (zero? index) "symbol function" "symbol")} (ev/->str value)]
           nil? [:span {:class "nil"} (ev/->str value)]
           (partial instance? js/Error) [:span {:class "error"} (ev/->str value)]
           var? [:span {:class "var"} (ev/->str value)]

           [:span {:class "value"} (ev/->str value)])]))))

(defn play-level [level-data]
  [:pre {:class "code"}
   (let [played-level (reagent/atom level-data)]
     (interpose
       "\n"
       (for [[form k] (map vector @played-level (range))]
         ^{:key k} [level-form form -1])))])

(defn level []
  (let [edit (reagent/atom false)]
    (fn [level]
      [:div {:class "code-wrapper"
             :onKeyPress
             (fn [event]
               (when (and (-> event (! :-ctrlKey))
                          (-> event (! :-key) (= "Enter")))
                 (swap! edit not)))
             :tabIndex -1}
       (if @edit
         [edit-level level]
         (try [play-level (read-level @level)]
              (catch js/Error e
                (js/alert (! e :-message))
                (swap! edit not)
                [edit-level level])))])))

(defn game []
  [level (reagent/atom (prn-str '(+ 1 (* 3 4) (/ 5 6))))])

(rd/render game (! js/document :getElementById "game"))
