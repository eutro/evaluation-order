(ns evalorder.core
  (:require [reagent.dom :as rd]
            [reagent.core :as reagent]
            [evalorder.game]
            [evalorder.screen :as screen]
            [evalorder.cookies :as ck]
            [evalorder.menu :as menu]
            [clojure.core.async :as a]
            [cljs.core.async.interop :refer-macros [<p!]])
  (:require-macros [evalorder.macros :refer [! !js]]))

(def story (reagent/atom nil))
(a/go (-> (!js :fetch "story.edn") (<p!) (! :text) (<p!) screen/read-screen (->> (reset! story))))
(def theme (reagent/atom (or (ck/get-cookie "EO_theme") "dark")))
(add-watch theme :cookie (fn [_k _r _o n] (ck/set-cookie! "EO_theme" n)))
(def theme->next {"dark" "", "" "dark"})

(defn main-menu []
  [menu/menu
   [menu/logo]
   `[~menu/button "Start"
     ~@(if-some [s @story]
         [(fn [] (reset! menu/screen (partial screen/show s)))]
         [nil {:disabled true}])]
   [menu/button "Change Theme" (fn [] (swap! theme theme->next))]
   [menu/button "Reset Progress"
    (fn [] (ck/set-cookie! "EO_anchor" ""))]])

(defn app []
  (-> js/document
      (! :querySelector "html")
      (! :-className)
      (set! @theme))
  [(or @menu/screen main-menu)])

(rd/render [app] (! js/document :getElementById "app"))
