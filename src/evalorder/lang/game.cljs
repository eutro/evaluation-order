(ns evalorder.lang.game
  (:require [evalorder.lang.ast :as ast]
            [evalorder.lang.values :as values]
            [reagent.core :as reagent]
            [cljs.spec.alpha :as s])
  (:require-macros [evalorder.macros :refer [! !js]]))

(s/def ::expression
  (s/nonconforming
    (s/or :recursive (s/every ::expression)
          :number number?
          :symbol symbol?)))

(s/def ::doc any?)

(s/def ::raw-def
  (s/or :sym symbol?
        :entry (s/tuple symbol? ::doc ::expression)))

(s/def ::definition
  (s/and
    ::raw-def
    (s/conformer
      (fn [[k v]]
        (case k
          :sym [v (values/*globals* v)]
          :entry (let [[name doc value] v]
                   [name (values/->Global doc (ast/parse value))]))))))

(s/def ::definitions
  (s/coll-of ::definition, :into {}))

(s/def ::description (s/every string?))

(s/def ::post-description (s/every string?))

(s/def ::target (s/coll-of ::expression, :kind set?, :into #{}))

(s/def ::level (s/keys :req-un [::expression ::description ::target ::definitions]
                       :opt-un [::post-description]))

(defn validate [level]
  (let [conformed (s/conform ::level level)]
    (when (s/invalid? conformed)
      (throw (js/Error. (str "Invalid level:\n" (s/explain-str ::level level)))))
    conformed))

(defn level-node [{:keys [description
                          post-description
                          expression
                          target
                          definitions]}
                  finish-level]
  (let [child (doto (ast/parse expression)
                (swap! vary-meta assoc :selected true))
        selected (reagent/atom child)
        evaluated (reagent/atom false)]
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
                     (binding [ast/*env* definitions]
                       (swap! @selected #(with-meta (ast/evaluated %) (meta %))))
                     (reset! evaluated true)))))
             :tabIndex -1
             :ref (fn [el] (when el (! el :focus)))}
       [:div {:class "description"}
        (for [[comment i] (map vector description (range))]
          ^{:key i}
          [:div {:class "comment"}
           ";; " comment])]
       (ast/render-child child)
       [:div {:class "description"}
        (for [[comment i] (map vector post-description (range))]
          ^{:key i}
          [:div {:class "comment"}
           ";; " comment])]
       (when (and @evaluated (contains? target (ast/value @@selected)))
         [:a {:onClick (fn [_] (finish-level))}
          (ast/render (ast/->ListExpr nil [(atom (ast/->SymExpr nil 'next))]))])])))

(defn root [level finish-level]
  ;; fully rerender it
  ^{:key (js/Date.now)}
  [level-node level finish-level])
