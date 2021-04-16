(ns unbalanced.lang.reader
  (:require [cljs.tools.reader.reader-types :as ctr]
            [clojure.edn :as edn]))

(defn read-all [value]
  (if (string? value)
    (read-all (ctr/string-push-back-reader value))
    (doall
      (let [sentinel (js/Object.)]
        ((fn do-read-all []
           (lazy-seq
             (let [v (edn/read value false sentinel nil)]
               (if (identical? v sentinel)
                 nil
                 (cons v (do-read-all)))))))))))
