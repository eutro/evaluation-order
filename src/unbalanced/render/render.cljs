(ns unbalanced.render.render
  (:require [goog.events :as events]
            [unbalanced.render.position :as pos])
  (:require-macros [unbalanced.macros :refer [!]]))

(defn resize [ctx]
  (let [canvas (! ctx :-canvas)]
    (set! (! canvas :-width) (! canvas :-clientWidth))
    (set! (! canvas :-height) (! canvas :-clientHeight))))

(defn get-render-context []
  (let [ctx (-> js/document
                (! :getElementById "canvas") (or (throw (js/Error. "Couldn't find canvas")))
                (doto (-> (! :-getContext) (or (throw (js/Error. "Canvas context not supported")))))
                (! :getContext "2d") (or (throw (js/Error. "Couldn't get canvas context"))))]
    (resize ctx)
    (events/listen
      js/window "resize"
      (fn [_] (resize ctx)))
    ctx))

(defn draw! [ctx el x y]
  (el ctx x y))

(defn compose [& elements]
  (fn [ctx x y]
    (doseq [el elements]
      (el ctx x y))))

(defn translate [el dx dy]
  (fn [ctx x y]
    (el ctx
        (+ x (pos/to-pos dx ctx))
        (+ y (pos/to-pos dy ctx)))))

(defn clear [ctx & _]
  (let [canvas (! ctx :-canvas)
        width (! canvas :-width)
        height (! canvas :-height)]
    (! ctx :clearRect 0 0 width height)))

(defn rect [width height]
  (fn [ctx x y]
    (! ctx
       :fillRect
       x y
       (pos/to-pos width ctx)
       (pos/to-pos height ctx))))
