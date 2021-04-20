// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if((typeof cljs !== 'undefined') && (typeof cljs.stacktrace !== 'undefined') && (typeof cljs.stacktrace.parse_stacktrace !== 'undefined')){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__4654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),(function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__4160__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__30095 = cljs.core.reduce.call(null,(function (p__30101,p__30102){
var vec__30103 = p__30101;
var pre = cljs.core.nth.call(null,vec__30103,(0),null);
var post = cljs.core.nth.call(null,vec__30103,(1),null);
var vec__30106 = p__30102;
var x = cljs.core.nth.call(null,vec__30106,(0),null);
var i = cljs.core.nth.call(null,vec__30106,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__30095,(0),null);
var vec__30098 = cljs.core.nth.call(null,vec__30095,(1),null);
var line = cljs.core.nth.call(null,vec__30098,(0),null);
var column = cljs.core.nth.call(null,vec__30098,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30109 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__30109,"(","");
} else {
return G__30109;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__30110 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__30110,")","");
} else {
return G__30110;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__30111 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__30111,")","");
} else {
return G__30111;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__30112,file,p__30113){
var map__30114 = p__30112;
var map__30114__$1 = cljs.core.__destructure_map.call(null,map__30114);
var repl_env = map__30114__$1;
var host = cljs.core.get.call(null,map__30114__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__30114__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__30114__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__30115 = p__30113;
var map__30115__$1 = cljs.core.__destructure_map.call(null,map__30115);
var opts = map__30115__$1;
var asset_path = cljs.core.get.call(null,map__30115__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = host_port;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = (function (){var and__4149__auto__ = asset_path;
if(cljs.core.truth_(and__4149__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),"/"].join('')),"");
} else {
var temp__5718__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var asset_root = temp__5718__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__30116 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__30116,(0),null);
var flc = cljs.core.nth.call(null,vec__30116,(1),null);
var vec__30119 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__30119,(0),null);
var line = cljs.core.nth.call(null,vec__30119,(1),null);
var column = cljs.core.nth.call(null,vec__30119,(2),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = file;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = function$;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = line;
if(cljs.core.truth_(and__4149__auto____$2)){
return column;
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__30124_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__30124_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__30123_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_.call(null,p1__30123_SHARP_,"    at eval")));
}),cljs.core.drop_while.call(null,(function (p1__30122_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__30122_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__30125 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__30125,(0),null);
var flc = cljs.core.nth.call(null,vec__30125,(1),null);
var vec__30128 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__30128,(0),null);
var line = cljs.core.nth.call(null,vec__30128,(1),null);
var column = cljs.core.nth.call(null,vec__30128,(2),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = file;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = function$;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = line;
if(cljs.core.truth_(and__4149__auto____$2)){
return column;
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__30133_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__30133_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__30132_SHARP_){
return (!(cljs.stacktrace.starts_with_QMARK_.call(null,p1__30132_SHARP_,"eval code")));
}),cljs.core.drop_while.call(null,(function (p1__30131_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__30131_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__30134 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__30134,(0),null);
var flc = cljs.core.nth.call(null,vec__30134,(1),null);
var vec__30137 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__30137,(0),null);
var line = cljs.core.nth.call(null,vec__30137,(1),null);
var column = cljs.core.nth.call(null,vec__30137,(2),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = file;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = function$;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = line;
if(cljs.core.truth_(and__4149__auto____$2)){
return column;
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__30142_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__30142_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__30141_SHARP_){
return cljs.core._EQ_.call(null,p1__30141_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__30140_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__30140_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__30143){
var map__30144 = p__30143;
var map__30144__$1 = cljs.core.__destructure_map.call(null,map__30144);
var opts = map__30144__$1;
var output_dir = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__4149__auto__ = x;
if(cljs.core.truth_(and__4149__auto__)){
return (!(clojure.string.blank_QMARK_.call(null,x)));
} else {
return and__4149__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});
var process_frame = (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__30152 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__30152,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__30152,(1),null);
var vec__30155 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__30155,(0),null);
var line_part = cljs.core.nth.call(null,vec__30155,(1),null);
var col_part = cljs.core.nth.call(null,vec__30155,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__30158 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__30158,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__30158;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__4160__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,(function (p1__30159_SHARP_){
return (p1__30159_SHARP_ <= (column__$1 - (1)));
}),cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});
var adjust = (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__30160_SHARP_,p2__30161_SHARP_){
return p1__30160_SHARP_.call(null,p2__30161_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5718__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__5718__auto__)){
var columns = temp__5718__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__30162,sms,opts){
var map__30163 = p__30162;
var map__30163__$1 = cljs.core.__destructure_map.call(null,map__30163);
var function$ = cljs.core.get.call(null,map__30163__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__30163__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30163__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30163__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__30164 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__30164,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__30164,(1),null);
var call = cljs.core.nth.call(null,vec__30164,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?["NO_SOURCE_FILE",(cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null)].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var G__30170 = arguments.length;
switch (G__30170) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__30167_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__30167_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,(function (p1__30168_SHARP_){
return cljs.core.dissoc.call(null,p1__30168_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
}),mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
}));

(cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3);

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var G__30173 = arguments.length;
switch (G__30173) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30174_30187 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30175_30188 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30176_30189 = true;
var _STAR_print_fn_STAR__temp_val__30177_30190 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30176_30189);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30177_30190);

try{var seq__30178_30191 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__30179_30192 = null;
var count__30180_30193 = (0);
var i__30181_30194 = (0);
while(true){
if((i__30181_30194 < count__30180_30193)){
var map__30184_30195 = cljs.core._nth.call(null,chunk__30179_30192,i__30181_30194);
var map__30184_30196__$1 = cljs.core.__destructure_map.call(null,map__30184_30195);
var function_30197 = cljs.core.get.call(null,map__30184_30196__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_30198 = cljs.core.get.call(null,map__30184_30196__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_30199 = cljs.core.get.call(null,map__30184_30196__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30200 = cljs.core.get.call(null,map__30184_30196__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[(cljs.core.truth_(function_30197)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_30197)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_30198),(cljs.core.truth_(line_30199)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_30199)].join(''):null),(cljs.core.truth_(column_30200)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_30200)].join(''):null),")"].join(''));


var G__30201 = seq__30178_30191;
var G__30202 = chunk__30179_30192;
var G__30203 = count__30180_30193;
var G__30204 = (i__30181_30194 + (1));
seq__30178_30191 = G__30201;
chunk__30179_30192 = G__30202;
count__30180_30193 = G__30203;
i__30181_30194 = G__30204;
continue;
} else {
var temp__5720__auto___30205 = cljs.core.seq.call(null,seq__30178_30191);
if(temp__5720__auto___30205){
var seq__30178_30206__$1 = temp__5720__auto___30205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30178_30206__$1)){
var c__4591__auto___30207 = cljs.core.chunk_first.call(null,seq__30178_30206__$1);
var G__30208 = cljs.core.chunk_rest.call(null,seq__30178_30206__$1);
var G__30209 = c__4591__auto___30207;
var G__30210 = cljs.core.count.call(null,c__4591__auto___30207);
var G__30211 = (0);
seq__30178_30191 = G__30208;
chunk__30179_30192 = G__30209;
count__30180_30193 = G__30210;
i__30181_30194 = G__30211;
continue;
} else {
var map__30185_30212 = cljs.core.first.call(null,seq__30178_30206__$1);
var map__30185_30213__$1 = cljs.core.__destructure_map.call(null,map__30185_30212);
var function_30214 = cljs.core.get.call(null,map__30185_30213__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_30215 = cljs.core.get.call(null,map__30185_30213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_30216 = cljs.core.get.call(null,map__30185_30213__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_30217 = cljs.core.get.call(null,map__30185_30213__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[(cljs.core.truth_(function_30214)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_30214)," "].join(''):null),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_30215),(cljs.core.truth_(line_30216)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_30216)].join(''):null),(cljs.core.truth_(column_30217)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_30217)].join(''):null),")"].join(''));


var G__30218 = cljs.core.next.call(null,seq__30178_30206__$1);
var G__30219 = null;
var G__30220 = (0);
var G__30221 = (0);
seq__30178_30191 = G__30218;
chunk__30179_30192 = G__30219;
count__30180_30193 = G__30220;
i__30181_30194 = G__30221;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30175_30188);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30174_30187);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
}));

(cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=stacktrace.js.map?rel=1618926909863
