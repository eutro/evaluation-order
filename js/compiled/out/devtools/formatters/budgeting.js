// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__27571__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__27571__auto__["add"]).call(o__27571__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__27571__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__27571__auto__["delete"]).call(o__27571__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__27571__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__27571__auto__["has"]).call(o__27571__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__30086 = data;
var target__27576__auto__ = G__30086;
if(cljs.core.truth_(target__27576__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30086)].join(''),"\n","target__27576__auto__"].join('')));
}

(target__27576__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__30086;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_30091 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_30091);
} else {
var seq__30087_30092 = cljs.core.seq.call(null,json_ml);
var chunk__30088_30093 = null;
var count__30089_30094 = (0);
var i__30090_30095 = (0);
while(true){
if((i__30090_30095 < count__30089_30094)){
var item_30096 = cljs.core._nth.call(null,chunk__30088_30093,i__30090_30095);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_30096,new_depth_budget_30091);


var G__30097 = seq__30087_30092;
var G__30098 = chunk__30088_30093;
var G__30099 = count__30089_30094;
var G__30100 = (i__30090_30095 + (1));
seq__30087_30092 = G__30097;
chunk__30088_30093 = G__30098;
count__30089_30094 = G__30099;
i__30090_30095 = G__30100;
continue;
} else {
var temp__5720__auto___30101 = cljs.core.seq.call(null,seq__30087_30092);
if(temp__5720__auto___30101){
var seq__30087_30102__$1 = temp__5720__auto___30101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30087_30102__$1)){
var c__4591__auto___30103 = cljs.core.chunk_first.call(null,seq__30087_30102__$1);
var G__30104 = cljs.core.chunk_rest.call(null,seq__30087_30102__$1);
var G__30105 = c__4591__auto___30103;
var G__30106 = cljs.core.count.call(null,c__4591__auto___30103);
var G__30107 = (0);
seq__30087_30092 = G__30104;
chunk__30088_30093 = G__30105;
count__30089_30094 = G__30106;
i__30090_30095 = G__30107;
continue;
} else {
var item_30108 = cljs.core.first.call(null,seq__30087_30102__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_30108,new_depth_budget_30091);


var G__30109 = cljs.core.next.call(null,seq__30087_30102__$1);
var G__30110 = null;
var G__30111 = (0);
var G__30112 = (0);
seq__30087_30092 = G__30109;
chunk__30088_30093 = G__30110;
count__30089_30094 = G__30111;
i__30090_30095 = G__30112;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5718__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__4160__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1619051022048
