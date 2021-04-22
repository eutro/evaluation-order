// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27741 = (function (value){
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
return devtools$format$IDevtoolsFormat$_header$dyn_27741.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27742 = (function (value){
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
return devtools$format$IDevtoolsFormat$_has_body$dyn_27742.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27743 = (function (value){
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
return devtools$format$IDevtoolsFormat$_body$dyn_27743.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27744 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27744["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27745 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27745["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27746 = temp__5718__auto____$2;
return (o27746["make_template"]);
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
var o27747 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27747["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27748 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27748["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27749 = temp__5718__auto____$2;
return (o27749["make_group"]);
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
var o27750 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27750["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27751 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27751["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27752 = temp__5718__auto____$2;
return (o27752["make_reference"]);
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
var o27753 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27753["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27754 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27754["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27755 = temp__5718__auto____$2;
return (o27755["make_surrogate"]);
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
var o27756 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27756["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27757 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27757["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27758 = temp__5718__auto____$2;
return (o27758["render_markup"]);
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
var o27759 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27759["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27760 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27760["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27761 = temp__5718__auto____$2;
return (o27761["_LT_header_GT_"]);
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
var o27762 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27762["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27763 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27763["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27764 = temp__5718__auto____$2;
return (o27764["_LT_standard_body_GT_"]);
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
var len__4771__auto___27766 = arguments.length;
var i__4772__auto___27767 = (0);
while(true){
if((i__4772__auto___27767 < len__4771__auto___27766)){
args__4777__auto__.push((arguments[i__4772__auto___27767]));

var G__27768 = (i__4772__auto___27767 + (1));
i__4772__auto___27767 = G__27768;
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
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27765){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27765));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27770 = arguments.length;
var i__4772__auto___27771 = (0);
while(true){
if((i__4772__auto___27771 < len__4771__auto___27770)){
args__4777__auto__.push((arguments[i__4772__auto___27771]));

var G__27772 = (i__4772__auto___27771 + (1));
i__4772__auto___27771 = G__27772;
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
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27769){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27769));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27774 = arguments.length;
var i__4772__auto___27775 = (0);
while(true){
if((i__4772__auto___27775 < len__4771__auto___27774)){
args__4777__auto__.push((arguments[i__4772__auto___27775]));

var G__27776 = (i__4772__auto___27775 + (1));
i__4772__auto___27775 = G__27776;
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
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27773){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27773));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27778 = arguments.length;
var i__4772__auto___27779 = (0);
while(true){
if((i__4772__auto___27779 < len__4771__auto___27778)){
args__4777__auto__.push((arguments[i__4772__auto___27779]));

var G__27780 = (i__4772__auto___27779 + (1));
i__4772__auto___27779 = G__27780;
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
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27777){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27777));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27782 = arguments.length;
var i__4772__auto___27783 = (0);
while(true){
if((i__4772__auto___27783 < len__4771__auto___27782)){
args__4777__auto__.push((arguments[i__4772__auto___27783]));

var G__27784 = (i__4772__auto___27783 + (1));
i__4772__auto___27783 = G__27784;
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
(devtools.format.template.cljs$lang$applyTo = (function (seq27781){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27781));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27786 = arguments.length;
var i__4772__auto___27787 = (0);
while(true){
if((i__4772__auto___27787 < len__4771__auto___27786)){
args__4777__auto__.push((arguments[i__4772__auto___27787]));

var G__27788 = (i__4772__auto___27787 + (1));
i__4772__auto___27787 = G__27788;
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
(devtools.format.group.cljs$lang$applyTo = (function (seq27785){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27785));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27790 = arguments.length;
var i__4772__auto___27791 = (0);
while(true){
if((i__4772__auto___27791 < len__4771__auto___27790)){
args__4777__auto__.push((arguments[i__4772__auto___27791]));

var G__27792 = (i__4772__auto___27791 + (1));
i__4772__auto___27791 = G__27792;
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
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27789){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27789));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27800 = arguments.length;
var i__4772__auto___27801 = (0);
while(true){
if((i__4772__auto___27801 < len__4771__auto___27800)){
args__4777__auto__.push((arguments[i__4772__auto___27801]));

var G__27802 = (i__4772__auto___27801 + (1));
i__4772__auto___27801 = G__27802;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27796){
var vec__27797 = p__27796;
var state_override = cljs.core.nth.call(null,vec__27797,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27793_SHARP_){
return cljs.core.merge.call(null,p1__27793_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27794){
var G__27795 = cljs.core.first.call(null,seq27794);
var seq27794__$1 = cljs.core.next.call(null,seq27794);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27795,seq27794__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27804 = arguments.length;
var i__4772__auto___27805 = (0);
while(true){
if((i__4772__auto___27805 < len__4771__auto___27804)){
args__4777__auto__.push((arguments[i__4772__auto___27805]));

var G__27806 = (i__4772__auto___27805 + (1));
i__4772__auto___27805 = G__27806;
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
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27803){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27803));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27809 = arguments.length;
var i__4772__auto___27810 = (0);
while(true){
if((i__4772__auto___27810 < len__4771__auto___27809)){
args__4777__auto__.push((arguments[i__4772__auto___27810]));

var G__27811 = (i__4772__auto___27810 + (1));
i__4772__auto___27810 = G__27811;
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
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27807){
var G__27808 = cljs.core.first.call(null,seq27807);
var seq27807__$1 = cljs.core.next.call(null,seq27807);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27808,seq27807__$1);
}));


//# sourceMappingURL=format.js.map?rel=1619125858261
