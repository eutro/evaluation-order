(ns evalorder.screen
  (:require [cljs.spec.alpha :as s]
            [clojure.edn :as edn]
            [clojure.string :as str]
            [reagent.core :as reagent]
            [evalorder.audio :as audio])
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

(defn single-control [title icon act!]
  [:div {:class "controls"}
   [:div {:class "control button material-icons"
          :title title
          :onClick #(act!)
          :onKeyDown #(when (and (= "Enter" (! % :-key))
                                 (not (! % :-ctrlKey)))
                        (act!))
          :tabIndex -1
          :ref #(some-> % (! :focus))}
    icon]])

(def keyword->element
  {:continue (reify Element
               (render [_ next!]
                 (if next!
                   [single-control
                    "Continue"
                    "keyboard_return"
                    (fn []
                      (next!)
                      (audio/play audio/eval))]
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

(s/def ::music audio/music)

(s/def ::level
  (s/keys :req-un [::scene ::name]
          :opt-un [::music]))

(s/def ::story (s/and not-empty (s/every ::level, :kind sequential?, :into [])))

(defn error-screen [lines]
  {:name "Something went wrong"
   :scene (vec lines)})

(def reader-opts
  {:readers {'delay/ms ->MsDelay}})

(defn add-reader! [key value]
  (set! reader-opts (update reader-opts :readers assoc key value)))

(defn read-story [s]
  (try (let [raw (edn/read-string reader-opts s)
             conformed (s/conform ::story raw)]
         (if (s/invalid? conformed)
           [(error-screen (-> (s/explain-str ::story raw) (str/split #"\n")))]
           conformed))
       (catch js/Error. e
         [(error-screen (str/split (ex-message e) #"\n"))])))

(defn slide [[el & rem] finish!]
  (let [cont
        (if rem
          [slide rem finish!]
          [single-control
           "Finish"
           "done"
           (fn []
             (finish!)
             (audio/play audio/eval)
             (reset! audio/current-track nil))])]
    (if (satisfies? NoDelay el)
      [:<> [render el nil] cont]
      (let [next? (reagent/atom false)]
        (fn []
          [:<>
           [render el (when-not @next? #(reset! next? true))]
           (when @next? cont)])))))

(defn show [{:keys [scene music]} finish!]
  (reset! audio/current-track (audio/music music))
  [:div {:class "story"}
   [slide scene finish!]])
