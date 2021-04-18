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

(def-g if
  '{:arglists ([pred then] [pred then else])
    :desc
    "If the predicate is neither nil nor false, return then,
    otherwise return else, or nil."}
  (reify ast/Applicable
    (app [_ out-atom [pred then else :as args]]
      (if (not (<= 2 (count args) 3))
        (ast/->ErrorExpr out-atom "Expected 2 or 3 arguments to if")
        (assoc
          (if (boolean (ast/value pred))
            then
            (or else
                (ast/->LiteralExpr nil (ast/->NilLiteral nil))))
          :this-atom out-atom)))))

(defn-g =
  [out-atom args]
  '{:arglists ([x] [x y] [x y & more])
    :desc
    "Returns true if its arguments are equal, false otherwise."}
  (ast/->LiteralExpr out-atom (ast/->BoolLiteral (apply = args))))
