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
var _STAR_always_update_STAR__orig_val__27341 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27342 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27342);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__27343 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27344 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27344);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27343);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27341);
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
var G__27346 = arguments.length;
switch (G__27346) {
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

var vec__27347 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__27347,(0),null);
var callback = cljs.core.nth.call(null,vec__27347,(1),null);
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

var seq__27351_27367 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__27352_27368 = null;
var count__27353_27369 = (0);
var i__27354_27370 = (0);
while(true){
if((i__27354_27370 < count__27353_27369)){
var vec__27361_27371 = cljs.core._nth.call(null,chunk__27352_27368,i__27354_27370);
var container_27372 = cljs.core.nth.call(null,vec__27361_27371,(0),null);
var comp_27373 = cljs.core.nth.call(null,vec__27361_27371,(1),null);
reagent.dom.re_render_component.call(null,comp_27373,container_27372);


var G__27374 = seq__27351_27367;
var G__27375 = chunk__27352_27368;
var G__27376 = count__27353_27369;
var G__27377 = (i__27354_27370 + (1));
seq__27351_27367 = G__27374;
chunk__27352_27368 = G__27375;
count__27353_27369 = G__27376;
i__27354_27370 = G__27377;
continue;
} else {
var temp__5720__auto___27378 = cljs.core.seq.call(null,seq__27351_27367);
if(temp__5720__auto___27378){
var seq__27351_27379__$1 = temp__5720__auto___27378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27351_27379__$1)){
var c__4591__auto___27380 = cljs.core.chunk_first.call(null,seq__27351_27379__$1);
var G__27381 = cljs.core.chunk_rest.call(null,seq__27351_27379__$1);
var G__27382 = c__4591__auto___27380;
var G__27383 = cljs.core.count.call(null,c__4591__auto___27380);
var G__27384 = (0);
seq__27351_27367 = G__27381;
chunk__27352_27368 = G__27382;
count__27353_27369 = G__27383;
i__27354_27370 = G__27384;
continue;
} else {
var vec__27364_27385 = cljs.core.first.call(null,seq__27351_27379__$1);
var container_27386 = cljs.core.nth.call(null,vec__27364_27385,(0),null);
var comp_27387 = cljs.core.nth.call(null,vec__27364_27385,(1),null);
reagent.dom.re_render_component.call(null,comp_27387,container_27386);


var G__27388 = cljs.core.next.call(null,seq__27351_27379__$1);
var G__27389 = null;
var G__27390 = (0);
var G__27391 = (0);
seq__27351_27367 = G__27388;
chunk__27352_27368 = G__27389;
count__27353_27369 = G__27390;
i__27354_27370 = G__27391;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1618870611697
