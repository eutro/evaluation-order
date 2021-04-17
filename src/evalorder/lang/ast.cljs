(ns evalorder.lang.ast
  (:require [reagent.core :as reagent])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defprotocol Expr
  (render [this])
  (evaluated [this])
  (value [this])
  (app [this args]))

(defn render-child [child]
  (let [v @child]
    [:span (when (:selected (meta v)) {:class "selected"})
     [render v]]))

(defrecord Literal [str class value])

(defrecord LiteralExpr [this-atom literal]
  Expr
  (render [_]
    [:span {:class (:class literal)}
     (:str literal)])
  (evaluated [this] this)
  (value [_] (:value literal)))

(defn delim [v]
  [:span {:class "delimiter"} v])

(defrecord SymExpr [this-atom sym]
  Expr
  (render [_]
    [:span {:class "symbol"} (str sym)])
  (evaluated [_]
    (->LiteralExpr this-atom (->Literal "?" "value" ({'+ +, '* *, '/ /} sym))))
  (value [_] sym))

(defrecord ListExpr [this-atom children]
  Expr
  (render [_]
    `[:span {:class "list"}
      [~delim "("] ~@(map render-child children) [~delim ")"]])
  (evaluated [_]
    ;; TODO application
    (->SymExpr this-atom (symbol "applicatiom")))
  (value [_] (map (comp value deref) children)))

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
        number? (->LiteralExpr ta (->Literal (str expr) "number" expr))
        (->LiteralExpr ta (->Literal "?" "value" expr))))
    ta))

(defn root [form]
  (let [child (parse form)
        selected (reagent/atom child)]
    (swap! child vary-meta assoc :selected true)
    (fn []
      [:div {:class "full-size code"
             :onKeyDown
             (fn [event]
               (when-not (-> event (! :-ctrlKey))
                 (let [key (-> event (! :-key))]
                   (when-some [sel
                               (case key
                                 "ArrowUp" (:parent (meta @@selected))
                                 "ArrowDown" (first (:children @@selected))
                                 "ArrowLeft" (:lhs (meta @@selected))
                                 "ArrowRight" (:rhs (meta @@selected))
                                 nil)]
                     (swap! @selected vary-meta dissoc :selected)
                     (reset! selected sel)
                     (swap! sel vary-meta assoc :selected true))
                   (when (= key "Enter")
                     (swap! @selected #(with-meta (evaluated %) (meta %)))))))
             :tabIndex -1}
       (render-child child)])))
