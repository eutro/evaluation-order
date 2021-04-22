// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__27419 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27420 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27420);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__27421 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27422 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27422);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27421);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27419);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__27424 = arguments.length;
switch (G__27424) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__27425 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__27425,(0),null);
var callback = cljs.core.nth.call(null,vec__27425,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__27429_27445 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__27430_27446 = null;
var count__27431_27447 = (0);
var i__27432_27448 = (0);
while(true){
if((i__27432_27448 < count__27431_27447)){
var vec__27439_27449 = cljs.core._nth.call(null,chunk__27430_27446,i__27432_27448);
var container_27450 = cljs.core.nth.call(null,vec__27439_27449,(0),null);
var comp_27451 = cljs.core.nth.call(null,vec__27439_27449,(1),null);
reagent.dom.re_render_component.call(null,comp_27451,container_27450);


var G__27452 = seq__27429_27445;
var G__27453 = chunk__27430_27446;
var G__27454 = count__27431_27447;
var G__27455 = (i__27432_27448 + (1));
seq__27429_27445 = G__27452;
chunk__27430_27446 = G__27453;
count__27431_27447 = G__27454;
i__27432_27448 = G__27455;
continue;
} else {
var temp__5720__auto___27456 = cljs.core.seq.call(null,seq__27429_27445);
if(temp__5720__auto___27456){
var seq__27429_27457__$1 = temp__5720__auto___27456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27429_27457__$1)){
var c__4591__auto___27458 = cljs.core.chunk_first.call(null,seq__27429_27457__$1);
var G__27459 = cljs.core.chunk_rest.call(null,seq__27429_27457__$1);
var G__27460 = c__4591__auto___27458;
var G__27461 = cljs.core.count.call(null,c__4591__auto___27458);
var G__27462 = (0);
seq__27429_27445 = G__27459;
chunk__27430_27446 = G__27460;
count__27431_27447 = G__27461;
i__27432_27448 = G__27462;
continue;
} else {
var vec__27442_27463 = cljs.core.first.call(null,seq__27429_27457__$1);
var container_27464 = cljs.core.nth.call(null,vec__27442_27463,(0),null);
var comp_27465 = cljs.core.nth.call(null,vec__27442_27463,(1),null);
reagent.dom.re_render_component.call(null,comp_27465,container_27464);


var G__27466 = cljs.core.next.call(null,seq__27429_27457__$1);
var G__27467 = null;
var G__27468 = (0);
var G__27469 = (0);
seq__27429_27445 = G__27466;
chunk__27430_27446 = G__27467;
count__27431_27447 = G__27468;
i__27432_27448 = G__27469;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1619086737376
