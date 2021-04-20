// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.screen');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('evalorder.util');

/**
 * @interface
 */
evalorder.screen.Element = function(){};

var evalorder$screen$Element$render$dyn_27267 = (function (_,next_BANG_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (evalorder.screen.render[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,_,next_BANG_);
} else {
var m__4461__auto__ = (evalorder.screen.render["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,_,next_BANG_);
} else {
throw cljs.core.missing_protocol.call(null,"Element.render",_);
}
}
});
evalorder.screen.render = (function evalorder$screen$render(_,next_BANG_){
if((((!((_ == null)))) && ((!((_.evalorder$screen$Element$render$arity$2 == null)))))){
return _.evalorder$screen$Element$render$arity$2(_,next_BANG_);
} else {
return evalorder$screen$Element$render$dyn_27267.call(null,_,next_BANG_);
}
});

goog.object.set(evalorder.screen.Element,"string",true);

goog.object.set(evalorder.screen.render,"string",(function (comment,next_BANG_){
if(cljs.core.truth_(next_BANG_)){
next_BANG_.call(null);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comment"], null),[";; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment)].join('')], null);
}));

(cljs.core.PersistentVector.prototype.evalorder$screen$Element$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.evalorder$screen$Element$render$arity$2 = (function (els,next_BANG_){
var els__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4564__auto__ = (function evalorder$screen$iter__27268(s__27269){
return (new cljs.core.LazySeq(null,(function (){
var s__27269__$1 = s__27269;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27269__$1);
if(temp__5720__auto__){
var s__27269__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27269__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__27269__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__27271 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__27270 = (0);
while(true){
if((i__27270 < size__4563__auto__)){
var vec__27272 = cljs.core._nth.call(null,c__4562__auto__,i__27270);
var i = cljs.core.nth.call(null,vec__27272,(0),null);
var el = cljs.core.nth.call(null,vec__27272,(1),null);
cljs.core.chunk_append.call(null,b__27271,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.render,el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__27278 = (i__27270 + (1));
i__27270 = G__27278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27271),evalorder$screen$iter__27268.call(null,cljs.core.chunk_rest.call(null,s__27269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27271),null);
}
} else {
var vec__27275 = cljs.core.first.call(null,s__27269__$2);
var i = cljs.core.nth.call(null,vec__27275,(0),null);
var el = cljs.core.nth.call(null,vec__27275,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.render,el], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),evalorder$screen$iter__27268.call(null,cljs.core.rest.call(null,s__27269__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,evalorder.util.enumerate.call(null,cljs.core.butlast.call(null,els__$1)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.render,cljs.core.last.call(null,els__$1),next_BANG_], null)], null);
}));
evalorder.screen.element_QMARK_ = (function evalorder$screen$element_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.evalorder$screen$Element$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,evalorder.screen.Element,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,evalorder.screen.Element,x);
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.screen","screen","evalorder.screen/screen",25646140),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("evalorder.screen","element?","evalorder.screen/element?",-1126237899,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("evalorder.screen","element?","evalorder.screen/element?",-1126237899,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty,cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"element?","element?",-134836339,null),evalorder.screen.element_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27280){
return cljs.core.vector_QMARK_.call(null,G__27280);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("evalorder.screen","element?","evalorder.screen/element?",-1126237899,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));
evalorder.screen.error_screen = (function evalorder$screen$error_screen(lines){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,"Something went wrong loading the screen:",lines)], null);
});
evalorder.screen.reader_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("delay","ms","delay/ms",467421799,null),(function (delay){
if((typeof evalorder !== 'undefined') && (typeof evalorder.screen !== 'undefined') && (typeof evalorder.screen.t_evalorder$screen27281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {evalorder.screen.Element}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.screen.t_evalorder$screen27281 = (function (delay,meta27282){
this.delay = delay;
this.meta27282 = meta27282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.screen.t_evalorder$screen27281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27283,meta27282__$1){
var self__ = this;
var _27283__$1 = this;
return (new evalorder.screen.t_evalorder$screen27281(self__.delay,meta27282__$1));
}));

(evalorder.screen.t_evalorder$screen27281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27283){
var self__ = this;
var _27283__$1 = this;
return self__.meta27282;
}));

(evalorder.screen.t_evalorder$screen27281.prototype.evalorder$screen$Element$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.screen.t_evalorder$screen27281.prototype.evalorder$screen$Element$render$arity$2 = (function (_,next_BANG_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(next_BANG_)){
setTimeout(next_BANG_,self__.delay);
} else {
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}));

(evalorder.screen.t_evalorder$screen27281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta27282","meta27282",-1790143781,null)], null);
}));

(evalorder.screen.t_evalorder$screen27281.cljs$lang$type = true);

(evalorder.screen.t_evalorder$screen27281.cljs$lang$ctorStr = "evalorder.screen/t_evalorder$screen27281");

(evalorder.screen.t_evalorder$screen27281.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"evalorder.screen/t_evalorder$screen27281");
}));

/**
 * Positional factory function for evalorder.screen/t_evalorder$screen27281.
 */
evalorder.screen.__GT_t_evalorder$screen27281 = (function evalorder$screen$__GT_t_evalorder$screen27281(delay__$1,meta27282){
return (new evalorder.screen.t_evalorder$screen27281(delay__$1,meta27282));
});

}

return (new evalorder.screen.t_evalorder$screen27281(delay,cljs.core.PersistentArrayMap.EMPTY));
})], null)], null);
evalorder.screen.add_reader_BANG_ = (function evalorder$screen$add_reader_BANG_(key,value){
return (evalorder.screen.reader_opts = cljs.core.update.call(null,evalorder.screen.reader_opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.assoc,key,value));
});
evalorder.screen.read_screen = (function evalorder$screen$read_screen(s){
try{var raw = clojure.edn.read_string.call(null,evalorder.screen.reader_opts,s);
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("evalorder.screen","screen","evalorder.screen/screen",25646140),raw);
if(cljs.spec.alpha.invalid_QMARK_.call(null,conformed)){
return evalorder.screen.error_screen.call(null,clojure.string.split.call(null,cljs.spec.alpha.explain_str.call(null,new cljs.core.Keyword("evalorder.screen","screen","evalorder.screen/screen",25646140),raw),/\n/));
} else {
return conformed;
}
}catch (e27284){if((e27284 instanceof Error)){
var e = e27284;
return evalorder.screen.error_screen.call(null,clojure.string.split.call(null,cljs.core.ex_message.call(null,e),/\n/));
} else {
throw e27284;

}
}});
evalorder.screen.slide = (function evalorder$screen$slide(story){
var next_QMARK_ = reagent.core.atom.call(null,false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.render,cljs.core.first.call(null,story),(cljs.core.truth_(cljs.core.deref.call(null,next_QMARK_))?null:(function (){
return cljs.core.reset_BANG_.call(null,next_QMARK_,true);
}))], null),(function (){var temp__5720__auto__ = (function (){var and__4149__auto__ = cljs.core.deref.call(null,next_QMARK_);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.next.call(null,story);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var next_slide = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.slide,next_slide], null);
} else {
return null;
}
})()], null);
});
});
evalorder.screen.show = (function evalorder$screen$show(story){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"story"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.slide,story], null)], null);
});

//# sourceMappingURL=screen.js.map?rel=1618926906501
