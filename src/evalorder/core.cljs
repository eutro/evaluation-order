(ns evalorder.core
  (:require [reagent.dom :as rd]
            [reagent.core :as reagent]
            [evalorder.lang.reader :as reader]
            [evalorder.lang.ast :as ast])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defn edit-level [level]
  [:textarea {:class "code editor"
              :spellCheck "false"
              :onChange
              (fn [event]
                (reset! level (-> event (! :-target) (! :-value))))
              :value @level}])

(defn level []
  (let [edit (reagent/atom false)]
    (fn [level]
      [:div {:class "light"}
       [:div {:class "code-wrapper"
              :onKeyPress
              (fn [event]
                (when (and (-> event (! :-ctrlKey))
                           (-> event (! :-key) (= "Enter")))
                  (swap! edit not)))
              :tabIndex -1}
        (if @edit
          [edit-level level]
          (try [ast/root (reader/read @level)]
               (catch js/Error e
                 (js/alert (! e :-message))
                 (swap! edit not)
                 [edit-level level])))]])))

(defn game []
  [level (reagent/atom (prn-str '(+ 1 (* 3 4) (/ 5 6))))])

(rd/render game (! js/document :getElementById "game"))
