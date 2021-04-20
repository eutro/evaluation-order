// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27683 = (function (value){
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
return devtools$format$IDevtoolsFormat$_header$dyn_27683.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27684 = (function (value){
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
return devtools$format$IDevtoolsFormat$_has_body$dyn_27684.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27685 = (function (value){
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
return devtools$format$IDevtoolsFormat$_body$dyn_27685.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27686 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27686["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27687 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27687["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27688 = temp__5718__auto____$2;
return (o27688["make_template"]);
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
var o27689 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27689["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27690 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27690["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27691 = temp__5718__auto____$2;
return (o27691["make_group"]);
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
var o27692 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27692["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27693 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27693["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27694 = temp__5718__auto____$2;
return (o27694["make_reference"]);
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
var o27695 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27695["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27696 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27696["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27697 = temp__5718__auto____$2;
return (o27697["make_surrogate"]);
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
var o27698 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27698["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27699 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27699["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27700 = temp__5718__auto____$2;
return (o27700["render_markup"]);
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
var o27701 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27701["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27702 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27702["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27703 = temp__5718__auto____$2;
return (o27703["_LT_header_GT_"]);
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
var o27704 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27704["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27705 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27705["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27706 = temp__5718__auto____$2;
return (o27706["_LT_standard_body_GT_"]);
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
var len__4771__auto___27708 = arguments.length;
var i__4772__auto___27709 = (0);
while(true){
if((i__4772__auto___27709 < len__4771__auto___27708)){
args__4777__auto__.push((arguments[i__4772__auto___27709]));

var G__27710 = (i__4772__auto___27709 + (1));
i__4772__auto___27709 = G__27710;
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
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27707){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27707));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27712 = arguments.length;
var i__4772__auto___27713 = (0);
while(true){
if((i__4772__auto___27713 < len__4771__auto___27712)){
args__4777__auto__.push((arguments[i__4772__auto___27713]));

var G__27714 = (i__4772__auto___27713 + (1));
i__4772__auto___27713 = G__27714;
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
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27711){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27711));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27716 = arguments.length;
var i__4772__auto___27717 = (0);
while(true){
if((i__4772__auto___27717 < len__4771__auto___27716)){
args__4777__auto__.push((arguments[i__4772__auto___27717]));

var G__27718 = (i__4772__auto___27717 + (1));
i__4772__auto___27717 = G__27718;
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
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27715){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27715));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27720 = arguments.length;
var i__4772__auto___27721 = (0);
while(true){
if((i__4772__auto___27721 < len__4771__auto___27720)){
args__4777__auto__.push((arguments[i__4772__auto___27721]));

var G__27722 = (i__4772__auto___27721 + (1));
i__4772__auto___27721 = G__27722;
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
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27719){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27719));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27724 = arguments.length;
var i__4772__auto___27725 = (0);
while(true){
if((i__4772__auto___27725 < len__4771__auto___27724)){
args__4777__auto__.push((arguments[i__4772__auto___27725]));

var G__27726 = (i__4772__auto___27725 + (1));
i__4772__auto___27725 = G__27726;
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
(devtools.format.template.cljs$lang$applyTo = (function (seq27723){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27723));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27728 = arguments.length;
var i__4772__auto___27729 = (0);
while(true){
if((i__4772__auto___27729 < len__4771__auto___27728)){
args__4777__auto__.push((arguments[i__4772__auto___27729]));

var G__27730 = (i__4772__auto___27729 + (1));
i__4772__auto___27729 = G__27730;
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
(devtools.format.group.cljs$lang$applyTo = (function (seq27727){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27727));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27732 = arguments.length;
var i__4772__auto___27733 = (0);
while(true){
if((i__4772__auto___27733 < len__4771__auto___27732)){
args__4777__auto__.push((arguments[i__4772__auto___27733]));

var G__27734 = (i__4772__auto___27733 + (1));
i__4772__auto___27733 = G__27734;
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
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27731){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27731));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27742 = arguments.length;
var i__4772__auto___27743 = (0);
while(true){
if((i__4772__auto___27743 < len__4771__auto___27742)){
args__4777__auto__.push((arguments[i__4772__auto___27743]));

var G__27744 = (i__4772__auto___27743 + (1));
i__4772__auto___27743 = G__27744;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27738){
var vec__27739 = p__27738;
var state_override = cljs.core.nth.call(null,vec__27739,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27735_SHARP_){
return cljs.core.merge.call(null,p1__27735_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27736){
var G__27737 = cljs.core.first.call(null,seq27736);
var seq27736__$1 = cljs.core.next.call(null,seq27736);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27737,seq27736__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27746 = arguments.length;
var i__4772__auto___27747 = (0);
while(true){
if((i__4772__auto___27747 < len__4771__auto___27746)){
args__4777__auto__.push((arguments[i__4772__auto___27747]));

var G__27748 = (i__4772__auto___27747 + (1));
i__4772__auto___27747 = G__27748;
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
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27745){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27745));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27751 = arguments.length;
var i__4772__auto___27752 = (0);
while(true){
if((i__4772__auto___27752 < len__4771__auto___27751)){
args__4777__auto__.push((arguments[i__4772__auto___27752]));

var G__27753 = (i__4772__auto___27752 + (1));
i__4772__auto___27752 = G__27753;
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
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27749){
var G__27750 = cljs.core.first.call(null,seq27749);
var seq27749__$1 = cljs.core.next.call(null,seq27749);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27750,seq27749__$1);
}));


//# sourceMappingURL=format.js.map?rel=1618926907100
