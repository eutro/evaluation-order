// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.menu');
goog.require('cljs.core');
goog.require('reagent.core');
evalorder.menu.logo = (function evalorder$menu$logo(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Evaluation Order"], null);
});
evalorder.menu.button = (function evalorder$menu$button(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27408 = arguments.length;
var i__4772__auto___27409 = (0);
while(true){
if((i__4772__auto___27409 < len__4771__auto___27408)){
args__4777__auto__.push((arguments[i__4772__auto___27409]));

var G__27410 = (i__4772__auto___27409 + (1));
i__4772__auto___27409 = G__27410;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return evalorder.menu.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(evalorder.menu.button.cljs$core$IFn$_invoke$arity$variadic = (function (text,on_click,p__27404){
var vec__27405 = p__27404;
var extras = cljs.core.nth.call(null,vec__27405,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_click], null),extras),text], null);
}));

(evalorder.menu.button.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(evalorder.menu.button.cljs$lang$applyTo = (function (seq27401){
var G__27402 = cljs.core.first.call(null,seq27401);
var seq27401__$1 = cljs.core.next.call(null,seq27401);
var G__27403 = cljs.core.first.call(null,seq27401__$1);
var seq27401__$2 = cljs.core.next.call(null,seq27401__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27402,G__27403,seq27401__$2);
}));

evalorder.menu.menu = (function evalorder$menu$menu(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27412 = arguments.length;
var i__4772__auto___27413 = (0);
while(true){
if((i__4772__auto___27413 < len__4771__auto___27412)){
args__4777__auto__.push((arguments[i__4772__auto___27413]));

var G__27414 = (i__4772__auto___27413 + (1));
i__4772__auto___27413 = G__27414;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return evalorder.menu.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(evalorder.menu.menu.cljs$core$IFn$_invoke$arity$variadic = (function (elements){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"div","div",1057191632),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"class","class",-2030961996),null,(1),null)),(new cljs.core.List(null,"menu",null,(1),null)))))),null,(1),null)),elements))));
}));

(evalorder.menu.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(evalorder.menu.menu.cljs$lang$applyTo = (function (seq27411){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27411));
}));

evalorder.menu.screen = reagent.core.atom.call(null,null);

//# sourceMappingURL=menu.js.map?rel=1619122912748
