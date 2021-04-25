(ns evalorder.audio
  (:require [reagent.core :as reagent]
            [evalorder.cookies :as ck])
  (:refer-clojure :exclude [eval])
  (:require-macros [evalorder.macros :refer [!js !]]))

(defn ->Audio [name]
  (!js :Audio. (str "audio/" name ".wav")))

(def music-volume (ck/cookie-atom #(reagent/atom (or (double %) 1.0)) "EO_music_volume"))
(def sfx-volume (ck/cookie-atom #(reagent/atom (or (double %) 1.0)) "EO_sfx_volume"))

(defn play [s]
  (let [s (! s :cloneNode)]
    (set! (! s :-volume) @sfx-volume)
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
