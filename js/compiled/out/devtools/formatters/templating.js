// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x29683_29684 = value;
(x29683_29684.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x29686_29687 = value;
(x29686_29687.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x29689_29690 = value;
(x29689_29690.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29697 = arguments.length;
var i__4772__auto___29698 = (0);
while(true){
if((i__4772__auto___29698 < len__4771__auto___29697)){
args__4777__auto__.push((arguments[i__4772__auto___29698]));

var G__29699 = (i__4772__auto___29698 + (1));
i__4772__auto___29698 = G__29699;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__29693_29700 = cljs.core.seq.call(null,items);
var chunk__29694_29701 = null;
var count__29695_29702 = (0);
var i__29696_29703 = (0);
while(true){
if((i__29696_29703 < count__29695_29702)){
var item_29704 = cljs.core._nth.call(null,chunk__29694_29701,i__29696_29703);
if((!((item_29704 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_29704)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_29704)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_29704));
}
} else {
}


var G__29705 = seq__29693_29700;
var G__29706 = chunk__29694_29701;
var G__29707 = count__29695_29702;
var G__29708 = (i__29696_29703 + (1));
seq__29693_29700 = G__29705;
chunk__29694_29701 = G__29706;
count__29695_29702 = G__29707;
i__29696_29703 = G__29708;
continue;
} else {
var temp__5720__auto___29709 = cljs.core.seq.call(null,seq__29693_29700);
if(temp__5720__auto___29709){
var seq__29693_29710__$1 = temp__5720__auto___29709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29693_29710__$1)){
var c__4591__auto___29711 = cljs.core.chunk_first.call(null,seq__29693_29710__$1);
var G__29712 = cljs.core.chunk_rest.call(null,seq__29693_29710__$1);
var G__29713 = c__4591__auto___29711;
var G__29714 = cljs.core.count.call(null,c__4591__auto___29711);
var G__29715 = (0);
seq__29693_29700 = G__29712;
chunk__29694_29701 = G__29713;
count__29695_29702 = G__29714;
i__29696_29703 = G__29715;
continue;
} else {
var item_29716 = cljs.core.first.call(null,seq__29693_29710__$1);
if((!((item_29716 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_29716)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_29716)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_29716));
}
} else {
}


var G__29717 = cljs.core.next.call(null,seq__29693_29710__$1);
var G__29718 = null;
var G__29719 = (0);
var G__29720 = (0);
seq__29693_29700 = G__29717;
chunk__29694_29701 = G__29718;
count__29695_29702 = G__29719;
i__29696_29703 = G__29720;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq29692){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29692));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29728 = arguments.length;
var i__4772__auto___29729 = (0);
while(true){
if((i__4772__auto___29729 < len__4771__auto___29728)){
args__4777__auto__.push((arguments[i__4772__auto___29729]));

var G__29730 = (i__4772__auto___29729 + (1));
i__4772__auto___29729 = G__29730;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__29724_29731 = cljs.core.seq.call(null,children);
var chunk__29725_29732 = null;
var count__29726_29733 = (0);
var i__29727_29734 = (0);
while(true){
if((i__29727_29734 < count__29726_29733)){
var child_29735 = cljs.core._nth.call(null,chunk__29725_29732,i__29727_29734);
if((!((child_29735 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_29735)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_29735))));
} else {
var temp__5718__auto___29736 = devtools.formatters.helpers.pref.call(null,child_29735);
if(cljs.core.truth_(temp__5718__auto___29736)){
var child_value_29737 = temp__5718__auto___29736;
template.push(child_value_29737);
} else {
}
}
} else {
}


var G__29738 = seq__29724_29731;
var G__29739 = chunk__29725_29732;
var G__29740 = count__29726_29733;
var G__29741 = (i__29727_29734 + (1));
seq__29724_29731 = G__29738;
chunk__29725_29732 = G__29739;
count__29726_29733 = G__29740;
i__29727_29734 = G__29741;
continue;
} else {
var temp__5720__auto___29742 = cljs.core.seq.call(null,seq__29724_29731);
if(temp__5720__auto___29742){
var seq__29724_29743__$1 = temp__5720__auto___29742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29724_29743__$1)){
var c__4591__auto___29744 = cljs.core.chunk_first.call(null,seq__29724_29743__$1);
var G__29745 = cljs.core.chunk_rest.call(null,seq__29724_29743__$1);
var G__29746 = c__4591__auto___29744;
var G__29747 = cljs.core.count.call(null,c__4591__auto___29744);
var G__29748 = (0);
seq__29724_29731 = G__29745;
chunk__29725_29732 = G__29746;
count__29726_29733 = G__29747;
i__29727_29734 = G__29748;
continue;
} else {
var child_29749 = cljs.core.first.call(null,seq__29724_29743__$1);
if((!((child_29749 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_29749)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_29749))));
} else {
var temp__5718__auto___29750 = devtools.formatters.helpers.pref.call(null,child_29749);
if(cljs.core.truth_(temp__5718__auto___29750)){
var child_value_29751 = temp__5718__auto___29750;
template.push(child_value_29751);
} else {
}
}
} else {
}


var G__29752 = cljs.core.next.call(null,seq__29724_29743__$1);
var G__29753 = null;
var G__29754 = (0);
var G__29755 = (0);
seq__29724_29731 = G__29752;
chunk__29725_29732 = G__29753;
count__29726_29733 = G__29754;
i__29727_29734 = G__29755;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq29721){
var G__29722 = cljs.core.first.call(null,seq29721);
var seq29721__$1 = cljs.core.next.call(null,seq29721);
var G__29723 = cljs.core.first.call(null,seq29721__$1);
var seq29721__$2 = cljs.core.next.call(null,seq29721__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29722,G__29723,seq29721__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29758 = arguments.length;
var i__4772__auto___29759 = (0);
while(true){
if((i__4772__auto___29759 < len__4771__auto___29758)){
args__4777__auto__.push((arguments[i__4772__auto___29759]));

var G__29760 = (i__4772__auto___29759 + (1));
i__4772__auto___29759 = G__29760;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq29756){
var G__29757 = cljs.core.first.call(null,seq29756);
var seq29756__$1 = cljs.core.next.call(null,seq29756);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29757,seq29756__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29763 = arguments.length;
var i__4772__auto___29764 = (0);
while(true){
if((i__4772__auto___29764 < len__4771__auto___29763)){
args__4777__auto__.push((arguments[i__4772__auto___29764]));

var G__29765 = (i__4772__auto___29764 + (1));
i__4772__auto___29764 = G__29765;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq29761){
var G__29762 = cljs.core.first.call(null,seq29761);
var seq29761__$1 = cljs.core.next.call(null,seq29761);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29762,seq29761__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__29767 = arguments.length;
switch (G__29767) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj29769 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4160__auto__ = start_index;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})()});
return obj29769;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4777__auto__ = [];
var len__4771__auto___29777 = arguments.length;
var i__4772__auto___29778 = (0);
while(true){
if((i__4772__auto___29778 < len__4771__auto___29777)){
args__4777__auto__.push((arguments[i__4772__auto___29778]));

var G__29779 = (i__4772__auto___29778 + (1));
i__4772__auto___29778 = G__29779;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29773){
var vec__29774 = p__29773;
var state_override_fn = cljs.core.nth.call(null,vec__29774,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq29771){
var G__29772 = cljs.core.first.call(null,seq29771);
var seq29771__$1 = cljs.core.next.call(null,seq29771);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29772,seq29771__$1);
}));

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__29780 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__29781 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__29781);

try{return cljs.core.pr_str.call(null,markup);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__29780);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__29782 = name;
switch (G__29782) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__29784 = tag;
var html_tag = cljs.core.nth.call(null,vec__29784,(0),null);
var style = cljs.core.nth.call(null,vec__29784,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__29787 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__29788 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__29788);

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__29787);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__29789 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__29790 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__29791 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__29792 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__29791);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__29792);

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__29790);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__29789);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__29793 = initial_value;
var G__29794 = value.call(null);
initial_value = G__29793;
value = G__29794;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__29795 = initial_value;
var G__29796 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__29795;
value = G__29796;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__29797 = initial_value;
var G__29798 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__29797;
value = G__29798;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1618926909337
