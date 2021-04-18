// Compiled by ClojureScript 1.10.773 {:target :nodejs}
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
var _STAR_always_update_STAR__orig_val__24247 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24248 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24248);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__24249 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24250 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24250);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24249);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24247);
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
var G__24252 = arguments.length;
switch (G__24252) {
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

var vec__24253 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__24253,(0),null);
var callback = cljs.core.nth.call(null,vec__24253,(1),null);
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

var seq__24257_24273 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__24258_24274 = null;
var count__24259_24275 = (0);
var i__24260_24276 = (0);
while(true){
if((i__24260_24276 < count__24259_24275)){
var vec__24267_24277 = cljs.core._nth.call(null,chunk__24258_24274,i__24260_24276);
var container_24278 = cljs.core.nth.call(null,vec__24267_24277,(0),null);
var comp_24279 = cljs.core.nth.call(null,vec__24267_24277,(1),null);
reagent.dom.re_render_component.call(null,comp_24279,container_24278);


var G__24280 = seq__24257_24273;
var G__24281 = chunk__24258_24274;
var G__24282 = count__24259_24275;
var G__24283 = (i__24260_24276 + (1));
seq__24257_24273 = G__24280;
chunk__24258_24274 = G__24281;
count__24259_24275 = G__24282;
i__24260_24276 = G__24283;
continue;
} else {
var temp__5720__auto___24284 = cljs.core.seq.call(null,seq__24257_24273);
if(temp__5720__auto___24284){
var seq__24257_24285__$1 = temp__5720__auto___24284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24257_24285__$1)){
var c__4556__auto___24286 = cljs.core.chunk_first.call(null,seq__24257_24285__$1);
var G__24287 = cljs.core.chunk_rest.call(null,seq__24257_24285__$1);
var G__24288 = c__4556__auto___24286;
var G__24289 = cljs.core.count.call(null,c__4556__auto___24286);
var G__24290 = (0);
seq__24257_24273 = G__24287;
chunk__24258_24274 = G__24288;
count__24259_24275 = G__24289;
i__24260_24276 = G__24290;
continue;
} else {
var vec__24270_24291 = cljs.core.first.call(null,seq__24257_24285__$1);
var container_24292 = cljs.core.nth.call(null,vec__24270_24291,(0),null);
var comp_24293 = cljs.core.nth.call(null,vec__24270_24291,(1),null);
reagent.dom.re_render_component.call(null,comp_24293,container_24292);


var G__24294 = cljs.core.next.call(null,seq__24257_24285__$1);
var G__24295 = null;
var G__24296 = (0);
var G__24297 = (0);
seq__24257_24273 = G__24294;
chunk__24258_24274 = G__24295;
count__24259_24275 = G__24296;
i__24260_24276 = G__24297;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1618737198366
