// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.screen');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('evalorder.util');
goog.require('evalorder.cookies');

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


/**
 * @interface
 */
evalorder.screen.NoDelay = function(){};

goog.object.set(evalorder.screen.NoDelay,"string",true);

goog.object.set(evalorder.screen.Element,"string",true);

goog.object.set(evalorder.screen.render,"string",(function (comment,_next_BANG_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"semicolons"], null),";;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),comment], null)], null);
}));
goog.object.set(evalorder.screen.NoDelay,"null",true);

goog.object.set(evalorder.screen.Element,"null",true);

goog.object.set(evalorder.screen.render,"null",(function (_,_next_BANG_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {evalorder.screen.Element}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
evalorder.screen.MsDelay = (function (delay,__meta,__extmap,__hash){
this.delay = delay;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.screen.MsDelay.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(evalorder.screen.MsDelay.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k27269,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__27273 = k27269;
var G__27273__$1 = (((G__27273 instanceof cljs.core.Keyword))?G__27273.fqn:null);
switch (G__27273__$1) {
case "delay":
return self__.delay;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27269,else__4418__auto__);

}
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4437__auto__,p__27274){
var vec__27275 = p__27274;
var k__4438__auto__ = cljs.core.nth.call(null,vec__27275,(0),null);
var v__4439__auto__ = cljs.core.nth.call(null,vec__27275,(1),null);
return f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__);
}),init__4436__auto__,this__4434__auto____$1);
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,pr_pair__4432__auto__,"#evalorder.screen.MsDelay{",", ","}",opts__4431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"delay","delay",-574225219),self__.delay],null))], null),self__.__extmap));
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27268){
var self__ = this;
var G__27268__$1 = this;
return (new cljs.core.RecordIter((0),G__27268__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(evalorder.screen.MsDelay.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new evalorder.screen.MsDelay(self__.delay,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.screen.MsDelay.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-29104538 ^ cljs.core.hash_unordered_coll.call(null,coll__4412__auto__));
}).call(null,this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27270,other27271){
var self__ = this;
var this27270__$1 = this;
return (((!((other27271 == null)))) && ((this27270__$1.constructor === other27271.constructor)) && (cljs.core._EQ_.call(null,this27270__$1.delay,other27271.delay)) && (cljs.core._EQ_.call(null,this27270__$1.__extmap,other27271.__extmap)));
}));

(evalorder.screen.MsDelay.prototype.evalorder$screen$Element$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.screen.MsDelay.prototype.evalorder$screen$Element$render$arity$2 = (function (_,next_BANG_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(next_BANG_)){
setTimeout((function (){
return next_BANG_.call(null);
}),self__.delay);
} else {
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delay","delay",-574225219),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new evalorder.screen.MsDelay(self__.delay,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4425__auto__)),null));
}
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__27268){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__27278 = cljs.core.keyword_identical_QMARK_;
var expr__27279 = k__4423__auto__;
if(cljs.core.truth_(pred__27278.call(null,new cljs.core.Keyword(null,"delay","delay",-574225219),expr__27279))){
return (new evalorder.screen.MsDelay(G__27268,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.screen.MsDelay(self__.delay,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4423__auto__,G__27268),null));
}
}));

(evalorder.screen.MsDelay.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"delay","delay",-574225219),self__.delay,null))], null),self__.__extmap));
}));

(evalorder.screen.MsDelay.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__27268){
var self__ = this;
var this__4414__auto____$1 = this;
return (new evalorder.screen.MsDelay(self__.delay,G__27268,self__.__extmap,self__.__hash));
}));

(evalorder.screen.MsDelay.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4421__auto__,(0)),cljs.core._nth.call(null,entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(evalorder.screen.MsDelay.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null)], null);
}));

(evalorder.screen.MsDelay.cljs$lang$type = true);

(evalorder.screen.MsDelay.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"evalorder.screen/MsDelay",null,(1),null));
}));

(evalorder.screen.MsDelay.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write.call(null,writer__4459__auto__,"evalorder.screen/MsDelay");
}));

/**
 * Positional factory function for evalorder.screen/MsDelay.
 */
evalorder.screen.__GT_MsDelay = (function evalorder$screen$__GT_MsDelay(delay){
return (new evalorder.screen.MsDelay(delay,null,null,null));
});

/**
 * Factory function for evalorder.screen/MsDelay, taking a map of keywords to field values.
 */
evalorder.screen.map__GT_MsDelay = (function evalorder$screen$map__GT_MsDelay(G__27272){
var extmap__4454__auto__ = (function (){var G__27281 = cljs.core.dissoc.call(null,G__27272,new cljs.core.Keyword(null,"delay","delay",-574225219));
if(cljs.core.record_QMARK_.call(null,G__27272)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27281);
} else {
return G__27281;
}
})();
return (new evalorder.screen.MsDelay(new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(G__27272),null,cljs.core.not_empty.call(null,extmap__4454__auto__),null));
});

(cljs.core.PersistentVector.prototype.evalorder$screen$NoDelay$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.evalorder$screen$Element$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.evalorder$screen$Element$render$arity$2 = (function (form,_next_BANG_){
var form__$1 = this;
return form__$1;
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
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.screen","screen","evalorder.screen/screen",25646140),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("evalorder.screen","element?","evalorder.screen/element?",-1126237899,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("evalorder.screen","element?","evalorder.screen/element?",-1126237899,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty,cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"element?","element?",-134836339,null),evalorder.screen.element_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27284){
return cljs.core.vector_QMARK_.call(null,G__27284);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Symbol("evalorder.screen","element?","evalorder.screen/element?",-1126237899,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));
evalorder.screen.error_screen = (function evalorder$screen$error_screen(lines){
return cljs.core.apply.call(null,cljs.core.vector,"Something went wrong loading the screen:",lines);
});
evalorder.screen.reader_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("delay","ms","delay/ms",467421799,null),evalorder.screen.__GT_MsDelay], null)], null);
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
}catch (e27285){if((e27285 instanceof Error)){
var e = e27285;
return evalorder.screen.error_screen.call(null,clojure.string.split.call(null,cljs.core.ex_message.call(null,e),/\n/));
} else {
throw e27285;

}
}});
evalorder.screen.slide = (function evalorder$screen$slide(p__27286){
var vec__27287 = p__27286;
var seq__27288 = cljs.core.seq.call(null,vec__27287);
var first__27289 = cljs.core.first.call(null,seq__27288);
var seq__27288__$1 = cljs.core.next.call(null,seq__27288);
var el = first__27289;
var rem = seq__27288__$1;
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.evalorder$screen$NoDelay$))))?true:(((!el.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,evalorder.screen.NoDelay,el):false)):cljs.core.native_satisfies_QMARK_.call(null,evalorder.screen.NoDelay,el))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.render,el,null], null),((rem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.slide,rem], null):null)], null);
} else {
var next_QMARK_ = reagent.core.atom.call(null,false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.render,el,(cljs.core.truth_(cljs.core.deref.call(null,next_QMARK_))?null:(function (){
return cljs.core.reset_BANG_.call(null,next_QMARK_,true);
}))], null),(function (){var temp__5720__auto__ = (function (){var and__4149__auto__ = cljs.core.deref.call(null,next_QMARK_);
if(cljs.core.truth_(and__4149__auto__)){
return rem;
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
}
});
evalorder.screen.show = (function evalorder$screen$show(story){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"story"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.screen.slide,story], null)], null);
});

//# sourceMappingURL=screen.js.map?rel=1619122912531
