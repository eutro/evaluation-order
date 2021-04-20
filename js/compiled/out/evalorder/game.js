// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.game');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.spec.alpha');
goog.require('evalorder.screen');
goog.require('evalorder.util');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"recursive","recursive",718885872),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"recursive","recursive",718885872),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursive","recursive",718885872),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27287){
return cljs.core.sequential_QMARK_.call(null,G__27287);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.sequential_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null))], null),null),cljs.core.number_QMARK_,cljs.core.symbol_QMARK_], null),null),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null)),cljs.core.second,null,true)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27288){
return cljs.core.set_QMARK_.call(null,G__27288);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","level","evalorder.game/level",-84577858),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27289){
return cljs.core.map_QMARK_.call(null,G__27289);
}),(function (G__27289){
return cljs.core.contains_QMARK_.call(null,G__27289,new cljs.core.Keyword(null,"expression","expression",202311876));
}),(function (G__27289){
return cljs.core.contains_QMARK_.call(null,G__27289,new cljs.core.Keyword(null,"target","target",253001721));
})], null),(function (G__27289){
return ((cljs.core.map_QMARK_.call(null,G__27289)) && (cljs.core.contains_QMARK_.call(null,G__27289,new cljs.core.Keyword(null,"expression","expression",202311876))) && (cljs.core.contains_QMARK_.call(null,G__27289,new cljs.core.Keyword(null,"target","target",253001721))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.Keyword(null,"target","target",253001721)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"expression","expression",202311876))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721)))], null),null])));
evalorder.game.validate = (function evalorder$game$validate(level){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("evalorder.game","level","evalorder.game/level",-84577858),level);
if(cljs.spec.alpha.invalid_QMARK_.call(null,conformed)){
throw (new Error(["Invalid expression:\n",cljs.spec.alpha.explain_str.call(null,new cljs.core.Keyword("evalorder.game","level","evalorder.game/level",-84577858),level)].join('')));
} else {
}

return conformed;
});

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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
evalorder.game.Error = (function (message,__meta,__extmap,__hash){
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.game.Error.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(evalorder.game.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k27291,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__27295 = k27291;
var G__27295__$1 = (((G__27295 instanceof cljs.core.Keyword))?G__27295.fqn:null);
switch (G__27295__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27291,else__4418__auto__);

}
}));

(evalorder.game.Error.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4437__auto__,p__27296){
var vec__27297 = p__27296;
var k__4438__auto__ = cljs.core.nth.call(null,vec__27297,(0),null);
var v__4439__auto__ = cljs.core.nth.call(null,vec__27297,(1),null);
return f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__);
}),init__4436__auto__,this__4434__auto____$1);
}));

(evalorder.game.Error.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4430__auto__,pr_pair__4432__auto__,"#evalorder.game.Error{",", ","}",opts__4431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(evalorder.game.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27290){
var self__ = this;
var G__27290__$1 = this;
return (new cljs.core.RecordIter((0),G__27290__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.game.Error.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(evalorder.game.Error.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new evalorder.game.Error(self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.game.Error.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.game.Error.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (804230722 ^ cljs.core.hash_unordered_coll.call(null,coll__4412__auto__));
}).call(null,this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(evalorder.game.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27292,other27293){
var self__ = this;
var this27292__$1 = this;
return (((!((other27293 == null)))) && ((this27292__$1.constructor === other27293.constructor)) && (cljs.core._EQ_.call(null,this27292__$1.message,other27293.message)) && (cljs.core._EQ_.call(null,this27292__$1.__extmap,other27293.__extmap)));
}));

(evalorder.game.Error.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new evalorder.game.Error(self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4425__auto__)),null));
}
}));

(evalorder.game.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__27290){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__27300 = cljs.core.keyword_identical_QMARK_;
var expr__27301 = k__4423__auto__;
if(cljs.core.truth_(pred__27300.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__27301))){
return (new evalorder.game.Error(G__27290,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.game.Error(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4423__auto__,G__27290),null));
}
}));

(evalorder.game.Error.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(evalorder.game.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__27290){
var self__ = this;
var this__4414__auto____$1 = this;
return (new evalorder.game.Error(self__.message,G__27290,self__.__extmap,self__.__hash));
}));

(evalorder.game.Error.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4421__auto__,(0)),cljs.core._nth.call(null,entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(evalorder.game.Error.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(evalorder.game.Error.cljs$lang$type = true);

(evalorder.game.Error.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"evalorder.game/Error",null,(1),null));
}));

(evalorder.game.Error.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write.call(null,writer__4459__auto__,"evalorder.game/Error");
}));

/**
 * Positional factory function for evalorder.game/Error.
 */
evalorder.game.__GT_Error = (function evalorder$game$__GT_Error(message){
return (new evalorder.game.Error(message,null,null,null));
});

/**
 * Factory function for evalorder.game/Error, taking a map of keywords to field values.
 */
evalorder.game.map__GT_Error = (function evalorder$game$map__GT_Error(G__27294){
var extmap__4454__auto__ = (function (){var G__27303 = cljs.core.dissoc.call(null,G__27294,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__27294)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27303);
} else {
return G__27303;
}
})();
return (new evalorder.game.Error(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__27294),null,cljs.core.not_empty.call(null,extmap__4454__auto__),null));
});

evalorder.game.error = (function evalorder$game$error(message){
return evalorder.game.__GT_Error.call(null,message);
});
evalorder.game.error_QMARK_ = (function evalorder$game$error_QMARK_(e){
return (e instanceof evalorder.game.Error);
});
evalorder.game.delim = (function evalorder$game$delim(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"delimiter"], null),v], null);
});
evalorder.game.expr = (function evalorder$game$expr(value,selected,path,set_path_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__4149__auto__ = selected;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_.call(null,selected);
} else {
return and__4149__auto__;
}
})())?"selected expr":"expr"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(cljs.core.truth_(set_path_BANG_)?(function (event){
event.stopPropagation();

return set_path_BANG_.call(null,path);
}):null)], null),((cljs.core.vector_QMARK_.call(null,value))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.delim,"("], null),(function (){var iter__4564__auto__ = (function evalorder$game$expr_$_iter__27305(s__27306){
return (new cljs.core.LazySeq(null,(function (){
var s__27306__$1 = s__27306;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27306__$1);
if(temp__5720__auto__){
var s__27306__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27306__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__27306__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__27308 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__27307 = (0);
while(true){
if((i__27307 < size__4563__auto__)){
var vec__27309 = cljs.core._nth.call(null,c__4562__auto__,i__27307);
var i = cljs.core.nth.call(null,vec__27309,(0),null);
var el = cljs.core.nth.call(null,vec__27309,(1),null);
cljs.core.chunk_append.call(null,b__27308,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr,el,((cljs.core._EQ_.call(null,i,cljs.core.first.call(null,selected)))?cljs.core.rest.call(null,selected):null),cljs.core.conj.call(null,path,i),set_path_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__27315 = (i__27307 + (1));
i__27307 = G__27315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27308),evalorder$game$expr_$_iter__27305.call(null,cljs.core.chunk_rest.call(null,s__27306__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27308),null);
}
} else {
var vec__27312 = cljs.core.first.call(null,s__27306__$2);
var i = cljs.core.nth.call(null,vec__27312,(0),null);
var el = cljs.core.nth.call(null,vec__27312,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr,el,((cljs.core._EQ_.call(null,i,cljs.core.first.call(null,selected)))?cljs.core.rest.call(null,selected):null),cljs.core.conj.call(null,path,i),set_path_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),evalorder$game$expr_$_iter__27305.call(null,cljs.core.rest.call(null,s__27306__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,evalorder.util.enumerate.call(null,value));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.delim,")"], null)], null):((typeof value === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"number"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):(((value instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"symbol"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):((cljs.core.boolean_QMARK_.call(null,value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bool"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):(((value == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nil"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):((evalorder.game.error_QMARK_.call(null,value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"error"], null),["!",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(value))].join('')], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"error"], null),"!?"], null)
))))))], null);
});
evalorder.game._STAR_fn_env_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"+","+",-740910886,null),(function() { 
var G__27316__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.game.error.call(null,"Can only add numbers");
} else {
return cljs.core.apply.call(null,cljs.core._PLUS_,args);
}
};
var G__27316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27317__i = 0, G__27317__a = new Array(arguments.length -  0);
while (G__27317__i < G__27317__a.length) {G__27317__a[G__27317__i] = arguments[G__27317__i + 0]; ++G__27317__i;}
  args = new cljs.core.IndexedSeq(G__27317__a,0,null);
} 
return G__27316__delegate.call(this,args);};
G__27316.cljs$lang$maxFixedArity = 0;
G__27316.cljs$lang$applyTo = (function (arglist__27318){
var args = cljs.core.seq(arglist__27318);
return G__27316__delegate(args);
});
G__27316.cljs$core$IFn$_invoke$arity$variadic = G__27316__delegate;
return G__27316;
})()
,new cljs.core.Symbol(null,"*","*",345799209,null),(function() { 
var G__27319__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.game.error.call(null,"Can only multiply numbers");
} else {
return cljs.core.apply.call(null,cljs.core._STAR_,args);
}
};
var G__27319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27320__i = 0, G__27320__a = new Array(arguments.length -  0);
while (G__27320__i < G__27320__a.length) {G__27320__a[G__27320__i] = arguments[G__27320__i + 0]; ++G__27320__i;}
  args = new cljs.core.IndexedSeq(G__27320__a,0,null);
} 
return G__27319__delegate.call(this,args);};
G__27319.cljs$lang$maxFixedArity = 0;
G__27319.cljs$lang$applyTo = (function (arglist__27321){
var args = cljs.core.seq(arglist__27321);
return G__27319__delegate(args);
});
G__27319.cljs$core$IFn$_invoke$arity$variadic = G__27319__delegate;
return G__27319;
})()
,new cljs.core.Symbol(null,"-","-",-471816912,null),(function() { 
var G__27322__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.game.error.call(null,"Can only subtract numbers");
} else {
return cljs.core.apply.call(null,cljs.core._,args);
}
};
var G__27322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27323__i = 0, G__27323__a = new Array(arguments.length -  0);
while (G__27323__i < G__27323__a.length) {G__27323__a[G__27323__i] = arguments[G__27323__i + 0]; ++G__27323__i;}
  args = new cljs.core.IndexedSeq(G__27323__a,0,null);
} 
return G__27322__delegate.call(this,args);};
G__27322.cljs$lang$maxFixedArity = 0;
G__27322.cljs$lang$applyTo = (function (arglist__27324){
var args = cljs.core.seq(arglist__27324);
return G__27322__delegate(args);
});
G__27322.cljs$core$IFn$_invoke$arity$variadic = G__27322__delegate;
return G__27322;
})()
,new cljs.core.Symbol(null,"/","/",-1371932971,null),(function() { 
var G__27325__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.game.error.call(null,"Can only divide numbers");
} else {
return cljs.core.apply.call(null,cljs.core._SLASH_,args);
}
};
var G__27325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27326__i = 0, G__27326__a = new Array(arguments.length -  0);
while (G__27326__i < G__27326__a.length) {G__27326__a[G__27326__i] = arguments[G__27326__i + 0]; ++G__27326__i;}
  args = new cljs.core.IndexedSeq(G__27326__a,0,null);
} 
return G__27325__delegate.call(this,args);};
G__27325.cljs$lang$maxFixedArity = 0;
G__27325.cljs$lang$applyTo = (function (arglist__27327){
var args = cljs.core.seq(arglist__27327);
return G__27325__delegate(args);
});
G__27325.cljs$core$IFn$_invoke$arity$variadic = G__27325__delegate;
return G__27325;
})()
,new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core._EQ_,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (pred,then,else$){
if(cljs.core.truth_(pred)){
return then;
} else {
return else$;
}
})], null);
evalorder.game._STAR_val_env_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi","pi",176774184,null),3.14,new cljs.core.Symbol(null,"answer-to-life-the-universe-and-everything","answer-to-life-the-universe-and-everything",1796384052,null),(42)], null);
evalorder.game.app = (function evalorder$game$app(value,args){
if((value instanceof cljs.core.Symbol)){
return cljs.core.apply.call(null,evalorder.game._STAR_fn_env_STAR_.call(null,value),args);
} else {
return evalorder.game.error.call(null,"Can't be applied");

}
});
evalorder.game.evaluate = (function evalorder$game$evaluate(value){
if(cljs.core.vector_QMARK_.call(null,value)){
return evalorder.game.app.call(null,cljs.core.first.call(null,value),cljs.core.next.call(null,value));
} else {
if((value instanceof cljs.core.Symbol)){
if(cljs.core.contains_QMARK_.call(null,evalorder.game._STAR_val_env_STAR_,value)){
return evalorder.game._STAR_val_env_STAR_.call(null,value);
} else {
if(cljs.core.contains_QMARK_.call(null,evalorder.game._STAR_fn_env_STAR_,value)){
return value;
} else {
return evalorder.game.error.call(null,"Undefined");

}
}
} else {
return value;

}
}
});
evalorder.game.evaluate_in = (function evalorder$game$evaluate_in(value,path){
if(cljs.core.seq.call(null,path)){
return cljs.core.update_in.call(null,value,path,evalorder.game.evaluate);
} else {
return evalorder.game.evaluate.call(null,value);
}
});
evalorder.game.root = (function evalorder$game$root(p__27328,next_BANG_){
var map__27329 = p__27328;
var map__27329__$1 = cljs.core.__destructure_map.call(null,map__27329);
var expression = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"expression","expression",202311876));
var target = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"target","target",253001721));
var definitions = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"definitions","definitions",167529986));
var expr_atom = reagent.core.atom.call(null,expression);
var path_atom = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var history = reagent.core.atom.call(null,cljs.core.List.EMPTY);
var validate_path = (function (path){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("evalorder.game","not-found","evalorder.game/not-found",-839713790),cljs.core.get_in.call(null,cljs.core.deref.call(null,expr_atom),path,new cljs.core.Keyword("evalorder.game","not-found","evalorder.game/not-found",-839713790)))){
return null;
} else {
return path;
}
});
return (function (){
var e = cljs.core.deref.call(null,expr_atom);
var p = cljs.core.deref.call(null,path_atom);
if(cljs.core.truth_((function (){var and__4149__auto__ = next_BANG_;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = p;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = cljs.core.seq.call(null,cljs.core.deref.call(null,history));
if(and__4149__auto____$2){
return target.call(null,e);
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,path_atom,null);

next_BANG_.call(null);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),(cljs.core.truth_(next_BANG_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return el.focus();
} else {
return null;
}
}),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (event){
var key = event.key;
if(cljs.core.truth_(event.ctrlKey)){
var G__27330 = key;
switch (G__27330) {
case "z":
if(cljs.core.seq.call(null,cljs.core.deref.call(null,history))){
cljs.core.reset_BANG_.call(null,expr_atom,cljs.core.first.call(null,cljs.core.deref.call(null,history)));

cljs.core.reset_BANG_.call(null,path_atom,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,history,cljs.core.rest);
} else {
return null;
}

break;
default:
return null;

}
} else {
var G__27331 = key;
switch (G__27331) {
case "ArrowUp":
if(cljs.core.seq.call(null,p)){
var G__27332 = cljs.core.subvec.call(null,p,(0),(cljs.core.count.call(null,p) - (1)));
var G__27332__$1 = (((G__27332 == null))?null:validate_path.call(null,G__27332));
if((G__27332__$1 == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,path_atom,G__27332__$1);
}
} else {
return null;
}

break;
case "ArrowDown":
var G__27333 = cljs.core.conj.call(null,p,(0));
var G__27333__$1 = (((G__27333 == null))?null:validate_path.call(null,G__27333));
if((G__27333__$1 == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,path_atom,G__27333__$1);
}

break;
case "ArrowLeft":
if(cljs.core.seq.call(null,p)){
var G__27334 = cljs.core.update.call(null,p,(cljs.core.count.call(null,p) - (1)),cljs.core.dec);
var G__27334__$1 = (((G__27334 == null))?null:validate_path.call(null,G__27334));
if((G__27334__$1 == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,path_atom,G__27334__$1);
}
} else {
return null;
}

break;
case "ArrowRight":
if(cljs.core.seq.call(null,p)){
var G__27335 = cljs.core.update.call(null,p,(cljs.core.count.call(null,p) - (1)),cljs.core.inc);
var G__27335__$1 = (((G__27335 == null))?null:validate_path.call(null,G__27335));
if((G__27335__$1 == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,path_atom,G__27335__$1);
}
} else {
return null;
}

break;
case "Enter":
cljs.core.swap_BANG_.call(null,expr_atom,evalorder.game.evaluate_in,p);

return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,e);

break;
default:
return null;

}
}
})], null):null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"expression"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr,e,(function (){var and__4149__auto__ = next_BANG_;
if(cljs.core.truth_(and__4149__auto__)){
return p;
} else {
return and__4149__auto__;
}
})(),cljs.core.PersistentVector.EMPTY,(function (){var and__4149__auto__ = next_BANG_;
if(cljs.core.truth_(and__4149__auto__)){
return (function (path){
return cljs.core.reset_BANG_.call(null,path_atom,path);
});
} else {
return and__4149__auto__;
}
})()], null)], null)], null);
});
});
evalorder.screen.add_reader_BANG_.call(null,new cljs.core.Symbol("game","expression","game/expression",1843886853,null),(function (expr){
var validated = evalorder.game.validate.call(null,expr);
if((typeof evalorder !== 'undefined') && (typeof evalorder.game !== 'undefined') && (typeof evalorder.game.t_evalorder$game27338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {evalorder.screen.Element}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.game.t_evalorder$game27338 = (function (expr,validated,meta27339){
this.expr = expr;
this.validated = validated;
this.meta27339 = meta27339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.game.t_evalorder$game27338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27340,meta27339__$1){
var self__ = this;
var _27340__$1 = this;
return (new evalorder.game.t_evalorder$game27338(self__.expr,self__.validated,meta27339__$1));
}));

(evalorder.game.t_evalorder$game27338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27340){
var self__ = this;
var _27340__$1 = this;
return self__.meta27339;
}));

(evalorder.game.t_evalorder$game27338.prototype.evalorder$screen$Element$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.game.t_evalorder$game27338.prototype.evalorder$screen$Element$render$arity$2 = (function (_,next_BANG_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.root,self__.validated,next_BANG_], null);
}));

(evalorder.game.t_evalorder$game27338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"validated","validated",-1207140351,null),new cljs.core.Symbol(null,"meta27339","meta27339",-1876502196,null)], null);
}));

(evalorder.game.t_evalorder$game27338.cljs$lang$type = true);

(evalorder.game.t_evalorder$game27338.cljs$lang$ctorStr = "evalorder.game/t_evalorder$game27338");

(evalorder.game.t_evalorder$game27338.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"evalorder.game/t_evalorder$game27338");
}));

/**
 * Positional factory function for evalorder.game/t_evalorder$game27338.
 */
evalorder.game.__GT_t_evalorder$game27338 = (function evalorder$game$__GT_t_evalorder$game27338(expr__$1,validated__$1,meta27339){
return (new evalorder.game.t_evalorder$game27338(expr__$1,validated__$1,meta27339));
});

}

return (new evalorder.game.t_evalorder$game27338(expr,validated,cljs.core.PersistentArrayMap.EMPTY));
}));

//# sourceMappingURL=game.js.map?rel=1618926906602
