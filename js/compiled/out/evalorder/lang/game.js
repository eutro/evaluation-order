// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('evalorder.lang.game');
goog.require('cljs.core');
goog.require('evalorder.lang.ast');
goog.require('evalorder.lang.values');
goog.require('reagent.core');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"recursive","recursive",718885872),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650)),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null))),cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursive","recursive",718885872),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650)),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__24082){
return cljs.core.coll_QMARK_.call(null,G__24082);
})], null),null),cljs.core.number_QMARK_,cljs.core.symbol_QMARK_], null),null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","doc","evalorder.lang.game/doc",-1137416595),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","raw-def","evalorder.lang.game/raw-def",-250224154),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword("evalorder.lang.game","doc","evalorder.lang.game/doc",-1137416595),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"entry","entry",505168823)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword("evalorder.lang.game","doc","evalorder.lang.game/doc",-1137416595),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword("evalorder.lang.game","doc","evalorder.lang.game/doc",-1137416595),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Keyword("evalorder.lang.game","doc","evalorder.lang.game/doc",-1137416595),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650)], null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","definition","evalorder.lang.game/definition",2050999100),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Keyword("evalorder.lang.game","raw-def","evalorder.lang.game/raw-def",-250224154),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.values","*globals*","evalorder.lang.values/*globals*",1100100468,null),new cljs.core.Symbol(null,"v","v",1661996586,null))], null),new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.list(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.values","->Global","evalorder.lang.values/->Global",1199025695,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.ast","parse","evalorder.lang.ast/parse",218680702,null),new cljs.core.Symbol(null,"value","value",1946509744,null)))], null)))))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.lang.game","raw-def","evalorder.lang.game/raw-def",-250224154),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.values","*globals*","evalorder.lang.values/*globals*",1100100468,null),new cljs.core.Symbol(null,"v","v",1661996586,null))], null),new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.list(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.values","->Global","evalorder.lang.values/->Global",1199025695,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.ast","parse","evalorder.lang.ast/parse",218680702,null),new cljs.core.Symbol(null,"value","value",1946509744,null)))], null)))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.lang.game","raw-def","evalorder.lang.game/raw-def",-250224154),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.values","*globals*","evalorder.lang.values/*globals*",1100100468,null),new cljs.core.Symbol(null,"v","v",1661996586,null))], null),new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.list(new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.values","->Global","evalorder.lang.values/->Global",1199025695,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),cljs.core.list(new cljs.core.Symbol("evalorder.lang.ast","parse","evalorder.lang.ast/parse",218680702,null),new cljs.core.Symbol(null,"value","value",1946509744,null)))], null))))),(function (p__24083){
var vec__24084 = p__24083;
var k = cljs.core.nth.call(null,vec__24084,(0),null);
var v = cljs.core.nth.call(null,vec__24084,(1),null);
var G__24087 = k;
var G__24087__$1 = (((G__24087 instanceof cljs.core.Keyword))?G__24087.fqn:null);
switch (G__24087__$1) {
case "sym":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,evalorder.lang.values._STAR_globals_STAR_.call(null,v)], null);

break;
case "entry":
var vec__24088 = v;
var name = cljs.core.nth.call(null,vec__24088,(0),null);
var doc = cljs.core.nth.call(null,vec__24088,(1),null);
var value = cljs.core.nth.call(null,vec__24088,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,evalorder.lang.values.__GT_Global.call(null,doc,evalorder.lang.ast.parse.call(null,value))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24087__$1)].join('')));

}
}),null,true)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","definitions","evalorder.lang.game/definitions",1211057464),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.lang.game","definition","evalorder.lang.game/definition",2050999100),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","definition","evalorder.lang.game/definition",2050999100),new cljs.core.Keyword("evalorder.lang.game","definition","evalorder.lang.game/definition",2050999100),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__24092){
return cljs.core.coll_QMARK_.call(null,G__24092);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.lang.game","definition","evalorder.lang.game/definition",2050999100),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","description","evalorder.lang.game/description",1824969382),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nonconforming","s/nonconforming",1648455456,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null))),cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"n","n",562130025)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.nil_QMARK_], null),null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__24093){
return cljs.core.coll_QMARK_.call(null,G__24093);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","post-description","evalorder.lang.game/post-description",1559377861),new cljs.core.Keyword("evalorder.lang.game","description","evalorder.lang.game/description",1824969382),new cljs.core.Keyword("evalorder.lang.game","description","evalorder.lang.game/description",1824969382));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","post-level","evalorder.lang.game/post-level",-1570489907),new cljs.core.Keyword("evalorder.lang.game","description","evalorder.lang.game/description",1824969382),new cljs.core.Keyword("evalorder.lang.game","description","evalorder.lang.game/description",1824969382));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","target","evalorder.lang.game/target",-786983741),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__24094){
return cljs.core.set_QMARK_.call(null,G__24094);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("evalorder.lang.game","level","evalorder.lang.game/level",186016454),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.Keyword("evalorder.lang.game","description","evalorder.lang.game/description",1824969382),new cljs.core.Keyword("evalorder.lang.game","target","evalorder.lang.game/target",-786983741),new cljs.core.Keyword("evalorder.lang.game","definitions","evalorder.lang.game/definitions",1211057464)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.lang.game","post-description","evalorder.lang.game/post-description",1559377861),new cljs.core.Keyword("evalorder.lang.game","post-level","evalorder.lang.game/post-level",-1570489907)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.Keyword("evalorder.lang.game","description","evalorder.lang.game/description",1824969382),new cljs.core.Keyword("evalorder.lang.game","target","evalorder.lang.game/target",-786983741),new cljs.core.Keyword("evalorder.lang.game","definitions","evalorder.lang.game/definitions",1211057464)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.lang.game","post-description","evalorder.lang.game/post-description",1559377861),new cljs.core.Keyword("evalorder.lang.game","post-level","evalorder.lang.game/post-level",-1570489907)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__24095){
return cljs.core.map_QMARK_.call(null,G__24095);
}),(function (G__24095){
return cljs.core.contains_QMARK_.call(null,G__24095,new cljs.core.Keyword(null,"expression","expression",202311876));
}),(function (G__24095){
return cljs.core.contains_QMARK_.call(null,G__24095,new cljs.core.Keyword(null,"description","description",-1428560544));
}),(function (G__24095){
return cljs.core.contains_QMARK_.call(null,G__24095,new cljs.core.Keyword(null,"target","target",253001721));
}),(function (G__24095){
return cljs.core.contains_QMARK_.call(null,G__24095,new cljs.core.Keyword(null,"definitions","definitions",167529986));
})], null),(function (G__24095){
return ((cljs.core.map_QMARK_.call(null,G__24095)) && (cljs.core.contains_QMARK_.call(null,G__24095,new cljs.core.Keyword(null,"expression","expression",202311876))) && (cljs.core.contains_QMARK_.call(null,G__24095,new cljs.core.Keyword(null,"description","description",-1428560544))) && (cljs.core.contains_QMARK_.call(null,G__24095,new cljs.core.Keyword(null,"target","target",253001721))) && (cljs.core.contains_QMARK_.call(null,G__24095,new cljs.core.Keyword(null,"definitions","definitions",167529986))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-description","post-description",449783055),new cljs.core.Keyword(null,"post-level","post-level",-461787421)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.lang.game","expression","evalorder.lang.game/expression",1310470650),new cljs.core.Keyword("evalorder.lang.game","description","evalorder.lang.game/description",1824969382),new cljs.core.Keyword("evalorder.lang.game","target","evalorder.lang.game/target",-786983741),new cljs.core.Keyword("evalorder.lang.game","definitions","evalorder.lang.game/definitions",1211057464)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"definitions","definitions",167529986)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("evalorder.lang.game","post-description","evalorder.lang.game/post-description",1559377861),new cljs.core.Keyword("evalorder.lang.game","post-level","evalorder.lang.game/post-level",-1570489907)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"expression","expression",202311876))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"description","description",-1428560544))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"target","target",253001721))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"definitions","definitions",167529986)))], null),null])));
evalorder.lang.game.validate = (function evalorder$lang$game$validate(level){
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("evalorder.lang.game","level","evalorder.lang.game/level",186016454),level);
if(cljs.spec.alpha.invalid_QMARK_.call(null,conformed)){
throw (new Error(["Invalid level:\n",cljs.spec.alpha.explain_str.call(null,new cljs.core.Keyword("evalorder.lang.game","level","evalorder.lang.game/level",186016454),level)].join('')));
} else {
}

return conformed;
});
evalorder.lang.game.button = (function evalorder$lang$game$button(name,desc,key,on_click,bar_content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_click,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),(function (_){
return cljs.core.reset_BANG_.call(null,bar_content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"tooltip"], null),desc,(cljs.core.truth_(key)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," [",key,"]"], null):null)], null));
}),new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),(function (){
return cljs.core.reset_BANG_.call(null,bar_content,null);
})], null),name], null);
});
evalorder.lang.game.bar = (function evalorder$lang$game$bar(content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bar"], null),cljs.core.deref.call(null,content)], null);
});
evalorder.lang.game.describe = (function evalorder$lang$game$describe(lines){
if(cljs.core.seq.call(null,lines)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"description"], null),(function (){var iter__4529__auto__ = (function evalorder$lang$game$describe_$_iter__24096(s__24097){
return (new cljs.core.LazySeq(null,(function (){
var s__24097__$1 = s__24097;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__24097__$1);
if(temp__5720__auto__){
var s__24097__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24097__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__24097__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__24099 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__24098 = (0);
while(true){
if((i__24098 < size__4528__auto__)){
var vec__24100 = cljs.core._nth.call(null,c__4527__auto__,i__24098);
var comment = cljs.core.nth.call(null,vec__24100,(0),null);
var i = cljs.core.nth.call(null,vec__24100,(1),null);
cljs.core.chunk_append.call(null,b__24099,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comment"], null),(cljs.core.truth_(comment)?[";; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment)].join(''):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__24106 = (i__24098 + (1));
i__24098 = G__24106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24099),evalorder$lang$game$describe_$_iter__24096.call(null,cljs.core.chunk_rest.call(null,s__24097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24099),null);
}
} else {
var vec__24103 = cljs.core.first.call(null,s__24097__$2);
var comment = cljs.core.nth.call(null,vec__24103,(0),null);
var i = cljs.core.nth.call(null,vec__24103,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"comment"], null),(cljs.core.truth_(comment)?[";; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment)].join(''):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),evalorder$lang$game$describe_$_iter__24096.call(null,cljs.core.rest.call(null,s__24097__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,lines,cljs.core.range.call(null)));
})()], null);
} else {
return null;
}
});
evalorder.lang.game.reset_toggle = reagent.core.atom.call(null,false);
evalorder.lang.game.level_node = (function evalorder$lang$game$level_node(p__24108,finish_level){
var map__24109 = p__24108;
var map__24109__$1 = (((((!((map__24109 == null))))?(((((map__24109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24109):map__24109);
var description = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var post_description = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"post-description","post-description",449783055));
var post_level = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"post-level","post-level",-461787421));
var expression = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"expression","expression",202311876));
var target = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"target","target",253001721));
var definitions = cljs.core.get.call(null,map__24109__$1,new cljs.core.Keyword(null,"definitions","definitions",167529986));
var selected = reagent.core.atom.call(null,null);
var select = (function (el){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,selected),cljs.core.vary_meta,cljs.core.dissoc,new cljs.core.Keyword(null,"selected","selected",574897764));

cljs.core.reset_BANG_.call(null,selected,el);

return cljs.core.swap_BANG_.call(null,el,cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),true);
});
var child = (function (){var G__24111 = evalorder.lang.ast.parse.call(null,expression,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),select], null));
cljs.core.swap_BANG_.call(null,G__24111,cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),true);

cljs.core.reset_BANG_.call(null,selected,G__24111);

return G__24111;
})();
var evaluated = reagent.core.atom.call(null,false);
var evaluate = (function() { 
var G__24123__delegate = function (p__24112){
var vec__24113 = p__24112;
var el = cljs.core.nth.call(null,vec__24113,(0),null);
var _STAR_env_STAR__orig_val__24116_24124 = evalorder.lang.ast._STAR_env_STAR_;
var _STAR_env_STAR__temp_val__24117_24125 = definitions;
(evalorder.lang.ast._STAR_env_STAR_ = _STAR_env_STAR__temp_val__24117_24125);

try{cljs.core.swap_BANG_.call(null,(function (){var or__4126__auto__ = el;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref.call(null,selected);
}
})(),(function (p1__24107_SHARP_){
return cljs.core.with_meta.call(null,evalorder.lang.ast.evaluated.call(null,p1__24107_SHARP_),cljs.core.meta.call(null,p1__24107_SHARP_));
}));
}finally {(evalorder.lang.ast._STAR_env_STAR_ = _STAR_env_STAR__orig_val__24116_24124);
}
return cljs.core.reset_BANG_.call(null,evaluated,true);
};
var G__24123 = function (var_args){
var p__24112 = null;
if (arguments.length > 0) {
var G__24126__i = 0, G__24126__a = new Array(arguments.length -  0);
while (G__24126__i < G__24126__a.length) {G__24126__a[G__24126__i] = arguments[G__24126__i + 0]; ++G__24126__i;}
  p__24112 = new cljs.core.IndexedSeq(G__24126__a,0,null);
} 
return G__24123__delegate.call(this,p__24112);};
G__24123.cljs$lang$maxFixedArity = 0;
G__24123.cljs$lang$applyTo = (function (arglist__24127){
var p__24112 = cljs.core.seq(arglist__24127);
return G__24123__delegate(p__24112);
});
G__24123.cljs$core$IFn$_invoke$arity$variadic = G__24123__delegate;
return G__24123;
})()
;
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"code",new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (event){
if(cljs.core.truth_(event.ctrlKey)){
return null;
} else {
var key = event.key;
var G__24118 = key;
switch (G__24118) {
case "ArrowUp":
var G__24119 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,selected))));
if((G__24119 == null)){
return null;
} else {
return select.call(null,G__24119);
}

break;
case "ArrowDown":
var G__24120 = cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,selected))));
if((G__24120 == null)){
return null;
} else {
return select.call(null,G__24120);
}

break;
case "ArrowLeft":
var G__24121 = new cljs.core.Keyword(null,"lhs","lhs",1172082094).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,selected))));
if((G__24121 == null)){
return null;
} else {
return select.call(null,G__24121);
}

break;
case "ArrowRight":
var G__24122 = new cljs.core.Keyword(null,"rhs","rhs",-229356739).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,selected))));
if((G__24122 == null)){
return null;
} else {
return select.call(null,G__24122);
}

break;
case "Enter":
return evaluate.call(null);

break;
default:
return null;

}
}
}),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return el.focus();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.game.describe,description], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"expression"], null),evalorder.lang.ast.render_child.call(null,child)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.game.describe,post_description], null),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref.call(null,evaluated);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.contains_QMARK_.call(null,target,evalorder.lang.ast.value.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,selected))));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.game.describe,post_level], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"next-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (_){
return finish_level.call(null);
}),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (event){
if(cljs.core._EQ_.call(null,event.key,"Enter")){
return finish_level.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0)], null),evalorder.lang.ast.render.call(null,evalorder.lang.ast.__GT_ListExpr.call(null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.atom.call(null,evalorder.lang.ast.__GT_SymExpr.call(null,null,new cljs.core.Symbol(null,"next","next",1522830042,null)))], null)))], null)], null):null)], null),(function (){var bar_content = reagent.core.atom.call(null,null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"buttons"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.game.button,"evaluate","Evaluate the current expression","Enter",(function (_){
return evaluate.call(null);
}),bar_content], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.game.button,"reset","Reset the level",null,(function (_){
return cljs.core.swap_BANG_.call(null,evalorder.lang.game.reset_toggle,cljs.core.not);
}),bar_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.game.bar,bar_content], null)], null);
})()], null);
});
});
evalorder.lang.game.root = (function evalorder$lang$game$root(level,finish_level){
cljs.core.deref.call(null,evalorder.lang.game.reset_toggle);

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.game.level_node,level,finish_level], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),Date.now()], null));
});

//# sourceMappingURL=game.js.map?rel=1618703416322
