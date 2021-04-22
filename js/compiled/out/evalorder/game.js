// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.game');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.spec.alpha');
goog.require('evalorder.screen');
goog.require('evalorder.util');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"recursive","recursive",718885872),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"recursive","recursive",718885872),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursive","recursive",718885872),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"nil","nil",99600501)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27309){
return cljs.core.sequential_QMARK_.call(null,G__27309);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.sequential_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null))], null),null),cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.boolean_QMARK_,cljs.core.nil_QMARK_], null),null),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null)),cljs.core.second,null,true)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27310){
return cljs.core.set_QMARK_.call(null,G__27310);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","level","evalorder.game/level",-84577858),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27311){
return cljs.core.map_QMARK_.call(null,G__27311);
}),(function (G__27311){
return cljs.core.contains_QMARK_.call(null,G__27311,new cljs.core.Keyword(null,"expression","expression",202311876));
}),(function (G__27311){
return cljs.core.contains_QMARK_.call(null,G__27311,new cljs.core.Keyword(null,"target","target",253001721));
})], null),(function (G__27311){
return ((cljs.core.map_QMARK_.call(null,G__27311)) && (cljs.core.contains_QMARK_.call(null,G__27311,new cljs.core.Keyword(null,"expression","expression",202311876))) && (cljs.core.contains_QMARK_.call(null,G__27311,new cljs.core.Keyword(null,"target","target",253001721))));
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

(evalorder.game.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k27313,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__27317 = k27313;
var G__27317__$1 = (((G__27317 instanceof cljs.core.Keyword))?G__27317.fqn:null);
switch (G__27317__$1) {
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27313,else__4418__auto__);

}
}));

(evalorder.game.Error.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4437__auto__,p__27318){
var vec__27319 = p__27318;
var k__4438__auto__ = cljs.core.nth.call(null,vec__27319,(0),null);
var v__4439__auto__ = cljs.core.nth.call(null,vec__27319,(1),null);
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

(evalorder.game.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27312){
var self__ = this;
var G__27312__$1 = this;
return (new cljs.core.RecordIter((0),G__27312__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(evalorder.game.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27314,other27315){
var self__ = this;
var this27314__$1 = this;
return (((!((other27315 == null)))) && ((this27314__$1.constructor === other27315.constructor)) && (cljs.core._EQ_.call(null,this27314__$1.message,other27315.message)) && (cljs.core._EQ_.call(null,this27314__$1.__extmap,other27315.__extmap)));
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

(evalorder.game.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__27312){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__27322 = cljs.core.keyword_identical_QMARK_;
var expr__27323 = k__4423__auto__;
if(cljs.core.truth_(pred__27322.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__27323))){
return (new evalorder.game.Error(G__27312,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.game.Error(self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4423__auto__,G__27312),null));
}
}));

(evalorder.game.Error.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(evalorder.game.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__27312){
var self__ = this;
var this__4414__auto____$1 = this;
return (new evalorder.game.Error(self__.message,G__27312,self__.__extmap,self__.__hash));
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
evalorder.game.map__GT_Error = (function evalorder$game$map__GT_Error(G__27316){
var extmap__4454__auto__ = (function (){var G__27325 = cljs.core.dissoc.call(null,G__27316,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__27316)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27325);
} else {
return G__27325;
}
})();
return (new evalorder.game.Error(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__27316),null,cljs.core.not_empty.call(null,extmap__4454__auto__),null));
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
evalorder.game.expr_el = (function evalorder$game$expr_el(value,selected,path,set_path_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,(cljs.core.truth_((function (){var and__4149__auto__ = selected;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_.call(null,selected);
} else {
return and__4149__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected expr",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__27327_SHARP_){
if(cljs.core.truth_(p1__27327_SHARP_)){
return p1__27327_SHARP_.focus();
} else {
return null;
}
})], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"expr"], null)),(cljs.core.truth_(set_path_BANG_)?(function (){var select_BANG_ = (function (event){
event.stopPropagation();

return set_path_BANG_.call(null,path);
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),select_BANG_,new cljs.core.Keyword(null,"onFocus","onFocus",1152444958),select_BANG_,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0)], null);
})():null)),((cljs.core.vector_QMARK_.call(null,value))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.delim,"("], null),(function (){var iter__4564__auto__ = (function evalorder$game$expr_el_$_iter__27328(s__27329){
return (new cljs.core.LazySeq(null,(function (){
var s__27329__$1 = s__27329;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27329__$1);
if(temp__5720__auto__){
var s__27329__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27329__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__27329__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__27331 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__27330 = (0);
while(true){
if((i__27330 < size__4563__auto__)){
var vec__27332 = cljs.core._nth.call(null,c__4562__auto__,i__27330);
var i = cljs.core.nth.call(null,vec__27332,(0),null);
var el = cljs.core.nth.call(null,vec__27332,(1),null);
cljs.core.chunk_append.call(null,b__27331,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr_el,el,((cljs.core._EQ_.call(null,i,cljs.core.first.call(null,selected)))?cljs.core.rest.call(null,selected):null),cljs.core.conj.call(null,path,i),set_path_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__27338 = (i__27330 + (1));
i__27330 = G__27338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27331),evalorder$game$expr_el_$_iter__27328.call(null,cljs.core.chunk_rest.call(null,s__27329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27331),null);
}
} else {
var vec__27335 = cljs.core.first.call(null,s__27329__$2);
var i = cljs.core.nth.call(null,vec__27335,(0),null);
var el = cljs.core.nth.call(null,vec__27335,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr_el,el,((cljs.core._EQ_.call(null,i,cljs.core.first.call(null,selected)))?cljs.core.rest.call(null,selected):null),cljs.core.conj.call(null,path,i),set_path_BANG_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),evalorder$game$expr_el_$_iter__27328.call(null,cljs.core.rest.call(null,s__27329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,evalorder.util.enumerate.call(null,value));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.delim,")"], null)], null):((typeof value === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"number"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):(((value instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"symbol"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):((cljs.core.boolean_QMARK_.call(null,value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bool"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):(((value == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nil"], null),"nil"], null):((evalorder.game.error_QMARK_.call(null,value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"error"], null),["!",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(value))].join('')], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"error"], null),"!?"], null)
))))))], null);
});
evalorder.game._STAR_fn_env_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"list","list",-1889078086,null)],[(function (v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return evalorder.game.error.call(null,"Not a list");
}
}),(function (pred,then,else$){
if(cljs.core.boolean_QMARK_.call(null,pred)){
if(pred){
return then;
} else {
return else$;
}
} else {
return evalorder.game.error.call(null,"Condition must be a boolean");
}
}),(function() { 
var G__27339__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.game.error.call(null,"Can only divide numbers");
} else {
return cljs.core.apply.call(null,cljs.core._SLASH_,args);
}
};
var G__27339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27340__i = 0, G__27340__a = new Array(arguments.length -  0);
while (G__27340__i < G__27340__a.length) {G__27340__a[G__27340__i] = arguments[G__27340__i + 0]; ++G__27340__i;}
  args = new cljs.core.IndexedSeq(G__27340__a,0,null);
} 
return G__27339__delegate.call(this,args);};
G__27339.cljs$lang$maxFixedArity = 0;
G__27339.cljs$lang$applyTo = (function (arglist__27341){
var args = cljs.core.seq(arglist__27341);
return G__27339__delegate(args);
});
G__27339.cljs$core$IFn$_invoke$arity$variadic = G__27339__delegate;
return G__27339;
})()
,(function (x,v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,x,null,(1),null)),v))));
} else {
return evalorder.game.error.call(null,"Not a list");
}
}),cljs.core._EQ_,(function (v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.subvec.call(null,v,(1));
} else {
return evalorder.game.error.call(null,"Not a list");
}
}),(function() { 
var G__27342__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.game.error.call(null,"Can only add numbers");
} else {
return cljs.core.apply.call(null,cljs.core._PLUS_,args);
}
};
var G__27342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27343__i = 0, G__27343__a = new Array(arguments.length -  0);
while (G__27343__i < G__27343__a.length) {G__27343__a[G__27343__i] = arguments[G__27343__i + 0]; ++G__27343__i;}
  args = new cljs.core.IndexedSeq(G__27343__a,0,null);
} 
return G__27342__delegate.call(this,args);};
G__27342.cljs$lang$maxFixedArity = 0;
G__27342.cljs$lang$applyTo = (function (arglist__27344){
var args = cljs.core.seq(arglist__27344);
return G__27342__delegate(args);
});
G__27342.cljs$core$IFn$_invoke$arity$variadic = G__27342__delegate;
return G__27342;
})()
,(function() { 
var G__27345__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.game.error.call(null,"Can only multiply numbers");
} else {
return cljs.core.apply.call(null,cljs.core._STAR_,args);
}
};
var G__27345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27346__i = 0, G__27346__a = new Array(arguments.length -  0);
while (G__27346__i < G__27346__a.length) {G__27346__a[G__27346__i] = arguments[G__27346__i + 0]; ++G__27346__i;}
  args = new cljs.core.IndexedSeq(G__27346__a,0,null);
} 
return G__27345__delegate.call(this,args);};
G__27345.cljs$lang$maxFixedArity = 0;
G__27345.cljs$lang$applyTo = (function (arglist__27347){
var args = cljs.core.seq(arglist__27347);
return G__27345__delegate(args);
});
G__27345.cljs$core$IFn$_invoke$arity$variadic = G__27345__delegate;
return G__27345;
})()
,(function() { 
var G__27348__delegate = function (body){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),body))));
};
var G__27348 = function (var_args){
var body = null;
if (arguments.length > 0) {
var G__27349__i = 0, G__27349__a = new Array(arguments.length -  0);
while (G__27349__i < G__27349__a.length) {G__27349__a[G__27349__i] = arguments[G__27349__i + 0]; ++G__27349__i;}
  body = new cljs.core.IndexedSeq(G__27349__a,0,null);
} 
return G__27348__delegate.call(this,body);};
G__27348.cljs$lang$maxFixedArity = 0;
G__27348.cljs$lang$applyTo = (function (arglist__27350){
var body = cljs.core.seq(arglist__27350);
return G__27348__delegate(body);
});
G__27348.cljs$core$IFn$_invoke$arity$variadic = G__27348__delegate;
return G__27348;
})()
,(function() { 
var G__27351__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.game.error.call(null,"Can only subtract numbers");
} else {
return cljs.core.apply.call(null,cljs.core._,args);
}
};
var G__27351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27352__i = 0, G__27352__a = new Array(arguments.length -  0);
while (G__27352__i < G__27352__a.length) {G__27352__a[G__27352__i] = arguments[G__27352__i + 0]; ++G__27352__i;}
  args = new cljs.core.IndexedSeq(G__27352__a,0,null);
} 
return G__27351__delegate.call(this,args);};
G__27351.cljs$lang$maxFixedArity = 0;
G__27351.cljs$lang$applyTo = (function (arglist__27353){
var args = cljs.core.seq(arglist__27353);
return G__27351__delegate(args);
});
G__27351.cljs$core$IFn$_invoke$arity$variadic = G__27351__delegate;
return G__27351;
})()
,cljs.core.vector]);
evalorder.game._STAR_val_env_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pi","pi",176774184,null),3.14,new cljs.core.Symbol(null,"answer","answer",897898364,null),(42)], null);
evalorder.game.app = (function evalorder$game$app(value,args){
if((value instanceof cljs.core.Symbol)){
return cljs.core.apply.call(null,evalorder.game._STAR_fn_env_STAR_.call(null,value),args);
} else {
if(((cljs.core.vector_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,value))))){
var vec__27356 = value;
var _ = cljs.core.nth.call(null,vec__27356,(0),null);
var arglist = cljs.core.nth.call(null,vec__27356,(1),null);
var body = cljs.core.nth.call(null,vec__27356,(2),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),arglist))){
return evalorder.game.error.call(null,"Parameters must be symbols");
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,args),cljs.core.count.call(null,arglist))){
return evalorder.game.error.call(null,"Wrong number of arguments");
} else {
return (function evalorder$game$app_$_sub_in(expr,arg__GT_sub){
if(cljs.core.vector_QMARK_.call(null,expr)){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,expr))){
var vec__27359 = expr;
var ___$1 = cljs.core.nth.call(null,vec__27359,(0),null);
var its_args = cljs.core.nth.call(null,vec__27359,(1),null);
var its_body = cljs.core.nth.call(null,vec__27359,(2),null);
var new_subs = cljs.core.reduce.call(null,cljs.core.dissoc,arg__GT_sub,its_args);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,its_args,null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,(function (p1__27354_SHARP_){
return evalorder$game$app_$_sub_in.call(null,p1__27354_SHARP_,new_subs);
}),its_body),null,(1),null))))));
} else {
return cljs.core.mapv.call(null,(function (p1__27355_SHARP_){
return evalorder$game$app_$_sub_in.call(null,p1__27355_SHARP_,arg__GT_sub);
}),expr);
}
} else {
if((expr instanceof cljs.core.Symbol)){
var temp__5718__auto__ = cljs.core.find.call(null,arg__GT_sub,expr);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__27362 = temp__5718__auto__;
var ___$1 = cljs.core.nth.call(null,vec__27362,(0),null);
var v = cljs.core.nth.call(null,vec__27362,(1),null);
return v;
} else {
return expr;
}
} else {
return expr;

}
}
}).call(null,body,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,arglist,args)));

}
}
} else {
return evalorder.game.error.call(null,"Not a function");

}
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
evalorder.game.to_first = (function evalorder$game$to_first(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27372 = arguments.length;
var i__4772__auto___27373 = (0);
while(true){
if((i__4772__auto___27373 < len__4771__auto___27372)){
args__4777__auto__.push((arguments[i__4772__auto___27373]));

var G__27374 = (i__4772__auto___27373 + (1));
i__4772__auto___27373 = G__27374;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return evalorder.game.to_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(evalorder.game.to_first.cljs$core$IFn$_invoke$arity$variadic = (function (p__27368,f,args){
var vec__27369 = p__27368;
var seq__27370 = cljs.core.seq.call(null,vec__27369);
var first__27371 = cljs.core.first.call(null,seq__27370);
var seq__27370__$1 = cljs.core.next.call(null,seq__27370);
var value = first__27371;
var tail = seq__27370__$1;
return cljs.core.cons.call(null,cljs.core.apply.call(null,f,value,args),tail);
}));

(evalorder.game.to_first.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(evalorder.game.to_first.cljs$lang$applyTo = (function (seq27365){
var G__27366 = cljs.core.first.call(null,seq27365);
var seq27365__$1 = cljs.core.next.call(null,seq27365);
var G__27367 = cljs.core.first.call(null,seq27365__$1);
var seq27365__$2 = cljs.core.next.call(null,seq27365__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27366,G__27367,seq27365__$2);
}));

evalorder.game.to_cons = (function evalorder$game$to_cons(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27378 = arguments.length;
var i__4772__auto___27379 = (0);
while(true){
if((i__4772__auto___27379 < len__4771__auto___27378)){
args__4777__auto__.push((arguments[i__4772__auto___27379]));

var G__27380 = (i__4772__auto___27379 + (1));
i__4772__auto___27379 = G__27380;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return evalorder.game.to_cons.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(evalorder.game.to_cons.cljs$core$IFn$_invoke$arity$variadic = (function (value,f,args){
return cljs.core.cons.call(null,cljs.core.apply.call(null,f,cljs.core.first.call(null,value),args),value);
}));

(evalorder.game.to_cons.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(evalorder.game.to_cons.cljs$lang$applyTo = (function (seq27375){
var G__27376 = cljs.core.first.call(null,seq27375);
var seq27375__$1 = cljs.core.next.call(null,seq27375);
var G__27377 = cljs.core.first.call(null,seq27375__$1);
var seq27375__$2 = cljs.core.next.call(null,seq27375__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27376,G__27377,seq27375__$2);
}));

evalorder.game.controls = (function evalorder$game$controls(var_args){
var args__4777__auto__ = [];
var len__4771__auto___27392 = arguments.length;
var i__4772__auto___27393 = (0);
while(true){
if((i__4772__auto___27393 < len__4771__auto___27392)){
args__4777__auto__.push((arguments[i__4772__auto___27393]));

var G__27394 = (i__4772__auto___27393 + (1));
i__4772__auto___27393 = G__27394;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return evalorder.game.controls.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(evalorder.game.controls.cljs$core$IFn$_invoke$arity$variadic = (function (buttons){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"controls"], null),(function (){var iter__4564__auto__ = (function evalorder$game$iter__27382(s__27383){
return (new cljs.core.LazySeq(null,(function (){
var s__27383__$1 = s__27383;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27383__$1);
if(temp__5720__auto__){
var s__27383__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27383__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__27383__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__27385 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__27384 = (0);
while(true){
if((i__27384 < size__4563__auto__)){
var vec__27386 = cljs.core._nth.call(null,c__4562__auto__,i__27384);
var label = cljs.core.nth.call(null,vec__27386,(0),null);
var do_BANG_ = cljs.core.nth.call(null,vec__27386,(1),null);
var title = cljs.core.nth.call(null,vec__27386,(2),null);
cljs.core.chunk_append.call(null,b__27385,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"control button material-icons",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),do_BANG_,new cljs.core.Keyword(null,"title","title",636505583),title], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)));

var G__27395 = (i__27384 + (1));
i__27384 = G__27395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27385),evalorder$game$iter__27382.call(null,cljs.core.chunk_rest.call(null,s__27383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27385),null);
}
} else {
var vec__27389 = cljs.core.first.call(null,s__27383__$2);
var label = cljs.core.nth.call(null,vec__27389,(0),null);
var do_BANG_ = cljs.core.nth.call(null,vec__27389,(1),null);
var title = cljs.core.nth.call(null,vec__27389,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"control button material-icons",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),do_BANG_,new cljs.core.Keyword(null,"title","title",636505583),title], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null)),evalorder$game$iter__27382.call(null,cljs.core.rest.call(null,s__27383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,buttons);
})()], null);
}));

(evalorder.game.controls.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(evalorder.game.controls.cljs$lang$applyTo = (function (seq27381){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27381));
}));

evalorder.game.root = (function evalorder$game$root(p__27396,_next_BANG_){
var map__27397 = p__27396;
var map__27397__$1 = cljs.core.__destructure_map.call(null,map__27397);
var expression = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"expression","expression",202311876));
var _target = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"_target","_target",-820699148));
var _definitions = cljs.core.get.call(null,map__27397__$1,new cljs.core.Keyword(null,"_definitions","_definitions",880899167));
var hist = reagent.core.atom.call(null,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expr","expr",745722291),expression,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY], null),null,(1),null)));
var validate_path = (function (path){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hist))),path,new cljs.core.Keyword("evalorder.game","not-found","evalorder.game/not-found",-839713790)),new cljs.core.Keyword("evalorder.game","not-found","evalorder.game/not-found",-839713790))){
return null;
} else {
return path;
}
});
return (function (p__27398,next_BANG_){
var map__27399 = p__27398;
var map__27399__$1 = cljs.core.__destructure_map.call(null,map__27399);
var _expression = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"_expression","_expression",2126238159));
var target = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"target","target",253001721));
var _definitions__$1 = cljs.core.get.call(null,map__27399__$1,new cljs.core.Keyword(null,"_definitions","_definitions",880899167));
var vec__27400 = cljs.core.deref.call(null,hist);
var seq__27401 = cljs.core.seq.call(null,vec__27400);
var first__27402 = cljs.core.first.call(null,seq__27401);
var seq__27401__$1 = cljs.core.next.call(null,seq__27401);
var map__27403 = first__27402;
var map__27403__$1 = cljs.core.__destructure_map.call(null,map__27403);
var expr = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var path = cljs.core.get.call(null,map__27403__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var history = seq__27401__$1;
var evaluate_BANG_ = (function (){
return cljs.core.swap_BANG_.call(null,hist,evalorder.game.to_cons,cljs.core.update,new cljs.core.Keyword(null,"expr","expr",745722291),evalorder.game.evaluate_in,path);
});
var undo_BANG_ = (function (){
if(history){
return cljs.core.reset_BANG_.call(null,hist,history);
} else {
return null;
}
});
var up_BANG_ = (function (){
if(cljs.core.seq.call(null,path)){
var G__27404 = cljs.core.subvec.call(null,path,(0),(cljs.core.count.call(null,path) - (1)));
var G__27404__$1 = (((G__27404 == null))?null:validate_path.call(null,G__27404));
if((G__27404__$1 == null)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,hist,evalorder.game.to_first,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),G__27404__$1);
}
} else {
return null;
}
});
var down_BANG_ = (function (){
var G__27405 = cljs.core.conj.call(null,path,(0));
var G__27405__$1 = (((G__27405 == null))?null:validate_path.call(null,G__27405));
if((G__27405__$1 == null)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,hist,evalorder.game.to_first,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),G__27405__$1);
}
});
var left_BANG_ = (function (){
if(cljs.core.seq.call(null,path)){
var G__27406 = cljs.core.update.call(null,path,(cljs.core.count.call(null,path) - (1)),cljs.core.dec);
var G__27406__$1 = (((G__27406 == null))?null:validate_path.call(null,G__27406));
if((G__27406__$1 == null)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,hist,evalorder.game.to_first,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),G__27406__$1);
}
} else {
return null;
}
});
var right_BANG_ = (function (){
if(cljs.core.seq.call(null,path)){
var G__27407 = cljs.core.update.call(null,path,(cljs.core.count.call(null,path) - (1)),cljs.core.inc);
var G__27407__$1 = (((G__27407 == null))?null:validate_path.call(null,G__27407));
if((G__27407__$1 == null)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,hist,evalorder.game.to_first,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),G__27407__$1);
}
} else {
return null;
}
});
if(cljs.core.truth_((function (){var and__4149__auto__ = next_BANG_;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = path;
if(cljs.core.truth_(and__4149__auto____$1)){
return ((history) && (cljs.core.contains_QMARK_.call(null,target,expr)));
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,hist,evalorder.game.to_cons,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),null);

next_BANG_.call(null);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),(cljs.core.truth_(next_BANG_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (event){
var key = event.key;
var temp__5724__auto__ = (cljs.core.truth_(event.ctrlKey)?(function (){var G__27408 = key;
switch (G__27408) {
case "z":
return undo_BANG_;

break;
default:
return null;

}
})():(function (){var G__27409 = key;
switch (G__27409) {
case "ArrowUp":
return up_BANG_;

break;
case "ArrowDown":
return down_BANG_;

break;
case "ArrowLeft":
return left_BANG_;

break;
case "ArrowRight":
return right_BANG_;

break;
case "Enter":
return evaluate_BANG_;

break;
default:
return null;

}
})());
if((temp__5724__auto__ == null)){
return null;
} else {
var act_BANG_ = temp__5724__auto__;
act_BANG_.call(null);

return event.preventDefault();
}
})], null):null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"expression"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr_el,expr,(cljs.core.truth_(next_BANG_)?path:null),cljs.core.PersistentVector.EMPTY,(function (path__$1){
return cljs.core.swap_BANG_.call(null,hist,evalorder.game.to_first,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
})], null),(cljs.core.truth_(next_BANG_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.controls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["play_arrow",evaluate_BANG_,"Evaluate (Enter)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["undo",undo_BANG_,"Undo (Ctrl + Z)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keyboard_arrow_left",left_BANG_,"Left (Left Arrow)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keyboard_arrow_up",up_BANG_,"Outer (Up Arrow)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keyboard_arrow_down",down_BANG_,"Inner (Down Arrow)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keyboard_arrow_right",right_BANG_,"Right (Right Arrow)"], null)], null):null)], null)], null);
});
});
evalorder.screen.add_reader_BANG_.call(null,new cljs.core.Symbol("game","expression","game/expression",1843886853,null),(function (expr){
var validated = evalorder.game.validate.call(null,expr);
if((typeof evalorder !== 'undefined') && (typeof evalorder.game !== 'undefined') && (typeof evalorder.game.t_evalorder$game27412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {evalorder.screen.Element}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.game.t_evalorder$game27412 = (function (expr,validated,meta27413){
this.expr = expr;
this.validated = validated;
this.meta27413 = meta27413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.game.t_evalorder$game27412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27414,meta27413__$1){
var self__ = this;
var _27414__$1 = this;
return (new evalorder.game.t_evalorder$game27412(self__.expr,self__.validated,meta27413__$1));
}));

(evalorder.game.t_evalorder$game27412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27414){
var self__ = this;
var _27414__$1 = this;
return self__.meta27413;
}));

(evalorder.game.t_evalorder$game27412.prototype.evalorder$screen$Element$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.game.t_evalorder$game27412.prototype.evalorder$screen$Element$render$arity$2 = (function (_,next_BANG_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.root,self__.validated,next_BANG_], null);
}));

(evalorder.game.t_evalorder$game27412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"validated","validated",-1207140351,null),new cljs.core.Symbol(null,"meta27413","meta27413",1049572263,null)], null);
}));

(evalorder.game.t_evalorder$game27412.cljs$lang$type = true);

(evalorder.game.t_evalorder$game27412.cljs$lang$ctorStr = "evalorder.game/t_evalorder$game27412");

(evalorder.game.t_evalorder$game27412.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"evalorder.game/t_evalorder$game27412");
}));

/**
 * Positional factory function for evalorder.game/t_evalorder$game27412.
 */
evalorder.game.__GT_t_evalorder$game27412 = (function evalorder$game$__GT_t_evalorder$game27412(expr__$1,validated__$1,meta27413){
return (new evalorder.game.t_evalorder$game27412(expr__$1,validated__$1,meta27413));
});

}

return (new evalorder.game.t_evalorder$game27412(expr,validated,cljs.core.PersistentArrayMap.EMPTY));
}));

//# sourceMappingURL=game.js.map?rel=1619117993472
