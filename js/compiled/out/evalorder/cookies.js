// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('evalorder.cookies');
goog.require('cljs.core');
goog.require('clojure.string');
evalorder.cookies.get_cookie = (function evalorder$cookies$get_cookie(cookie){
return cljs.core.get.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,cljs.core.seq),cljs.core.map.call(null,(function (p1__22637_SHARP_){
return clojure.string.split.call(null,p1__22637_SHARP_,/=/,(2));
}))),clojure.string.split.call(null,document.cookie,/; /)),cookie);
});
evalorder.cookies.one_year = ((((60) * (60)) * (24)) * (356));
evalorder.cookies.set_cookie_BANG_ = (function evalorder$cookies$set_cookie_BANG_(cookie,value){
return (document.cookie = clojure.string.join.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cookie,"=",value,";","max-age=",evalorder.cookies.one_year,";","path=/;","secure"], null)));
});

//# sourceMappingURL=cookies.js.map?rel=1619050493768
