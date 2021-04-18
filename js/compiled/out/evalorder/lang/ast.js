// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('evalorder.lang.ast');
goog.require('cljs.core');
goog.require('reagent.core');

/**
 * @interface
 */
evalorder.lang.ast.Applicable = function(){};

var evalorder$lang$ast$Applicable$app$dyn_23027 = (function (this$,out_atom,args){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (evalorder.lang.ast.app[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,out_atom,args);
} else {
var m__4426__auto__ = (evalorder.lang.ast.app["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,out_atom,args);
} else {
throw cljs.core.missing_protocol.call(null,"Applicable.app",this$);
}
}
});
evalorder.lang.ast.app = (function evalorder$lang$ast$app(this$,out_atom,args){
if((((!((this$ == null)))) && ((!((this$.evalorder$lang$ast$Applicable$app$arity$3 == null)))))){
return this$.evalorder$lang$ast$Applicable$app$arity$3(this$,out_atom,args);
} else {
return evalorder$lang$ast$Applicable$app$dyn_23027.call(null,this$,out_atom,args);
}
});


/**
 * @interface
 */
evalorder.lang.ast.Expr = function(){};

var evalorder$lang$ast$Expr$render$dyn_23028 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (evalorder.lang.ast.render[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (evalorder.lang.ast.render["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Expr.render",this$);
}
}
});
evalorder.lang.ast.render = (function evalorder$lang$ast$render(this$){
if((((!((this$ == null)))) && ((!((this$.evalorder$lang$ast$Expr$render$arity$1 == null)))))){
return this$.evalorder$lang$ast$Expr$render$arity$1(this$);
} else {
return evalorder$lang$ast$Expr$render$dyn_23028.call(null,this$);
}
});

var evalorder$lang$ast$Expr$evaluated$dyn_23029 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (evalorder.lang.ast.evaluated[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (evalorder.lang.ast.evaluated["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Expr.evaluated",this$);
}
}
});
evalorder.lang.ast.evaluated = (function evalorder$lang$ast$evaluated(this$){
if((((!((this$ == null)))) && ((!((this$.evalorder$lang$ast$Expr$evaluated$arity$1 == null)))))){
return this$.evalorder$lang$ast$Expr$evaluated$arity$1(this$);
} else {
return evalorder$lang$ast$Expr$evaluated$dyn_23029.call(null,this$);
}
});

var evalorder$lang$ast$Expr$value$dyn_23030 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (evalorder.lang.ast.value[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (evalorder.lang.ast.value["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Expr.value",this$);
}
}
});
evalorder.lang.ast.value = (function evalorder$lang$ast$value(this$){
if((((!((this$ == null)))) && ((!((this$.evalorder$lang$ast$Expr$value$arity$1 == null)))))){
return this$.evalorder$lang$ast$Expr$value$arity$1(this$);
} else {
return evalorder$lang$ast$Expr$value$dyn_23030.call(null,this$);
}
});

evalorder.lang.ast.render_child = (function evalorder$lang$ast$render_child(child){
var v = cljs.core.deref.call(null,child);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"selected"], null):(function (){var temp__5724__auto__ = new cljs.core.Keyword(null,"onClick","onClick",-1991238530).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if((temp__5724__auto__ == null)){
return null;
} else {
var on_click = temp__5724__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (event){
on_click.call(null,child);

return event.stopPropagation();
})], null);
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.ast.render,v], null)], null);
});

/**
 * @interface
 */
evalorder.lang.ast.Literal = function(){};

var evalorder$lang$ast$Literal$get_class$dyn_23031 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (evalorder.lang.ast.get_class[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (evalorder.lang.ast.get_class["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Literal.get-class",_);
}
}
});
evalorder.lang.ast.get_class = (function evalorder$lang$ast$get_class(_){
if((((!((_ == null)))) && ((!((_.evalorder$lang$ast$Literal$get_class$arity$1 == null)))))){
return _.evalorder$lang$ast$Literal$get_class$arity$1(_);
} else {
return evalorder$lang$ast$Literal$get_class$dyn_23031.call(null,_);
}
});


/**
 * @interface
 */
evalorder.lang.ast.ToStr = function(){};

var evalorder$lang$ast$ToStr$to_str$dyn_23032 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (evalorder.lang.ast.to_str[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (evalorder.lang.ast.to_str["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ToStr.to-str",_);
}
}
});
evalorder.lang.ast.to_str = (function evalorder$lang$ast$to_str(_){
if((((!((_ == null)))) && ((!((_.evalorder$lang$ast$ToStr$to_str$arity$1 == null)))))){
return _.evalorder$lang$ast$ToStr$to_str$arity$1(_);
} else {
return evalorder$lang$ast$ToStr$to_str$dyn_23032.call(null,_);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {evalorder.lang.ast.Literal}
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
evalorder.lang.ast.NumLiteral = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.ast.NumLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23034,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23038 = k23034;
var G__23038__$1 = (((G__23038 instanceof cljs.core.Keyword))?G__23038.fqn:null);
switch (G__23038__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23034,else__4383__auto__);

}
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23039){
var vec__23040 = p__23039;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23040,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23040,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.ast.NumLiteral.prototype.evalorder$lang$ast$Literal$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.NumLiteral.prototype.evalorder$lang$ast$Literal$get_class$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "number";
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.ast.NumLiteral{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23033){
var self__ = this;
var G__23033__$1 = this;
return (new cljs.core.RecordIter((0),G__23033__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.ast.NumLiteral(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-946733062 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23035,other23036){
var self__ = this;
var this23035__$1 = this;
return (((!((other23036 == null)))) && ((this23035__$1.constructor === other23036.constructor)) && (cljs.core._EQ_.call(null,this23035__$1.value,other23036.value)) && (cljs.core._EQ_.call(null,this23035__$1.__extmap,other23036.__extmap)));
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.ast.NumLiteral(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23033){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23043 = cljs.core.keyword_identical_QMARK_;
var expr__23044 = k__4388__auto__;
if(cljs.core.truth_(pred__23043.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__23044))){
return (new evalorder.lang.ast.NumLiteral(G__23033,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.ast.NumLiteral(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23033),null));
}
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23033){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.ast.NumLiteral(self__.value,G__23033,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.NumLiteral.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.ast.NumLiteral.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(evalorder.lang.ast.NumLiteral.cljs$lang$type = true);

(evalorder.lang.ast.NumLiteral.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.ast/NumLiteral",null,(1),null));
}));

(evalorder.lang.ast.NumLiteral.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.ast/NumLiteral");
}));

/**
 * Positional factory function for evalorder.lang.ast/NumLiteral.
 */
evalorder.lang.ast.__GT_NumLiteral = (function evalorder$lang$ast$__GT_NumLiteral(value){
return (new evalorder.lang.ast.NumLiteral(value,null,null,null));
});

/**
 * Factory function for evalorder.lang.ast/NumLiteral, taking a map of keywords to field values.
 */
evalorder.lang.ast.map__GT_NumLiteral = (function evalorder$lang$ast$map__GT_NumLiteral(G__23037){
var extmap__4419__auto__ = (function (){var G__23046 = cljs.core.dissoc.call(null,G__23037,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__23037)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23046);
} else {
return G__23046;
}
})();
return (new evalorder.lang.ast.NumLiteral(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__23037),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {evalorder.lang.ast.Literal}
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
evalorder.lang.ast.NilLiteral = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.ast.NilLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23049,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23053 = k23049;
var G__23053__$1 = (((G__23053 instanceof cljs.core.Keyword))?G__23053.fqn:null);
switch (G__23053__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23049,else__4383__auto__);

}
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23054){
var vec__23055 = p__23054;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23055,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23055,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.ast.NilLiteral.prototype.evalorder$lang$ast$Literal$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.NilLiteral.prototype.evalorder$lang$ast$Literal$get_class$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "nil";
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.ast.NilLiteral{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23048){
var self__ = this;
var G__23048__$1 = this;
return (new cljs.core.RecordIter((0),G__23048__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.ast.NilLiteral(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-2059148808 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23050,other23051){
var self__ = this;
var this23050__$1 = this;
return (((!((other23051 == null)))) && ((this23050__$1.constructor === other23051.constructor)) && (cljs.core._EQ_.call(null,this23050__$1.value,other23051.value)) && (cljs.core._EQ_.call(null,this23050__$1.__extmap,other23051.__extmap)));
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.ast.NilLiteral(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23048){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23058 = cljs.core.keyword_identical_QMARK_;
var expr__23059 = k__4388__auto__;
if(cljs.core.truth_(pred__23058.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__23059))){
return (new evalorder.lang.ast.NilLiteral(G__23048,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.ast.NilLiteral(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23048),null));
}
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23048){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.ast.NilLiteral(self__.value,G__23048,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.NilLiteral.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.ast.NilLiteral.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(evalorder.lang.ast.NilLiteral.cljs$lang$type = true);

(evalorder.lang.ast.NilLiteral.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.ast/NilLiteral",null,(1),null));
}));

(evalorder.lang.ast.NilLiteral.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.ast/NilLiteral");
}));

/**
 * Positional factory function for evalorder.lang.ast/NilLiteral.
 */
evalorder.lang.ast.__GT_NilLiteral = (function evalorder$lang$ast$__GT_NilLiteral(value){
return (new evalorder.lang.ast.NilLiteral(value,null,null,null));
});

/**
 * Factory function for evalorder.lang.ast/NilLiteral, taking a map of keywords to field values.
 */
evalorder.lang.ast.map__GT_NilLiteral = (function evalorder$lang$ast$map__GT_NilLiteral(G__23052){
var extmap__4419__auto__ = (function (){var G__23061 = cljs.core.dissoc.call(null,G__23052,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__23052)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23061);
} else {
return G__23061;
}
})();
return (new evalorder.lang.ast.NilLiteral(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__23052),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {evalorder.lang.ast.Literal}
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
evalorder.lang.ast.BoolLiteral = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23064,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23068 = k23064;
var G__23068__$1 = (((G__23068 instanceof cljs.core.Keyword))?G__23068.fqn:null);
switch (G__23068__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23064,else__4383__auto__);

}
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23069){
var vec__23070 = p__23069;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23070,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23070,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.ast.BoolLiteral.prototype.evalorder$lang$ast$Literal$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.BoolLiteral.prototype.evalorder$lang$ast$Literal$get_class$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "bool";
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.ast.BoolLiteral{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23063){
var self__ = this;
var G__23063__$1 = this;
return (new cljs.core.RecordIter((0),G__23063__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.ast.BoolLiteral(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (818987752 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23065,other23066){
var self__ = this;
var this23065__$1 = this;
return (((!((other23066 == null)))) && ((this23065__$1.constructor === other23066.constructor)) && (cljs.core._EQ_.call(null,this23065__$1.value,other23066.value)) && (cljs.core._EQ_.call(null,this23065__$1.__extmap,other23066.__extmap)));
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.ast.BoolLiteral(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23063){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23073 = cljs.core.keyword_identical_QMARK_;
var expr__23074 = k__4388__auto__;
if(cljs.core.truth_(pred__23073.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__23074))){
return (new evalorder.lang.ast.BoolLiteral(G__23063,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.ast.BoolLiteral(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23063),null));
}
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23063){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.ast.BoolLiteral(self__.value,G__23063,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.BoolLiteral.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.ast.BoolLiteral.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(evalorder.lang.ast.BoolLiteral.cljs$lang$type = true);

(evalorder.lang.ast.BoolLiteral.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.ast/BoolLiteral",null,(1),null));
}));

(evalorder.lang.ast.BoolLiteral.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.ast/BoolLiteral");
}));

/**
 * Positional factory function for evalorder.lang.ast/BoolLiteral.
 */
evalorder.lang.ast.__GT_BoolLiteral = (function evalorder$lang$ast$__GT_BoolLiteral(value){
return (new evalorder.lang.ast.BoolLiteral(value,null,null,null));
});

/**
 * Factory function for evalorder.lang.ast/BoolLiteral, taking a map of keywords to field values.
 */
evalorder.lang.ast.map__GT_BoolLiteral = (function evalorder$lang$ast$map__GT_BoolLiteral(G__23067){
var extmap__4419__auto__ = (function (){var G__23076 = cljs.core.dissoc.call(null,G__23067,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__23067)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23076);
} else {
return G__23076;
}
})();
return (new evalorder.lang.ast.BoolLiteral(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__23067),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {evalorder.lang.ast.Literal}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {evalorder.lang.ast.ToStr}
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
evalorder.lang.ast.ValueLiteral = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23079,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23083 = k23079;
var G__23083__$1 = (((G__23083 instanceof cljs.core.Keyword))?G__23083.fqn:null);
switch (G__23083__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23079,else__4383__auto__);

}
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23084){
var vec__23085 = p__23084;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23085,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23085,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.ast.ValueLiteral.prototype.evalorder$lang$ast$Literal$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.ValueLiteral.prototype.evalorder$lang$ast$Literal$get_class$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "value";
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.ast.ValueLiteral{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23078){
var self__ = this;
var G__23078__$1 = this;
return (new cljs.core.RecordIter((0),G__23078__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.ast.ValueLiteral(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2017245670 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23080,other23081){
var self__ = this;
var this23080__$1 = this;
return (((!((other23081 == null)))) && ((this23080__$1.constructor === other23081.constructor)) && (cljs.core._EQ_.call(null,this23080__$1.value,other23081.value)) && (cljs.core._EQ_.call(null,this23080__$1.__extmap,other23081.__extmap)));
}));

(evalorder.lang.ast.ValueLiteral.prototype.evalorder$lang$ast$ToStr$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.ValueLiteral.prototype.evalorder$lang$ast$ToStr$to_str$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return "?";
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.ast.ValueLiteral(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23078){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23088 = cljs.core.keyword_identical_QMARK_;
var expr__23089 = k__4388__auto__;
if(cljs.core.truth_(pred__23088.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__23089))){
return (new evalorder.lang.ast.ValueLiteral(G__23078,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.ast.ValueLiteral(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23078),null));
}
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23078){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.ast.ValueLiteral(self__.value,G__23078,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.ValueLiteral.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.ast.ValueLiteral.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(evalorder.lang.ast.ValueLiteral.cljs$lang$type = true);

(evalorder.lang.ast.ValueLiteral.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.ast/ValueLiteral",null,(1),null));
}));

(evalorder.lang.ast.ValueLiteral.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.ast/ValueLiteral");
}));

/**
 * Positional factory function for evalorder.lang.ast/ValueLiteral.
 */
evalorder.lang.ast.__GT_ValueLiteral = (function evalorder$lang$ast$__GT_ValueLiteral(value){
return (new evalorder.lang.ast.ValueLiteral(value,null,null,null));
});

/**
 * Factory function for evalorder.lang.ast/ValueLiteral, taking a map of keywords to field values.
 */
evalorder.lang.ast.map__GT_ValueLiteral = (function evalorder$lang$ast$map__GT_ValueLiteral(G__23082){
var extmap__4419__auto__ = (function (){var G__23091 = cljs.core.dissoc.call(null,G__23082,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__23082)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23091);
} else {
return G__23091;
}
})();
return (new evalorder.lang.ast.ValueLiteral(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__23082),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {evalorder.lang.ast.Expr}
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
evalorder.lang.ast.ErrorExpr = (function (this_atom,message,__meta,__extmap,__hash){
this.this_atom = this_atom;
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.ast.ErrorExpr.prototype.evalorder$lang$ast$Expr$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.ErrorExpr.prototype.evalorder$lang$ast$Expr$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"error"], null),"#!",cljs.core.pr_str.call(null,self__.message)], null);
}));

(evalorder.lang.ast.ErrorExpr.prototype.evalorder$lang$ast$Expr$evaluated$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(evalorder.lang.ast.ErrorExpr.prototype.evalorder$lang$ast$Expr$value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23094,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23098 = k23094;
var G__23098__$1 = (((G__23098 instanceof cljs.core.Keyword))?G__23098.fqn:null);
switch (G__23098__$1) {
case "this-atom":
return self__.this_atom;

break;
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23094,else__4383__auto__);

}
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23099){
var vec__23100 = p__23099;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23100,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23100,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.ast.ErrorExpr{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23093){
var self__ = this;
var G__23093__$1 = this;
return (new cljs.core.RecordIter((0),G__23093__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.ast.ErrorExpr(self__.this_atom,self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-685273481 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23095,other23096){
var self__ = this;
var this23095__$1 = this;
return (((!((other23096 == null)))) && ((this23095__$1.constructor === other23096.constructor)) && (cljs.core._EQ_.call(null,this23095__$1.this_atom,other23096.this_atom)) && (cljs.core._EQ_.call(null,this23095__$1.message,other23096.message)) && (cljs.core._EQ_.call(null,this23095__$1.__extmap,other23096.__extmap)));
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.ast.ErrorExpr(self__.this_atom,self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23093){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23103 = cljs.core.keyword_identical_QMARK_;
var expr__23104 = k__4388__auto__;
if(cljs.core.truth_(pred__23103.call(null,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),expr__23104))){
return (new evalorder.lang.ast.ErrorExpr(G__23093,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23103.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__23104))){
return (new evalorder.lang.ast.ErrorExpr(self__.this_atom,G__23093,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.ast.ErrorExpr(self__.this_atom,self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23093),null));
}
}
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23093){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.ast.ErrorExpr(self__.this_atom,self__.message,G__23093,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.ErrorExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.ast.ErrorExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this-atom","this-atom",1182060568,null),new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(evalorder.lang.ast.ErrorExpr.cljs$lang$type = true);

(evalorder.lang.ast.ErrorExpr.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.ast/ErrorExpr",null,(1),null));
}));

(evalorder.lang.ast.ErrorExpr.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.ast/ErrorExpr");
}));

/**
 * Positional factory function for evalorder.lang.ast/ErrorExpr.
 */
evalorder.lang.ast.__GT_ErrorExpr = (function evalorder$lang$ast$__GT_ErrorExpr(this_atom,message){
return (new evalorder.lang.ast.ErrorExpr(this_atom,message,null,null,null));
});

/**
 * Factory function for evalorder.lang.ast/ErrorExpr, taking a map of keywords to field values.
 */
evalorder.lang.ast.map__GT_ErrorExpr = (function evalorder$lang$ast$map__GT_ErrorExpr(G__23097){
var extmap__4419__auto__ = (function (){var G__23106 = cljs.core.dissoc.call(null,G__23097,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.record_QMARK_.call(null,G__23097)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23106);
} else {
return G__23106;
}
})();
return (new evalorder.lang.ast.ErrorExpr(new cljs.core.Keyword(null,"this-atom","this-atom",-458470959).cljs$core$IFn$_invoke$arity$1(G__23097),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__23097),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {evalorder.lang.ast.Expr}
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
evalorder.lang.ast.LiteralExpr = (function (this_atom,literal,__meta,__extmap,__hash){
this.this_atom = this_atom;
this.literal = literal;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.ast.LiteralExpr.prototype.evalorder$lang$ast$Expr$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.LiteralExpr.prototype.evalorder$lang$ast$Expr$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),evalorder.lang.ast.get_class.call(null,self__.literal)], null),(((((!((self__.literal == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === self__.literal.evalorder$lang$ast$ToStr$))))?true:(((!self__.literal.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,evalorder.lang.ast.ToStr,self__.literal):false)):cljs.core.native_satisfies_QMARK_.call(null,evalorder.lang.ast.ToStr,self__.literal)))?evalorder.lang.ast.to_str.call(null,self__.literal):cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.literal)))], null);
}));

(evalorder.lang.ast.LiteralExpr.prototype.evalorder$lang$ast$Expr$evaluated$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(evalorder.lang.ast.LiteralExpr.prototype.evalorder$lang$ast$Expr$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.literal);
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23109,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23114 = k23109;
var G__23114__$1 = (((G__23114 instanceof cljs.core.Keyword))?G__23114.fqn:null);
switch (G__23114__$1) {
case "this-atom":
return self__.this_atom;

break;
case "literal":
return self__.literal;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23109,else__4383__auto__);

}
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23115){
var vec__23116 = p__23115;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23116,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23116,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.ast.LiteralExpr{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"literal","literal",1664775605),self__.literal],null))], null),self__.__extmap));
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23108){
var self__ = this;
var G__23108__$1 = this;
return (new cljs.core.RecordIter((0),G__23108__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),new cljs.core.Keyword(null,"literal","literal",1664775605)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.ast.LiteralExpr(self__.this_atom,self__.literal,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-2069514630 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23110,other23111){
var self__ = this;
var this23110__$1 = this;
return (((!((other23111 == null)))) && ((this23110__$1.constructor === other23111.constructor)) && (cljs.core._EQ_.call(null,this23110__$1.this_atom,other23111.this_atom)) && (cljs.core._EQ_.call(null,this23110__$1.literal,other23111.literal)) && (cljs.core._EQ_.call(null,this23110__$1.__extmap,other23111.__extmap)));
}));

(evalorder.lang.ast.LiteralExpr.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.LiteralExpr.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (_,out_atom,args){
var self__ = this;
var ___$1 = this;
return evalorder.lang.ast.app.call(null,out_atom,self__.literal,args);
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),null,new cljs.core.Keyword(null,"literal","literal",1664775605),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.ast.LiteralExpr(self__.this_atom,self__.literal,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23108){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23119 = cljs.core.keyword_identical_QMARK_;
var expr__23120 = k__4388__auto__;
if(cljs.core.truth_(pred__23119.call(null,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),expr__23120))){
return (new evalorder.lang.ast.LiteralExpr(G__23108,self__.literal,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23119.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605),expr__23120))){
return (new evalorder.lang.ast.LiteralExpr(self__.this_atom,G__23108,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.ast.LiteralExpr(self__.this_atom,self__.literal,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23108),null));
}
}
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"literal","literal",1664775605),self__.literal,null))], null),self__.__extmap));
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23108){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.ast.LiteralExpr(self__.this_atom,self__.literal,G__23108,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.LiteralExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.ast.LiteralExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this-atom","this-atom",1182060568,null),new cljs.core.Symbol(null,"literal","literal",-989660164,null)], null);
}));

(evalorder.lang.ast.LiteralExpr.cljs$lang$type = true);

(evalorder.lang.ast.LiteralExpr.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.ast/LiteralExpr",null,(1),null));
}));

(evalorder.lang.ast.LiteralExpr.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.ast/LiteralExpr");
}));

/**
 * Positional factory function for evalorder.lang.ast/LiteralExpr.
 */
evalorder.lang.ast.__GT_LiteralExpr = (function evalorder$lang$ast$__GT_LiteralExpr(this_atom,literal){
return (new evalorder.lang.ast.LiteralExpr(this_atom,literal,null,null,null));
});

/**
 * Factory function for evalorder.lang.ast/LiteralExpr, taking a map of keywords to field values.
 */
evalorder.lang.ast.map__GT_LiteralExpr = (function evalorder$lang$ast$map__GT_LiteralExpr(G__23112){
var extmap__4419__auto__ = (function (){var G__23122 = cljs.core.dissoc.call(null,G__23112,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),new cljs.core.Keyword(null,"literal","literal",1664775605));
if(cljs.core.record_QMARK_.call(null,G__23112)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23122);
} else {
return G__23122;
}
})();
return (new evalorder.lang.ast.LiteralExpr(new cljs.core.Keyword(null,"this-atom","this-atom",-458470959).cljs$core$IFn$_invoke$arity$1(G__23112),new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(G__23112),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

evalorder.lang.ast.delim = (function evalorder$lang$ast$delim(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"delimiter"], null),v], null);
});
evalorder.lang.ast._STAR_env_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {evalorder.lang.ast.Expr}
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
evalorder.lang.ast.SymExpr = (function (this_atom,sym,__meta,__extmap,__hash){
this.this_atom = this_atom;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.ast.SymExpr.prototype.evalorder$lang$ast$Expr$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.SymExpr.prototype.evalorder$lang$ast$Expr$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"symbol"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.sym)], null);
}));

(evalorder.lang.ast.SymExpr.prototype.evalorder$lang$ast$Expr$evaluated$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__23129 = cljs.core.find.call(null,evalorder.lang.ast._STAR_env_STAR_,self__.sym);
var _ = cljs.core.nth.call(null,vec__23129,(0),null);
var map__23132 = cljs.core.nth.call(null,vec__23129,(1),null);
var map__23132__$1 = (((((!((map__23132 == null))))?(((((map__23132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23132):map__23132);
var value = cljs.core.get.call(null,map__23132__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__4115__auto__ = value;
if(cljs.core.truth_(and__4115__auto__)){
if((!((value == null)))){
if((((value.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IDeref$)))){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom);
} else {
return this$__$1;
}
}));

(evalorder.lang.ast.SymExpr.prototype.evalorder$lang$ast$Expr$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.sym;
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23125,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23135 = k23125;
var G__23135__$1 = (((G__23135 instanceof cljs.core.Keyword))?G__23135.fqn:null);
switch (G__23135__$1) {
case "this-atom":
return self__.this_atom;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23125,else__4383__auto__);

}
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23136){
var vec__23137 = p__23136;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23137,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23137,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.ast.SymExpr{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23124){
var self__ = this;
var G__23124__$1 = this;
return (new cljs.core.RecordIter((0),G__23124__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.ast.SymExpr(self__.this_atom,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (431750569 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23126,other23127){
var self__ = this;
var this23126__$1 = this;
return (((!((other23127 == null)))) && ((this23126__$1.constructor === other23127.constructor)) && (cljs.core._EQ_.call(null,this23126__$1.this_atom,other23127.this_atom)) && (cljs.core._EQ_.call(null,this23126__$1.sym,other23127.sym)) && (cljs.core._EQ_.call(null,this23126__$1.__extmap,other23127.__extmap)));
}));

(evalorder.lang.ast.SymExpr.prototype.evalorder$lang$ast$Applicable$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.SymExpr.prototype.evalorder$lang$ast$Applicable$app$arity$3 = (function (_,out_atom,args){
var self__ = this;
var ___$1 = this;
var temp__5722__auto__ = cljs.core.find.call(null,evalorder.lang.ast._STAR_env_STAR_,self__.sym);
if((temp__5722__auto__ == null)){
return evalorder.lang.ast.__GT_ErrorExpr.call(null,out_atom,"Undefined");
} else {
var vec__23140 = temp__5722__auto__;
var ___$2 = cljs.core.nth.call(null,vec__23140,(0),null);
var v = cljs.core.nth.call(null,vec__23140,(1),null);
return evalorder.lang.ast.app.call(null,v,out_atom,args);
}
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.ast.SymExpr(self__.this_atom,self__.sym,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23124){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23143 = cljs.core.keyword_identical_QMARK_;
var expr__23144 = k__4388__auto__;
if(cljs.core.truth_(pred__23143.call(null,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),expr__23144))){
return (new evalorder.lang.ast.SymExpr(G__23124,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23143.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__23144))){
return (new evalorder.lang.ast.SymExpr(self__.this_atom,G__23124,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.ast.SymExpr(self__.this_atom,self__.sym,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23124),null));
}
}
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23124){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.ast.SymExpr(self__.this_atom,self__.sym,G__23124,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.SymExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.ast.SymExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this-atom","this-atom",1182060568,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(evalorder.lang.ast.SymExpr.cljs$lang$type = true);

(evalorder.lang.ast.SymExpr.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.ast/SymExpr",null,(1),null));
}));

(evalorder.lang.ast.SymExpr.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.ast/SymExpr");
}));

/**
 * Positional factory function for evalorder.lang.ast/SymExpr.
 */
evalorder.lang.ast.__GT_SymExpr = (function evalorder$lang$ast$__GT_SymExpr(this_atom,sym){
return (new evalorder.lang.ast.SymExpr(this_atom,sym,null,null,null));
});

/**
 * Factory function for evalorder.lang.ast/SymExpr, taking a map of keywords to field values.
 */
evalorder.lang.ast.map__GT_SymExpr = (function evalorder$lang$ast$map__GT_SymExpr(G__23128){
var extmap__4419__auto__ = (function (){var G__23146 = cljs.core.dissoc.call(null,G__23128,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),new cljs.core.Keyword(null,"sym","sym",-1444860305));
if(cljs.core.record_QMARK_.call(null,G__23128)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23146);
} else {
return G__23146;
}
})();
return (new evalorder.lang.ast.SymExpr(new cljs.core.Keyword(null,"this-atom","this-atom",-458470959).cljs$core$IFn$_invoke$arity$1(G__23128),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__23128),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {evalorder.lang.ast.Expr}
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
evalorder.lang.ast.ListExpr = (function (this_atom,children,__meta,__extmap,__hash){
this.this_atom = this_atom;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(evalorder.lang.ast.ListExpr.prototype.evalorder$lang$ast$Expr$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.lang.ast.ListExpr.prototype.evalorder$lang$ast$Expr$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"span","span",1394872991),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"class","class",-2030961996),null,(1),null)),(new cljs.core.List(null,"list",null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,evalorder.lang.ast.delim,null,(1),null)),(new cljs.core.List(null,"(",null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,evalorder.lang.ast.render_child,self__.children),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,evalorder.lang.ast.delim,null,(1),null)),(new cljs.core.List(null,")",null,(1),null)))))),null,(1),null))))));
}));

(evalorder.lang.ast.ListExpr.prototype.evalorder$lang$ast$Expr$evaluated$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return evalorder.lang.ast.app.call(null,cljs.core.deref.call(null,cljs.core.first.call(null,self__.children)),self__.this_atom,cljs.core.map.call(null,cljs.core.deref,cljs.core.next.call(null,self__.children)));
}));

(evalorder.lang.ast.ListExpr.prototype.evalorder$lang$ast$Expr$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.map.call(null,cljs.core.comp.call(null,evalorder.lang.ast.value,cljs.core.deref),self__.children);
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23149,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23153 = k23149;
var G__23153__$1 = (((G__23153 instanceof cljs.core.Keyword))?G__23153.fqn:null);
switch (G__23153__$1) {
case "this-atom":
return self__.this_atom;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23149,else__4383__auto__);

}
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23154){
var vec__23155 = p__23154;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23155,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23155,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#evalorder.lang.ast.ListExpr{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23148){
var self__ = this;
var G__23148__$1 = this;
return (new cljs.core.RecordIter((0),G__23148__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new evalorder.lang.ast.ListExpr(self__.this_atom,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-373091302 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23150,other23151){
var self__ = this;
var this23150__$1 = this;
return (((!((other23151 == null)))) && ((this23150__$1.constructor === other23151.constructor)) && (cljs.core._EQ_.call(null,this23150__$1.this_atom,other23151.this_atom)) && (cljs.core._EQ_.call(null,this23150__$1.children,other23151.children)) && (cljs.core._EQ_.call(null,this23150__$1.__extmap,other23151.__extmap)));
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new evalorder.lang.ast.ListExpr(self__.this_atom,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23148){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23158 = cljs.core.keyword_identical_QMARK_;
var expr__23159 = k__4388__auto__;
if(cljs.core.truth_(pred__23158.call(null,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),expr__23159))){
return (new evalorder.lang.ast.ListExpr(G__23148,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23158.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__23159))){
return (new evalorder.lang.ast.ListExpr(self__.this_atom,G__23148,self__.__meta,self__.__extmap,null));
} else {
return (new evalorder.lang.ast.ListExpr(self__.this_atom,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23148),null));
}
}
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),self__.this_atom,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23148){
var self__ = this;
var this__4379__auto____$1 = this;
return (new evalorder.lang.ast.ListExpr(self__.this_atom,self__.children,G__23148,self__.__extmap,self__.__hash));
}));

(evalorder.lang.ast.ListExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(evalorder.lang.ast.ListExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this-atom","this-atom",1182060568,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(evalorder.lang.ast.ListExpr.cljs$lang$type = true);

(evalorder.lang.ast.ListExpr.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"evalorder.lang.ast/ListExpr",null,(1),null));
}));

(evalorder.lang.ast.ListExpr.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"evalorder.lang.ast/ListExpr");
}));

/**
 * Positional factory function for evalorder.lang.ast/ListExpr.
 */
evalorder.lang.ast.__GT_ListExpr = (function evalorder$lang$ast$__GT_ListExpr(this_atom,children){
return (new evalorder.lang.ast.ListExpr(this_atom,children,null,null,null));
});

/**
 * Factory function for evalorder.lang.ast/ListExpr, taking a map of keywords to field values.
 */
evalorder.lang.ast.map__GT_ListExpr = (function evalorder$lang$ast$map__GT_ListExpr(G__23152){
var extmap__4419__auto__ = (function (){var G__23161 = cljs.core.dissoc.call(null,G__23152,new cljs.core.Keyword(null,"this-atom","this-atom",-458470959),new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_.call(null,G__23152)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23161);
} else {
return G__23161;
}
})();
return (new evalorder.lang.ast.ListExpr(new cljs.core.Keyword(null,"this-atom","this-atom",-458470959).cljs$core$IFn$_invoke$arity$1(G__23152),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__23152),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

goog.object.set(evalorder.lang.ast.Applicable,"_",true);

goog.object.set(evalorder.lang.ast.app,"_",(function (_,out_atom,_args){
return evalorder.lang.ast.__GT_ErrorExpr.call(null,out_atom,"Cannot be applied");
}));
evalorder.lang.ast.assoc_neighbours = (function evalorder$lang$ast$assoc_neighbours(els){
var seq__23163_23179 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),(1),els));
var chunk__23164_23180 = null;
var count__23165_23181 = (0);
var i__23166_23182 = (0);
while(true){
if((i__23166_23182 < count__23165_23181)){
var vec__23173_23183 = cljs.core._nth.call(null,chunk__23164_23180,i__23166_23182);
var lhs_23184 = cljs.core.nth.call(null,vec__23173_23183,(0),null);
var rhs_23185 = cljs.core.nth.call(null,vec__23173_23183,(1),null);
cljs.core.swap_BANG_.call(null,lhs_23184,cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword(null,"rhs","rhs",-229356739),rhs_23185);

cljs.core.swap_BANG_.call(null,rhs_23185,cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword(null,"lhs","lhs",1172082094),lhs_23184);


var G__23186 = seq__23163_23179;
var G__23187 = chunk__23164_23180;
var G__23188 = count__23165_23181;
var G__23189 = (i__23166_23182 + (1));
seq__23163_23179 = G__23186;
chunk__23164_23180 = G__23187;
count__23165_23181 = G__23188;
i__23166_23182 = G__23189;
continue;
} else {
var temp__5720__auto___23190 = cljs.core.seq.call(null,seq__23163_23179);
if(temp__5720__auto___23190){
var seq__23163_23191__$1 = temp__5720__auto___23190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23163_23191__$1)){
var c__4556__auto___23192 = cljs.core.chunk_first.call(null,seq__23163_23191__$1);
var G__23193 = cljs.core.chunk_rest.call(null,seq__23163_23191__$1);
var G__23194 = c__4556__auto___23192;
var G__23195 = cljs.core.count.call(null,c__4556__auto___23192);
var G__23196 = (0);
seq__23163_23179 = G__23193;
chunk__23164_23180 = G__23194;
count__23165_23181 = G__23195;
i__23166_23182 = G__23196;
continue;
} else {
var vec__23176_23197 = cljs.core.first.call(null,seq__23163_23191__$1);
var lhs_23198 = cljs.core.nth.call(null,vec__23176_23197,(0),null);
var rhs_23199 = cljs.core.nth.call(null,vec__23176_23197,(1),null);
cljs.core.swap_BANG_.call(null,lhs_23198,cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword(null,"rhs","rhs",-229356739),rhs_23199);

cljs.core.swap_BANG_.call(null,rhs_23199,cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword(null,"lhs","lhs",1172082094),lhs_23198);


var G__23200 = cljs.core.next.call(null,seq__23163_23191__$1);
var G__23201 = null;
var G__23202 = (0);
var G__23203 = (0);
seq__23163_23179 = G__23200;
chunk__23164_23180 = G__23201;
count__23165_23181 = G__23202;
i__23166_23182 = G__23203;
continue;
}
} else {
}
}
break;
}

return els;
});
evalorder.lang.ast.parse = (function evalorder$lang$ast$parse(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23216 = arguments.length;
var i__4737__auto___23217 = (0);
while(true){
if((i__4737__auto___23217 < len__4736__auto___23216)){
args__4742__auto__.push((arguments[i__4737__auto___23217]));

var G__23218 = (i__4737__auto___23217 + (1));
i__4737__auto___23217 = G__23218;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return evalorder.lang.ast.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(evalorder.lang.ast.parse.cljs$core$IFn$_invoke$arity$variadic = (function (expr,p__23209){
var vec__23210 = p__23209;
var extra_meta = cljs.core.nth.call(null,vec__23210,(0),null);
var ta = reagent.core.atom.call(null,null);
cljs.core.reset_BANG_.call(null,ta,cljs.core.vary_meta.call(null,(function (){var pred__23213 = (function (p1__23204_SHARP_,p2__23205_SHARP_){
return p1__23204_SHARP_.call(null,p2__23205_SHARP_);
});
var expr__23214 = expr;
if(cljs.core.truth_(pred__23213.call(null,cljs.core.seq_QMARK_,expr__23214))){
return evalorder.lang.ast.__GT_ListExpr.call(null,ta,evalorder.lang.ast.assoc_neighbours.call(null,cljs.core.map.call(null,(function (p1__23206_SHARP_){
return evalorder.lang.ast.parse.call(null,p1__23206_SHARP_,cljs.core.assoc.call(null,extra_meta,new cljs.core.Keyword(null,"parent","parent",-878878779),ta));
}),expr)));
} else {
if(cljs.core.truth_(pred__23213.call(null,cljs.core.symbol_QMARK_,expr__23214))){
return evalorder.lang.ast.__GT_SymExpr.call(null,ta,expr);
} else {
if(cljs.core.truth_(pred__23213.call(null,cljs.core.number_QMARK_,expr__23214))){
return evalorder.lang.ast.__GT_LiteralExpr.call(null,ta,evalorder.lang.ast.__GT_NumLiteral.call(null,expr));
} else {
if(cljs.core.truth_(pred__23213.call(null,cljs.core.boolean_QMARK_,expr__23214))){
return evalorder.lang.ast.__GT_LiteralExpr.call(null,ta,evalorder.lang.ast.__GT_BoolLiteral.call(null,expr));
} else {
if(cljs.core.truth_(pred__23213.call(null,cljs.core.nil_QMARK_,expr__23214))){
return evalorder.lang.ast.__GT_LiteralExpr.call(null,ta,evalorder.lang.ast.__GT_NilLiteral.call(null,expr));
} else {
return evalorder.lang.ast.__GT_LiteralExpr.call(null,ta,evalorder.lang.ast.__GT_ValueLiteral.call(null,expr));
}
}
}
}
}
})(),cljs.core.merge,extra_meta));

return ta;
}));

(evalorder.lang.ast.parse.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(evalorder.lang.ast.parse.cljs$lang$applyTo = (function (seq23207){
var G__23208 = cljs.core.first.call(null,seq23207);
var seq23207__$1 = cljs.core.next.call(null,seq23207);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23208,seq23207__$1);
}));


//# sourceMappingURL=ast.js.map?rel=1618749918079
