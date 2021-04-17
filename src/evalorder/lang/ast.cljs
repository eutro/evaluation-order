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
    [:span (when (:selected (meta v)) {:class "selected"})
     [render v]]))

(defprotocol Literal
  (get-class [_]))

(defprotocol ToStr
  (to-str [_]))

(defrecord NumLiteral [value]
  Literal
  (get-class [_] "number"))

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
  (evaluated [this] this)
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

(defn parse [expr]
  (let [ta (reagent/atom nil)]
    (reset!
      ta
      (condp #(%1 %2) expr
        seq? (->> expr
                  (map (comp #(doto % (swap! vary-meta assoc :parent ta)) parse))
                  assoc-neighbours
                  (->ListExpr ta))
        symbol? (->SymExpr ta expr)
        number? (->LiteralExpr ta (->NumLiteral expr))
        (->LiteralExpr ta (->ValueLiteral expr))))
    ta))
