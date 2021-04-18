// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('evalorder.lang.values');
goog.require('cljs.core');
goog.require('evalorder.lang.ast');
evalorder.lang.values._STAR_globals_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {evalorder.lang.ast.Applicable}
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
evalorder.lang.values.Global = (function (doc,value,__meta,__extmap,__hash){
this.doc = doc;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.values.Global.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.values.Global.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23222,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23226 = k23222;
var G__23226__$1 = (((G__23226 instanceof cljs.core.Keyword))?G__23226.fqn:null);
switch (G__23226__$1) {
case "doc":
return self__.doc;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23222,else__4383__auto__);

}
}));

(evalorder.lang.values.Global.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23227){
var vec__23228 = p__23227;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23228,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23228,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.values.Global.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.values.Global{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(evalorder.lang.values.Global.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23221){
var self__ = this;
var G__23221__$1 = this;
return (new cljs.core.RecordIter((0),G__23221__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.values.Global.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.values.Global.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.values.Global(self__.doc,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.values.Global.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.values.Global.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1357428110 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.values.Global.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23223,other23224){
var self__ = this;
var this23223__$1 = this;
return (((!((other23224 == null)))) && ((this23223__$1.constructor === other23224.constructor)) && (cljs.core._EQ_.call(null,this23223__$1.doc,other23224.doc)) && (cljs.core._EQ_.call(null,this23223__$1.value,other23224.value)) && (cljs.core._EQ_.call(null,this23223__$1.__extmap,other23224.__extmap)));
}));

(evalorder.lang.values.Global.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.values.Global.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (_,out_atom,args){
var self__ = this;
var ___$1 = this;
return evalorder.lang.ast.app.call(null,self__.value,out_atom,args);
}));

(evalorder.lang.values.Global.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.values.Global(self__.doc,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.values.Global.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23221){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23231 = cljs.core.keyword_identical_QMARK_;
var expr__23232 = k__4388__auto__;
if(cljs.core.truth_(pred__23231.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),expr__23232))){
return (new evalorder.lang.values.Global(G__23221,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23231.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__23232))){
return (new evalorder.lang.values.Global(self__.doc,G__23221,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.values.Global(self__.doc,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23221),null));
}
}
}));

(evalorder.lang.values.Global.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(evalorder.lang.values.Global.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23221){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.values.Global(self__.doc,self__.value,G__23221,self__.__extmap,self__.__hash));
}));

(evalorder.lang.values.Global.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.values.Global.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(evalorder.lang.values.Global.cljs$lang$type = true);

(evalorder.lang.values.Global.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.values/Global",null,(1),null));
}));

(evalorder.lang.values.Global.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.values/Global");
}));

/**
 * Positional factory function for evalorder.lang.values/Global.
 */
evalorder.lang.values.__GT_Global = (function evalorder$lang$values$__GT_Global(doc,value){
return (new evalorder.lang.values.Global(doc,value,null,null,null));
});

/**
 * Factory function for evalorder.lang.values/Global, taking a map of keywords to field values.
 */
evalorder.lang.values.map__GT_Global = (function evalorder$lang$values$map__GT_Global(G__23225){
var extmap__4419__auto__ = (function (){var G__23234 = cljs.core.dissoc.call(null,G__23225,new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__23225)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23234);
} else {
return G__23234;
}
})();
return (new evalorder.lang.values.Global(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(G__23225),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__23225),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

(evalorder.lang.values._STAR_globals_STAR_ = cljs.core.assoc.call(null,evalorder.lang.values._STAR_globals_STAR_,new cljs.core.Symbol(null,"+","+",-740910886,null),evalorder.lang.values.__GT_Global.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),new cljs.core.Keyword(null,"desc","desc",2093485764),"Returns the sum of its arguments. (+) returns 0."], null),(function (){
if((typeof evalorder !== 'undefined') && (typeof evalorder.lang !== 'undefined') && (typeof evalorder.lang.values !== 'undefined') && (typeof evalorder.lang.values.t_evalorder$lang$values23236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {evalorder.lang.ast.Applicable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.lang.values.t_evalorder$lang$values23236 = (function (meta23237){
this.meta23237 = meta23237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.lang.values.t_evalorder$lang$values23236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23238,meta23237__$1){
var self__ = this;
var _23238__$1 = this;
return (new evalorder.lang.values.t_evalorder$lang$values23236(meta23237__$1));
}));

(evalorder.lang.values.t_evalorder$lang$values23236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23238){
var self__ = this;
var _23238__$1 = this;
return self__.meta23237;
}));

(evalorder.lang.values.t_evalorder$lang$values23236.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.values.t_evalorder$lang$values23236.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (__SHARP_,oa__21735__auto__,args__21736__auto__){
var self__ = this;
var __SHARP___$1 = this;
var args = cljs.core.map.call(null,evalorder.lang.ast.value,args__21736__auto__);
var out_atom = oa__21735__auto__;
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.lang.ast.__GT_ErrorExpr.call(null,out_atom,"Can only add numbers");
} else {
return evalorder.lang.ast.__GT_LiteralExpr.call(null,out_atom,evalorder.lang.ast.__GT_NumLiteral.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,args)));
}
}));

(evalorder.lang.values.t_evalorder$lang$values23236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23237","meta23237",-911584570,null)], null);
}));

(evalorder.lang.values.t_evalorder$lang$values23236.cljs$lang$type = true);

(evalorder.lang.values.t_evalorder$lang$values23236.cljs$lang$ctorStr = "evalorder.lang.values/t_evalorder$lang$values23236");

(evalorder.lang.values.t_evalorder$lang$values23236.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"evalorder.lang.values/t_evalorder$lang$values23236");
}));

/**
 * Positional factory function for evalorder.lang.values/t_evalorder$lang$values23236.
 */
evalorder.lang.values.__GT_t_evalorder$lang$values23236 = (function evalorder$lang$values$__GT_t_evalorder$lang$values23236(meta23237){
return (new evalorder.lang.values.t_evalorder$lang$values23236(meta23237));
});

}

return (new evalorder.lang.values.t_evalorder$lang$values23236(null));
})()
)));
(evalorder.lang.values._STAR_globals_STAR_ = cljs.core.assoc.call(null,evalorder.lang.values._STAR_globals_STAR_,new cljs.core.Symbol(null,"-","-",-471816912,null),evalorder.lang.values.__GT_Global.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"ys","ys",1606115702,null)], null)),new cljs.core.Keyword(null,"desc","desc",2093485764),"If no ys are supplied, returns the negation of x,\n    else subtracts the ys from x and returns the result."], null),(function (){
if((typeof evalorder !== 'undefined') && (typeof evalorder.lang !== 'undefined') && (typeof evalorder.lang.values !== 'undefined') && (typeof evalorder.lang.values.t_evalorder$lang$values23239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {evalorder.lang.ast.Applicable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.lang.values.t_evalorder$lang$values23239 = (function (meta23240){
this.meta23240 = meta23240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.lang.values.t_evalorder$lang$values23239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23241,meta23240__$1){
var self__ = this;
var _23241__$1 = this;
return (new evalorder.lang.values.t_evalorder$lang$values23239(meta23240__$1));
}));

(evalorder.lang.values.t_evalorder$lang$values23239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23241){
var self__ = this;
var _23241__$1 = this;
return self__.meta23240;
}));

(evalorder.lang.values.t_evalorder$lang$values23239.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.values.t_evalorder$lang$values23239.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (__SHARP_,oa__21735__auto__,args__21736__auto__){
var self__ = this;
var __SHARP___$1 = this;
var args = cljs.core.map.call(null,evalorder.lang.ast.value,args__21736__auto__);
var out_atom = oa__21735__auto__;
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.lang.ast.__GT_ErrorExpr.call(null,out_atom,"Can only add numbers");
} else {
return evalorder.lang.ast.__GT_LiteralExpr.call(null,out_atom,evalorder.lang.ast.__GT_NumLiteral.call(null,cljs.core.apply.call(null,cljs.core._,args)));
}
}));

(evalorder.lang.values.t_evalorder$lang$values23239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23240","meta23240",-615542413,null)], null);
}));

(evalorder.lang.values.t_evalorder$lang$values23239.cljs$lang$type = true);

(evalorder.lang.values.t_evalorder$lang$values23239.cljs$lang$ctorStr = "evalorder.lang.values/t_evalorder$lang$values23239");

(evalorder.lang.values.t_evalorder$lang$values23239.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"evalorder.lang.values/t_evalorder$lang$values23239");
}));

/**
 * Positional factory function for evalorder.lang.values/t_evalorder$lang$values23239.
 */
evalorder.lang.values.__GT_t_evalorder$lang$values23239 = (function evalorder$lang$values$__GT_t_evalorder$lang$values23239(meta23240){
return (new evalorder.lang.values.t_evalorder$lang$values23239(meta23240));
});

}

return (new evalorder.lang.values.t_evalorder$lang$values23239(null));
})()
)));
(evalorder.lang.values._STAR_globals_STAR_ = cljs.core.assoc.call(null,evalorder.lang.values._STAR_globals_STAR_,new cljs.core.Symbol(null,"*","*",345799209,null),evalorder.lang.values.__GT_Global.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null)),new cljs.core.Keyword(null,"desc","desc",2093485764),"Returns the product of nums. (*) returns 1."], null),(function (){
if((typeof evalorder !== 'undefined') && (typeof evalorder.lang !== 'undefined') && (typeof evalorder.lang.values !== 'undefined') && (typeof evalorder.lang.values.t_evalorder$lang$values23242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {evalorder.lang.ast.Applicable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.lang.values.t_evalorder$lang$values23242 = (function (meta23243){
this.meta23243 = meta23243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.lang.values.t_evalorder$lang$values23242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23244,meta23243__$1){
var self__ = this;
var _23244__$1 = this;
return (new evalorder.lang.values.t_evalorder$lang$values23242(meta23243__$1));
}));

(evalorder.lang.values.t_evalorder$lang$values23242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23244){
var self__ = this;
var _23244__$1 = this;
return self__.meta23243;
}));

(evalorder.lang.values.t_evalorder$lang$values23242.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.values.t_evalorder$lang$values23242.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (__SHARP_,oa__21735__auto__,args__21736__auto__){
var self__ = this;
var __SHARP___$1 = this;
var args = cljs.core.map.call(null,evalorder.lang.ast.value,args__21736__auto__);
var out_atom = oa__21735__auto__;
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.lang.ast.__GT_ErrorExpr.call(null,out_atom,"Can only add numbers");
} else {
return evalorder.lang.ast.__GT_LiteralExpr.call(null,out_atom,evalorder.lang.ast.__GT_NumLiteral.call(null,cljs.core.apply.call(null,cljs.core._STAR_,args)));
}
}));

(evalorder.lang.values.t_evalorder$lang$values23242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23243","meta23243",-1189860777,null)], null);
}));

(evalorder.lang.values.t_evalorder$lang$values23242.cljs$lang$type = true);

(evalorder.lang.values.t_evalorder$lang$values23242.cljs$lang$ctorStr = "evalorder.lang.values/t_evalorder$lang$values23242");

(evalorder.lang.values.t_evalorder$lang$values23242.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"evalorder.lang.values/t_evalorder$lang$values23242");
}));

/**
 * Positional factory function for evalorder.lang.values/t_evalorder$lang$values23242.
 */
evalorder.lang.values.__GT_t_evalorder$lang$values23242 = (function evalorder$lang$values$__GT_t_evalorder$lang$values23242(meta23243){
return (new evalorder.lang.values.t_evalorder$lang$values23242(meta23243));
});

}

return (new evalorder.lang.values.t_evalorder$lang$values23242(null));
})()
)));
(evalorder.lang.values._STAR_globals_STAR_ = cljs.core.assoc.call(null,evalorder.lang.values._STAR_globals_STAR_,new cljs.core.Symbol(null,"/","/",-1371932971,null),evalorder.lang.values.__GT_Global.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"numerator","numerator",1479770423,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"numerator","numerator",1479770423,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"denominators","denominators",-815960637,null)], null)),new cljs.core.Keyword(null,"desc","desc",2093485764),"If no denominators are supplied, returns 1/numerator,\n    else returns numerator divided by all of the denominators."], null),(function (){
if((typeof evalorder !== 'undefined') && (typeof evalorder.lang !== 'undefined') && (typeof evalorder.lang.values !== 'undefined') && (typeof evalorder.lang.values.t_evalorder$lang$values23245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {evalorder.lang.ast.Applicable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.lang.values.t_evalorder$lang$values23245 = (function (meta23246){
this.meta23246 = meta23246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.lang.values.t_evalorder$lang$values23245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23247,meta23246__$1){
var self__ = this;
var _23247__$1 = this;
return (new evalorder.lang.values.t_evalorder$lang$values23245(meta23246__$1));
}));

(evalorder.lang.values.t_evalorder$lang$values23245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23247){
var self__ = this;
var _23247__$1 = this;
return self__.meta23246;
}));

(evalorder.lang.values.t_evalorder$lang$values23245.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.values.t_evalorder$lang$values23245.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (__SHARP_,oa__21735__auto__,args__21736__auto__){
var self__ = this;
var __SHARP___$1 = this;
var args = cljs.core.map.call(null,evalorder.lang.ast.value,args__21736__auto__);
var out_atom = oa__21735__auto__;
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args))){
return evalorder.lang.ast.__GT_ErrorExpr.call(null,out_atom,"Can only add numbers");
} else {
return evalorder.lang.ast.__GT_LiteralExpr.call(null,out_atom,evalorder.lang.ast.__GT_NumLiteral.call(null,cljs.core.apply.call(null,cljs.core._SLASH_,args)));
}
}));

(evalorder.lang.values.t_evalorder$lang$values23245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23246","meta23246",1363757078,null)], null);
}));

(evalorder.lang.values.t_evalorder$lang$values23245.cljs$lang$type = true);

(evalorder.lang.values.t_evalorder$lang$values23245.cljs$lang$ctorStr = "evalorder.lang.values/t_evalorder$lang$values23245");

(evalorder.lang.values.t_evalorder$lang$values23245.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"evalorder.lang.values/t_evalorder$lang$values23245");
}));

/**
 * Positional factory function for evalorder.lang.values/t_evalorder$lang$values23245.
 */
evalorder.lang.values.__GT_t_evalorder$lang$values23245 = (function evalorder$lang$values$__GT_t_evalorder$lang$values23245(meta23246){
return (new evalorder.lang.values.t_evalorder$lang$values23245(meta23246));
});

}

return (new evalorder.lang.values.t_evalorder$lang$values23245(null));
})()
)));
(evalorder.lang.values._STAR_globals_STAR_ = cljs.core.assoc.call(null,evalorder.lang.values._STAR_globals_STAR_,new cljs.core.Symbol(null,"if","if",1181717262,null),evalorder.lang.values.__GT_Global.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"then","then",2101129597,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"then","then",2101129597,null),new cljs.core.Symbol(null,"else","else",132154381,null)], null)),new cljs.core.Keyword(null,"desc","desc",2093485764),"If the predicate is neither nil nor false, return then,\n    otherwise return else, or nil."], null),(function (){
if((typeof evalorder !== 'undefined') && (typeof evalorder.lang !== 'undefined') && (typeof evalorder.lang.values !== 'undefined') && (typeof evalorder.lang.values.t_evalorder$lang$values23248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {evalorder.lang.ast.Applicable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.lang.values.t_evalorder$lang$values23248 = (function (meta23249){
this.meta23249 = meta23249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.lang.values.t_evalorder$lang$values23248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23250,meta23249__$1){
var self__ = this;
var _23250__$1 = this;
return (new evalorder.lang.values.t_evalorder$lang$values23248(meta23249__$1));
}));

(evalorder.lang.values.t_evalorder$lang$values23248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23250){
var self__ = this;
var _23250__$1 = this;
return self__.meta23249;
}));

(evalorder.lang.values.t_evalorder$lang$values23248.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.values.t_evalorder$lang$values23248.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (_,out_atom,p__23251){
var self__ = this;
var vec__23252 = p__23251;
var pred = cljs.core.nth.call(null,vec__23252,(0),null);
var then = cljs.core.nth.call(null,vec__23252,(1),null);
var else$ = cljs.core.nth.call(null,vec__23252,(2),null);
var args = vec__23252;
var ___$1 = this;
if((!(((((2) <= cljs.core.count.call(null,args))) && ((cljs.core.count.call(null,args) <= (3))))))){
return evalorder.lang.ast.__GT_ErrorExpr.call(null,out_atom,"Expected 2 or 3 arguments to if");
} else {
return cljs.core.assoc.call(null,((cljs.core.boolean$.call(null,evalorder.lang.ast.value.call(null,pred)))?then:(function (){var or__4126__auto__ = else$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return evalorder.lang.ast.__GT_LiteralExpr.call(null,null,evalorder.lang.ast.__GT_NilLiteral.call(null,null));
}
})()),new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),out_atom);
}
}));

(evalorder.lang.values.t_evalorder$lang$values23248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23249","meta23249",143533977,null)], null);
}));

(evalorder.lang.values.t_evalorder$lang$values23248.cljs$lang$type = true);

(evalorder.lang.values.t_evalorder$lang$values23248.cljs$lang$ctorStr = "evalorder.lang.values/t_evalorder$lang$values23248");

(evalorder.lang.values.t_evalorder$lang$values23248.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"evalorder.lang.values/t_evalorder$lang$values23248");
}));

/**
 * Positional factory function for evalorder.lang.values/t_evalorder$lang$values23248.
 */
evalorder.lang.values.__GT_t_evalorder$lang$values23248 = (function evalorder$lang$values$__GT_t_evalorder$lang$values23248(meta23249){
return (new evalorder.lang.values.t_evalorder$lang$values23248(meta23249));
});

}

return (new evalorder.lang.values.t_evalorder$lang$values23248(cljs.core.PersistentArrayMap.EMPTY));
})()
)));
(evalorder.lang.values._STAR_globals_STAR_ = cljs.core.assoc.call(null,evalorder.lang.values._STAR_globals_STAR_,new cljs.core.Symbol(null,"=","=",-1501502141,null),evalorder.lang.values.__GT_Global.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"more","more",-418290273,null)], null)),new cljs.core.Keyword(null,"desc","desc",2093485764),"Returns true if its arguments are equal, false otherwise."], null),(function (){
if((typeof evalorder !== 'undefined') && (typeof evalorder.lang !== 'undefined') && (typeof evalorder.lang.values !== 'undefined') && (typeof evalorder.lang.values.t_evalorder$lang$values23255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {evalorder.lang.ast.Applicable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.lang.values.t_evalorder$lang$values23255 = (function (meta23256){
this.meta23256 = meta23256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.lang.values.t_evalorder$lang$values23255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23257,meta23256__$1){
var self__ = this;
var _23257__$1 = this;
return (new evalorder.lang.values.t_evalorder$lang$values23255(meta23256__$1));
}));

(evalorder.lang.values.t_evalorder$lang$values23255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23257){
var self__ = this;
var _23257__$1 = this;
return self__.meta23256;
}));

(evalorder.lang.values.t_evalorder$lang$values23255.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.values.t_evalorder$lang$values23255.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (__SHARP_,oa__21735__auto__,args__21736__auto__){
var self__ = this;
var __SHARP___$1 = this;
var args = cljs.core.map.call(null,evalorder.lang.ast.value,args__21736__auto__);
var out_atom = oa__21735__auto__;
return evalorder.lang.ast.__GT_LiteralExpr.call(null,out_atom,evalorder.lang.ast.__GT_BoolLiteral.call(null,cljs.core.apply.call(null,cljs.core._EQ_,args)));
}));

(evalorder.lang.values.t_evalorder$lang$values23255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23256","meta23256",544953615,null)], null);
}));

(evalorder.lang.values.t_evalorder$lang$values23255.cljs$lang$type = true);

(evalorder.lang.values.t_evalorder$lang$values23255.cljs$lang$ctorStr = "evalorder.lang.values/t_evalorder$lang$values23255");

(evalorder.lang.values.t_evalorder$lang$values23255.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"evalorder.lang.values/t_evalorder$lang$values23255");
}));

/**
 * Positional factory function for evalorder.lang.values/t_evalorder$lang$values23255.
 */
evalorder.lang.values.__GT_t_evalorder$lang$values23255 = (function evalorder$lang$values$__GT_t_evalorder$lang$values23255(meta23256){
return (new evalorder.lang.values.t_evalorder$lang$values23255(meta23256));
});

}

return (new evalorder.lang.values.t_evalorder$lang$values23255(null));
})()
)));

//# sourceMappingURL=values.js.map?rel=1618749918211
