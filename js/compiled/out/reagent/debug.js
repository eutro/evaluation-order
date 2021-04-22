// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21963__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21964__i = 0, G__21964__a = new Array(arguments.length -  0);
while (G__21964__i < G__21964__a.length) {G__21964__a[G__21964__i] = arguments[G__21964__i + 0]; ++G__21964__i;}
  args = new cljs.core.IndexedSeq(G__21964__a,0,null);
} 
return G__21963__delegate.call(this,args);};
G__21963.cljs$lang$maxFixedArity = 0;
G__21963.cljs$lang$applyTo = (function (arglist__21965){
var args = cljs.core.seq(arglist__21965);
return G__21963__delegate(args);
});
G__21963.cljs$core$IFn$_invoke$arity$variadic = G__21963__delegate;
return G__21963;
})()
);

(o.error = (function() { 
var G__21966__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21967__i = 0, G__21967__a = new Array(arguments.length -  0);
while (G__21967__i < G__21967__a.length) {G__21967__a[G__21967__i] = arguments[G__21967__i + 0]; ++G__21967__i;}
  args = new cljs.core.IndexedSeq(G__21967__a,0,null);
} 
return G__21966__delegate.call(this,args);};
G__21966.cljs$lang$maxFixedArity = 0;
G__21966.cljs$lang$applyTo = (function (arglist__21968){
var args = cljs.core.seq(arglist__21968);
return G__21966__delegate(args);
});
G__21966.cljs$core$IFn$_invoke$arity$variadic = G__21966__delegate;
return G__21966;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1619051011763
