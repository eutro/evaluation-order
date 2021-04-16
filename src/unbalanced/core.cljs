(ns unbalanced.core
  (:require [unbalanced.render.render :as render]
            [unbalanced.game :as game]
            [unbalanced.input :as input]
            [cljs.core.async :as a])
  (:require-macros [unbalanced.macros :refer [! !js]]))

(defrecord Context [render input game])

(defn first-tick [ctx]
  [ctx (game/tick (:game ctx) ctx)])

(defn tick-game [[ctx next-tick] time]
  (let [new-game (a/poll! next-tick)
        ctx
        (if new-game
          (assoc ctx :game new-game)
          ctx)
        next-tick
        (if new-game
          (game/tick new-game ctx)
          next-tick)]
    (render/draw!
      (:render ctx)
      (game/render (:game ctx) ctx time)
      0 0)
    [ctx next-tick]))

(defn main-loop [loop-state time]
  (let [loop-state (tick-game loop-state time)]
    (!js :requestAnimationFrame
      (fn [time] (main-loop loop-state time)))))

(defn main []
  (let [ctx (->Context (render/get-render-context)
                       (input/get-input-context)
                       (game/get-game-context))]
    (main-loop (first-tick ctx) 0)))

(main)
