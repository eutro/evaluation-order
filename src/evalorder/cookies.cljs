(ns evalorder.cookies
  (:require-macros [evalorder.macros :refer [! !js]])
  (:require [clojure.string :as str]))

(defn get-cookie [cookie]
  (-> (! js/document :-cookie)
      (str/split #"; ")
      (->> (into {} (comp (filter seq)
                          (map #(str/split % #"=" 2)))))
      (get cookie)))

(def one-year (* 60 60 24 356))

(defn set-cookie!
  ([cookie value]
   (-> (! js/document :-cookie)
       (set! (str/join [cookie "=" value ";"
                        "max-age=" one-year ";"
                        "path=/;"
                        "secure"])))))
