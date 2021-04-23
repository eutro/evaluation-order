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
(a/go (-> (!js :fetch "story.edn") (<p!) (! :text) (<p!) screen/read-story (->> (reset! story))))
(def theme (reagent/atom (or (ck/get-cookie "EO_theme") "dark")))
(add-watch theme :cookie (fn [_k _r _o n] (ck/set-cookie! "EO_theme" n)))
(def theme->next {"dark" "", "" "dark"})
(def progress (reagent/atom (let [cookie (some->> (ck/get-cookie "EO_progress")
                                                  (!js :parseInt))]
                              (if (integer? cookie) cookie 0))))
(add-watch progress :cookie (fn [_k _r _o n] (ck/set-cookie! "EO_progress" (str n))))

(defn level-select []
  (let [selecting (reagent/atom false)]
    (fn []
      (if @selecting
        `[:<>
          ~@(for [level @story]
              ^{:key name}
              [menu/button
               (:name level)
               #(reset! menu/screen (partial screen/show (:scene level)))])]
        [menu/button "Level Select" #(reset! selecting true)]))))

(defn main-menu []
  [menu/menu
   [menu/logo]
   [level-select]
   [menu/button "Change Theme" (fn [] (swap! theme theme->next))]])

(defn app []
  (-> js/document
      (! :querySelector "html")
      (! :-className)
      (set! @theme))
  [(or @menu/screen main-menu)])

(rd/render [app] (! js/document :getElementById "app"))
