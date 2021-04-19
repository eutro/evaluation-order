(ns evalorder.menu
  (:require [reagent.core :as reagent]))

(defn logo []
  [:h1 "Evaluation Order"])

(defn button [text on-click & [extras]]
  [:button (merge {:class "button"
                   :onClick on-click}
                  extras)
   text])

(defn menu [& elements]
  `[:div {:class "menu"}
    ~@elements])

(def screen (reagent/atom nil))
