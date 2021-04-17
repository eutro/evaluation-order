(ns evalorder.lang.values)
(alias 'ast 'evalorder.lang.ast)

(defmacro def-g [name doc value]
  `(->> ~value
        (->Global ~doc)
        (assoc *globals* '~name)
        (set! *globals*)))

(defmacro defn-g [name [out-atom args] doc & body]
  `(def-g ~name ~doc
     (reify ast/Applicable
       (~'app [~'_# oa# args#]
         (let [~args (map ast/value args#)
               ~out-atom oa#]
           ~@body)))))
