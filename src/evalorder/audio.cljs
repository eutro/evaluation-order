(ns evalorder.audio
  (:require [reagent.core :as reagent])
  (:refer-clojure :exclude [eval])
  (:require-macros [evalorder.macros :refer [!js !]]))

(defn ->Audio [name]
  (!js :Audio. (str "audio/" name ".wav")))

(def music-volume (reagent/atom 0.5))
(def audio-volume (reagent/atom 1.0))

(defn play [s]
  (let [s (! s :cloneNode)]
    (set! (! s :-volume) @audio-volume)
    (! s :play)))

(def current-track (atom nil))
(add-watch
 current-track
 :stop-start
 (fn [_r _k o n]
   (println n)
   (when o
     (! o :pause))
   (when n
     (set! (! n :-loop) true)
     (set! (! n :-currentTime) 0)
     (set! (! n :-volume) @music-volume)
     (! n :play))))
(add-watch
 music-volume
 :track-volume
 (fn [_r _k _o n]
   (when-let [ct @current-track]
     (set! (! ct :-volume) n))))

(def up (->Audio "up"))
(def down (->Audio "down"))
(def left (->Audio "left"))
(def right (->Audio "right"))
(def failed (->Audio "failed"))
(def undo (->Audio "undo"))
(def eval (->Audio "eval"))

(def loop1 (->Audio "loop1"))

(def music
  {:loop1 loop1})
