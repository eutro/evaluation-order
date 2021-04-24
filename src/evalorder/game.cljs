(ns evalorder.game
  (:require [reagent.core :as reagent]
            [cljs.spec.alpha :as s]
            [evalorder.screen :as screen]
            [evalorder.util :as u]
            [evalorder.audio :as audio])
  (:require-macros [evalorder.macros :refer [! !js]]))

(s/def ::expression
  (s/and
    (s/or :recursive (s/coll-of ::expression, :kind sequential?, :into [])
          :number number?
          :symbol symbol?
          :boolean boolean?
          :nil nil?)
    (s/conformer second)))

(s/def ::target (s/coll-of ::expression, :kind set?, :into #{}))

(s/def ::puzzle (s/keys :req-un [::expression ::target]))

(defn validate [level]
  (let [conformed (s/conform ::puzzle level)]
    (when (s/invalid? conformed)
      (throw (js/Error. (str "Invalid expression:\n" (s/explain-str ::puzzle level)))))
    conformed))

(defrecord Error [message])

(defn error [message] (->Error message))

(defn error? [e] (instance? Error e))

(defn delim [v]
  [:span {:class "delimiter"} v])

(defn expr-el [value selected path set-path!]
  [:span (merge
           (if (and selected (empty? selected))
             {:class "selected expr"
              :ref #(when % (! % :focus))}
             {:class "expr"})
           (when set-path!
             (let [select!
                   (fn [event]
                     (! event :stopPropagation)
                     (set-path! path))]
               {:onClick select!, :onFocus select!, :tabIndex 0})))
   (cond
     (vector? value)
     [:span {:class "list"}
      [delim "("]
      (for [[i el] (u/enumerate value)]
        ^{:key i} [expr-el
                   el
                   (when (= i (first selected))
                     (rest selected))
                   (conj path i)
                   set-path!])
      [delim ")"]]

     (number? value) [:span {:class "number"} (str value)]
     (symbol? value) [:span {:class "symbol"} (str value)]
     (boolean? value) [:span {:class "bool"} (str value)]
     (nil? value) [:span {:class "nil"} "nil"]
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
         (if (boolean? pred)
           (if pred then else)
           (error "Condition must be a boolean")))
   'fn (fn [& body]
         `[~'fn ~@body])
   'cons (fn [x v]
           (if (vector? v)
             `[~x ~@v]
             (error "Not a list")))
   'first (fn [v]
            (if (vector? v)
              (first v)
              (error "Not a list")))
   'next (fn [v]
           (if (vector? v)
             (subvec v 1)
             (error "Not a list")))
   'list vector
   'continue (constantly '[continue])})

(def ^:dynamic *val-env*
  {'pi 3.14
   'answer 42})

(defn app [value args]
  (cond
    (and (symbol? value)
         (*fn-env* value))
    (apply (*fn-env* value) args)

    (and (vector? value)
         (= 'fn (first value)))
    (let [[_ arglist body] value]
      (cond
        (some (complement symbol?) arglist)
        (error "Parameters must be symbols")

        (not= (count args)
              (count arglist))
        (error "Wrong number of arguments")

        :else
        ((fn sub-in [expr arg->sub]
           (cond
             (vector? expr)
             (if (= 'fn (first expr))
               (let [[_ its-args its-body] expr
                     new-subs (reduce dissoc arg->sub its-args)]
                 `[~'fn ~its-args ~(mapv #(sub-in % new-subs) its-body)])
               (mapv #(sub-in % arg->sub) expr))

             (symbol? expr)
             (if-let [[_ v] (find arg->sub expr)] v expr)

             :else expr))
         body (into {} (map vector arglist args)))))

    :else (error "Not a function")))

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

(defn to-first [[value & tail] f & args]
  (cons (apply f value args) tail))

(defn to-cons [value f & args]
  (cons (apply f (first value) args) value))

(defn controls [& buttons]
  [:div {:class "controls"}
   (for [[label do! title] buttons]
     ^{:key label}
     [:div {:class "control button material-icons"
            :onClick do!
            :title title}
      label])])

(defn root [{:keys [expression]}
            _next!]
  (let [hist (reagent/atom (list {:expr expression
                                  :path []}))
        validate-path (fn [path]
                        (if (-> @hist first :expr
                                (get-in path ::not-found)
                                (= ::not-found))
                          nil
                          path))]
    (fn [{:keys [target]}
         next!]
      (let [[{:keys [expr path]} & history] @hist
            evaluate! (fn []
                        (swap! hist to-cons update :expr evaluate-in path)
                        (audio/play audio/eval))
            undo! (fn []
                    (if history
                      (do (reset! hist history)
                          (audio/play audio/undo))
                      (audio/play audio/failed)))
            up! (fn []
                  (if-some [np (and (seq path)
                                    (validate-path (subvec path 0 (dec (count path)))))]
                    (do (swap! hist to-first assoc :path np)
                        (audio/play audio/up))
                    (audio/play audio/failed)))
            down! (fn []
                    (if-some [np (validate-path (conj path 0))]
                      (do (swap! hist to-first assoc :path np)
                          (audio/play audio/down))
                      (audio/play audio/failed)))
            left! (fn []
                    (if-some [np (and (seq path)
                                      (validate-path (update path (dec (count path)) dec)))]
                      (do (swap! hist to-first assoc :path np)
                          (audio/play audio/left))
                      (audio/play audio/failed)))
            right! (fn []
                     (if-some [np (and (seq path)
                                       (validate-path (update path (dec (count path)) inc)))]
                       (do (swap! hist to-first assoc :path np)
                           (audio/play audio/right))
                       (audio/play audio/failed)))]
        (when (and next! path history (contains? target expr))
          (swap! hist to-cons assoc :path nil)
          (next!))
        [:div (merge
                {:class "code"}
                (when next!
                  {:onKeyDown
                   (fn [event]
                     (let [key (-> event (! :-key))]
                       (when-some [act!
                                   (if (-> event (! :-ctrlKey))
                                     (case key
                                       "z" undo!
                                       nil)
                                     (case key
                                       "ArrowUp" up!
                                       "ArrowDown" down!
                                       "ArrowLeft" left!
                                       "ArrowRight" right!
                                       "Enter" evaluate!
                                       nil))]
                         (act!)
                         (! event :preventDefault))))}))
         [:div {:class "expression"}
          [expr-el
           expr
           (when next! path)
           []
           (fn [path] (swap! hist to-first assoc :path path))]
          (when next!
            [controls
             ["play_arrow" evaluate! "Evaluate (Enter)"]
             ["undo" undo! "Undo (Ctrl + Z)"]
             ["keyboard_arrow_left" left! "Left (Left Arrow)"]
             ["keyboard_arrow_up" up! "Outer (Up Arrow)"]
             ["keyboard_arrow_down" down! "Inner (Down Arrow)"]
             ["keyboard_arrow_right" right! "Right (Right Arrow)"]])]]))))

(screen/add-reader!
  'game/expression
  (fn [expr]
    (let [validated (validate expr)]
      (reify screen/Element
        (render [_ next!]
          [root validated next!])))))
