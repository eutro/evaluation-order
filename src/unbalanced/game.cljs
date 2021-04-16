(ns unbalanced.game
  (:require [cljs.core.async :as a]
            [unbalanced.render.render :as render]
            [unbalanced.render.font :as font])
  (:require-macros [unbalanced.macros :refer [! !js]]))

(defrecord Game [screen])

(defprotocol Screen
  (update-screen [_ ctx])
  (render-screen [_ ctx time]))

(defn tick [game ctx]
  (a/go
    (assoc game
      :screen (a/<! (update-screen (:screen game) ctx)))))

(defn render [game ctx time]
  (render-screen (:screen game) ctx time))

(def dir->vec
  {:up [0 -1]
   :down [0 1]
   :left [-1 0]
   :right [1 0]})

(defn addv [a b]
  (mapv + a b))

(defrecord GameScreen [player]
  Screen
  (update-screen [this ctx]
    (a/go
      (let [direction (-> ctx :input :direction)]
        (a/poll! direction)
        (update this :player addv (dir->vec (a/<! direction))))))
  (render-screen [{[px py] :player} _ctx _time]
    (render/compose
      render/clear
      (-> (font/text "(")
          (font/with-font {:font-size "100px", :font-family "monospace"})
          (render/translate
            (* px 50)
            (* py 120))))))

(defn game-init []
  (->GameScreen [0 0]))

(defn get-game-context []
  (let [ctx (->Game (game-init))]
    ctx))
