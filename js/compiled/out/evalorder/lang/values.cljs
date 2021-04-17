(ns evalorder.lang.values
  (:require [evalorder.lang.ast :as ast])
  (:require-macros [evalorder.lang.values :refer [def-g defn-g]]))

(def ^:dynamic *globals* {})

(defrecord Global [doc value]
  ast/Applicable
  (app [_ out-atom args]
    (ast/app value out-atom args)))

(defn-g +
  [out-atom args]
  '{:arglists ([& xs])
    :desc "Returns the sum of its arguments. (+) returns 0."}
  (if (some (complement number?) args)
    (ast/->ErrorExpr out-atom "Can only add numbers")
    (ast/->LiteralExpr out-atom (ast/->NumLiteral (apply + args)))))

(defn-g -
  [out-atom args]
  '{:arglists ([x] [x & ys])
    :desc
    "If no ys are supplied, returns the negation of x,
    else subtracts the ys from x and returns the result."}
  (if (some (complement number?) args)
    (ast/->ErrorExpr out-atom "Can only add numbers")
    (ast/->LiteralExpr out-atom (ast/->NumLiteral (apply - args)))))

(defn-g *
  [out-atom args]
  '{:arglists ([& xs])
    :desc "Returns the product of nums. (*) returns 1."}
  (if (some (complement number?) args)
    (ast/->ErrorExpr out-atom "Can only add numbers")
    (ast/->LiteralExpr out-atom (ast/->NumLiteral (apply * args)))))

(defn-g /
  [out-atom args]
  '{:arglists ([numerator] [numerator & denominators])
    :desc
    "If no denominators are supplied, returns 1/numerator,
    else returns numerator divided by all of the denominators."}
  (if (some (complement number?) args)
    (ast/->ErrorExpr out-atom "Can only add numbers")
    (ast/->LiteralExpr out-atom (ast/->NumLiteral (apply / args)))))
