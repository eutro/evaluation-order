// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('evalorder.core');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('evalorder.lang.game');
goog.require('clojure.edn');
evalorder.core.game = (function evalorder$core$game(levels){
var style = reagent.core.atom.call(null,"dark");
var level_no = reagent.core.atom.call(null,(0));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,style)], null),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"div","div",1057191632),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"class","class",-2030961996),null,(1),null)),(new cljs.core.List(null,"level-select",null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,"Level Select",null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"div","div",1057191632),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"class","class",-2030961996),null,(1),null)),(new cljs.core.List(null,"dropdown-content",null,(1),null)))))),null,(1),null)),(function (){var iter__4529__auto__ = (function evalorder$core$game_$_iter__24341(s__24342){
return (new cljs.core.LazySeq(null,(function (){
var s__24342__$1 = s__24342;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__24342__$1);
if(temp__5720__auto__){
var s__24342__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24342__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__24342__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__24344 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__24343 = (0);
while(true){
if((i__24343 < size__4528__auto__)){
var vec__24345 = cljs.core._nth.call(null,c__4527__auto__,i__24343);
var _level = cljs.core.nth.call(null,vec__24345,(0),null);
var i = cljs.core.nth.call(null,vec__24345,(1),null);
cljs.core.chunk_append.call(null,b__24344,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"level-option",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__24343,vec__24345,_level,i,c__4527__auto__,size__4528__auto__,b__24344,s__24342__$2,temp__5720__auto__,style,level_no){
return (function (_){
return cljs.core.reset_BANG_.call(null,level_no,i);
});})(i__24343,vec__24345,_level,i,c__4527__auto__,size__4528__auto__,b__24344,s__24342__$2,temp__5720__auto__,style,level_no))
], null),i], null));

var G__24355 = (i__24343 + (1));
i__24343 = G__24355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24344),evalorder$core$game_$_iter__24341.call(null,cljs.core.chunk_rest.call(null,s__24342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24344),null);
}
} else {
var vec__24348 = cljs.core.first.call(null,s__24342__$2);
var _level = cljs.core.nth.call(null,vec__24348,(0),null);
var i = cljs.core.nth.call(null,vec__24348,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"level-option",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__24348,_level,i,s__24342__$2,temp__5720__auto__,style,level_no){
return (function (_){
return cljs.core.reset_BANG_.call(null,level_no,i);
});})(vec__24348,_level,i,s__24342__$2,temp__5720__auto__,style,level_no))
], null),i], null),evalorder$core$game_$_iter__24341.call(null,cljs.core.rest.call(null,s__24342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,levels,cljs.core.range.call(null)));
})())))),null,(1),null)))))),(function (){var temp__5722__auto__ = cljs.core.find.call(null,levels,cljs.core.deref.call(null,level_no));
if((temp__5722__auto__ == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code"], null),"wow you've finished"], null);
} else {
var vec__24351 = temp__5722__auto__;
var _ = cljs.core.nth.call(null,vec__24351,(0),null);
var level = cljs.core.nth.call(null,vec__24351,(1),null);
try{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.lang.game.root,evalorder.lang.game.validate.call(null,level),(function (){
return cljs.core.swap_BANG_.call(null,level_no,cljs.core.inc);
})], null);
}catch (e24354){if((e24354 instanceof Error)){
var e = e24354;
return alert(cljs.core.ex_message.call(null,e));
} else {
throw e24354;

}
}}
})()], null);
});
});
fetch("levels.edn").then((function (value){
return value.text().then((function (text){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [evalorder.core.game,clojure.edn.read_string.call(null,text)], null),document.getElementById("game"));
}));
}));

//# sourceMappingURL=core.js.map?rel=1618749919827
