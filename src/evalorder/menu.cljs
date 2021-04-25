(ns evalorder.menu
  (:require [reagent.core :as reagent]
            [evalorder.audio :as audio]
            [evalorder.cookies :as ck]
            [evalorder.screen :as screen]
            [evalorder.util :as u]
            [clojure.core.async :as a]
            [cljs.core.async.interop :refer-macros [<p!]])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defn logo [text]
  [:h1 text])

(defn button [text on-click & [extras]]
  [:button (merge {:class "button"
                   :onClick (fn []
                              (audio/play audio/eval)
                              (on-click))}
                  extras)
   text])

(defn menu [& elements]
  `[:div {:class "menu"}
    ~@elements])

(def story (reagent/atom nil))
(def progress (ck/cookie-atom
               #(reagent/atom (let [cookie (some->> % (!js :parseInt))]
                                (if (integer? cookie) cookie 0)))
               "EO_progress"))
(def screen (reagent/atom nil))
(def overlay (reagent/atom nil))
(def theme (ck/cookie-atom #(reagent/atom (or % "dark")) "EO_theme"))
(def theme->next {"dark" "", "" "dark"})

(a/go
  (-> (!js :fetch "story.edn") (<p!) (! :text) (<p!) screen/read-story (->> (reset! story))))

(defn back-button [text]
  [button (or text "Back") (fn [] (reset! overlay nil))])

(defn volume-control [title a]
  [:<>
   [:div title]
   [:div [:input {:type "range"
                  :class "volume-control"
                  :min 0
                  :max 100
                  :value (* 100 @a)
                  :onChange
                  (fn [event]
                    (-> event
                        (! :-target)
                        (! :-value)
                        (/ 100)
                        (->> (reset! a))))}]]])

(defn options []
  [button
   "Options"
   (fn []
     (reset!
      overlay
      [menu
       [logo "Options"]
       [volume-control "Sound Effects" audio/sfx-volume]
       [volume-control "Music" audio/music-volume]
       [button "Change Theme" (fn [] (swap! theme theme->next))]
       [back-button]]))])

(defn level-select []
  [button
   "Level Select"
   (fn []
     (reset!
      overlay
      `[~menu
        ~[logo "Level Select"]
        ~@(for [[index level] (u/enumerate @story)]
            ^{:key (:name level)}
            `[~button
              ~(:name level)
              ~@(if (<= index @progress)
                  [(fn []
                     (let [main-menu!
                           (fn []
                             (reset! screen nil)
                             (audio/play-track! audio/loop0))]
                       (reset!
                        screen
                        [screen/show
                         level
                         (fn []
                           (swap! progress max (inc index))
                           (main-menu!))
                         (fn []
                           (reset!
                            overlay
                            [menu
                             [logo "Paused"]
                             [options]
                             [button "Back to Main Menu"
                              (fn []
                                (main-menu!)
                                (reset! overlay nil))]
                             [back-button "Back to Game"]]))]))
                     (reset! overlay nil))
                   nil]
                  [(fn []) {:disabled true}])])
        ~[back-button]]))])
