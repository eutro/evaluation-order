(ns unbalanced.render.position
  (:require-macros [unbalanced.macros :refer [!]]))

(defn to-pos [pos ctx]
  (if (ifn? pos)
    (pos ctx)
    pos))

(defn app [f & args]
  (fn [ctx]
    (apply f (map #(to-pos % ctx) args))))

(defn frac-x [value]
  (fn [ctx] (* (-> ctx (! :-canvas) (! :-width)) value)))

(defn frac-y [value]
  (fn [ctx] (* (-> ctx (! :-canvas) (! :-height)) value)))
