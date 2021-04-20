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
var c__24390__auto___27458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_27441){
var state_val_27442 = (state_27441[(1)]);
if((state_val_27442 === (7))){
var inst_27427 = (state_27441[(7)]);
var inst_27434 = (function(){throw inst_27427})();
var state_27441__$1 = state_27441;
var statearr_27443_27459 = state_27441__$1;
(statearr_27443_27459[(2)] = inst_27434);

(statearr_27443_27459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (1))){
var inst_27410 = fetch("story.edn");
var inst_27411 = cljs.core.async.interop.p__GT_c.call(null,inst_27410);
var state_27441__$1 = state_27441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27441__$1,(3),inst_27411);
} else {
if((state_val_27442 === (4))){
var inst_27413 = (state_27441[(8)]);
var inst_27420 = (function(){throw inst_27413})();
var state_27441__$1 = state_27441;
var statearr_27444_27460 = state_27441__$1;
(statearr_27444_27460[(2)] = inst_27420);

(statearr_27444_27460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (6))){
var inst_27423 = (state_27441[(2)]);
var inst_27424 = inst_27423.text();
var inst_27425 = cljs.core.async.interop.p__GT_c.call(null,inst_27424);
var state_27441__$1 = state_27441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27441__$1,(2),inst_27425);
} else {
if((state_val_27442 === (3))){
var inst_27413 = (state_27441[(8)]);
var inst_27413__$1 = (state_27441[(2)]);
var inst_27414 = (inst_27413__$1 instanceof cljs.core.ExceptionInfo);
var inst_27415 = cljs.core.ex_data.call(null,inst_27413__$1);
var inst_27416 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27415);
var inst_27417 = cljs.core._EQ_.call(null,inst_27416,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27418 = ((inst_27414) && (inst_27417));
var state_27441__$1 = (function (){var statearr_27445 = state_27441;
(statearr_27445[(8)] = inst_27413__$1);

return statearr_27445;
})();
if(cljs.core.truth_(inst_27418)){
var statearr_27446_27461 = state_27441__$1;
(statearr_27446_27461[(1)] = (4));

} else {
var statearr_27447_27462 = state_27441__$1;
(statearr_27447_27462[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (2))){
var inst_27427 = (state_27441[(7)]);
var inst_27427__$1 = (state_27441[(2)]);
var inst_27428 = (inst_27427__$1 instanceof cljs.core.ExceptionInfo);
var inst_27429 = cljs.core.ex_data.call(null,inst_27427__$1);
var inst_27430 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27429);
var inst_27431 = cljs.core._EQ_.call(null,inst_27430,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27432 = ((inst_27428) && (inst_27431));
var state_27441__$1 = (function (){var statearr_27448 = state_27441;
(statearr_27448[(7)] = inst_27427__$1);

return statearr_27448;
})();
if(cljs.core.truth_(inst_27432)){
var statearr_27449_27463 = state_27441__$1;
(statearr_27449_27463[(1)] = (7));

} else {
var statearr_27450_27464 = state_27441__$1;
(statearr_27450_27464[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (9))){
var inst_27437 = (state_27441[(2)]);
var inst_27438 = evalorder.screen.read_screen.call(null,inst_27437);
var inst_27439 = cljs.core.reset_BANG_.call(null,evalorder.core.story,inst_27438);
var state_27441__$1 = state_27441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27441__$1,inst_27439);
} else {
if((state_val_27442 === (5))){
var inst_27413 = (state_27441[(8)]);
var state_27441__$1 = state_27441;
var statearr_27451_27465 = state_27441__$1;
(statearr_27451_27465[(2)] = inst_27413);

(statearr_27451_27465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (8))){
var inst_27427 = (state_27441[(7)]);
var state_27441__$1 = state_27441;
var statearr_27452_27466 = state_27441__$1;
(statearr_27452_27466[(2)] = inst_27427);

(statearr_27452_27466[(1)] = (9));


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
var statearr_27453 = [null,null,null,null,null,null,null,null,null];
(statearr_27453[(0)] = evalorder$core$state_machine__24317__auto__);

(statearr_27453[(1)] = (1));

return statearr_27453;
});
var evalorder$core$state_machine__24317__auto____1 = (function (state_27441){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_27441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e27454){var ex__24320__auto__ = e27454;
var statearr_27455_27467 = state_27441;
(statearr_27455_27467[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_27441[(4)]))){
var statearr_27456_27468 = state_27441;
(statearr_27456_27468[(1)] = cljs.core.first.call(null,(state_27441[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27469 = state_27441;
state_27441 = G__27469;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
evalorder$core$state_machine__24317__auto__ = function(state_27441){
switch(arguments.length){
case 0:
return evalorder$core$state_machine__24317__auto____0.call(this);
case 1:
return evalorder$core$state_machine__24317__auto____1.call(this,state_27441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = evalorder$core$state_machine__24317__auto____0;
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = evalorder$core$state_machine__24317__auto____1;
return evalorder$core$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_27457 = f__24391__auto__.call(null);
(statearr_27457[(6)] = c__24390__auto___27458);

return statearr_27457;
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

//# sourceMappingURL=core.js.map?rel=1618911414658
