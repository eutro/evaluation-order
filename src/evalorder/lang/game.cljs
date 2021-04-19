(ns evalorder.lang.game
  (:require [evalorder.lang.ast :as ast]
            [evalorder.lang.values :as values]
            [reagent.core :as reagent]
            [cljs.spec.alpha :as s]
            [evalorder.screen :as screen])
  (:require-macros [evalorder.macros :refer [! !js]]))

(s/def ::expression
  (s/nonconforming
    (s/or :recursive (s/every ::expression)
          :number number?
          :symbol symbol?)))

(s/def ::doc any?)

(s/def ::raw-def
  (s/or :global (s/and symbol? #(contains? values/*globals* %))
        :expr (s/tuple symbol? ::doc ::expression)))

(s/def ::definition
  (s/and
    ::raw-def
    (s/conformer
      (fn [[k v]]
        (case k
          :global [v (values/*globals* v)]
          :expr (let [[name doc value] v]
                  [name (values/->Global doc (ast/parse value))]))))))

(s/def ::definitions
  (s/coll-of ::definition, :into {}))

(s/def ::target (s/coll-of ::expression, :kind set?, :into #{}))

(s/def ::level (s/keys :req-un [::expression ::target ::definitions]))

(defn validate [level]
  (let [conformed (s/conform ::level level)]
    (when (s/invalid? conformed)
      (throw (js/Error. (str "Invalid expr:\n" (s/explain-str ::level level)))))
    conformed))

(def reset-toggle (reagent/atom false))

(defn level-node [{:keys [expression
                          target
                          definitions]}
                  finish!]
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
      (when (and @evaluated (contains? target (ast/value @child))) (finish!))
      [:div {:class "code"
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
                     "r" (swap! reset-toggle not)
                     nil))))
             :tabIndex -1
             :ref (fn [el] (when el (! el :focus)))}
       [:div {:class "expression"} (ast/render-child child)]])))

(defn root [level finish!]
  @reset-toggle
  ;; fully rerender it
  ^{:key (js/Date.now)}
  [level-node level finish!])

(screen/add-reader!
  'game/expression
  (fn [expr]
    (let [validated (validate expr)]
      (reify screen/Element
        (render [_ next!]
          [root validated next!])))))
