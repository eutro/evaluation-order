(ns evalorder.core
  (:require [reagent.dom :as rd]
            [reagent.core :as reagent]
            [evalorder.game]
            [evalorder.screen :as screen]
            [evalorder.cookies :as ck]
            [evalorder.menu :as menu]
            [evalorder.util :as u]
            [evalorder.audio :as audio]
            [clojure.core.async :as a]
            [cljs.core.async.interop :refer-macros [<p!]])
  (:require-macros [evalorder.macros :refer [! !js]]))

(def story (reagent/atom nil))
(def theme (reagent/atom (or (ck/get-cookie "EO_theme") "dark")))
(add-watch theme :cookie (fn [_k _r _o n] (ck/set-cookie! "EO_theme" n)))
(def theme->next {"dark" "", "" "dark"})
(def progress (reagent/atom (let [cookie (some->> (ck/get-cookie "EO_progress")
                                                  (!js :parseInt))]
                              (if (integer? cookie) cookie 0))))
(add-watch progress :cookie (fn [_k _r _o n] (ck/set-cookie! "EO_progress" (str n))))

(a/go
  (-> (!js :fetch "story.edn") (<p!) (! :text) (<p!) screen/read-story (->> (reset! story))))

(def failed-to-play (reagent/atom false))

(a/go
  (try (some-> (audio/play-track! audio/loop0) (<p!))
       (catch js/Error e
         (reset! failed-to-play true))))

(defn level-select []
  (let [selecting (reagent/atom false)]
    (fn []
      (if @selecting
        `[:<>
          ~@(for [[index level] (u/enumerate @story)]
              ^{:key (:name level)}
              `[~menu/button
                ~(:name level)
                ~@(if (<= index @progress)
                    [(fn []
                       (reset! menu/screen
                               (partial
                                screen/show
                                level
                                (fn []
                                  (swap! progress max (inc index))
                                  (reset! menu/screen nil)
                                  (audio/play-track! audio/loop0)))))
                     nil]
                    [(fn []) {:disabled true}])])]
        [menu/button "Level Select" #(reset! selecting true)]))))

(defn main-menu []
  [menu/menu
   [menu/logo]
   [level-select]
   [menu/button "Change Theme" (fn [] (swap! theme theme->next))]
   (when @failed-to-play
     [menu/button
      "Play Music"
      (fn []
        (a/go
          (try (some-> (audio/play-track! audio/loop0) (<p!))
               (reset! failed-to-play false)
               (catch js/Error _ ;(
                 ))))])])

(defn app []
  (-> js/document
      (! :querySelector "html")
      (! :-className)
      (set! @theme))
  (let [main (or @menu/screen main-menu)]
    (if-some [o @menu/overlay]
      [:<>
       [:div {:class "overlay"
              :onBlur #(reset! menu/overlay nil)}
        o]
       [:div {:class "faded"}
        [main]]]
      [main])))

(rd/render [app] (! js/document :getElementById "app"))
