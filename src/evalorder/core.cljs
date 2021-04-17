(ns evalorder.core
  (:require [reagent.dom :as rd]
            [reagent.core :as reagent]
            [evalorder.lang.game :as game]
            [clojure.edn :as edn])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defn game [levels]
  (let [style (reagent/atom "light")
        level-no (reagent/atom 0)]
    (fn []
      [:div {:class (str "full-size " @style)}
       (if-some [[_ level] (find levels @level-no)]
         (try [game/root (game/validate level) (fn [] (swap! level-no inc))]
              (catch js/Error. e (js/alert (ex-message e))))
         [:div {:class "code"} "wow you've finished"])])))

(-> (!js :fetch "/levels.edn")
    (! :then
       (fn [value]
         (-> value
             (! :text)
             (! :then
                (fn [text]
                  (rd/render [game (edn/read-string text)]
                             (! js/document :getElementById "game"))))))))
