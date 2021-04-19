(ns evalorder.util)

(defn zip [& colls]
  (apply map vector colls))

(defn enumerate [coll]
  (zip (range) coll))
