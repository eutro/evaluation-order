(ns evalorder.screen
  (:require [cljs.spec.alpha :as s]
            [clojure.edn :as edn]
            [clojure.string :as str]
            [reagent.core :as reagent]
            [evalorder.util :as u]
            [evalorder.cookies :as ck])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defprotocol Element
  (render [_ next!]))

(defprotocol NoDelay)

(extend-type string
  NoDelay
  Element
  (render [comment _next!]
    [:div {:class "comment"}
     [:div {:class "content"} comment]
     [:div {:class "semicolons"} ";;"]]))

(extend-type nil
  NoDelay
  Element
  (render [_ _next!]
    [:br]))

(defrecord MsDelay [delay]
  Element
  (render [_ next!]
    (when next! (js/setTimeout #(next!) delay))
    [:<>]))

(defrecord Anchor [name]
  Element
  (render [_ next!]
    (when next!
      (ck/set-cookie! "EO_anchor" name)
      (next!))
    [:<>]))

(extend-type PersistentVector
  NoDelay
  Element
  (render [form _next!] form))

(defn element? [x]
  (satisfies? Element x))

(s/def ::screen (s/and not-empty (s/every element?, :kind vector?)))

(defn error-screen [lines]
  (apply vector "Something went wrong loading the screen:" lines))

(def reader-opts
  {:readers {'delay/ms ->MsDelay,
             'anchor/name ->Anchor}})

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

(defn slide [[el & rem] anchor]
  (if (or (satisfies? NoDelay el)
          (and anchor (not= el anchor)))
    [:<>
     [render el nil]
     (when rem [slide rem anchor])]
    (let [next? (reagent/atom false)]
      (fn []
        [:<>
         [render el (when-not @next? #(reset! next? true))]
         (when (and anchor (= el anchor))
           [:span {:ref (fn [el] (when el (! el :scrollIntoView)))}])
         (when-let [next-slide (and @next? rem)]
           [slide next-slide])]))))

(defn show [story]
  [:div {:class "story"}
   [slide story (some #{(->Anchor (ck/get-cookie "EO_anchor"))} story)]])
