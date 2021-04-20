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
var c__24390__auto___27442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_27425){
var state_val_27426 = (state_27425[(1)]);
if((state_val_27426 === (7))){
var inst_27411 = (state_27425[(7)]);
var inst_27418 = (function(){throw inst_27411})();
var state_27425__$1 = state_27425;
var statearr_27427_27443 = state_27425__$1;
(statearr_27427_27443[(2)] = inst_27418);

(statearr_27427_27443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (1))){
var inst_27394 = fetch("story.edn");
var inst_27395 = cljs.core.async.interop.p__GT_c.call(null,inst_27394);
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27425__$1,(3),inst_27395);
} else {
if((state_val_27426 === (4))){
var inst_27397 = (state_27425[(8)]);
var inst_27404 = (function(){throw inst_27397})();
var state_27425__$1 = state_27425;
var statearr_27428_27444 = state_27425__$1;
(statearr_27428_27444[(2)] = inst_27404);

(statearr_27428_27444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (6))){
var inst_27407 = (state_27425[(2)]);
var inst_27408 = inst_27407.text();
var inst_27409 = cljs.core.async.interop.p__GT_c.call(null,inst_27408);
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27425__$1,(2),inst_27409);
} else {
if((state_val_27426 === (3))){
var inst_27397 = (state_27425[(8)]);
var inst_27397__$1 = (state_27425[(2)]);
var inst_27398 = (inst_27397__$1 instanceof cljs.core.ExceptionInfo);
var inst_27399 = cljs.core.ex_data.call(null,inst_27397__$1);
var inst_27400 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27399);
var inst_27401 = cljs.core._EQ_.call(null,inst_27400,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27402 = ((inst_27398) && (inst_27401));
var state_27425__$1 = (function (){var statearr_27429 = state_27425;
(statearr_27429[(8)] = inst_27397__$1);

return statearr_27429;
})();
if(cljs.core.truth_(inst_27402)){
var statearr_27430_27445 = state_27425__$1;
(statearr_27430_27445[(1)] = (4));

} else {
var statearr_27431_27446 = state_27425__$1;
(statearr_27431_27446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (2))){
var inst_27411 = (state_27425[(7)]);
var inst_27411__$1 = (state_27425[(2)]);
var inst_27412 = (inst_27411__$1 instanceof cljs.core.ExceptionInfo);
var inst_27413 = cljs.core.ex_data.call(null,inst_27411__$1);
var inst_27414 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_27413);
var inst_27415 = cljs.core._EQ_.call(null,inst_27414,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_27416 = ((inst_27412) && (inst_27415));
var state_27425__$1 = (function (){var statearr_27432 = state_27425;
(statearr_27432[(7)] = inst_27411__$1);

return statearr_27432;
})();
if(cljs.core.truth_(inst_27416)){
var statearr_27433_27447 = state_27425__$1;
(statearr_27433_27447[(1)] = (7));

} else {
var statearr_27434_27448 = state_27425__$1;
(statearr_27434_27448[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (9))){
var inst_27421 = (state_27425[(2)]);
var inst_27422 = evalorder.screen.read_screen.call(null,inst_27421);
var inst_27423 = cljs.core.reset_BANG_.call(null,evalorder.core.story,inst_27422);
var state_27425__$1 = state_27425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27425__$1,inst_27423);
} else {
if((state_val_27426 === (5))){
var inst_27397 = (state_27425[(8)]);
var state_27425__$1 = state_27425;
var statearr_27435_27449 = state_27425__$1;
(statearr_27435_27449[(2)] = inst_27397);

(statearr_27435_27449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27426 === (8))){
var inst_27411 = (state_27425[(7)]);
var state_27425__$1 = state_27425;
var statearr_27436_27450 = state_27425__$1;
(statearr_27436_27450[(2)] = inst_27411);

(statearr_27436_27450[(1)] = (9));


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
var statearr_27437 = [null,null,null,null,null,null,null,null,null];
(statearr_27437[(0)] = evalorder$core$state_machine__24317__auto__);

(statearr_27437[(1)] = (1));

return statearr_27437;
});
var evalorder$core$state_machine__24317__auto____1 = (function (state_27425){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_27425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e27438){var ex__24320__auto__ = e27438;
var statearr_27439_27451 = state_27425;
(statearr_27439_27451[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_27425[(4)]))){
var statearr_27440_27452 = state_27425;
(statearr_27440_27452[(1)] = cljs.core.first.call(null,(state_27425[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27453 = state_27425;
state_27425 = G__27453;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
evalorder$core$state_machine__24317__auto__ = function(state_27425){
switch(arguments.length){
case 0:
return evalorder$core$state_machine__24317__auto____0.call(this);
case 1:
return evalorder$core$state_machine__24317__auto____1.call(this,state_27425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = evalorder$core$state_machine__24317__auto____0;
evalorder$core$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = evalorder$core$state_machine__24317__auto____1;
return evalorder$core$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_27441 = f__24391__auto__.call(null);
(statearr_27441[(6)] = c__24390__auto___27442);

return statearr_27441;
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

//# sourceMappingURL=core.js.map?rel=1618906568209
