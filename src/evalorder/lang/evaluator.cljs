(ns evalorder.lang.evaluator
  (:require-macros [evalorder.macros :refer [! !js]]))

(defn ->str [x]
  (condp #(%1 %2) x
    (partial instance? js/Error) (str "#!{" (! x :-message) "}")
    (pr-str x)))

(def globals
  {'+ +, '- -, '/ /, '* *})

(defn evaluate [value]
  (try
    (condp #(%1 %2) value
      seq? (let [[function & args] (map evaluate value)]
             (if (ifn? function)
               (apply function args)
               (throw (js/Error. (str (->str function) " is not a function")))))
      symbol? (if-let [[_ found] (find globals value)]
                found
                (throw (js/Error. (str value " is undefined"))))
      var? @value
      value)
    (catch js/Error e e)))
