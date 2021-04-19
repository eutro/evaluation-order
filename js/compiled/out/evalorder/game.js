// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.game');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.spec.alpha');
goog.require('evalorder.screen');
goog.require('evalorder.util');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"recursive","recursive",718885872),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"recursive","recursive",718885872),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursive","recursive",718885872),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27298){
return cljs.core.coll_QMARK_.call(null,G__27298);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY)], null),null),cljs.core.number_QMARK_,cljs.core.symbol_QMARK_], null),null),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null)),cljs.core.second,null,true)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","definitions","evalorder.game/definitions",940462640),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27299){
return cljs.core.set_QMARK_.call(null,G__27299);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.game","level","evalorder.game/level",-84577858),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835),new cljs.core.Keyword("evalorder.game","definitions","evalorder.game/definitions",940462640)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835),new cljs.core.Keyword("evalorder.game","definitions","evalorder.game/definitions",940462640)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27300){
return cljs.core.map_QMARK_.call(null,G__27300);
}),(function (G__27300){
return cljs.core.contains_QMARK_.call(null,G__27300,new cljs.core.Keyword(null,"expression","expression",202311876));
}),(function (G__27300){
return cljs.core.contains_QMARK_.call(null,G__27300,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__27300){
return cljs.core.contains_QMARK_.call(null,G__27300,new cljs.core.Keyword(null,"definitions","definitions",167529986));
})], null),(function (G__27300){
return ((cljs.core.map_QMARK_.call(null,G__27300)) && (cljs.core.contains_QMARK_.call(null,G__27300,new cljs.core.Keyword(null,"expression","expression",202311876))) && (cljs.core.contains_QMARK_.call(null,G__27300,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_.call(null,G__27300,new cljs.core.Keyword(null,"definitions","definitions",167529986))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.game","expression","evalorder.game/expression",-33749742),new cljs.core.Keyword("evalorder.game","target","evalorder.game/target",16417835),new cljs.core.Keyword("evalorder.game","definitions","evalorder.game/definitions",940462640)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"definitions","definitions",167529986)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"expression","expression",202311876))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"definitions","definitions",167529986)))], null),null])));
evalorder.game.validate = (function evalorder$game$validate(level){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("evalorder.game","level","evalorder.game/level",-84577858),level);
if(cljs.spec.alpha.invalid_QMARK_.call(null,conformed)){
throw (new Error(["Invalid expr:\n",cljs.spec.alpha.explain_str.call(null,new cljs.core.Keyword("evalorder.game","level","evalorder.game/level",-84577858),level)].join('')));
} else {
}

return conformed;
});
evalorder.game.delim = (function evalorder$game$delim(v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"delimiter"], null),v], null);
});
evalorder.game.expr = (function evalorder$game$expr(value,path){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__4149__auto__ = path;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.empty_QMARK_.call(null,path);
} else {
return and__4149__auto__;
}
})())?"selected expr":"expr")], null),((cljs.core.vector_QMARK_.call(null,value))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.delim,"("], null),(function (){var iter__4564__auto__ = (function evalorder$game$expr_$_iter__27301(s__27302){
return (new cljs.core.LazySeq(null,(function (){
var s__27302__$1 = s__27302;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__27302__$1);
if(temp__5720__auto__){
var s__27302__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27302__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__27302__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__27304 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__27303 = (0);
while(true){
if((i__27303 < size__4563__auto__)){
var vec__27305 = cljs.core._nth.call(null,c__4562__auto__,i__27303);
var i = cljs.core.nth.call(null,vec__27305,(0),null);
var el = cljs.core.nth.call(null,vec__27305,(1),null);
cljs.core.chunk_append.call(null,b__27304,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr,el,((cljs.core._EQ_.call(null,i,cljs.core.first.call(null,path)))?cljs.core.rest.call(null,path):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__27311 = (i__27303 + (1));
i__27303 = G__27311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27304),evalorder$game$expr_$_iter__27301.call(null,cljs.core.chunk_rest.call(null,s__27302__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27304),null);
}
} else {
var vec__27308 = cljs.core.first.call(null,s__27302__$2);
var i = cljs.core.nth.call(null,vec__27308,(0),null);
var el = cljs.core.nth.call(null,vec__27308,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr,el,((cljs.core._EQ_.call(null,i,cljs.core.first.call(null,path)))?cljs.core.rest.call(null,path):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),evalorder$game$expr_$_iter__27301.call(null,cljs.core.rest.call(null,s__27302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,evalorder.util.enumerate.call(null,value));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.delim,")"], null)], null):((typeof value === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"number"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):(((value instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"symbol"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null):null)))], null);
});
evalorder.game.evaluate = (function evalorder$game$evaluate(value){
return value;
});
evalorder.game.evaluate_in = (function evalorder$game$evaluate_in(value,path){
if(cljs.core.seq.call(null,path)){
return cljs.core.update_in.call(null,value,path,evalorder.game.evaluate);
} else {
return value;
}
});
evalorder.game.root = (function evalorder$game$root(p__27312,next_BANG_){
var map__27313 = p__27312;
var map__27313__$1 = cljs.core.__destructure_map.call(null,map__27313);
var expression = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"expression","expression",202311876));
var target = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"target","target",253001721));
var definitions = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"definitions","definitions",167529986));
var expr_atom = reagent.core.atom.call(null,expression);
var path_atom = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var history = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var validate_path = (function (path){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("evalorder.game","not-found","evalorder.game/not-found",-839713790),cljs.core.get_in.call(null,cljs.core.deref.call(null,expr_atom),path,new cljs.core.Keyword("evalorder.game","not-found","evalorder.game/not-found",-839713790)))){
return path;
} else {
return false;
}
});
return (function (){
var e = cljs.core.deref.call(null,expr_atom);
var p = cljs.core.deref.call(null,path_atom);
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.seq.call(null,cljs.core.deref.call(null,history));
if(and__4149__auto__){
return target.call(null,e);
} else {
return and__4149__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,path_atom,null);

next_BANG_.call(null);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"code",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (event){
if(cljs.core.truth_(event.ctrlKey)){
return null;
} else {
var key = event.key;
var G__27314 = key;
switch (G__27314) {
case "ArrowUp":
var G__27315 = cljs.core.subvec.call(null,p,(0),(cljs.core.count.call(null,p) - (1)));
var G__27315__$1 = (((G__27315 == null))?null:validate_path.call(null,G__27315));
if((G__27315__$1 == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,path_atom,G__27315__$1);
}

break;
case "ArrowDown":
var G__27316 = cljs.core.conj.call(null,p,(0));
var G__27316__$1 = (((G__27316 == null))?null:validate_path.call(null,G__27316));
if((G__27316__$1 == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,path_atom,G__27316__$1);
}

break;
case "ArrowLeft":
var G__27317 = cljs.core.update.call(null,p,(cljs.core.count.call(null,p) - (1)),cljs.core.dec);
var G__27317__$1 = (((G__27317 == null))?null:validate_path.call(null,G__27317));
if((G__27317__$1 == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,path_atom,G__27317__$1);
}

break;
case "ArrowRight":
var G__27318 = cljs.core.update.call(null,p,(cljs.core.count.call(null,p) - (1)),cljs.core.inc);
var G__27318__$1 = (((G__27318 == null))?null:validate_path.call(null,G__27318));
if((G__27318__$1 == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,path_atom,G__27318__$1);
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"expression"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.expr,cljs.core.deref.call(null,expr_atom),cljs.core.deref.call(null,path_atom)], null)], null)], null);
});
});
evalorder.screen.add_reader_BANG_.call(null,new cljs.core.Symbol("game","expression","game/expression",1843886853,null),(function (expr){
var validated = evalorder.game.validate.call(null,expr);
if((typeof evalorder !== 'undefined') && (typeof evalorder.game !== 'undefined') && (typeof evalorder.game.t_evalorder$game27320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {evalorder.screen.Element}
 * @implements {cljs.core.IWithMeta}
*/
evalorder.game.t_evalorder$game27320 = (function (expr,validated,meta27321){
this.expr = expr;
this.validated = validated;
this.meta27321 = meta27321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(evalorder.game.t_evalorder$game27320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27322,meta27321__$1){
var self__ = this;
var _27322__$1 = this;
return (new evalorder.game.t_evalorder$game27320(self__.expr,self__.validated,meta27321__$1));
}));

(evalorder.game.t_evalorder$game27320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27322){
var self__ = this;
var _27322__$1 = this;
return self__.meta27321;
}));

(evalorder.game.t_evalorder$game27320.prototype.evalorder$screen$Element$ = cljs.core.PROTOCOL_SENTINEL);

(evalorder.game.t_evalorder$game27320.prototype.evalorder$screen$Element$render$arity$2 = (function (_,next_BANG_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.game.root,self__.validated,next_BANG_], null);
}));

(evalorder.game.t_evalorder$game27320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"validated","validated",-1207140351,null),new cljs.core.Symbol(null,"meta27321","meta27321",232545390,null)], null);
}));

(evalorder.game.t_evalorder$game27320.cljs$lang$type = true);

(evalorder.game.t_evalorder$game27320.cljs$lang$ctorStr = "evalorder.game/t_evalorder$game27320");

(evalorder.game.t_evalorder$game27320.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"evalorder.game/t_evalorder$game27320");
}));

/**
 * Positional factory function for evalorder.game/t_evalorder$game27320.
 */
evalorder.game.__GT_t_evalorder$game27320 = (function evalorder$game$__GT_t_evalorder$game27320(expr__$1,validated__$1,meta27321){
return (new evalorder.game.t_evalorder$game27320(expr__$1,validated__$1,meta27321));
});

}

return (new evalorder.game.t_evalorder$game27320(expr,validated,cljs.core.PersistentArrayMap.EMPTY));
}));

//# sourceMappingURL=game.js.map?rel=1618870423792
