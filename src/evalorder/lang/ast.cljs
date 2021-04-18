(ns evalorder.lang.ast
  (:require [reagent.core :as reagent])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defprotocol Applicable
  (app [this out-atom args]))

(defprotocol Expr
  (render [this])
  (evaluated [this])
  (value [this]))

(defn render-child [child]
  (let [v @child]
    [:span
     (if (:selected (meta v))
       {:class "selected"}
       (when-some [on-click (:onClick (meta v))]
         {:onClick
          (fn [event]
            (on-click child)
            (! event :stopPropagation))}))
     [render v]]))

(defprotocol Literal
  (get-class [_]))

(defprotocol ToStr
  (to-str [_]))

(defrecord NumLiteral [value]
  Literal
  (get-class [_] "number"))

(defrecord NilLiteral [value]
  Literal
  (get-class [_] "nil"))

(defrecord BoolLiteral [value]
  Literal
  (get-class [_] "bool"))

(defrecord ValueLiteral [value]
  ToStr
  (to-str [_] "?")
  Literal
  (get-class [_] "value"))

(defrecord ErrorExpr [this-atom message]
  Expr
  (render [_]
    [:span {:class "error"}
     "#!" (pr-str message)])
  (evaluated [this] this)
  (value [this] this))

(defrecord LiteralExpr [this-atom literal]
  Expr
  (render [_]
    [:span {:class (get-class literal)}
     (if (satisfies? ToStr literal)
       (to-str literal)
       (pr-str (:value literal)))])
  (evaluated [this] this)
  (value [_] (:value literal))
  Applicable
  (app [_ out-atom args] (app out-atom literal args)))

(defn delim [v]
  [:span {:class "delimiter"} v])

(def ^:dynamic *env* {})

(defrecord SymExpr [this-atom sym]
  Expr
  (render [_]
    [:span {:class "symbol"} (str sym)])
  (evaluated [this]
    (let [[_ {:keys [value]}] (find *env* sym)]
      (if (and value (implements? IDeref value))
        (assoc @value :this-atom this-atom)
        this)))
  (value [_] sym)
  Applicable
  (app [_ out-atom args]
    (if-some [[_ v] (find *env* sym)]
      (app v out-atom args)
      (->ErrorExpr out-atom "Undefined"))))

(defrecord ListExpr [this-atom children]
  Expr
  (render [_]
    `[:span {:class "list"}
      [~delim "("] ~@(map render-child children) [~delim ")"]])
  (evaluated [_]
    (app @(first children) this-atom (map deref (next children))))
  (value [_] (map (comp value deref) children)))

(extend-protocol Applicable
  default
  (app [_ out-atom _args] (->ErrorExpr out-atom "Cannot be applied")))

(defn assoc-neighbours [els]
  (doseq [[lhs rhs] (partition 2 1 els)]
    (swap! lhs vary-meta assoc :rhs rhs)
    (swap! rhs vary-meta assoc :lhs lhs))
  els)

(defn parse [expr & [extra-meta]]
  (let [ta (reagent/atom nil)]
    (reset!
      ta
      (vary-meta
        (condp #(%1 %2) expr
          seq? (->> expr
                    (map #(parse % (assoc extra-meta :parent ta)))
                    assoc-neighbours
                    (->ListExpr ta))
          symbol? (->SymExpr ta expr)
          number? (->LiteralExpr ta (->NumLiteral expr))
          boolean? (->LiteralExpr ta (->BoolLiteral expr))
          nil? (->LiteralExpr ta (->NilLiteral expr))
          (->LiteralExpr ta (->ValueLiteral expr)))
        merge
        extra-meta))
    ta))
