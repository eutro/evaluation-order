(ns evalorder.screen
  (:require [cljs.spec.alpha :as s]
            [clojure.edn :as edn]
            [clojure.string :as str]
            [reagent.core :as reagent]
            [evalorder.util :as u])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defprotocol Element
  (render [_ next!]))

(extend-protocol Element
  string
  (render [comment next!]
    (when next! (next!))
    [:div {:class "comment"}
     (str ";; " comment)])
  PersistentVector
  (render [els next!]
    [:<>
     (for [[i el] (u/enumerate (butlast els))]
       ^{:key i} [render el])
     [render (last els) next!]]))

(defn element? [x]
  (satisfies? Element x))

(s/def ::screen (s/and not-empty (s/every element?, :kind vector?)))

(defn error-screen [lines]
  [(apply vector "Something went wrong loading the screen:" lines)])

(def reader-opts
  {:readers {'delay/ms
             (fn [delay]
               (reify Element
                 (render [_ next!]
                   (when next! (js/setTimeout next! delay))
                   [:<>])))}})

(defn add-reader! [key value]
  (set! reader-opts (update reader-opts :readers assoc key value)))

(defn read-screen [s]
  (try (let [raw (edn/read-string reader-opts s)
             conformed (s/conform ::screen raw)]
         (if (s/invalid? conformed)
           (error-screen (-> (s/explain-str ::screen raw) (str/split #"\n")))
           conformed))
       (catch js/Error. e
         (error-screen (str/split (ex-message e) #"\n")))))

(defn show [story]
  (let [index (reagent/atom 1)]
    (fn []
      (let [target @index
            before (subvec story 0 (min target (count story)))]
        [:<> (for [[i el] (u/enumerate before)]
               ^{:key i} [render el
                          (when (= (inc i) target)
                            #(swap! index inc))])]))))
