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

(def failed-to-play (reagent/atom false))

(a/go
  (try (some-> (audio/play-track! audio/loop0) (<p!))
       (catch js/Error e ;; Autoplay disallowed (more than likely)
         (reset! failed-to-play true))))

(defn main-menu []
  [menu/menu
   [menu/logo "Evaluation Order"]
   [menu/level-select]
   [menu/options]
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
