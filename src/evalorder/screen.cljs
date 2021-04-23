(ns evalorder.screen
  (:require [cljs.spec.alpha :as s]
            [clojure.edn :as edn]
            [clojure.string :as str]
            [reagent.core :as reagent])
  (:require-macros [evalorder.macros :refer [! !js]]))

(defprotocol Element
  (render [_ next!]))

(defprotocol NoDelay)

(extend-type string
  NoDelay
  Element
  (render [comment _next!]
    [:div {:class "comment"}
     [:div {:class "semicolons"} ";;"]
     [:div {:class "content"} comment]]))

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

(extend-type PersistentVector
  NoDelay
  Element
  (render [form _next!] form))

(def keyword->element
  {:continue (reify Element
               (render [_ next!]
                 (if next!
                   [:div {:class "controls"}
                    [:div {:class "control button material-icons"
                           :title "Continue (Enter)"
                           :onClick #(next!)
                           :onKeyDown #(when (and (= "Enter" (! % :-key))
                                                  (not (! % :-ctrlKey)))
                                         (next!))
                           :tabIndex -1
                           :ref #(when % (! % :focus))}
                     "keyboard_return"]]
                   [:hr {:ref #(some-> % (! :scrollIntoView))}])))})

(extend-type Keyword
  Element
  (render [kw next!]
    (render (keyword->element kw) next!)))

(defn element? [x]
  (if (keyword? x)
    (some? (keyword->element x))
    (satisfies? Element x)))

(s/def ::scene (s/and not-empty (s/every element?, :kind vector?)))

(s/def ::name string?)

(s/def ::level
  (s/keys :req-un [::scene ::name]))

(s/def ::story (s/and not-empty (s/every ::level, :kind sequential?, :into [])))

(defn error-screen [lines]
  (apply vector "Something went wrong loading the screen:" lines))

(def reader-opts
  {:readers {'delay/ms ->MsDelay}})

(defn add-reader! [key value]
  (set! reader-opts (update reader-opts :readers assoc key value)))

(defn read-story [s]
  (try (let [raw (edn/read-string reader-opts s)
             conformed (s/conform ::story raw)]
         (if (s/invalid? conformed)
           [(error-screen (-> (s/explain-str ::screen raw) (str/split #"\n")))]
           conformed))
       (catch js/Error. e
         [(error-screen (str/split (ex-message e) #"\n"))])))

(defn slide [[el & rem]]
  (if (satisfies? NoDelay el)
    [:<>
     [render el nil]
     (when rem [slide rem])]
    (let [next? (reagent/atom false)]
      (fn []
        [:<>
         [render el (when-not @next? #(reset! next? true))]
         (when-let [next-slide (and @next? rem)]
           [slide next-slide])]))))

(defn show [scene]
  [:div {:class "story"}
   [slide scene]])
