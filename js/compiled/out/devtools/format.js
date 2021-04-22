// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27743 = (function (value){
var x__4463__auto__ = (((value == null))?null:value);
var m__4464__auto__ = (devtools.format._header[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,value);
} else {
var m__4461__auto__ = (devtools.format._header["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_27743.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27744 = (function (value){
var x__4463__auto__ = (((value == null))?null:value);
var m__4464__auto__ = (devtools.format._has_body[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,value);
} else {
var m__4461__auto__ = (devtools.format._has_body["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_27744.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27745 = (function (value){
var x__4463__auto__ = (((value == null))?null:value);
var m__4464__auto__ = (devtools.format._body[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,value);
} else {
var m__4461__auto__ = (devtools.format._body["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_27745.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27746 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27746["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27747 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27747["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27748 = temp__5718__auto____$2;
return (o27748["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27749 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27749["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27750 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27750["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27751 = temp__5718__auto____$2;
return (o27751["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27752 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27752["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27753 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27753["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27754 = temp__5718__auto____$2;
return (o27754["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27755 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27755["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27756 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27756["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27757 = temp__5718__auto____$2;
return (o27757["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27758 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27758["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27759 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27759["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27760 = temp__5718__auto____$2;
return (o27760["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27761 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27761["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27762 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27762["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27763 = temp__5718__auto____$2;
return (o27763["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27764 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27764["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27765 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27765["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27766 = temp__5718__auto____$2;
return (o27766["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27768 = arguments.length;
var i__4772__auto___27769 = (0);
while(true){
if((i__4772__auto___27769 < len__4771__auto___27768)){
args__4777__auto__.push((arguments[i__4772__auto___27769]));

var G__27770 = (i__4772__auto___27769 + (1));
i__4772__auto___27769 = G__27770;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27767){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27767));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27772 = arguments.length;
var i__4772__auto___27773 = (0);
while(true){
if((i__4772__auto___27773 < len__4771__auto___27772)){
args__4777__auto__.push((arguments[i__4772__auto___27773]));

var G__27774 = (i__4772__auto___27773 + (1));
i__4772__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27771){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27771));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27776 = arguments.length;
var i__4772__auto___27777 = (0);
while(true){
if((i__4772__auto___27777 < len__4771__auto___27776)){
args__4777__auto__.push((arguments[i__4772__auto___27777]));

var G__27778 = (i__4772__auto___27777 + (1));
i__4772__auto___27777 = G__27778;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27775){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27775));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27780 = arguments.length;
var i__4772__auto___27781 = (0);
while(true){
if((i__4772__auto___27781 < len__4771__auto___27780)){
args__4777__auto__.push((arguments[i__4772__auto___27781]));

var G__27782 = (i__4772__auto___27781 + (1));
i__4772__auto___27781 = G__27782;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27779){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27779));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27784 = arguments.length;
var i__4772__auto___27785 = (0);
while(true){
if((i__4772__auto___27785 < len__4771__auto___27784)){
args__4777__auto__.push((arguments[i__4772__auto___27785]));

var G__27786 = (i__4772__auto___27785 + (1));
i__4772__auto___27785 = G__27786;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq27783){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27783));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27788 = arguments.length;
var i__4772__auto___27789 = (0);
while(true){
if((i__4772__auto___27789 < len__4771__auto___27788)){
args__4777__auto__.push((arguments[i__4772__auto___27789]));

var G__27790 = (i__4772__auto___27789 + (1));
i__4772__auto___27789 = G__27790;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq27787){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27787));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27792 = arguments.length;
var i__4772__auto___27793 = (0);
while(true){
if((i__4772__auto___27793 < len__4771__auto___27792)){
args__4777__auto__.push((arguments[i__4772__auto___27793]));

var G__27794 = (i__4772__auto___27793 + (1));
i__4772__auto___27793 = G__27794;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27791){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27791));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27802 = arguments.length;
var i__4772__auto___27803 = (0);
while(true){
if((i__4772__auto___27803 < len__4771__auto___27802)){
args__4777__auto__.push((arguments[i__4772__auto___27803]));

var G__27804 = (i__4772__auto___27803 + (1));
i__4772__auto___27803 = G__27804;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27798){
var vec__27799 = p__27798;
var state_override = cljs.core.nth.call(null,vec__27799,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27795_SHARP_){
return cljs.core.merge.call(null,p1__27795_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27796){
var G__27797 = cljs.core.first.call(null,seq27796);
var seq27796__$1 = cljs.core.next.call(null,seq27796);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27797,seq27796__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27806 = arguments.length;
var i__4772__auto___27807 = (0);
while(true){
if((i__4772__auto___27807 < len__4771__auto___27806)){
args__4777__auto__.push((arguments[i__4772__auto___27807]));

var G__27808 = (i__4772__auto___27807 + (1));
i__4772__auto___27807 = G__27808;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27805){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27805));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27811 = arguments.length;
var i__4772__auto___27812 = (0);
while(true){
if((i__4772__auto___27812 < len__4771__auto___27811)){
args__4777__auto__.push((arguments[i__4772__auto___27812]));

var G__27813 = (i__4772__auto___27812 + (1));
i__4772__auto___27812 = G__27813;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27809){
var G__27810 = cljs.core.first.call(null,seq27809);
var seq27809__$1 = cljs.core.next.call(null,seq27809);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27810,seq27809__$1);
}));


//# sourceMappingURL=format.js.map?rel=1619086737975
