// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27665 = (function (value){
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
return devtools$format$IDevtoolsFormat$_header$dyn_27665.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27666 = (function (value){
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
return devtools$format$IDevtoolsFormat$_has_body$dyn_27666.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27667 = (function (value){
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
return devtools$format$IDevtoolsFormat$_body$dyn_27667.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o27668 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27668["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27669 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27669["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27670 = temp__5718__auto____$2;
return (o27670["make_template"]);
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
var o27671 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27671["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27672 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27672["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27673 = temp__5718__auto____$2;
return (o27673["make_group"]);
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
var o27674 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27674["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27675 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27675["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27676 = temp__5718__auto____$2;
return (o27676["make_reference"]);
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
var o27677 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27677["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27678 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27678["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27679 = temp__5718__auto____$2;
return (o27679["make_surrogate"]);
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
var o27680 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27680["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27681 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27681["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27682 = temp__5718__auto____$2;
return (o27682["render_markup"]);
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
var o27683 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27683["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27684 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27684["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27685 = temp__5718__auto____$2;
return (o27685["_LT_header_GT_"]);
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
var o27686 = temp__5718__auto__;
var temp__5718__auto____$1 = (o27686["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o27687 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o27687["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o27688 = temp__5718__auto____$2;
return (o27688["_LT_standard_body_GT_"]);
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
var len__4771__auto___27690 = arguments.length;
var i__4772__auto___27691 = (0);
while(true){
if((i__4772__auto___27691 < len__4771__auto___27690)){
args__4777__auto__.push((arguments[i__4772__auto___27691]));

var G__27692 = (i__4772__auto___27691 + (1));
i__4772__auto___27691 = G__27692;
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
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27689){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27689));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27694 = arguments.length;
var i__4772__auto___27695 = (0);
while(true){
if((i__4772__auto___27695 < len__4771__auto___27694)){
args__4777__auto__.push((arguments[i__4772__auto___27695]));

var G__27696 = (i__4772__auto___27695 + (1));
i__4772__auto___27695 = G__27696;
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
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27693){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27693));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27698 = arguments.length;
var i__4772__auto___27699 = (0);
while(true){
if((i__4772__auto___27699 < len__4771__auto___27698)){
args__4777__auto__.push((arguments[i__4772__auto___27699]));

var G__27700 = (i__4772__auto___27699 + (1));
i__4772__auto___27699 = G__27700;
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
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27697){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27697));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27702 = arguments.length;
var i__4772__auto___27703 = (0);
while(true){
if((i__4772__auto___27703 < len__4771__auto___27702)){
args__4777__auto__.push((arguments[i__4772__auto___27703]));

var G__27704 = (i__4772__auto___27703 + (1));
i__4772__auto___27703 = G__27704;
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
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27701){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27701));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27706 = arguments.length;
var i__4772__auto___27707 = (0);
while(true){
if((i__4772__auto___27707 < len__4771__auto___27706)){
args__4777__auto__.push((arguments[i__4772__auto___27707]));

var G__27708 = (i__4772__auto___27707 + (1));
i__4772__auto___27707 = G__27708;
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
(devtools.format.template.cljs$lang$applyTo = (function (seq27705){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27705));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27710 = arguments.length;
var i__4772__auto___27711 = (0);
while(true){
if((i__4772__auto___27711 < len__4771__auto___27710)){
args__4777__auto__.push((arguments[i__4772__auto___27711]));

var G__27712 = (i__4772__auto___27711 + (1));
i__4772__auto___27711 = G__27712;
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
(devtools.format.group.cljs$lang$applyTo = (function (seq27709){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27709));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27714 = arguments.length;
var i__4772__auto___27715 = (0);
while(true){
if((i__4772__auto___27715 < len__4771__auto___27714)){
args__4777__auto__.push((arguments[i__4772__auto___27715]));

var G__27716 = (i__4772__auto___27715 + (1));
i__4772__auto___27715 = G__27716;
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
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27713){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27713));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
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

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27720){
var vec__27721 = p__27720;
var state_override = cljs.core.nth.call(null,vec__27721,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27717_SHARP_){
return cljs.core.merge.call(null,p1__27717_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27718){
var G__27719 = cljs.core.first.call(null,seq27718);
var seq27718__$1 = cljs.core.next.call(null,seq27718);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27719,seq27718__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
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
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27727){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27727));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27733 = arguments.length;
var i__4772__auto___27734 = (0);
while(true){
if((i__4772__auto___27734 < len__4771__auto___27733)){
args__4777__auto__.push((arguments[i__4772__auto___27734]));

var G__27735 = (i__4772__auto___27734 + (1));
i__4772__auto___27734 = G__27735;
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
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27731){
var G__27732 = cljs.core.first.call(null,seq27731);
var seq27731__$1 = cljs.core.next.call(null,seq27731);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27732,seq27731__$1);
}));


//# sourceMappingURL=format.js.map?rel=1618870612214
