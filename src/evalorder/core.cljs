(ns evalorder.core
  (:require [reagent.dom :as rd]
            [reagent.core :as reagent]
            [evalorder.lang.game :as game]
            [clojure.edn :as edn])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defn game [levels]
  (let [style (reagent/atom "light")]
    (fn []
      [:div {:class (str "full-size " @style)}
       [game/root (rand-nth levels)]])))

(-> (!js :fetch "/levels.edn")
    (! :then
       (fn [value]
         (-> value
             (! :text)
             (! :then
                (fn [text]
                  (rd/render [game (edn/read-string text)]
                             (! js/document :getElementById "game"))))))))
