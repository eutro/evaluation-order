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
            [cljs.core.async.interop :refer-macros [<p!]]
            [clojure.pprint :as pp])
  (:require-macros [evalorder.macros :refer [! !js]]))

(def failed-to-play (reagent/atom false))

(a/go
  (try (some-> (audio/play-track! audio/loop0) (<p!))
       (catch js/Error e ;; Autoplay disallowed (more than likely)
         (reset! failed-to-play true))))

(defn level-editor []
  (let [v (reagent/atom
           "{:name \"Name\"
 :music :loop1
 :scene
 [\"This will be a comment\"
  #game/expression {:expression (if true target), :target #{target}}
  :continue
  \"Wow\" #delay/ms 1000]}
")]
    (fn this []
      [:<>
       [:textarea {:class "editor"
                   :spellCheck "false"
                   :value @v
                   :onChange (fn [event] (-> event (! :-target) (! :-value) (->> (reset! v))))}]
       [:div {:class "editor-buttons"}
        [menu/button
         "Finish"
         (fn []
           (let [track @audio/current-track
                 editor! (fn []
                           (reset! menu/screen [this])
                           (audio/play-track! track))]
             (reset!
              menu/screen
              [screen/show
               (doto (screen/read-level @v) prn)
               editor!
               (fn []
                 (reset!
                  menu/overlay
                  [menu/menu
                   [menu/logo "Paused"]
                   [menu/options]
                   [menu/button "Back to Editor"
                    (fn []
                      (editor!)
                      (reset! menu/overlay nil))]
                   [menu/back-button "Back to Game"]]))])))]
        [menu/button
         "Main Menu"
         (fn [] (reset! menu/screen nil))]]])))

(defn main-menu []
  [menu/menu
   [menu/logo "Evaluation Order"]
   [menu/level-select]
   [menu/options]
   [menu/button
    "Level Editor"
    (fn []
      (reset! menu/screen [level-editor]))]
   [:a {:class "button"
        :href "https://github.com/eutro/evaluation-order"
        :target "_blank"}
    "Source Code"]
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
      (set! @menu/theme))
  (let [main (or @menu/screen [main-menu])
        overlay @menu/overlay]
    [:<>
     [:div (when overlay {:class "faded"})
      main]
     (when overlay
       [:div {:class "overlay"
              :tabIndex -1
              :ref #(some-> % (! :focus))
              :onKeyDown
              (fn [evt]
                (when (= "Escape" (! evt :-key))
                  (reset! menu/overlay nil)))}
        overlay])]))

(rd/render [app] (! js/document :getElementById "app"))
