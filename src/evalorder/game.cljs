(ns evalorder.game
  (:require [reagent.core :as reagent]
            [cljs.spec.alpha :as s]
            [evalorder.screen :as screen]
            [evalorder.util :as u])
  (:require-macros [evalorder.macros :refer [! !js]]))

(s/def ::expression
  (s/and
    (s/or :recursive (s/coll-of ::expression, :kind sequential?, :into [])
          :number number?
          :symbol symbol?)
    (s/conformer second)))

(s/def ::definitions any?)

(s/def ::target (s/coll-of ::expression, :kind set?, :into #{}))

(s/def ::level (s/keys :req-un [::expression ::target ::definitions]))

(defn validate [level]
  (let [conformed (s/conform ::level level)]
    (when (s/invalid? conformed)
      (throw (js/Error. (str "Invalid expression:\n" (s/explain-str ::level level)))))
    conformed))

(defrecord Error [message])

(defn error [message] (->Error message))

(defn error? [e] (instance? Error e))

(defn delim [v]
  [:span {:class "delimiter"} v])

(defn expr [value selected path set-path!]
  [:span {:class (if (and selected (empty? selected))
                   "selected expr"
                   "expr")
          :onClick (when set-path!
                     (fn [event]
                       (! event :stopPropagation)
                       (set-path! path)))}
   (cond
     (vector? value)
     [:span {:class "list"}
      [delim "("]
      (for [[i el] (u/enumerate value)]
        ^{:key i} [expr
                   el
                   (when (= i (first selected))
                     (rest selected))
                   (conj path i)
                   set-path!])
      [delim ")"]]

     (number? value) [:span {:class "number"} (str value)]
     (symbol? value) [:span {:class "symbol"} (str value)]
     (boolean? value) [:span {:class "bool"} (str value)]
     (nil? value) [:span {:class "nil"} (str value)]
     (error? value) [:span {:class "error"}
                     (str "!" (pr-str (:message value)))]

     :else [:span {:class "error"} "!?"])])

;; lisp 2 moment
(def ^:dynamic *fn-env*
  {'+ (fn [& args]
        (if (some (complement number?) args)
          (error "Can only add numbers")
          (apply + args)))
   '* (fn [& args]
        (if (some (complement number?) args)
          (error "Can only multiply numbers")
          (apply * args)))
   '- (fn [& args]
        (if (some (complement number?) args)
          (error "Can only subtract numbers")
          (apply - args)))
   '/ (fn [& args]
        (if (some (complement number?) args)
          (error "Can only divide numbers")
          (apply / args)))
   '= =
   'if (fn [pred then else]
         (if pred then else))})

(def ^:dynamic *val-env*
  {'pi 3.14
   'answer-to-life-the-universe-and-everything 42})

(defn app [value args]
  (cond
    (symbol? value) (apply (*fn-env* value) args)
    :else (error "Can't be applied")))

(defn evaluate [value]
  (cond
    (vector? value) (app (first value) (next value))
    (symbol? value)
    (cond
      (contains? *val-env* value) (*val-env* value)
      (contains? *fn-env* value) value
      :else (error "Undefined"))
    :else value))

(defn evaluate-in [value path]
  (if (seq path)
    (update-in value path evaluate)
    (evaluate value)))

(defn root [{:keys [expression
                    target
                    definitions]}
            next!]
  (let [expr-atom (reagent/atom expression)
        path-atom (reagent/atom [])
        history (reagent/atom ())
        validate-path (fn [path]
                        (if (= ::not-found (get-in @expr-atom path ::not-found))
                          nil
                          path))]
    (fn []
      (let [e @expr-atom
            p @path-atom]
        (when (and next! p
                   (seq @history)
                   (target e))
          (reset! path-atom nil)
          (next!))
        [:div (merge
                {:class "code"}
                (when next!
                  {:tabIndex -1
                   :ref (fn [el] (when el (! el :focus)))
                   :onKeyDown
                   (fn [event]
                     (let [key (-> event (! :-key))]
                       (if (-> event (! :-ctrlKey))
                         (case key
                           "z" (when (seq @history)
                                 (reset! expr-atom (first @history))
                                 (reset! path-atom [])
                                 (swap! history rest))
                          nil)
                         (case key
                           "ArrowUp"
                           (when (seq p)
                             (some->> (subvec p 0 (dec (count p)))
                                      validate-path (reset! path-atom)))
                           "ArrowDown"
                           (some->> (conj p 0)
                                    validate-path (reset! path-atom))
                           "ArrowLeft"
                           (when (seq p)
                             (some->> (update p (dec (count p)) dec)
                                      validate-path (reset! path-atom)))
                           "ArrowRight"
                           (when (seq p)
                             (some->> (update p (dec (count p)) inc)
                                      validate-path (reset! path-atom)))
                           "Enter"
                           (do (swap! expr-atom evaluate-in p)
                               (swap! history conj e))
                           nil))))}))
         [:div {:class "expression"}
          [expr
           e
           (and next! p)
           []
           (and next! (fn [path] (reset! path-atom path)))]]]))))

(screen/add-reader!
  'game/expression
  (fn [expr]
    (let [validated (validate expr)]
      (reify screen/Element
        (render [_ next!]
          [root validated next!])))))
