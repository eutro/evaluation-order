(ns evalorder.game
  (:require [reagent.core :as reagent]
            [cljs.spec.alpha :as s]
            [evalorder.screen :as screen]
            [evalorder.util :as u])
  (:require-macros [evalorder.macros :refer [! !js]]))

(s/def ::expression
  (s/and
    (s/or :recursive (s/coll-of ::expression, :into [])
          :number number?
          :symbol symbol?)
    (s/conformer second)))

(s/def ::definitions any?)

(s/def ::target (s/coll-of ::expression, :kind set?, :into #{}))

(s/def ::level (s/keys :req-un [::expression ::target ::definitions]))

(defn validate [level]
  (let [conformed (s/conform ::level level)]
    (when (s/invalid? conformed)
      (throw (js/Error. (str "Invalid expr:\n" (s/explain-str ::level level)))))
    conformed))

(defn delim [v]
  [:span {:class "delimiter"} v])

(defn expr [value path]
  [:span {:class (if (and path (empty? path))
                   "selected expr"
                   "expr")}
   (cond
     (vector? value)
     [:span {:class "list"}
      [delim "("]
      (for [[i el] (u/enumerate value)]
        ^{:key i} [expr el (when (= i (first path)) (rest path))])
      [delim ")"]]

     (number? value) [:span {:class "number"} (str value)]
     (symbol? value) [:span {:class "symbol"} (str value)])])

(defn evaluate [value]
  value)

(defn evaluate-in [value path]
  (if (seq path)
    (update-in value path evaluate)
    value))

(defn root [{:keys [expression
                    target
                    definitions]}
            next!]
  (let [expr-atom (reagent/atom expression)
        path-atom (reagent/atom [])
        history (reagent/atom [])
        validate-path (fn [path]
                        (and (not= ::not-found (get-in @expr-atom path ::not-found))
                             path))]
    (fn []
      (let [e @expr-atom
            p @path-atom]
        (when (and next! p
                   (seq @history)
                   (target e))
          (reset! path-atom nil)
          (next!))
        [:div {:class "code"
               :tabIndex -1
               :onKeyDown
               (fn [event]
                 (when-not (-> event (! :-ctrlKey))
                   (let [key (-> event (! :-key))]
                     (case key
                       "ArrowUp"
                       (some->> (subvec p 0 (dec (count p)))
                                validate-path (reset! path-atom))
                       "ArrowDown"
                       (some->> (conj p 0)
                                validate-path (reset! path-atom))
                       "ArrowLeft"
                       (some->> (update p (dec (count p)) dec)
                                validate-path (reset! path-atom))
                       "ArrowRight"
                       (some->> (update p (dec (count p)) inc)
                                validate-path (reset! path-atom))
                       "Enter"
                       (do (swap! expr-atom evaluate-in p)
                           (swap! history conj e))
                       nil))))}
         [:div {:class "expression"}
          [expr e (and next! p)]]]))))

(screen/add-reader!
  'game/expression
  (fn [expr]
    (let [validated (validate expr)]
      (reify screen/Element
        (render [_ next!]
          [root validated next!])))))
