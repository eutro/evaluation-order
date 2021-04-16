(ns unbalanced.core
  (:require [reagent.dom :as rd]
            [reagent.core :as reagent])
  (:require-macros [unbalanced.macros :refer [! !js]]))

(defn edit-level [level]
  [:textarea {:class "editor code"
              :spellCheck "false"
              :onChange
              (fn [event]
                (reset! level (-> event (! :-target) (! :-value))))
              :value @level}])

(defn play-level [level]
  [:pre {:class "code"} @level])

(defn level []
  (let [edit (reagent/atom true)]
    (fn [level]
      [:div {:class "code-wrapper"
             :onKeyPress
             (fn [event]
               (when (and (-> event (! :-ctrlKey))
                          (-> event (! :-key) (= "Enter")))
                 (swap! edit not)))
             :tabIndex 0}
       (if @edit
         [edit-level level]
         [play-level level])])))

(defn game []
  [level (reagent/atom (prn-str '(-> "Hello world!")))])

(rd/render game (! js/document :getElementById "game"))
