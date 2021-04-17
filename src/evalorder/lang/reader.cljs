(ns evalorder.lang.reader
  (:require [cljs.tools.reader.reader-types :as ctr]
            [clojure.edn :as edn]))

(defn read [value]
  (if (string? value)
    (read (ctr/string-push-back-reader value))
    (edn/read value)))
