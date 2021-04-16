(ns unbalanced.render.font
  (:require-macros [unbalanced.macros :refer [!]]))

(defprotocol Fontable
  (to-font [_]))

(extend-protocol Fontable
  string
  (to-font [this] this)
  Symbol
  (to-font [this]
    (to-font (str this)))
  default
  ;; [ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]?
  ;;   <'font-size'> [ / <'line-height'> ]?
  ;;   <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar
  (to-font [{:keys [font-style font-variant font-weight font-stretch
                    font-size line-height
                    font-family]}]
    (str (or (some-> (or font-style font-variant font-weight font-stretch) (str " ")) "")
         (or font-size (throw (js/Error. "Font size required")))
         (or (some->> line-height (str "/")) "") " "
         (or font-family (throw (js/Error. "Font family required"))))))

(defn with-font [el font]
  (fn [ctx x y]
    (set! (! ctx :-font) (to-font font))
    (el ctx x y)))

(defn text [text]
  (fn [ctx x y]
    (! ctx :fillText text x y)))
