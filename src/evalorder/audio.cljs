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

(defn play-track! [track]
  (when (not= @current-track track)
    (when-let [ot @current-track]
      (! ot :pause))
    (reset! current-track track))
  (when-let [nt track]
    (when (! nt :-paused)
      (set! (! nt :-loop) true)
      (set! (! nt :-currentTime) 0)
      (set! (! nt :-volume) @music-volume)
      (! nt :play))))

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

(def loop0 (->Audio "loop0"))
(def loop1 (->Audio "loop1"))

(def music
  {:loop1 loop1, :loop0 loop0})
