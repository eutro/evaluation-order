(ns evalorder.audio
  (:refer-clojure :exclude [eval])
  (:require-macros [evalorder.macros :refer [!js !]]))

(defn ->Audio [name]
  (!js :Audio. (str "audio/" name ".wav")))

(defn play [sound]
  (-> sound
      (! :cloneNode)
      (! :play)))

(def up (->Audio "up"))
(def down (->Audio "down"))
(def left (->Audio "left"))
(def right (->Audio "right"))
(def failed (->Audio "failed"))
(def undo (->Audio "undo"))
(def eval (->Audio "eval"))
