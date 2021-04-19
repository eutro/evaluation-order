// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.util');
goog.require('cljs.core');
evalorder.util.zip = (function evalorder$util$zip(var_args){
var args__4777__auto__ = [];
var len__4771__auto___22839 = arguments.length;
var i__4772__auto___22840 = (0);
while(true){
if((i__4772__auto___22840 < len__4771__auto___22839)){
args__4777__auto__.push((arguments[i__4772__auto___22840]));

var G__22841 = (i__4772__auto___22840 + (1));
i__4772__auto___22840 = G__22841;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return evalorder.util.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(evalorder.util.zip.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,colls);
}));

(evalorder.util.zip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(evalorder.util.zip.cljs$lang$applyTo = (function (seq22838){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22838));
}));

evalorder.util.enumerate = (function evalorder$util$enumerate(coll){
return evalorder.util.zip.call(null,cljs.core.range.call(null),coll);
});

//# sourceMappingURL=util.js.map?rel=1618870608026
