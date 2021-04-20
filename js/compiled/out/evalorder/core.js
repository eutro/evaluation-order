// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.core');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('evalorder.game');
goog.require('evalorder.screen');
goog.require('evalorder.cookies');
goog.require('evalorder.menu');
goog.require('cljs.core.async');
goog.require('cljs.core.async.interop');
evalorder.core.story = reagent.core.atom.call(null,null);
var c__24390__auto___27460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_27443){
var state_val_27444 = (state_27443[(1)]);
if((state_val_27444 === (7))){
var inst_27429 = (state_27443[(7)]);
var inst_27436 = (function(){throw inst_27429})();
var state_27443__$1 = state_27443;
var statearr_27445_27461 = state_27443__$1;
(statearr_27445_27461[(2)] = inst_27436);

(statearr_27445_27461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (1))){
var inst_27412 = fetch("story.edn");
var inst_27413 = cljs.core.async.interop.p__GT_c.call(null,inst_27412);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27443__$1,(3),inst_27413);
} else {
if((state_val_27444 === (4))){
var inst_27415 = (state_27443[(8)]);
var inst_27422 = (function(){throw inst_27415})();
var state_27443__$1 = state_27443;
var statearr_27446_27462 = state_27443__$1;
(statearr_27446_27462[(2)] = inst_27422);

(statearr_27446_27462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (6))){
var inst_27425 = (state_27443[(2)]);
var inst_27426 = inst_27425.text();
var inst_27427 = cljs.core.async.interop.p__GT_c.call(null,inst_27426);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27443__$1,(2),inst_27427);
} else {
if((state_val_27444 === (3))){
var inst_27415 = (state_27443[(8)]);
var inst_27415__$1 = (state_27443[(2)]);
var inst_27416 = (inst_27415__$1 instanceof cljs.core.ExceptionInfo);
var inst_27417 = cljs.core.ex_data.call(null,inst_27415__$1);
var inst_27418 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27417);
var inst_27419 = cljs.core._EQ_.call(null,inst_27418,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27420 = ((inst_27416) && (inst_27419));
var state_27443__$1 = (function (){var statearr_27447 = state_27443;
(statearr_27447[(8)] = inst_27415__$1);

return statearr_27447;
})();
if(cljs.core.truth_(inst_27420)){
var statearr_27448_27463 = state_27443__$1;
(statearr_27448_27463[(1)] = (4));

} else {
var statearr_27449_27464 = state_27443__$1;
(statearr_27449_27464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (2))){
var inst_27429 = (state_27443[(7)]);
var inst_27429__$1 = (state_27443[(2)]);
var inst_27430 = (inst_27429__$1 instanceof cljs.core.ExceptionInfo);
var inst_27431 = cljs.core.ex_data.call(null,inst_27429__$1);
var inst_27432 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27431);
var inst_27433 = cljs.core._EQ_.call(null,inst_27432,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27434 = ((inst_27430) && (inst_27433));
var state_27443__$1 = (function (){var statearr_27450 = state_27443;
(statearr_27450[(7)] = inst_27429__$1);

return statearr_27450;
})();
if(cljs.core.truth_(inst_27434)){
var statearr_27451_27465 = state_27443__$1;
(statearr_27451_27465[(1)] = (7));

} else {
var statearr_27452_27466 = state_27443__$1;
(statearr_27452_27466[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (9))){
var inst_27439 = (state_27443[(2)]);
var inst_27440 = evalorder.screen.read_screen.call(null,inst_27439);
var inst_27441 = cljs.core.reset_BANG_.call(null,evalorder.core.story,inst_27440);
var state_27443__$1 = state_27443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27443__$1,inst_27441);
} else {
if((state_val_27444 === (5))){
var inst_27415 = (state_27443[(8)]);
var state_27443__$1 = state_27443;
var statearr_27453_27467 = state_27443__$1;
(statearr_27453_27467[(2)] = inst_27415);

(statearr_27453_27467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27444 === (8))){
var inst_27429 = (state_27443[(7)]);
var state_27443__$1 = state_27443;
var statearr_27454_27468 = state_27443__$1;
(statearr_27454_27468[(2)] = inst_27429);

(statearr_27454_27468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var evalorder$core$state_machine__24317__auto__ = null;
var evalorder$core$state_machine__24317__auto____0 = (function (){
var statearr_27455 = [null,null,null,null,null,null,null,null,null];
(statearr_27455[(0)] = evalorder$core$state_machine__24317__auto__);

(statearr_27455[(1)] = (1));

return statearr_27455;
});
var evalorder$core$state_machine__24317__auto____1 = (function (state_27443){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_27443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e27456){var ex__24320__auto__ = e27456;
var statearr_27457_27469 = state_27443;
(statearr_27457_27469[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_27443[(4)]))){
var statearr_27458_27470 = state_27443;
(statearr_27458_27470[(1)] = cljs.core.first.call(null,(state_27443[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27471 = state_27443;
state_27443 = G__27471;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
evalorder$core$state_machine__24317__auto__ = function(state_27443){
switch(arguments.length){
case 0:
return evalorder$core$state_machine__24317__auto____0.call(this);
case 1:
return evalorder$core$state_machine__24317__auto____1.call(this,state_27443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = evalorder$core$state_machine__24317__auto____0;
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = evalorder$core$state_machine__24317__auto____1;
return evalorder$core$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_27459 = f__24391__auto__.call(null);
(statearr_27459[(6)] = c__24390__auto___27460);

return statearr_27459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));

evalorder.core.theme = reagent.core.atom.call(null,(function (){var or__4160__auto__ = evalorder.cookies.get_cookie.call(null,"EO_theme");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "dark";
}
})());
cljs.core.add_watch.call(null,evalorder.core.theme,new cljs.core.Keyword(null,"cookie","cookie",1772025619),(function (_k,_r,_o,n){
return evalorder.cookies.set_cookie_BANG_.call(null,"EO_theme",n);
}));
evalorder.core.theme__GT_next = new cljs.core.PersistentArrayMap(null, 2, ["dark","","","dark"], null);
evalorder.core.main_menu = (function evalorder$core$main_menu(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.menu.menu,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.menu.logo], null),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,evalorder.menu.button,null,(1),null)),(new cljs.core.List(null,"Start",null,(1),null)),(function (){var temp__5722__auto__ = cljs.core.deref.call(null,evalorder.core.story);
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null);
} else {
var s = temp__5722__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.reset_BANG_.call(null,evalorder.menu.screen,cljs.core.partial.call(null,evalorder.screen.show,s));
})], null);
}
})())))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.menu.button,"Change Theme",(function (){
return cljs.core.swap_BANG_.call(null,evalorder.core.theme,evalorder.core.theme__GT_next);
})], null)], null);
});
evalorder.core.app = (function evalorder$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["full ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,evalorder.core.theme))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4160__auto__ = cljs.core.deref.call(null,evalorder.menu.screen);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return evalorder.core.main_menu;
}
})()], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1618926906695
