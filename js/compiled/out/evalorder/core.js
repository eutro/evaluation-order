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
var c__24390__auto___27518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_27501){
var state_val_27502 = (state_27501[(1)]);
if((state_val_27502 === (7))){
var inst_27487 = (state_27501[(7)]);
var inst_27494 = (function(){throw inst_27487})();
var state_27501__$1 = state_27501;
var statearr_27503_27519 = state_27501__$1;
(statearr_27503_27519[(2)] = inst_27494);

(statearr_27503_27519[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (1))){
var inst_27470 = fetch("story.edn");
var inst_27471 = cljs.core.async.interop.p__GT_c.call(null,inst_27470);
var state_27501__$1 = state_27501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27501__$1,(3),inst_27471);
} else {
if((state_val_27502 === (4))){
var inst_27473 = (state_27501[(8)]);
var inst_27480 = (function(){throw inst_27473})();
var state_27501__$1 = state_27501;
var statearr_27504_27520 = state_27501__$1;
(statearr_27504_27520[(2)] = inst_27480);

(statearr_27504_27520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (6))){
var inst_27483 = (state_27501[(2)]);
var inst_27484 = inst_27483.text();
var inst_27485 = cljs.core.async.interop.p__GT_c.call(null,inst_27484);
var state_27501__$1 = state_27501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27501__$1,(2),inst_27485);
} else {
if((state_val_27502 === (3))){
var inst_27473 = (state_27501[(8)]);
var inst_27473__$1 = (state_27501[(2)]);
var inst_27474 = (inst_27473__$1 instanceof cljs.core.ExceptionInfo);
var inst_27475 = cljs.core.ex_data.call(null,inst_27473__$1);
var inst_27476 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27475);
var inst_27477 = cljs.core._EQ_.call(null,inst_27476,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27478 = ((inst_27474) && (inst_27477));
var state_27501__$1 = (function (){var statearr_27505 = state_27501;
(statearr_27505[(8)] = inst_27473__$1);

return statearr_27505;
})();
if(cljs.core.truth_(inst_27478)){
var statearr_27506_27521 = state_27501__$1;
(statearr_27506_27521[(1)] = (4));

} else {
var statearr_27507_27522 = state_27501__$1;
(statearr_27507_27522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (2))){
var inst_27487 = (state_27501[(7)]);
var inst_27487__$1 = (state_27501[(2)]);
var inst_27488 = (inst_27487__$1 instanceof cljs.core.ExceptionInfo);
var inst_27489 = cljs.core.ex_data.call(null,inst_27487__$1);
var inst_27490 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27489);
var inst_27491 = cljs.core._EQ_.call(null,inst_27490,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27492 = ((inst_27488) && (inst_27491));
var state_27501__$1 = (function (){var statearr_27508 = state_27501;
(statearr_27508[(7)] = inst_27487__$1);

return statearr_27508;
})();
if(cljs.core.truth_(inst_27492)){
var statearr_27509_27523 = state_27501__$1;
(statearr_27509_27523[(1)] = (7));

} else {
var statearr_27510_27524 = state_27501__$1;
(statearr_27510_27524[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (9))){
var inst_27497 = (state_27501[(2)]);
var inst_27498 = evalorder.screen.read_screen.call(null,inst_27497);
var inst_27499 = cljs.core.reset_BANG_.call(null,evalorder.core.story,inst_27498);
var state_27501__$1 = state_27501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27501__$1,inst_27499);
} else {
if((state_val_27502 === (5))){
var inst_27473 = (state_27501[(8)]);
var state_27501__$1 = state_27501;
var statearr_27511_27525 = state_27501__$1;
(statearr_27511_27525[(2)] = inst_27473);

(statearr_27511_27525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27502 === (8))){
var inst_27487 = (state_27501[(7)]);
var state_27501__$1 = state_27501;
var statearr_27512_27526 = state_27501__$1;
(statearr_27512_27526[(2)] = inst_27487);

(statearr_27512_27526[(1)] = (9));


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
var statearr_27513 = [null,null,null,null,null,null,null,null,null];
(statearr_27513[(0)] = evalorder$core$state_machine__24317__auto__);

(statearr_27513[(1)] = (1));

return statearr_27513;
});
var evalorder$core$state_machine__24317__auto____1 = (function (state_27501){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_27501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e27514){var ex__24320__auto__ = e27514;
var statearr_27515_27527 = state_27501;
(statearr_27515_27527[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_27501[(4)]))){
var statearr_27516_27528 = state_27501;
(statearr_27516_27528[(1)] = cljs.core.first.call(null,(state_27501[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27529 = state_27501;
state_27501 = G__27529;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
evalorder$core$state_machine__24317__auto__ = function(state_27501){
switch(arguments.length){
case 0:
return evalorder$core$state_machine__24317__auto____0.call(this);
case 1:
return evalorder$core$state_machine__24317__auto____1.call(this,state_27501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = evalorder$core$state_machine__24317__auto____0;
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = evalorder$core$state_machine__24317__auto____1;
return evalorder$core$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_27517 = f__24391__auto__.call(null);
(statearr_27517[(6)] = c__24390__auto___27518);

return statearr_27517;
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
(document.querySelector("html").className = cljs.core.deref.call(null,evalorder.core.theme));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4160__auto__ = cljs.core.deref.call(null,evalorder.menu.screen);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return evalorder.core.main_menu;
}
})()], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.core.app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1619125857765
