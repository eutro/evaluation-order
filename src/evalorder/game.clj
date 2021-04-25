(ns evalorder.game)

(defmacro numericfn
  ([f op iferr]
   `(fn [& args#]
      (if (some (complement number?) args#)
        ~iferr
        (apply ~f args#))))
  ([f op]
   `(numericfn ~f ~op (error ~(str "Can only " op " numbers")))))
