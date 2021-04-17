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
(s/def ::description (s/every string?))
(s/def ::target ::expression)
(s/def ::definitions (s/every symbol?))
(s/def ::level (s/keys :req-un [::expression ::description ::target ::definitions]))

(defn validate [level]
  (let [conformed (s/conform ::level level)]
    (when (s/invalid? conformed)
      (throw (js/Error. (str "Invalid level:\n" (s/explain-str ::level level)))))
    level))

(defn root [{:keys [description
                    expression
                    target
                    definitions]}]
  (let [child (doto (ast/parse expression)
                (swap! vary-meta assoc :selected true))
        selected (reagent/atom child)
        globals (select-keys values/*globals* definitions)]
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
                     (binding [ast/*env* globals]
                       (swap! @selected #(with-meta (ast/evaluated %) (meta %))))))))
             :tabIndex -1
             :ref (fn [el] (when el (! el :focus)))}
       [:div {:class "description"}
        (for [[comment i] (map vector description (range))]
          ^{:key i}
          [:div {:class "comment"}
           ";; " comment])]
       (ast/render-child child)
       [:div {:class "target"}
        [:div {:class "comment"}
         ";; => " (pr-str target)]]])))
