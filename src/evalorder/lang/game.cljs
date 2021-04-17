(ns evalorder.lang.game
  (:require [evalorder.lang.ast :as ast]
            [evalorder.lang.values :as values]
            [reagent.core :as reagent])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defn root [form]
  (let [child (ast/parse form)
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
                     (binding [ast/*env* values/*globals*]
                       (swap! @selected #(with-meta (ast/evaluated %) (meta %))))))))
             :tabIndex -1}
       (ast/render-child child)])))
