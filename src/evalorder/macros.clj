(ns evalorder.macros)

(defmacro !
  "Reference a member using a string, keyword or var."
  [value name & args]
  `(. ~value ~(symbol name) ~@args))

(defmacro !js
  "Reference a JavaScript global by string, keyword or var."
  [name & args]
  `(~(symbol "js" (str (symbol name))) ~@args))
