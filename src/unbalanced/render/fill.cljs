(ns unbalanced.render.fill
  (:require-macros [unbalanced.macros :refer [!]]))

(defprotocol Styleable
  (to-style [_]))

(extend-protocol Styleable
  string
  (to-style [this] this))

(defn with-style [el style]
  (fn [ctx x y]
    (set! (! ctx :-fillStyle) (to-style style))
    (el ctx x y)))
