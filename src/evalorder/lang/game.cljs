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

(s/def ::post-description ::description)

(s/def ::post-level ::description)

(s/def ::target (s/coll-of ::expression, :kind set?, :into #{}))

(s/def ::level (s/keys :req-un [::expression ::description ::target ::definitions]
                       :opt-un [::post-description ::post-level]))

(defn validate [level]
  (let [conformed (s/conform ::level level)]
    (when (s/invalid? conformed)
      (throw (js/Error. (str "Invalid level:\n" (s/explain-str ::level level)))))
    conformed))

(defn button [name desc key on-click]
  [:div {:className "button", :onClick on-click}
   name
   [:span {:className "tooltip"}
    desc [:span " [" key "]"]]])

(defn describe [lines]
  (when (seq lines)
    [:div {:class "description"}
     (for [[comment i] (map vector lines (range))]
       ^{:key i}
       [:div {:class "comment"}
        ";; " comment])]))

(defn level-node [{:keys [description
                          post-description
                          post-level
                          expression
                          target
                          definitions]}
                  finish-level]
  (let [selected (reagent/atom nil)

        select
        (fn [el]
          (swap! @selected vary-meta dissoc :selected)
          (reset! selected el)
          (swap! el vary-meta assoc :selected true))

        child (doto (ast/parse expression {:onClick select})
                (swap! vary-meta assoc :selected true)
                (->> (reset! selected)))
        evaluated (reagent/atom false)

        evaluate
        (fn [& [el]]
          (binding [ast/*env* definitions]
            (swap! (or el @selected) #(with-meta (ast/evaluated %) (meta %))))
          (reset! evaluated true))]
    (fn []
      [:div {:class "full-size code"
             :onKeyDown
             (fn [event]
               (when-not (-> event (! :-ctrlKey))
                 (let [key (-> event (! :-key))]
                   (case key
                     "ArrowUp" (some-> (:parent (meta @@selected)) select)
                     "ArrowDown" (some-> (first (:children @@selected)) select)
                     "ArrowLeft" (some-> (:lhs (meta @@selected)) select)
                     "ArrowRight" (some-> (:rhs (meta @@selected)) select)
                     "Enter" (evaluate)
                     nil))))
             :tabIndex -1
             :ref (fn [el] (when el (! el :focus)))}
       [describe description]
       [:div {:class "expression"} (ast/render-child child)]
       [describe post-description]
       (when (and @evaluated (contains? target (ast/value @@selected)))
         [:<>
          [describe post-level]
          [:div {:class "next-button"
                 :onClick (fn [_] (finish-level))
                 :onKeyDown (fn [event] (when (-> event (! :-key) (= "Enter")) (finish-level)))
                 :tabIndex 0}
           (ast/render (ast/->ListExpr nil [(atom (ast/->SymExpr nil 'next))]))]])
       [:div {:class "controls"}
        [button "evaluate" "Evaluate the current expression" "Enter" (fn [_] (evaluate))]]])))

(defn root [level finish-level]
  ;; fully rerender it
  ^{:key (js/Date.now)}
  [level-node level finish-level])
