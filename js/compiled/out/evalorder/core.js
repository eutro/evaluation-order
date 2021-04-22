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
var c__24390__auto___27535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_27518){
var state_val_27519 = (state_27518[(1)]);
if((state_val_27519 === (7))){
var inst_27504 = (state_27518[(7)]);
var inst_27511 = (function(){throw inst_27504})();
var state_27518__$1 = state_27518;
var statearr_27520_27536 = state_27518__$1;
(statearr_27520_27536[(2)] = inst_27511);

(statearr_27520_27536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (1))){
var inst_27487 = fetch("story.edn");
var inst_27488 = cljs.core.async.interop.p__GT_c.call(null,inst_27487);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27518__$1,(3),inst_27488);
} else {
if((state_val_27519 === (4))){
var inst_27490 = (state_27518[(8)]);
var inst_27497 = (function(){throw inst_27490})();
var state_27518__$1 = state_27518;
var statearr_27521_27537 = state_27518__$1;
(statearr_27521_27537[(2)] = inst_27497);

(statearr_27521_27537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (6))){
var inst_27500 = (state_27518[(2)]);
var inst_27501 = inst_27500.text();
var inst_27502 = cljs.core.async.interop.p__GT_c.call(null,inst_27501);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27518__$1,(2),inst_27502);
} else {
if((state_val_27519 === (3))){
var inst_27490 = (state_27518[(8)]);
var inst_27490__$1 = (state_27518[(2)]);
var inst_27491 = (inst_27490__$1 instanceof cljs.core.ExceptionInfo);
var inst_27492 = cljs.core.ex_data.call(null,inst_27490__$1);
var inst_27493 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27492);
var inst_27494 = cljs.core._EQ_.call(null,inst_27493,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27495 = ((inst_27491) && (inst_27494));
var state_27518__$1 = (function (){var statearr_27522 = state_27518;
(statearr_27522[(8)] = inst_27490__$1);

return statearr_27522;
})();
if(cljs.core.truth_(inst_27495)){
var statearr_27523_27538 = state_27518__$1;
(statearr_27523_27538[(1)] = (4));

} else {
var statearr_27524_27539 = state_27518__$1;
(statearr_27524_27539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (2))){
var inst_27504 = (state_27518[(7)]);
var inst_27504__$1 = (state_27518[(2)]);
var inst_27505 = (inst_27504__$1 instanceof cljs.core.ExceptionInfo);
var inst_27506 = cljs.core.ex_data.call(null,inst_27504__$1);
var inst_27507 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27506);
var inst_27508 = cljs.core._EQ_.call(null,inst_27507,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27509 = ((inst_27505) && (inst_27508));
var state_27518__$1 = (function (){var statearr_27525 = state_27518;
(statearr_27525[(7)] = inst_27504__$1);

return statearr_27525;
})();
if(cljs.core.truth_(inst_27509)){
var statearr_27526_27540 = state_27518__$1;
(statearr_27526_27540[(1)] = (7));

} else {
var statearr_27527_27541 = state_27518__$1;
(statearr_27527_27541[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (9))){
var inst_27514 = (state_27518[(2)]);
var inst_27515 = evalorder.screen.read_screen.call(null,inst_27514);
var inst_27516 = cljs.core.reset_BANG_.call(null,evalorder.core.story,inst_27515);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27518__$1,inst_27516);
} else {
if((state_val_27519 === (5))){
var inst_27490 = (state_27518[(8)]);
var state_27518__$1 = state_27518;
var statearr_27528_27542 = state_27518__$1;
(statearr_27528_27542[(2)] = inst_27490);

(statearr_27528_27542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (8))){
var inst_27504 = (state_27518[(7)]);
var state_27518__$1 = state_27518;
var statearr_27529_27543 = state_27518__$1;
(statearr_27529_27543[(2)] = inst_27504);

(statearr_27529_27543[(1)] = (9));


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
var statearr_27530 = [null,null,null,null,null,null,null,null,null];
(statearr_27530[(0)] = evalorder$core$state_machine__24317__auto__);

(statearr_27530[(1)] = (1));

return statearr_27530;
});
var evalorder$core$state_machine__24317__auto____1 = (function (state_27518){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_27518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e27531){var ex__24320__auto__ = e27531;
var statearr_27532_27544 = state_27518;
(statearr_27532_27544[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_27518[(4)]))){
var statearr_27533_27545 = state_27518;
(statearr_27533_27545[(1)] = cljs.core.first.call(null,(state_27518[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27546 = state_27518;
state_27518 = G__27546;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
evalorder$core$state_machine__24317__auto__ = function(state_27518){
switch(arguments.length){
case 0:
return evalorder$core$state_machine__24317__auto____0.call(this);
case 1:
return evalorder$core$state_machine__24317__auto____1.call(this,state_27518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = evalorder$core$state_machine__24317__auto____0;
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = evalorder$core$state_machine__24317__auto____1;
return evalorder$core$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_27534 = f__24391__auto__.call(null);
(statearr_27534[(6)] = c__24390__auto___27535);

return statearr_27534;
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.menu.menu,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.menu.logo], null),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,evalorder.menu.button,null,(1),null)),(new cljs.core.List(null,"Start",null,(1),null)),(function (){var temp__5722__auto__ = cljs.core.deref.call(null,evalorder.core.story);
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.menu.button,"Reset Progress",(function (){
return evalorder.cookies.set_cookie_BANG_.call(null,"EO_anchor","");
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

//# sourceMappingURL=core.js.map?rel=1619050498418
