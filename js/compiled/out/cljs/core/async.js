// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24450 = arguments.length;
switch (G__24450) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24451 = (function (f,blockable,meta24452){
this.f = f;
this.blockable = blockable;
this.meta24452 = meta24452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24453,meta24452__$1){
var self__ = this;
var _24453__$1 = this;
return (new cljs.core.async.t_cljs$core$async24451(self__.f,self__.blockable,meta24452__$1));
}));

(cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24453){
var self__ = this;
var _24453__$1 = this;
return self__.meta24452;
}));

(cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async24451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async24451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24452","meta24452",-365040684,null)], null);
}));

(cljs.core.async.t_cljs$core$async24451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24451");

(cljs.core.async.t_cljs$core$async24451.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24451.
 */
cljs.core.async.__GT_t_cljs$core$async24451 = (function cljs$core$async$__GT_t_cljs$core$async24451(f__$1,blockable__$1,meta24452){
return (new cljs.core.async.t_cljs$core$async24451(f__$1,blockable__$1,meta24452));
});

}

return (new cljs.core.async.t_cljs$core$async24451(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24457 = arguments.length;
switch (G__24457) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24460 = arguments.length;
switch (G__24460) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24463 = arguments.length;
switch (G__24463) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24465 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24465);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_24465);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24467 = arguments.length;
switch (G__24467) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___24469 = n;
var x_24470 = (0);
while(true){
if((x_24470 < n__4648__auto___24469)){
(a[x_24470] = x_24470);

var G__24471 = (x_24470 + (1));
x_24470 = G__24471;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24472 = (function (flag,meta24473){
this.flag = flag;
this.meta24473 = meta24473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24474,meta24473__$1){
var self__ = this;
var _24474__$1 = this;
return (new cljs.core.async.t_cljs$core$async24472(self__.flag,meta24473__$1));
}));

(cljs.core.async.t_cljs$core$async24472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24474){
var self__ = this;
var _24474__$1 = this;
return self__.meta24473;
}));

(cljs.core.async.t_cljs$core$async24472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async24472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24473","meta24473",-1815260303,null)], null);
}));

(cljs.core.async.t_cljs$core$async24472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24472");

(cljs.core.async.t_cljs$core$async24472.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24472.
 */
cljs.core.async.__GT_t_cljs$core$async24472 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24472(flag__$1,meta24473){
return (new cljs.core.async.t_cljs$core$async24472(flag__$1,meta24473));
});

}

return (new cljs.core.async.t_cljs$core$async24472(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24475 = (function (flag,cb,meta24476){
this.flag = flag;
this.cb = cb;
this.meta24476 = meta24476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24477,meta24476__$1){
var self__ = this;
var _24477__$1 = this;
return (new cljs.core.async.t_cljs$core$async24475(self__.flag,self__.cb,meta24476__$1));
}));

(cljs.core.async.t_cljs$core$async24475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24477){
var self__ = this;
var _24477__$1 = this;
return self__.meta24476;
}));

(cljs.core.async.t_cljs$core$async24475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async24475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async24475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24476","meta24476",685751291,null)], null);
}));

(cljs.core.async.t_cljs$core$async24475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24475");

(cljs.core.async.t_cljs$core$async24475.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async24475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24475.
 */
cljs.core.async.__GT_t_cljs$core$async24475 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24475(flag__$1,cb__$1,meta24476){
return (new cljs.core.async.t_cljs$core$async24475(flag__$1,cb__$1,meta24476));
});

}

return (new cljs.core.async.t_cljs$core$async24475(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24478_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24478_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24479_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24479_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24480 = (i + (1));
i = G__24480;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___24485 = arguments.length;
var i__4772__auto___24486 = (0);
while(true){
if((i__4772__auto___24486 < len__4771__auto___24485)){
args__4777__auto__.push((arguments[i__4772__auto___24486]));

var G__24487 = (i__4772__auto___24486 + (1));
i__4772__auto___24486 = G__24487;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24483){
var map__24484 = p__24483;
var map__24484__$1 = cljs.core.__destructure_map.call(null,map__24484);
var opts = map__24484__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24481){
var G__24482 = cljs.core.first.call(null,seq24481);
var seq24481__$1 = cljs.core.next.call(null,seq24481);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24482,seq24481__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24489 = arguments.length;
switch (G__24489) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24390__auto___24536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_24513){
var state_val_24514 = (state_24513[(1)]);
if((state_val_24514 === (7))){
var inst_24509 = (state_24513[(2)]);
var state_24513__$1 = state_24513;
var statearr_24515_24537 = state_24513__$1;
(statearr_24515_24537[(2)] = inst_24509);

(statearr_24515_24537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (1))){
var state_24513__$1 = state_24513;
var statearr_24516_24538 = state_24513__$1;
(statearr_24516_24538[(2)] = null);

(statearr_24516_24538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (4))){
var inst_24492 = (state_24513[(7)]);
var inst_24492__$1 = (state_24513[(2)]);
var inst_24493 = (inst_24492__$1 == null);
var state_24513__$1 = (function (){var statearr_24517 = state_24513;
(statearr_24517[(7)] = inst_24492__$1);

return statearr_24517;
})();
if(cljs.core.truth_(inst_24493)){
var statearr_24518_24539 = state_24513__$1;
(statearr_24518_24539[(1)] = (5));

} else {
var statearr_24519_24540 = state_24513__$1;
(statearr_24519_24540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (13))){
var state_24513__$1 = state_24513;
var statearr_24520_24541 = state_24513__$1;
(statearr_24520_24541[(2)] = null);

(statearr_24520_24541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (6))){
var inst_24492 = (state_24513[(7)]);
var state_24513__$1 = state_24513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24513__$1,(11),to,inst_24492);
} else {
if((state_val_24514 === (3))){
var inst_24511 = (state_24513[(2)]);
var state_24513__$1 = state_24513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24513__$1,inst_24511);
} else {
if((state_val_24514 === (12))){
var state_24513__$1 = state_24513;
var statearr_24521_24542 = state_24513__$1;
(statearr_24521_24542[(2)] = null);

(statearr_24521_24542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (2))){
var state_24513__$1 = state_24513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24513__$1,(4),from);
} else {
if((state_val_24514 === (11))){
var inst_24502 = (state_24513[(2)]);
var state_24513__$1 = state_24513;
if(cljs.core.truth_(inst_24502)){
var statearr_24522_24543 = state_24513__$1;
(statearr_24522_24543[(1)] = (12));

} else {
var statearr_24523_24544 = state_24513__$1;
(statearr_24523_24544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (9))){
var state_24513__$1 = state_24513;
var statearr_24524_24545 = state_24513__$1;
(statearr_24524_24545[(2)] = null);

(statearr_24524_24545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (5))){
var state_24513__$1 = state_24513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24525_24546 = state_24513__$1;
(statearr_24525_24546[(1)] = (8));

} else {
var statearr_24526_24547 = state_24513__$1;
(statearr_24526_24547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (14))){
var inst_24507 = (state_24513[(2)]);
var state_24513__$1 = state_24513;
var statearr_24527_24548 = state_24513__$1;
(statearr_24527_24548[(2)] = inst_24507);

(statearr_24527_24548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (10))){
var inst_24499 = (state_24513[(2)]);
var state_24513__$1 = state_24513;
var statearr_24528_24549 = state_24513__$1;
(statearr_24528_24549[(2)] = inst_24499);

(statearr_24528_24549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24514 === (8))){
var inst_24496 = cljs.core.async.close_BANG_.call(null,to);
var state_24513__$1 = state_24513;
var statearr_24529_24550 = state_24513__$1;
(statearr_24529_24550[(2)] = inst_24496);

(statearr_24529_24550[(1)] = (10));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_24530 = [null,null,null,null,null,null,null,null];
(statearr_24530[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_24530[(1)] = (1));

return statearr_24530;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_24513){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24531){var ex__24320__auto__ = e24531;
var statearr_24532_24551 = state_24513;
(statearr_24532_24551[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24513[(4)]))){
var statearr_24533_24552 = state_24513;
(statearr_24533_24552[(1)] = cljs.core.first.call(null,(state_24513[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24553 = state_24513;
state_24513 = G__24553;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_24513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_24513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_24534 = f__24391__auto__.call(null);
(statearr_24534[(6)] = c__24390__auto___24536);

return statearr_24534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__24554){
var vec__24555 = p__24554;
var v = cljs.core.nth.call(null,vec__24555,(0),null);
var p = cljs.core.nth.call(null,vec__24555,(1),null);
var job = vec__24555;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24390__auto___24731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_24562){
var state_val_24563 = (state_24562[(1)]);
if((state_val_24563 === (1))){
var state_24562__$1 = state_24562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24562__$1,(2),res,v);
} else {
if((state_val_24563 === (2))){
var inst_24559 = (state_24562[(2)]);
var inst_24560 = cljs.core.async.close_BANG_.call(null,res);
var state_24562__$1 = (function (){var statearr_24564 = state_24562;
(statearr_24564[(7)] = inst_24559);

return statearr_24564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24562__$1,inst_24560);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0 = (function (){
var statearr_24565 = [null,null,null,null,null,null,null,null];
(statearr_24565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__);

(statearr_24565[(1)] = (1));

return statearr_24565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1 = (function (state_24562){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24566){var ex__24320__auto__ = e24566;
var statearr_24567_24732 = state_24562;
(statearr_24567_24732[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24562[(4)]))){
var statearr_24568_24733 = state_24562;
(statearr_24568_24733[(1)] = cljs.core.first.call(null,(state_24562[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24734 = state_24562;
state_24562 = G__24734;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = function(state_24562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1.call(this,state_24562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_24569 = f__24391__auto__.call(null);
(statearr_24569[(6)] = c__24390__auto___24731);

return statearr_24569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__24570){
var vec__24571 = p__24570;
var v = cljs.core.nth.call(null,vec__24571,(0),null);
var p = cljs.core.nth.call(null,vec__24571,(1),null);
var job = vec__24571;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4648__auto___24735 = n;
var __24736 = (0);
while(true){
if((__24736 < n__4648__auto___24735)){
var G__24574_24737 = type;
var G__24574_24738__$1 = (((G__24574_24737 instanceof cljs.core.Keyword))?G__24574_24737.fqn:null);
switch (G__24574_24738__$1) {
case "compute":
var c__24390__auto___24740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24736,c__24390__auto___24740,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async){
return (function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = ((function (__24736,c__24390__auto___24740,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async){
return (function (state_24587){
var state_val_24588 = (state_24587[(1)]);
if((state_val_24588 === (1))){
var state_24587__$1 = state_24587;
var statearr_24589_24741 = state_24587__$1;
(statearr_24589_24741[(2)] = null);

(statearr_24589_24741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24588 === (2))){
var state_24587__$1 = state_24587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24587__$1,(4),jobs);
} else {
if((state_val_24588 === (3))){
var inst_24585 = (state_24587[(2)]);
var state_24587__$1 = state_24587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24587__$1,inst_24585);
} else {
if((state_val_24588 === (4))){
var inst_24577 = (state_24587[(2)]);
var inst_24578 = process.call(null,inst_24577);
var state_24587__$1 = state_24587;
if(cljs.core.truth_(inst_24578)){
var statearr_24590_24742 = state_24587__$1;
(statearr_24590_24742[(1)] = (5));

} else {
var statearr_24591_24743 = state_24587__$1;
(statearr_24591_24743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24588 === (5))){
var state_24587__$1 = state_24587;
var statearr_24592_24744 = state_24587__$1;
(statearr_24592_24744[(2)] = null);

(statearr_24592_24744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24588 === (6))){
var state_24587__$1 = state_24587;
var statearr_24593_24745 = state_24587__$1;
(statearr_24593_24745[(2)] = null);

(statearr_24593_24745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24588 === (7))){
var inst_24583 = (state_24587[(2)]);
var state_24587__$1 = state_24587;
var statearr_24594_24746 = state_24587__$1;
(statearr_24594_24746[(2)] = inst_24583);

(statearr_24594_24746[(1)] = (3));


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
});})(__24736,c__24390__auto___24740,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async))
;
return ((function (__24736,switch__24316__auto__,c__24390__auto___24740,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0 = (function (){
var statearr_24595 = [null,null,null,null,null,null,null];
(statearr_24595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__);

(statearr_24595[(1)] = (1));

return statearr_24595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1 = (function (state_24587){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24596){var ex__24320__auto__ = e24596;
var statearr_24597_24747 = state_24587;
(statearr_24597_24747[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24587[(4)]))){
var statearr_24598_24748 = state_24587;
(statearr_24598_24748[(1)] = cljs.core.first.call(null,(state_24587[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24749 = state_24587;
state_24587 = G__24749;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = function(state_24587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1.call(this,state_24587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__;
})()
;})(__24736,switch__24316__auto__,c__24390__auto___24740,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async))
})();
var state__24392__auto__ = (function (){var statearr_24599 = f__24391__auto__.call(null);
(statearr_24599[(6)] = c__24390__auto___24740);

return statearr_24599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
});})(__24736,c__24390__auto___24740,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async))
);


break;
case "async":
var c__24390__auto___24750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24736,c__24390__auto___24750,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async){
return (function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = ((function (__24736,c__24390__auto___24750,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async){
return (function (state_24612){
var state_val_24613 = (state_24612[(1)]);
if((state_val_24613 === (1))){
var state_24612__$1 = state_24612;
var statearr_24614_24751 = state_24612__$1;
(statearr_24614_24751[(2)] = null);

(statearr_24614_24751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (2))){
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24612__$1,(4),jobs);
} else {
if((state_val_24613 === (3))){
var inst_24610 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24612__$1,inst_24610);
} else {
if((state_val_24613 === (4))){
var inst_24602 = (state_24612[(2)]);
var inst_24603 = async.call(null,inst_24602);
var state_24612__$1 = state_24612;
if(cljs.core.truth_(inst_24603)){
var statearr_24615_24752 = state_24612__$1;
(statearr_24615_24752[(1)] = (5));

} else {
var statearr_24616_24753 = state_24612__$1;
(statearr_24616_24753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (5))){
var state_24612__$1 = state_24612;
var statearr_24617_24754 = state_24612__$1;
(statearr_24617_24754[(2)] = null);

(statearr_24617_24754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (6))){
var state_24612__$1 = state_24612;
var statearr_24618_24755 = state_24612__$1;
(statearr_24618_24755[(2)] = null);

(statearr_24618_24755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24613 === (7))){
var inst_24608 = (state_24612[(2)]);
var state_24612__$1 = state_24612;
var statearr_24619_24756 = state_24612__$1;
(statearr_24619_24756[(2)] = inst_24608);

(statearr_24619_24756[(1)] = (3));


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
});})(__24736,c__24390__auto___24750,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async))
;
return ((function (__24736,switch__24316__auto__,c__24390__auto___24750,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0 = (function (){
var statearr_24620 = [null,null,null,null,null,null,null];
(statearr_24620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__);

(statearr_24620[(1)] = (1));

return statearr_24620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1 = (function (state_24612){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24621){var ex__24320__auto__ = e24621;
var statearr_24622_24757 = state_24612;
(statearr_24622_24757[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24612[(4)]))){
var statearr_24623_24758 = state_24612;
(statearr_24623_24758[(1)] = cljs.core.first.call(null,(state_24612[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24759 = state_24612;
state_24612 = G__24759;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = function(state_24612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1.call(this,state_24612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__;
})()
;})(__24736,switch__24316__auto__,c__24390__auto___24750,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async))
})();
var state__24392__auto__ = (function (){var statearr_24624 = f__24391__auto__.call(null);
(statearr_24624[(6)] = c__24390__auto___24750);

return statearr_24624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
});})(__24736,c__24390__auto___24750,G__24574_24737,G__24574_24738__$1,n__4648__auto___24735,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24574_24738__$1)].join('')));

}

var G__24760 = (__24736 + (1));
__24736 = G__24760;
continue;
} else {
}
break;
}

var c__24390__auto___24761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_24646){
var state_val_24647 = (state_24646[(1)]);
if((state_val_24647 === (7))){
var inst_24642 = (state_24646[(2)]);
var state_24646__$1 = state_24646;
var statearr_24648_24762 = state_24646__$1;
(statearr_24648_24762[(2)] = inst_24642);

(statearr_24648_24762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (1))){
var state_24646__$1 = state_24646;
var statearr_24649_24763 = state_24646__$1;
(statearr_24649_24763[(2)] = null);

(statearr_24649_24763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (4))){
var inst_24627 = (state_24646[(7)]);
var inst_24627__$1 = (state_24646[(2)]);
var inst_24628 = (inst_24627__$1 == null);
var state_24646__$1 = (function (){var statearr_24650 = state_24646;
(statearr_24650[(7)] = inst_24627__$1);

return statearr_24650;
})();
if(cljs.core.truth_(inst_24628)){
var statearr_24651_24764 = state_24646__$1;
(statearr_24651_24764[(1)] = (5));

} else {
var statearr_24652_24765 = state_24646__$1;
(statearr_24652_24765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (6))){
var inst_24627 = (state_24646[(7)]);
var inst_24632 = (state_24646[(8)]);
var inst_24632__$1 = cljs.core.async.chan.call(null,(1));
var inst_24633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24634 = [inst_24627,inst_24632__$1];
var inst_24635 = (new cljs.core.PersistentVector(null,2,(5),inst_24633,inst_24634,null));
var state_24646__$1 = (function (){var statearr_24653 = state_24646;
(statearr_24653[(8)] = inst_24632__$1);

return statearr_24653;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24646__$1,(8),jobs,inst_24635);
} else {
if((state_val_24647 === (3))){
var inst_24644 = (state_24646[(2)]);
var state_24646__$1 = state_24646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24646__$1,inst_24644);
} else {
if((state_val_24647 === (2))){
var state_24646__$1 = state_24646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24646__$1,(4),from);
} else {
if((state_val_24647 === (9))){
var inst_24639 = (state_24646[(2)]);
var state_24646__$1 = (function (){var statearr_24654 = state_24646;
(statearr_24654[(9)] = inst_24639);

return statearr_24654;
})();
var statearr_24655_24766 = state_24646__$1;
(statearr_24655_24766[(2)] = null);

(statearr_24655_24766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (5))){
var inst_24630 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24646__$1 = state_24646;
var statearr_24656_24767 = state_24646__$1;
(statearr_24656_24767[(2)] = inst_24630);

(statearr_24656_24767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24647 === (8))){
var inst_24632 = (state_24646[(8)]);
var inst_24637 = (state_24646[(2)]);
var state_24646__$1 = (function (){var statearr_24657 = state_24646;
(statearr_24657[(10)] = inst_24637);

return statearr_24657;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24646__$1,(9),results,inst_24632);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0 = (function (){
var statearr_24658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__);

(statearr_24658[(1)] = (1));

return statearr_24658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1 = (function (state_24646){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24659){var ex__24320__auto__ = e24659;
var statearr_24660_24768 = state_24646;
(statearr_24660_24768[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24646[(4)]))){
var statearr_24661_24769 = state_24646;
(statearr_24661_24769[(1)] = cljs.core.first.call(null,(state_24646[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24770 = state_24646;
state_24646 = G__24770;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = function(state_24646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1.call(this,state_24646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_24662 = f__24391__auto__.call(null);
(statearr_24662[(6)] = c__24390__auto___24761);

return statearr_24662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


var c__24390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_24700){
var state_val_24701 = (state_24700[(1)]);
if((state_val_24701 === (7))){
var inst_24696 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24702_24771 = state_24700__$1;
(statearr_24702_24771[(2)] = inst_24696);

(statearr_24702_24771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (20))){
var state_24700__$1 = state_24700;
var statearr_24703_24772 = state_24700__$1;
(statearr_24703_24772[(2)] = null);

(statearr_24703_24772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (1))){
var state_24700__$1 = state_24700;
var statearr_24704_24773 = state_24700__$1;
(statearr_24704_24773[(2)] = null);

(statearr_24704_24773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (4))){
var inst_24665 = (state_24700[(7)]);
var inst_24665__$1 = (state_24700[(2)]);
var inst_24666 = (inst_24665__$1 == null);
var state_24700__$1 = (function (){var statearr_24705 = state_24700;
(statearr_24705[(7)] = inst_24665__$1);

return statearr_24705;
})();
if(cljs.core.truth_(inst_24666)){
var statearr_24706_24774 = state_24700__$1;
(statearr_24706_24774[(1)] = (5));

} else {
var statearr_24707_24775 = state_24700__$1;
(statearr_24707_24775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (15))){
var inst_24678 = (state_24700[(8)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24700__$1,(18),to,inst_24678);
} else {
if((state_val_24701 === (21))){
var inst_24691 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24708_24776 = state_24700__$1;
(statearr_24708_24776[(2)] = inst_24691);

(statearr_24708_24776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (13))){
var inst_24693 = (state_24700[(2)]);
var state_24700__$1 = (function (){var statearr_24709 = state_24700;
(statearr_24709[(9)] = inst_24693);

return statearr_24709;
})();
var statearr_24710_24777 = state_24700__$1;
(statearr_24710_24777[(2)] = null);

(statearr_24710_24777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (6))){
var inst_24665 = (state_24700[(7)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24700__$1,(11),inst_24665);
} else {
if((state_val_24701 === (17))){
var inst_24686 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
if(cljs.core.truth_(inst_24686)){
var statearr_24711_24778 = state_24700__$1;
(statearr_24711_24778[(1)] = (19));

} else {
var statearr_24712_24779 = state_24700__$1;
(statearr_24712_24779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (3))){
var inst_24698 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24700__$1,inst_24698);
} else {
if((state_val_24701 === (12))){
var inst_24675 = (state_24700[(10)]);
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24700__$1,(14),inst_24675);
} else {
if((state_val_24701 === (2))){
var state_24700__$1 = state_24700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24700__$1,(4),results);
} else {
if((state_val_24701 === (19))){
var state_24700__$1 = state_24700;
var statearr_24713_24780 = state_24700__$1;
(statearr_24713_24780[(2)] = null);

(statearr_24713_24780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (11))){
var inst_24675 = (state_24700[(2)]);
var state_24700__$1 = (function (){var statearr_24714 = state_24700;
(statearr_24714[(10)] = inst_24675);

return statearr_24714;
})();
var statearr_24715_24781 = state_24700__$1;
(statearr_24715_24781[(2)] = null);

(statearr_24715_24781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (9))){
var state_24700__$1 = state_24700;
var statearr_24716_24782 = state_24700__$1;
(statearr_24716_24782[(2)] = null);

(statearr_24716_24782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (5))){
var state_24700__$1 = state_24700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24717_24783 = state_24700__$1;
(statearr_24717_24783[(1)] = (8));

} else {
var statearr_24718_24784 = state_24700__$1;
(statearr_24718_24784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (14))){
var inst_24678 = (state_24700[(8)]);
var inst_24678__$1 = (state_24700[(2)]);
var inst_24679 = (inst_24678__$1 == null);
var inst_24680 = cljs.core.not.call(null,inst_24679);
var state_24700__$1 = (function (){var statearr_24719 = state_24700;
(statearr_24719[(8)] = inst_24678__$1);

return statearr_24719;
})();
if(inst_24680){
var statearr_24720_24785 = state_24700__$1;
(statearr_24720_24785[(1)] = (15));

} else {
var statearr_24721_24786 = state_24700__$1;
(statearr_24721_24786[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (16))){
var state_24700__$1 = state_24700;
var statearr_24722_24787 = state_24700__$1;
(statearr_24722_24787[(2)] = false);

(statearr_24722_24787[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (10))){
var inst_24672 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24723_24788 = state_24700__$1;
(statearr_24723_24788[(2)] = inst_24672);

(statearr_24723_24788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (18))){
var inst_24683 = (state_24700[(2)]);
var state_24700__$1 = state_24700;
var statearr_24724_24789 = state_24700__$1;
(statearr_24724_24789[(2)] = inst_24683);

(statearr_24724_24789[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24701 === (8))){
var inst_24669 = cljs.core.async.close_BANG_.call(null,to);
var state_24700__$1 = state_24700;
var statearr_24725_24790 = state_24700__$1;
(statearr_24725_24790[(2)] = inst_24669);

(statearr_24725_24790[(1)] = (10));


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
}
}
}
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
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0 = (function (){
var statearr_24726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__);

(statearr_24726[(1)] = (1));

return statearr_24726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1 = (function (state_24700){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24727){var ex__24320__auto__ = e24727;
var statearr_24728_24791 = state_24700;
(statearr_24728_24791[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24700[(4)]))){
var statearr_24729_24792 = state_24700;
(statearr_24729_24792[(1)] = cljs.core.first.call(null,(state_24700[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24793 = state_24700;
state_24700 = G__24793;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__ = function(state_24700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1.call(this,state_24700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_24730 = f__24391__auto__.call(null);
(statearr_24730[(6)] = c__24390__auto__);

return statearr_24730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));

return c__24390__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24795 = arguments.length;
switch (G__24795) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24798 = arguments.length;
switch (G__24798) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24801 = arguments.length;
switch (G__24801) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24390__auto___24851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_24827){
var state_val_24828 = (state_24827[(1)]);
if((state_val_24828 === (7))){
var inst_24823 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24829_24852 = state_24827__$1;
(statearr_24829_24852[(2)] = inst_24823);

(statearr_24829_24852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (1))){
var state_24827__$1 = state_24827;
var statearr_24830_24853 = state_24827__$1;
(statearr_24830_24853[(2)] = null);

(statearr_24830_24853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (4))){
var inst_24804 = (state_24827[(7)]);
var inst_24804__$1 = (state_24827[(2)]);
var inst_24805 = (inst_24804__$1 == null);
var state_24827__$1 = (function (){var statearr_24831 = state_24827;
(statearr_24831[(7)] = inst_24804__$1);

return statearr_24831;
})();
if(cljs.core.truth_(inst_24805)){
var statearr_24832_24854 = state_24827__$1;
(statearr_24832_24854[(1)] = (5));

} else {
var statearr_24833_24855 = state_24827__$1;
(statearr_24833_24855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (13))){
var state_24827__$1 = state_24827;
var statearr_24834_24856 = state_24827__$1;
(statearr_24834_24856[(2)] = null);

(statearr_24834_24856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (6))){
var inst_24804 = (state_24827[(7)]);
var inst_24810 = p.call(null,inst_24804);
var state_24827__$1 = state_24827;
if(cljs.core.truth_(inst_24810)){
var statearr_24835_24857 = state_24827__$1;
(statearr_24835_24857[(1)] = (9));

} else {
var statearr_24836_24858 = state_24827__$1;
(statearr_24836_24858[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (3))){
var inst_24825 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24827__$1,inst_24825);
} else {
if((state_val_24828 === (12))){
var state_24827__$1 = state_24827;
var statearr_24837_24859 = state_24827__$1;
(statearr_24837_24859[(2)] = null);

(statearr_24837_24859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (2))){
var state_24827__$1 = state_24827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24827__$1,(4),ch);
} else {
if((state_val_24828 === (11))){
var inst_24804 = (state_24827[(7)]);
var inst_24814 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24827__$1,(8),inst_24814,inst_24804);
} else {
if((state_val_24828 === (9))){
var state_24827__$1 = state_24827;
var statearr_24838_24860 = state_24827__$1;
(statearr_24838_24860[(2)] = tc);

(statearr_24838_24860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (5))){
var inst_24807 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24808 = cljs.core.async.close_BANG_.call(null,fc);
var state_24827__$1 = (function (){var statearr_24839 = state_24827;
(statearr_24839[(8)] = inst_24807);

return statearr_24839;
})();
var statearr_24840_24861 = state_24827__$1;
(statearr_24840_24861[(2)] = inst_24808);

(statearr_24840_24861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (14))){
var inst_24821 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
var statearr_24841_24862 = state_24827__$1;
(statearr_24841_24862[(2)] = inst_24821);

(statearr_24841_24862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (10))){
var state_24827__$1 = state_24827;
var statearr_24842_24863 = state_24827__$1;
(statearr_24842_24863[(2)] = fc);

(statearr_24842_24863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24828 === (8))){
var inst_24816 = (state_24827[(2)]);
var state_24827__$1 = state_24827;
if(cljs.core.truth_(inst_24816)){
var statearr_24843_24864 = state_24827__$1;
(statearr_24843_24864[(1)] = (12));

} else {
var statearr_24844_24865 = state_24827__$1;
(statearr_24844_24865[(1)] = (13));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_24845 = [null,null,null,null,null,null,null,null,null];
(statearr_24845[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_24845[(1)] = (1));

return statearr_24845;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_24827){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24846){var ex__24320__auto__ = e24846;
var statearr_24847_24866 = state_24827;
(statearr_24847_24866[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24827[(4)]))){
var statearr_24848_24867 = state_24827;
(statearr_24848_24867[(1)] = cljs.core.first.call(null,(state_24827[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24868 = state_24827;
state_24827 = G__24868;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_24827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_24827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_24849 = f__24391__auto__.call(null);
(statearr_24849[(6)] = c__24390__auto___24851);

return statearr_24849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_24890){
var state_val_24891 = (state_24890[(1)]);
if((state_val_24891 === (7))){
var inst_24886 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24892_24911 = state_24890__$1;
(statearr_24892_24911[(2)] = inst_24886);

(statearr_24892_24911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (1))){
var inst_24869 = init;
var inst_24870 = inst_24869;
var state_24890__$1 = (function (){var statearr_24893 = state_24890;
(statearr_24893[(7)] = inst_24870);

return statearr_24893;
})();
var statearr_24894_24912 = state_24890__$1;
(statearr_24894_24912[(2)] = null);

(statearr_24894_24912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (4))){
var inst_24873 = (state_24890[(8)]);
var inst_24873__$1 = (state_24890[(2)]);
var inst_24874 = (inst_24873__$1 == null);
var state_24890__$1 = (function (){var statearr_24895 = state_24890;
(statearr_24895[(8)] = inst_24873__$1);

return statearr_24895;
})();
if(cljs.core.truth_(inst_24874)){
var statearr_24896_24913 = state_24890__$1;
(statearr_24896_24913[(1)] = (5));

} else {
var statearr_24897_24914 = state_24890__$1;
(statearr_24897_24914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (6))){
var inst_24873 = (state_24890[(8)]);
var inst_24870 = (state_24890[(7)]);
var inst_24877 = (state_24890[(9)]);
var inst_24877__$1 = f.call(null,inst_24870,inst_24873);
var inst_24878 = cljs.core.reduced_QMARK_.call(null,inst_24877__$1);
var state_24890__$1 = (function (){var statearr_24898 = state_24890;
(statearr_24898[(9)] = inst_24877__$1);

return statearr_24898;
})();
if(inst_24878){
var statearr_24899_24915 = state_24890__$1;
(statearr_24899_24915[(1)] = (8));

} else {
var statearr_24900_24916 = state_24890__$1;
(statearr_24900_24916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (3))){
var inst_24888 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24890__$1,inst_24888);
} else {
if((state_val_24891 === (2))){
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24890__$1,(4),ch);
} else {
if((state_val_24891 === (9))){
var inst_24877 = (state_24890[(9)]);
var inst_24870 = inst_24877;
var state_24890__$1 = (function (){var statearr_24901 = state_24890;
(statearr_24901[(7)] = inst_24870);

return statearr_24901;
})();
var statearr_24902_24917 = state_24890__$1;
(statearr_24902_24917[(2)] = null);

(statearr_24902_24917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (5))){
var inst_24870 = (state_24890[(7)]);
var state_24890__$1 = state_24890;
var statearr_24903_24918 = state_24890__$1;
(statearr_24903_24918[(2)] = inst_24870);

(statearr_24903_24918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (10))){
var inst_24884 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24904_24919 = state_24890__$1;
(statearr_24904_24919[(2)] = inst_24884);

(statearr_24904_24919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (8))){
var inst_24877 = (state_24890[(9)]);
var inst_24880 = cljs.core.deref.call(null,inst_24877);
var state_24890__$1 = state_24890;
var statearr_24905_24920 = state_24890__$1;
(statearr_24905_24920[(2)] = inst_24880);

(statearr_24905_24920[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24317__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24317__auto____0 = (function (){
var statearr_24906 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24906[(0)] = cljs$core$async$reduce_$_state_machine__24317__auto__);

(statearr_24906[(1)] = (1));

return statearr_24906;
});
var cljs$core$async$reduce_$_state_machine__24317__auto____1 = (function (state_24890){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24907){var ex__24320__auto__ = e24907;
var statearr_24908_24921 = state_24890;
(statearr_24908_24921[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24890[(4)]))){
var statearr_24909_24922 = state_24890;
(statearr_24909_24922[(1)] = cljs.core.first.call(null,(state_24890[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24923 = state_24890;
state_24890 = G__24923;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24317__auto__ = function(state_24890){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24317__auto____1.call(this,state_24890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24317__auto____0;
cljs$core$async$reduce_$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24317__auto____1;
return cljs$core$async$reduce_$_state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_24910 = f__24391__auto__.call(null);
(statearr_24910[(6)] = c__24390__auto__);

return statearr_24910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));

return c__24390__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_24929){
var state_val_24930 = (state_24929[(1)]);
if((state_val_24930 === (1))){
var inst_24924 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24929__$1,(2),inst_24924);
} else {
if((state_val_24930 === (2))){
var inst_24926 = (state_24929[(2)]);
var inst_24927 = f__$1.call(null,inst_24926);
var state_24929__$1 = state_24929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24929__$1,inst_24927);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24317__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24317__auto____0 = (function (){
var statearr_24931 = [null,null,null,null,null,null,null];
(statearr_24931[(0)] = cljs$core$async$transduce_$_state_machine__24317__auto__);

(statearr_24931[(1)] = (1));

return statearr_24931;
});
var cljs$core$async$transduce_$_state_machine__24317__auto____1 = (function (state_24929){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24932){var ex__24320__auto__ = e24932;
var statearr_24933_24936 = state_24929;
(statearr_24933_24936[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24929[(4)]))){
var statearr_24934_24937 = state_24929;
(statearr_24934_24937[(1)] = cljs.core.first.call(null,(state_24929[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24938 = state_24929;
state_24929 = G__24938;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24317__auto__ = function(state_24929){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24317__auto____1.call(this,state_24929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24317__auto____0;
cljs$core$async$transduce_$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24317__auto____1;
return cljs$core$async$transduce_$_state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_24935 = f__24391__auto__.call(null);
(statearr_24935[(6)] = c__24390__auto__);

return statearr_24935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));

return c__24390__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__24940 = arguments.length;
switch (G__24940) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_24965){
var state_val_24966 = (state_24965[(1)]);
if((state_val_24966 === (7))){
var inst_24947 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24967_24989 = state_24965__$1;
(statearr_24967_24989[(2)] = inst_24947);

(statearr_24967_24989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (1))){
var inst_24941 = cljs.core.seq.call(null,coll);
var inst_24942 = inst_24941;
var state_24965__$1 = (function (){var statearr_24968 = state_24965;
(statearr_24968[(7)] = inst_24942);

return statearr_24968;
})();
var statearr_24969_24990 = state_24965__$1;
(statearr_24969_24990[(2)] = null);

(statearr_24969_24990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (4))){
var inst_24942 = (state_24965[(7)]);
var inst_24945 = cljs.core.first.call(null,inst_24942);
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24965__$1,(7),ch,inst_24945);
} else {
if((state_val_24966 === (13))){
var inst_24959 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24970_24991 = state_24965__$1;
(statearr_24970_24991[(2)] = inst_24959);

(statearr_24970_24991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (6))){
var inst_24950 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
if(cljs.core.truth_(inst_24950)){
var statearr_24971_24992 = state_24965__$1;
(statearr_24971_24992[(1)] = (8));

} else {
var statearr_24972_24993 = state_24965__$1;
(statearr_24972_24993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (3))){
var inst_24963 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24965__$1,inst_24963);
} else {
if((state_val_24966 === (12))){
var state_24965__$1 = state_24965;
var statearr_24973_24994 = state_24965__$1;
(statearr_24973_24994[(2)] = null);

(statearr_24973_24994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (2))){
var inst_24942 = (state_24965[(7)]);
var state_24965__$1 = state_24965;
if(cljs.core.truth_(inst_24942)){
var statearr_24974_24995 = state_24965__$1;
(statearr_24974_24995[(1)] = (4));

} else {
var statearr_24975_24996 = state_24965__$1;
(statearr_24975_24996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (11))){
var inst_24956 = cljs.core.async.close_BANG_.call(null,ch);
var state_24965__$1 = state_24965;
var statearr_24976_24997 = state_24965__$1;
(statearr_24976_24997[(2)] = inst_24956);

(statearr_24976_24997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (9))){
var state_24965__$1 = state_24965;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24977_24998 = state_24965__$1;
(statearr_24977_24998[(1)] = (11));

} else {
var statearr_24978_24999 = state_24965__$1;
(statearr_24978_24999[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (5))){
var inst_24942 = (state_24965[(7)]);
var state_24965__$1 = state_24965;
var statearr_24979_25000 = state_24965__$1;
(statearr_24979_25000[(2)] = inst_24942);

(statearr_24979_25000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (10))){
var inst_24961 = (state_24965[(2)]);
var state_24965__$1 = state_24965;
var statearr_24980_25001 = state_24965__$1;
(statearr_24980_25001[(2)] = inst_24961);

(statearr_24980_25001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24966 === (8))){
var inst_24942 = (state_24965[(7)]);
var inst_24952 = cljs.core.next.call(null,inst_24942);
var inst_24942__$1 = inst_24952;
var state_24965__$1 = (function (){var statearr_24981 = state_24965;
(statearr_24981[(7)] = inst_24942__$1);

return statearr_24981;
})();
var statearr_24982_25002 = state_24965__$1;
(statearr_24982_25002[(2)] = null);

(statearr_24982_25002[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_24983 = [null,null,null,null,null,null,null,null];
(statearr_24983[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_24983[(1)] = (1));

return statearr_24983;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_24965){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_24965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e24984){var ex__24320__auto__ = e24984;
var statearr_24985_25003 = state_24965;
(statearr_24985_25003[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_24965[(4)]))){
var statearr_24986_25004 = state_24965;
(statearr_24986_25004[(1)] = cljs.core.first.call(null,(state_24965[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25005 = state_24965;
state_24965 = G__25005;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_24965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_24965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_24987 = f__24391__auto__.call(null);
(statearr_24987[(6)] = c__24390__auto__);

return statearr_24987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));

return c__24390__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25007 = arguments.length;
switch (G__25007) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25009 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,_);
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25009.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25010 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25010.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25011 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25011.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25012 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25012.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25013 = (function (ch,cs,meta25014){
this.ch = ch;
this.cs = cs;
this.meta25014 = meta25014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25015,meta25014__$1){
var self__ = this;
var _25015__$1 = this;
return (new cljs.core.async.t_cljs$core$async25013(self__.ch,self__.cs,meta25014__$1));
}));

(cljs.core.async.t_cljs$core$async25013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25015){
var self__ = this;
var _25015__$1 = this;
return self__.meta25014;
}));

(cljs.core.async.t_cljs$core$async25013.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25013.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25013.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25013.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25013.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25014","meta25014",81958173,null)], null);
}));

(cljs.core.async.t_cljs$core$async25013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25013");

(cljs.core.async.t_cljs$core$async25013.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25013.
 */
cljs.core.async.__GT_t_cljs$core$async25013 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25013(ch__$1,cs__$1,meta25014){
return (new cljs.core.async.t_cljs$core$async25013(ch__$1,cs__$1,meta25014));
});

}

return (new cljs.core.async.t_cljs$core$async25013(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__24390__auto___25232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_25148){
var state_val_25149 = (state_25148[(1)]);
if((state_val_25149 === (7))){
var inst_25144 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25150_25233 = state_25148__$1;
(statearr_25150_25233[(2)] = inst_25144);

(statearr_25150_25233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (20))){
var inst_25049 = (state_25148[(7)]);
var inst_25061 = cljs.core.first.call(null,inst_25049);
var inst_25062 = cljs.core.nth.call(null,inst_25061,(0),null);
var inst_25063 = cljs.core.nth.call(null,inst_25061,(1),null);
var state_25148__$1 = (function (){var statearr_25151 = state_25148;
(statearr_25151[(8)] = inst_25062);

return statearr_25151;
})();
if(cljs.core.truth_(inst_25063)){
var statearr_25152_25234 = state_25148__$1;
(statearr_25152_25234[(1)] = (22));

} else {
var statearr_25153_25235 = state_25148__$1;
(statearr_25153_25235[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (27))){
var inst_25018 = (state_25148[(9)]);
var inst_25091 = (state_25148[(10)]);
var inst_25093 = (state_25148[(11)]);
var inst_25098 = (state_25148[(12)]);
var inst_25098__$1 = cljs.core._nth.call(null,inst_25091,inst_25093);
var inst_25099 = cljs.core.async.put_BANG_.call(null,inst_25098__$1,inst_25018,done);
var state_25148__$1 = (function (){var statearr_25154 = state_25148;
(statearr_25154[(12)] = inst_25098__$1);

return statearr_25154;
})();
if(cljs.core.truth_(inst_25099)){
var statearr_25155_25236 = state_25148__$1;
(statearr_25155_25236[(1)] = (30));

} else {
var statearr_25156_25237 = state_25148__$1;
(statearr_25156_25237[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (1))){
var state_25148__$1 = state_25148;
var statearr_25157_25238 = state_25148__$1;
(statearr_25157_25238[(2)] = null);

(statearr_25157_25238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (24))){
var inst_25049 = (state_25148[(7)]);
var inst_25068 = (state_25148[(2)]);
var inst_25069 = cljs.core.next.call(null,inst_25049);
var inst_25027 = inst_25069;
var inst_25028 = null;
var inst_25029 = (0);
var inst_25030 = (0);
var state_25148__$1 = (function (){var statearr_25158 = state_25148;
(statearr_25158[(13)] = inst_25028);

(statearr_25158[(14)] = inst_25030);

(statearr_25158[(15)] = inst_25068);

(statearr_25158[(16)] = inst_25029);

(statearr_25158[(17)] = inst_25027);

return statearr_25158;
})();
var statearr_25159_25239 = state_25148__$1;
(statearr_25159_25239[(2)] = null);

(statearr_25159_25239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (39))){
var state_25148__$1 = state_25148;
var statearr_25163_25240 = state_25148__$1;
(statearr_25163_25240[(2)] = null);

(statearr_25163_25240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (4))){
var inst_25018 = (state_25148[(9)]);
var inst_25018__$1 = (state_25148[(2)]);
var inst_25019 = (inst_25018__$1 == null);
var state_25148__$1 = (function (){var statearr_25164 = state_25148;
(statearr_25164[(9)] = inst_25018__$1);

return statearr_25164;
})();
if(cljs.core.truth_(inst_25019)){
var statearr_25165_25241 = state_25148__$1;
(statearr_25165_25241[(1)] = (5));

} else {
var statearr_25166_25242 = state_25148__$1;
(statearr_25166_25242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (15))){
var inst_25028 = (state_25148[(13)]);
var inst_25030 = (state_25148[(14)]);
var inst_25029 = (state_25148[(16)]);
var inst_25027 = (state_25148[(17)]);
var inst_25045 = (state_25148[(2)]);
var inst_25046 = (inst_25030 + (1));
var tmp25160 = inst_25028;
var tmp25161 = inst_25029;
var tmp25162 = inst_25027;
var inst_25027__$1 = tmp25162;
var inst_25028__$1 = tmp25160;
var inst_25029__$1 = tmp25161;
var inst_25030__$1 = inst_25046;
var state_25148__$1 = (function (){var statearr_25167 = state_25148;
(statearr_25167[(13)] = inst_25028__$1);

(statearr_25167[(14)] = inst_25030__$1);

(statearr_25167[(16)] = inst_25029__$1);

(statearr_25167[(17)] = inst_25027__$1);

(statearr_25167[(18)] = inst_25045);

return statearr_25167;
})();
var statearr_25168_25243 = state_25148__$1;
(statearr_25168_25243[(2)] = null);

(statearr_25168_25243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (21))){
var inst_25072 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25172_25244 = state_25148__$1;
(statearr_25172_25244[(2)] = inst_25072);

(statearr_25172_25244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (31))){
var inst_25098 = (state_25148[(12)]);
var inst_25102 = cljs.core.async.untap_STAR_.call(null,m,inst_25098);
var state_25148__$1 = state_25148;
var statearr_25173_25245 = state_25148__$1;
(statearr_25173_25245[(2)] = inst_25102);

(statearr_25173_25245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (32))){
var inst_25092 = (state_25148[(19)]);
var inst_25091 = (state_25148[(10)]);
var inst_25090 = (state_25148[(20)]);
var inst_25093 = (state_25148[(11)]);
var inst_25104 = (state_25148[(2)]);
var inst_25105 = (inst_25093 + (1));
var tmp25169 = inst_25092;
var tmp25170 = inst_25091;
var tmp25171 = inst_25090;
var inst_25090__$1 = tmp25171;
var inst_25091__$1 = tmp25170;
var inst_25092__$1 = tmp25169;
var inst_25093__$1 = inst_25105;
var state_25148__$1 = (function (){var statearr_25174 = state_25148;
(statearr_25174[(19)] = inst_25092__$1);

(statearr_25174[(21)] = inst_25104);

(statearr_25174[(10)] = inst_25091__$1);

(statearr_25174[(20)] = inst_25090__$1);

(statearr_25174[(11)] = inst_25093__$1);

return statearr_25174;
})();
var statearr_25175_25246 = state_25148__$1;
(statearr_25175_25246[(2)] = null);

(statearr_25175_25246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (40))){
var inst_25117 = (state_25148[(22)]);
var inst_25121 = cljs.core.async.untap_STAR_.call(null,m,inst_25117);
var state_25148__$1 = state_25148;
var statearr_25176_25247 = state_25148__$1;
(statearr_25176_25247[(2)] = inst_25121);

(statearr_25176_25247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (33))){
var inst_25108 = (state_25148[(23)]);
var inst_25110 = cljs.core.chunked_seq_QMARK_.call(null,inst_25108);
var state_25148__$1 = state_25148;
if(inst_25110){
var statearr_25177_25248 = state_25148__$1;
(statearr_25177_25248[(1)] = (36));

} else {
var statearr_25178_25249 = state_25148__$1;
(statearr_25178_25249[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (13))){
var inst_25039 = (state_25148[(24)]);
var inst_25042 = cljs.core.async.close_BANG_.call(null,inst_25039);
var state_25148__$1 = state_25148;
var statearr_25179_25250 = state_25148__$1;
(statearr_25179_25250[(2)] = inst_25042);

(statearr_25179_25250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (22))){
var inst_25062 = (state_25148[(8)]);
var inst_25065 = cljs.core.async.close_BANG_.call(null,inst_25062);
var state_25148__$1 = state_25148;
var statearr_25180_25251 = state_25148__$1;
(statearr_25180_25251[(2)] = inst_25065);

(statearr_25180_25251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (36))){
var inst_25108 = (state_25148[(23)]);
var inst_25112 = cljs.core.chunk_first.call(null,inst_25108);
var inst_25113 = cljs.core.chunk_rest.call(null,inst_25108);
var inst_25114 = cljs.core.count.call(null,inst_25112);
var inst_25090 = inst_25113;
var inst_25091 = inst_25112;
var inst_25092 = inst_25114;
var inst_25093 = (0);
var state_25148__$1 = (function (){var statearr_25181 = state_25148;
(statearr_25181[(19)] = inst_25092);

(statearr_25181[(10)] = inst_25091);

(statearr_25181[(20)] = inst_25090);

(statearr_25181[(11)] = inst_25093);

return statearr_25181;
})();
var statearr_25182_25252 = state_25148__$1;
(statearr_25182_25252[(2)] = null);

(statearr_25182_25252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (41))){
var inst_25108 = (state_25148[(23)]);
var inst_25123 = (state_25148[(2)]);
var inst_25124 = cljs.core.next.call(null,inst_25108);
var inst_25090 = inst_25124;
var inst_25091 = null;
var inst_25092 = (0);
var inst_25093 = (0);
var state_25148__$1 = (function (){var statearr_25183 = state_25148;
(statearr_25183[(19)] = inst_25092);

(statearr_25183[(10)] = inst_25091);

(statearr_25183[(20)] = inst_25090);

(statearr_25183[(11)] = inst_25093);

(statearr_25183[(25)] = inst_25123);

return statearr_25183;
})();
var statearr_25184_25253 = state_25148__$1;
(statearr_25184_25253[(2)] = null);

(statearr_25184_25253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (43))){
var state_25148__$1 = state_25148;
var statearr_25185_25254 = state_25148__$1;
(statearr_25185_25254[(2)] = null);

(statearr_25185_25254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (29))){
var inst_25132 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25186_25255 = state_25148__$1;
(statearr_25186_25255[(2)] = inst_25132);

(statearr_25186_25255[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (44))){
var inst_25141 = (state_25148[(2)]);
var state_25148__$1 = (function (){var statearr_25187 = state_25148;
(statearr_25187[(26)] = inst_25141);

return statearr_25187;
})();
var statearr_25188_25256 = state_25148__$1;
(statearr_25188_25256[(2)] = null);

(statearr_25188_25256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (6))){
var inst_25082 = (state_25148[(27)]);
var inst_25081 = cljs.core.deref.call(null,cs);
var inst_25082__$1 = cljs.core.keys.call(null,inst_25081);
var inst_25083 = cljs.core.count.call(null,inst_25082__$1);
var inst_25084 = cljs.core.reset_BANG_.call(null,dctr,inst_25083);
var inst_25089 = cljs.core.seq.call(null,inst_25082__$1);
var inst_25090 = inst_25089;
var inst_25091 = null;
var inst_25092 = (0);
var inst_25093 = (0);
var state_25148__$1 = (function (){var statearr_25189 = state_25148;
(statearr_25189[(19)] = inst_25092);

(statearr_25189[(10)] = inst_25091);

(statearr_25189[(20)] = inst_25090);

(statearr_25189[(28)] = inst_25084);

(statearr_25189[(11)] = inst_25093);

(statearr_25189[(27)] = inst_25082__$1);

return statearr_25189;
})();
var statearr_25190_25257 = state_25148__$1;
(statearr_25190_25257[(2)] = null);

(statearr_25190_25257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (28))){
var inst_25090 = (state_25148[(20)]);
var inst_25108 = (state_25148[(23)]);
var inst_25108__$1 = cljs.core.seq.call(null,inst_25090);
var state_25148__$1 = (function (){var statearr_25191 = state_25148;
(statearr_25191[(23)] = inst_25108__$1);

return statearr_25191;
})();
if(inst_25108__$1){
var statearr_25192_25258 = state_25148__$1;
(statearr_25192_25258[(1)] = (33));

} else {
var statearr_25193_25259 = state_25148__$1;
(statearr_25193_25259[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (25))){
var inst_25092 = (state_25148[(19)]);
var inst_25093 = (state_25148[(11)]);
var inst_25095 = (inst_25093 < inst_25092);
var inst_25096 = inst_25095;
var state_25148__$1 = state_25148;
if(cljs.core.truth_(inst_25096)){
var statearr_25194_25260 = state_25148__$1;
(statearr_25194_25260[(1)] = (27));

} else {
var statearr_25195_25261 = state_25148__$1;
(statearr_25195_25261[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (34))){
var state_25148__$1 = state_25148;
var statearr_25196_25262 = state_25148__$1;
(statearr_25196_25262[(2)] = null);

(statearr_25196_25262[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (17))){
var state_25148__$1 = state_25148;
var statearr_25197_25263 = state_25148__$1;
(statearr_25197_25263[(2)] = null);

(statearr_25197_25263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (3))){
var inst_25146 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25148__$1,inst_25146);
} else {
if((state_val_25149 === (12))){
var inst_25077 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25198_25264 = state_25148__$1;
(statearr_25198_25264[(2)] = inst_25077);

(statearr_25198_25264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (2))){
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25148__$1,(4),ch);
} else {
if((state_val_25149 === (23))){
var state_25148__$1 = state_25148;
var statearr_25199_25265 = state_25148__$1;
(statearr_25199_25265[(2)] = null);

(statearr_25199_25265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (35))){
var inst_25130 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25200_25266 = state_25148__$1;
(statearr_25200_25266[(2)] = inst_25130);

(statearr_25200_25266[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (19))){
var inst_25049 = (state_25148[(7)]);
var inst_25053 = cljs.core.chunk_first.call(null,inst_25049);
var inst_25054 = cljs.core.chunk_rest.call(null,inst_25049);
var inst_25055 = cljs.core.count.call(null,inst_25053);
var inst_25027 = inst_25054;
var inst_25028 = inst_25053;
var inst_25029 = inst_25055;
var inst_25030 = (0);
var state_25148__$1 = (function (){var statearr_25201 = state_25148;
(statearr_25201[(13)] = inst_25028);

(statearr_25201[(14)] = inst_25030);

(statearr_25201[(16)] = inst_25029);

(statearr_25201[(17)] = inst_25027);

return statearr_25201;
})();
var statearr_25202_25267 = state_25148__$1;
(statearr_25202_25267[(2)] = null);

(statearr_25202_25267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (11))){
var inst_25049 = (state_25148[(7)]);
var inst_25027 = (state_25148[(17)]);
var inst_25049__$1 = cljs.core.seq.call(null,inst_25027);
var state_25148__$1 = (function (){var statearr_25203 = state_25148;
(statearr_25203[(7)] = inst_25049__$1);

return statearr_25203;
})();
if(inst_25049__$1){
var statearr_25204_25268 = state_25148__$1;
(statearr_25204_25268[(1)] = (16));

} else {
var statearr_25205_25269 = state_25148__$1;
(statearr_25205_25269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (9))){
var inst_25079 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25206_25270 = state_25148__$1;
(statearr_25206_25270[(2)] = inst_25079);

(statearr_25206_25270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (5))){
var inst_25025 = cljs.core.deref.call(null,cs);
var inst_25026 = cljs.core.seq.call(null,inst_25025);
var inst_25027 = inst_25026;
var inst_25028 = null;
var inst_25029 = (0);
var inst_25030 = (0);
var state_25148__$1 = (function (){var statearr_25207 = state_25148;
(statearr_25207[(13)] = inst_25028);

(statearr_25207[(14)] = inst_25030);

(statearr_25207[(16)] = inst_25029);

(statearr_25207[(17)] = inst_25027);

return statearr_25207;
})();
var statearr_25208_25271 = state_25148__$1;
(statearr_25208_25271[(2)] = null);

(statearr_25208_25271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (14))){
var state_25148__$1 = state_25148;
var statearr_25209_25272 = state_25148__$1;
(statearr_25209_25272[(2)] = null);

(statearr_25209_25272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (45))){
var inst_25138 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25210_25273 = state_25148__$1;
(statearr_25210_25273[(2)] = inst_25138);

(statearr_25210_25273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (26))){
var inst_25082 = (state_25148[(27)]);
var inst_25134 = (state_25148[(2)]);
var inst_25135 = cljs.core.seq.call(null,inst_25082);
var state_25148__$1 = (function (){var statearr_25211 = state_25148;
(statearr_25211[(29)] = inst_25134);

return statearr_25211;
})();
if(inst_25135){
var statearr_25212_25274 = state_25148__$1;
(statearr_25212_25274[(1)] = (42));

} else {
var statearr_25213_25275 = state_25148__$1;
(statearr_25213_25275[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (16))){
var inst_25049 = (state_25148[(7)]);
var inst_25051 = cljs.core.chunked_seq_QMARK_.call(null,inst_25049);
var state_25148__$1 = state_25148;
if(inst_25051){
var statearr_25214_25276 = state_25148__$1;
(statearr_25214_25276[(1)] = (19));

} else {
var statearr_25215_25277 = state_25148__$1;
(statearr_25215_25277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (38))){
var inst_25127 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25216_25278 = state_25148__$1;
(statearr_25216_25278[(2)] = inst_25127);

(statearr_25216_25278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (30))){
var state_25148__$1 = state_25148;
var statearr_25217_25279 = state_25148__$1;
(statearr_25217_25279[(2)] = null);

(statearr_25217_25279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (10))){
var inst_25028 = (state_25148[(13)]);
var inst_25030 = (state_25148[(14)]);
var inst_25038 = cljs.core._nth.call(null,inst_25028,inst_25030);
var inst_25039 = cljs.core.nth.call(null,inst_25038,(0),null);
var inst_25040 = cljs.core.nth.call(null,inst_25038,(1),null);
var state_25148__$1 = (function (){var statearr_25218 = state_25148;
(statearr_25218[(24)] = inst_25039);

return statearr_25218;
})();
if(cljs.core.truth_(inst_25040)){
var statearr_25219_25280 = state_25148__$1;
(statearr_25219_25280[(1)] = (13));

} else {
var statearr_25220_25281 = state_25148__$1;
(statearr_25220_25281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (18))){
var inst_25075 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25221_25282 = state_25148__$1;
(statearr_25221_25282[(2)] = inst_25075);

(statearr_25221_25282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (42))){
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25148__$1,(45),dchan);
} else {
if((state_val_25149 === (37))){
var inst_25018 = (state_25148[(9)]);
var inst_25117 = (state_25148[(22)]);
var inst_25108 = (state_25148[(23)]);
var inst_25117__$1 = cljs.core.first.call(null,inst_25108);
var inst_25118 = cljs.core.async.put_BANG_.call(null,inst_25117__$1,inst_25018,done);
var state_25148__$1 = (function (){var statearr_25222 = state_25148;
(statearr_25222[(22)] = inst_25117__$1);

return statearr_25222;
})();
if(cljs.core.truth_(inst_25118)){
var statearr_25223_25283 = state_25148__$1;
(statearr_25223_25283[(1)] = (39));

} else {
var statearr_25224_25284 = state_25148__$1;
(statearr_25224_25284[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (8))){
var inst_25030 = (state_25148[(14)]);
var inst_25029 = (state_25148[(16)]);
var inst_25032 = (inst_25030 < inst_25029);
var inst_25033 = inst_25032;
var state_25148__$1 = state_25148;
if(cljs.core.truth_(inst_25033)){
var statearr_25225_25285 = state_25148__$1;
(statearr_25225_25285[(1)] = (10));

} else {
var statearr_25226_25286 = state_25148__$1;
(statearr_25226_25286[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var cljs$core$async$mult_$_state_machine__24317__auto__ = null;
var cljs$core$async$mult_$_state_machine__24317__auto____0 = (function (){
var statearr_25227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25227[(0)] = cljs$core$async$mult_$_state_machine__24317__auto__);

(statearr_25227[(1)] = (1));

return statearr_25227;
});
var cljs$core$async$mult_$_state_machine__24317__auto____1 = (function (state_25148){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_25148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e25228){var ex__24320__auto__ = e25228;
var statearr_25229_25287 = state_25148;
(statearr_25229_25287[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_25148[(4)]))){
var statearr_25230_25288 = state_25148;
(statearr_25230_25288[(1)] = cljs.core.first.call(null,(state_25148[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25289 = state_25148;
state_25148 = G__25289;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24317__auto__ = function(state_25148){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24317__auto____1.call(this,state_25148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24317__auto____0;
cljs$core$async$mult_$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24317__auto____1;
return cljs$core$async$mult_$_state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_25231 = f__24391__auto__.call(null);
(statearr_25231[(6)] = c__24390__auto___25232);

return statearr_25231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25291 = arguments.length;
switch (G__25291) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_25293 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25293.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25294 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25294.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25295 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25295.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25296 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,state_map);
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25296.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25297 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,mode);
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25297.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___25307 = arguments.length;
var i__4772__auto___25308 = (0);
while(true){
if((i__4772__auto___25308 < len__4771__auto___25307)){
args__4777__auto__.push((arguments[i__4772__auto___25308]));

var G__25309 = (i__4772__auto___25308 + (1));
i__4772__auto___25308 = G__25309;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25302){
var map__25303 = p__25302;
var map__25303__$1 = cljs.core.__destructure_map.call(null,map__25303);
var opts = map__25303__$1;
var statearr_25304_25310 = state;
(statearr_25304_25310[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25305_25311 = state;
(statearr_25305_25311[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25306_25312 = state;
(statearr_25306_25312[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25298){
var G__25299 = cljs.core.first.call(null,seq25298);
var seq25298__$1 = cljs.core.next.call(null,seq25298);
var G__25300 = cljs.core.first.call(null,seq25298__$1);
var seq25298__$2 = cljs.core.next.call(null,seq25298__$1);
var G__25301 = cljs.core.first.call(null,seq25298__$2);
var seq25298__$3 = cljs.core.next.call(null,seq25298__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25299,G__25300,G__25301,seq25298__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25313 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25314){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25314 = meta25314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25315,meta25314__$1){
var self__ = this;
var _25315__$1 = this;
return (new cljs.core.async.t_cljs$core$async25313(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25314__$1));
}));

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25315){
var self__ = this;
var _25315__$1 = this;
return self__.meta25314;
}));

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25314","meta25314",-1858943416,null)], null);
}));

(cljs.core.async.t_cljs$core$async25313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25313");

(cljs.core.async.t_cljs$core$async25313.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25313.
 */
cljs.core.async.__GT_t_cljs$core$async25313 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25314){
return (new cljs.core.async.t_cljs$core$async25313(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25314));
});

}

return (new cljs.core.async.t_cljs$core$async25313(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24390__auto___25413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_25377){
var state_val_25378 = (state_25377[(1)]);
if((state_val_25378 === (7))){
var inst_25373 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25379_25414 = state_25377__$1;
(statearr_25379_25414[(2)] = inst_25373);

(statearr_25379_25414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (20))){
var inst_25367 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25380_25415 = state_25377__$1;
(statearr_25380_25415[(2)] = inst_25367);

(statearr_25380_25415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (1))){
var inst_25319 = calc_state.call(null);
var inst_25320 = cljs.core.__destructure_map.call(null,inst_25319);
var inst_25321 = cljs.core.get.call(null,inst_25320,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25322 = cljs.core.get.call(null,inst_25320,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25323 = cljs.core.get.call(null,inst_25320,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25324 = inst_25319;
var state_25377__$1 = (function (){var statearr_25381 = state_25377;
(statearr_25381[(7)] = inst_25324);

(statearr_25381[(8)] = inst_25322);

(statearr_25381[(9)] = inst_25321);

(statearr_25381[(10)] = inst_25323);

return statearr_25381;
})();
var statearr_25382_25416 = state_25377__$1;
(statearr_25382_25416[(2)] = null);

(statearr_25382_25416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (4))){
var inst_25336 = (state_25377[(11)]);
var inst_25337 = (state_25377[(12)]);
var inst_25335 = (state_25377[(2)]);
var inst_25336__$1 = cljs.core.nth.call(null,inst_25335,(0),null);
var inst_25337__$1 = cljs.core.nth.call(null,inst_25335,(1),null);
var inst_25338 = (inst_25336__$1 == null);
var inst_25339 = cljs.core._EQ_.call(null,inst_25337__$1,change);
var inst_25340 = ((inst_25338) || (inst_25339));
var state_25377__$1 = (function (){var statearr_25383 = state_25377;
(statearr_25383[(11)] = inst_25336__$1);

(statearr_25383[(12)] = inst_25337__$1);

return statearr_25383;
})();
if(cljs.core.truth_(inst_25340)){
var statearr_25384_25417 = state_25377__$1;
(statearr_25384_25417[(1)] = (5));

} else {
var statearr_25385_25418 = state_25377__$1;
(statearr_25385_25418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (15))){
var inst_25327 = (state_25377[(13)]);
var inst_25324 = inst_25327;
var state_25377__$1 = (function (){var statearr_25386 = state_25377;
(statearr_25386[(7)] = inst_25324);

return statearr_25386;
})();
var statearr_25387_25419 = state_25377__$1;
(statearr_25387_25419[(2)] = null);

(statearr_25387_25419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (13))){
var inst_25359 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
if(cljs.core.truth_(inst_25359)){
var statearr_25388_25420 = state_25377__$1;
(statearr_25388_25420[(1)] = (14));

} else {
var statearr_25389_25421 = state_25377__$1;
(statearr_25389_25421[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (6))){
var inst_25337 = (state_25377[(12)]);
var inst_25351 = (state_25377[(14)]);
var inst_25328 = (state_25377[(15)]);
var inst_25351__$1 = inst_25328.call(null,inst_25337);
var state_25377__$1 = (function (){var statearr_25390 = state_25377;
(statearr_25390[(14)] = inst_25351__$1);

return statearr_25390;
})();
if(cljs.core.truth_(inst_25351__$1)){
var statearr_25391_25422 = state_25377__$1;
(statearr_25391_25422[(1)] = (11));

} else {
var statearr_25392_25423 = state_25377__$1;
(statearr_25392_25423[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (17))){
var inst_25362 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
if(cljs.core.truth_(inst_25362)){
var statearr_25393_25424 = state_25377__$1;
(statearr_25393_25424[(1)] = (18));

} else {
var statearr_25394_25425 = state_25377__$1;
(statearr_25394_25425[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (3))){
var inst_25375 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25377__$1,inst_25375);
} else {
if((state_val_25378 === (12))){
var inst_25337 = (state_25377[(12)]);
var inst_25329 = (state_25377[(16)]);
var inst_25328 = (state_25377[(15)]);
var inst_25354 = cljs.core.empty_QMARK_.call(null,inst_25328);
var inst_25355 = inst_25329.call(null,inst_25337);
var inst_25356 = cljs.core.not.call(null,inst_25355);
var inst_25357 = ((inst_25354) && (inst_25356));
var state_25377__$1 = state_25377;
var statearr_25395_25426 = state_25377__$1;
(statearr_25395_25426[(2)] = inst_25357);

(statearr_25395_25426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (2))){
var inst_25324 = (state_25377[(7)]);
var inst_25327 = (state_25377[(13)]);
var inst_25327__$1 = cljs.core.__destructure_map.call(null,inst_25324);
var inst_25328 = cljs.core.get.call(null,inst_25327__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25329 = cljs.core.get.call(null,inst_25327__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25330 = cljs.core.get.call(null,inst_25327__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25377__$1 = (function (){var statearr_25396 = state_25377;
(statearr_25396[(16)] = inst_25329);

(statearr_25396[(13)] = inst_25327__$1);

(statearr_25396[(15)] = inst_25328);

return statearr_25396;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25377__$1,(4),inst_25330);
} else {
if((state_val_25378 === (19))){
var state_25377__$1 = state_25377;
var statearr_25397_25427 = state_25377__$1;
(statearr_25397_25427[(2)] = null);

(statearr_25397_25427[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (11))){
var inst_25351 = (state_25377[(14)]);
var state_25377__$1 = state_25377;
var statearr_25398_25428 = state_25377__$1;
(statearr_25398_25428[(2)] = inst_25351);

(statearr_25398_25428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (9))){
var state_25377__$1 = state_25377;
var statearr_25399_25429 = state_25377__$1;
(statearr_25399_25429[(2)] = null);

(statearr_25399_25429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (5))){
var inst_25336 = (state_25377[(11)]);
var inst_25342 = (inst_25336 == null);
var state_25377__$1 = state_25377;
if(cljs.core.truth_(inst_25342)){
var statearr_25400_25430 = state_25377__$1;
(statearr_25400_25430[(1)] = (8));

} else {
var statearr_25401_25431 = state_25377__$1;
(statearr_25401_25431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (14))){
var inst_25336 = (state_25377[(11)]);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25377__$1,(17),out,inst_25336);
} else {
if((state_val_25378 === (16))){
var inst_25371 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25402_25432 = state_25377__$1;
(statearr_25402_25432[(2)] = inst_25371);

(statearr_25402_25432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (10))){
var inst_25347 = (state_25377[(2)]);
var inst_25348 = calc_state.call(null);
var inst_25324 = inst_25348;
var state_25377__$1 = (function (){var statearr_25403 = state_25377;
(statearr_25403[(7)] = inst_25324);

(statearr_25403[(17)] = inst_25347);

return statearr_25403;
})();
var statearr_25404_25433 = state_25377__$1;
(statearr_25404_25433[(2)] = null);

(statearr_25404_25433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (18))){
var inst_25327 = (state_25377[(13)]);
var inst_25324 = inst_25327;
var state_25377__$1 = (function (){var statearr_25405 = state_25377;
(statearr_25405[(7)] = inst_25324);

return statearr_25405;
})();
var statearr_25406_25434 = state_25377__$1;
(statearr_25406_25434[(2)] = null);

(statearr_25406_25434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (8))){
var inst_25337 = (state_25377[(12)]);
var inst_25344 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25337);
var state_25377__$1 = state_25377;
var statearr_25407_25435 = state_25377__$1;
(statearr_25407_25435[(2)] = inst_25344);

(statearr_25407_25435[(1)] = (10));


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
}
}
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
var cljs$core$async$mix_$_state_machine__24317__auto__ = null;
var cljs$core$async$mix_$_state_machine__24317__auto____0 = (function (){
var statearr_25408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25408[(0)] = cljs$core$async$mix_$_state_machine__24317__auto__);

(statearr_25408[(1)] = (1));

return statearr_25408;
});
var cljs$core$async$mix_$_state_machine__24317__auto____1 = (function (state_25377){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_25377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e25409){var ex__24320__auto__ = e25409;
var statearr_25410_25436 = state_25377;
(statearr_25410_25436[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_25377[(4)]))){
var statearr_25411_25437 = state_25377;
(statearr_25411_25437[(1)] = cljs.core.first.call(null,(state_25377[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25438 = state_25377;
state_25377 = G__25438;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24317__auto__ = function(state_25377){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24317__auto____1.call(this,state_25377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24317__auto____0;
cljs$core$async$mix_$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24317__auto____1;
return cljs$core$async$mix_$_state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_25412 = f__24391__auto__.call(null);
(statearr_25412[(6)] = c__24390__auto___25413);

return statearr_25412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_25441 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25441.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25442 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25442.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_25443 = (function() {
var G__25444 = null;
var G__25444__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__25444__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__25444 = function(p,v){
switch(arguments.length){
case 1:
return G__25444__1.call(this,p);
case 2:
return G__25444__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25444.cljs$core$IFn$_invoke$arity$1 = G__25444__1;
G__25444.cljs$core$IFn$_invoke$arity$2 = G__25444__2;
return G__25444;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25440 = arguments.length;
switch (G__25440) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25443.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_25443.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25448 = arguments.length;
switch (G__25448) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__25446_SHARP_){
if(cljs.core.truth_(p1__25446_SHARP_.call(null,topic))){
return p1__25446_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25446_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25449 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25450){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25450 = meta25450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25451,meta25450__$1){
var self__ = this;
var _25451__$1 = this;
return (new cljs.core.async.t_cljs$core$async25449(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25450__$1));
}));

(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25451){
var self__ = this;
var _25451__$1 = this;
return self__.meta25450;
}));

(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async25449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async25449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25450","meta25450",-1820043096,null)], null);
}));

(cljs.core.async.t_cljs$core$async25449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25449");

(cljs.core.async.t_cljs$core$async25449.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25449.
 */
cljs.core.async.__GT_t_cljs$core$async25449 = (function cljs$core$async$__GT_t_cljs$core$async25449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25450){
return (new cljs.core.async.t_cljs$core$async25449(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25450));
});

}

return (new cljs.core.async.t_cljs$core$async25449(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24390__auto___25570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_25523){
var state_val_25524 = (state_25523[(1)]);
if((state_val_25524 === (7))){
var inst_25519 = (state_25523[(2)]);
var state_25523__$1 = state_25523;
var statearr_25525_25571 = state_25523__$1;
(statearr_25525_25571[(2)] = inst_25519);

(statearr_25525_25571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (20))){
var state_25523__$1 = state_25523;
var statearr_25526_25572 = state_25523__$1;
(statearr_25526_25572[(2)] = null);

(statearr_25526_25572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (1))){
var state_25523__$1 = state_25523;
var statearr_25527_25573 = state_25523__$1;
(statearr_25527_25573[(2)] = null);

(statearr_25527_25573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (24))){
var inst_25502 = (state_25523[(7)]);
var inst_25511 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25502);
var state_25523__$1 = state_25523;
var statearr_25528_25574 = state_25523__$1;
(statearr_25528_25574[(2)] = inst_25511);

(statearr_25528_25574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (4))){
var inst_25454 = (state_25523[(8)]);
var inst_25454__$1 = (state_25523[(2)]);
var inst_25455 = (inst_25454__$1 == null);
var state_25523__$1 = (function (){var statearr_25529 = state_25523;
(statearr_25529[(8)] = inst_25454__$1);

return statearr_25529;
})();
if(cljs.core.truth_(inst_25455)){
var statearr_25530_25575 = state_25523__$1;
(statearr_25530_25575[(1)] = (5));

} else {
var statearr_25531_25576 = state_25523__$1;
(statearr_25531_25576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (15))){
var inst_25496 = (state_25523[(2)]);
var state_25523__$1 = state_25523;
var statearr_25532_25577 = state_25523__$1;
(statearr_25532_25577[(2)] = inst_25496);

(statearr_25532_25577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (21))){
var inst_25516 = (state_25523[(2)]);
var state_25523__$1 = (function (){var statearr_25533 = state_25523;
(statearr_25533[(9)] = inst_25516);

return statearr_25533;
})();
var statearr_25534_25578 = state_25523__$1;
(statearr_25534_25578[(2)] = null);

(statearr_25534_25578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (13))){
var inst_25478 = (state_25523[(10)]);
var inst_25480 = cljs.core.chunked_seq_QMARK_.call(null,inst_25478);
var state_25523__$1 = state_25523;
if(inst_25480){
var statearr_25535_25579 = state_25523__$1;
(statearr_25535_25579[(1)] = (16));

} else {
var statearr_25536_25580 = state_25523__$1;
(statearr_25536_25580[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (22))){
var inst_25508 = (state_25523[(2)]);
var state_25523__$1 = state_25523;
if(cljs.core.truth_(inst_25508)){
var statearr_25537_25581 = state_25523__$1;
(statearr_25537_25581[(1)] = (23));

} else {
var statearr_25538_25582 = state_25523__$1;
(statearr_25538_25582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (6))){
var inst_25502 = (state_25523[(7)]);
var inst_25454 = (state_25523[(8)]);
var inst_25504 = (state_25523[(11)]);
var inst_25502__$1 = topic_fn.call(null,inst_25454);
var inst_25503 = cljs.core.deref.call(null,mults);
var inst_25504__$1 = cljs.core.get.call(null,inst_25503,inst_25502__$1);
var state_25523__$1 = (function (){var statearr_25539 = state_25523;
(statearr_25539[(7)] = inst_25502__$1);

(statearr_25539[(11)] = inst_25504__$1);

return statearr_25539;
})();
if(cljs.core.truth_(inst_25504__$1)){
var statearr_25540_25583 = state_25523__$1;
(statearr_25540_25583[(1)] = (19));

} else {
var statearr_25541_25584 = state_25523__$1;
(statearr_25541_25584[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (25))){
var inst_25513 = (state_25523[(2)]);
var state_25523__$1 = state_25523;
var statearr_25542_25585 = state_25523__$1;
(statearr_25542_25585[(2)] = inst_25513);

(statearr_25542_25585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (17))){
var inst_25478 = (state_25523[(10)]);
var inst_25487 = cljs.core.first.call(null,inst_25478);
var inst_25488 = cljs.core.async.muxch_STAR_.call(null,inst_25487);
var inst_25489 = cljs.core.async.close_BANG_.call(null,inst_25488);
var inst_25490 = cljs.core.next.call(null,inst_25478);
var inst_25464 = inst_25490;
var inst_25465 = null;
var inst_25466 = (0);
var inst_25467 = (0);
var state_25523__$1 = (function (){var statearr_25543 = state_25523;
(statearr_25543[(12)] = inst_25465);

(statearr_25543[(13)] = inst_25467);

(statearr_25543[(14)] = inst_25489);

(statearr_25543[(15)] = inst_25466);

(statearr_25543[(16)] = inst_25464);

return statearr_25543;
})();
var statearr_25544_25586 = state_25523__$1;
(statearr_25544_25586[(2)] = null);

(statearr_25544_25586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (3))){
var inst_25521 = (state_25523[(2)]);
var state_25523__$1 = state_25523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25523__$1,inst_25521);
} else {
if((state_val_25524 === (12))){
var inst_25498 = (state_25523[(2)]);
var state_25523__$1 = state_25523;
var statearr_25545_25587 = state_25523__$1;
(statearr_25545_25587[(2)] = inst_25498);

(statearr_25545_25587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (2))){
var state_25523__$1 = state_25523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25523__$1,(4),ch);
} else {
if((state_val_25524 === (23))){
var state_25523__$1 = state_25523;
var statearr_25546_25588 = state_25523__$1;
(statearr_25546_25588[(2)] = null);

(statearr_25546_25588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (19))){
var inst_25454 = (state_25523[(8)]);
var inst_25504 = (state_25523[(11)]);
var inst_25506 = cljs.core.async.muxch_STAR_.call(null,inst_25504);
var state_25523__$1 = state_25523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25523__$1,(22),inst_25506,inst_25454);
} else {
if((state_val_25524 === (11))){
var inst_25478 = (state_25523[(10)]);
var inst_25464 = (state_25523[(16)]);
var inst_25478__$1 = cljs.core.seq.call(null,inst_25464);
var state_25523__$1 = (function (){var statearr_25547 = state_25523;
(statearr_25547[(10)] = inst_25478__$1);

return statearr_25547;
})();
if(inst_25478__$1){
var statearr_25548_25589 = state_25523__$1;
(statearr_25548_25589[(1)] = (13));

} else {
var statearr_25549_25590 = state_25523__$1;
(statearr_25549_25590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (9))){
var inst_25500 = (state_25523[(2)]);
var state_25523__$1 = state_25523;
var statearr_25550_25591 = state_25523__$1;
(statearr_25550_25591[(2)] = inst_25500);

(statearr_25550_25591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (5))){
var inst_25461 = cljs.core.deref.call(null,mults);
var inst_25462 = cljs.core.vals.call(null,inst_25461);
var inst_25463 = cljs.core.seq.call(null,inst_25462);
var inst_25464 = inst_25463;
var inst_25465 = null;
var inst_25466 = (0);
var inst_25467 = (0);
var state_25523__$1 = (function (){var statearr_25551 = state_25523;
(statearr_25551[(12)] = inst_25465);

(statearr_25551[(13)] = inst_25467);

(statearr_25551[(15)] = inst_25466);

(statearr_25551[(16)] = inst_25464);

return statearr_25551;
})();
var statearr_25552_25592 = state_25523__$1;
(statearr_25552_25592[(2)] = null);

(statearr_25552_25592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (14))){
var state_25523__$1 = state_25523;
var statearr_25556_25593 = state_25523__$1;
(statearr_25556_25593[(2)] = null);

(statearr_25556_25593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (16))){
var inst_25478 = (state_25523[(10)]);
var inst_25482 = cljs.core.chunk_first.call(null,inst_25478);
var inst_25483 = cljs.core.chunk_rest.call(null,inst_25478);
var inst_25484 = cljs.core.count.call(null,inst_25482);
var inst_25464 = inst_25483;
var inst_25465 = inst_25482;
var inst_25466 = inst_25484;
var inst_25467 = (0);
var state_25523__$1 = (function (){var statearr_25557 = state_25523;
(statearr_25557[(12)] = inst_25465);

(statearr_25557[(13)] = inst_25467);

(statearr_25557[(15)] = inst_25466);

(statearr_25557[(16)] = inst_25464);

return statearr_25557;
})();
var statearr_25558_25594 = state_25523__$1;
(statearr_25558_25594[(2)] = null);

(statearr_25558_25594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (10))){
var inst_25465 = (state_25523[(12)]);
var inst_25467 = (state_25523[(13)]);
var inst_25466 = (state_25523[(15)]);
var inst_25464 = (state_25523[(16)]);
var inst_25472 = cljs.core._nth.call(null,inst_25465,inst_25467);
var inst_25473 = cljs.core.async.muxch_STAR_.call(null,inst_25472);
var inst_25474 = cljs.core.async.close_BANG_.call(null,inst_25473);
var inst_25475 = (inst_25467 + (1));
var tmp25553 = inst_25465;
var tmp25554 = inst_25466;
var tmp25555 = inst_25464;
var inst_25464__$1 = tmp25555;
var inst_25465__$1 = tmp25553;
var inst_25466__$1 = tmp25554;
var inst_25467__$1 = inst_25475;
var state_25523__$1 = (function (){var statearr_25559 = state_25523;
(statearr_25559[(12)] = inst_25465__$1);

(statearr_25559[(13)] = inst_25467__$1);

(statearr_25559[(15)] = inst_25466__$1);

(statearr_25559[(17)] = inst_25474);

(statearr_25559[(16)] = inst_25464__$1);

return statearr_25559;
})();
var statearr_25560_25595 = state_25523__$1;
(statearr_25560_25595[(2)] = null);

(statearr_25560_25595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (18))){
var inst_25493 = (state_25523[(2)]);
var state_25523__$1 = state_25523;
var statearr_25561_25596 = state_25523__$1;
(statearr_25561_25596[(2)] = inst_25493);

(statearr_25561_25596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25524 === (8))){
var inst_25467 = (state_25523[(13)]);
var inst_25466 = (state_25523[(15)]);
var inst_25469 = (inst_25467 < inst_25466);
var inst_25470 = inst_25469;
var state_25523__$1 = state_25523;
if(cljs.core.truth_(inst_25470)){
var statearr_25562_25597 = state_25523__$1;
(statearr_25562_25597[(1)] = (10));

} else {
var statearr_25563_25598 = state_25523__$1;
(statearr_25563_25598[(1)] = (11));

}

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
}
}
}
}
}
}
}
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
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_25564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25564[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_25564[(1)] = (1));

return statearr_25564;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_25523){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_25523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e25565){var ex__24320__auto__ = e25565;
var statearr_25566_25599 = state_25523;
(statearr_25566_25599[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_25523[(4)]))){
var statearr_25567_25600 = state_25523;
(statearr_25567_25600[(1)] = cljs.core.first.call(null,(state_25523[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25601 = state_25523;
state_25523 = G__25601;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_25523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_25523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_25568 = f__24391__auto__.call(null);
(statearr_25568[(6)] = c__24390__auto___25570);

return statearr_25568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25603 = arguments.length;
switch (G__25603) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25606 = arguments.length;
switch (G__25606) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25609 = arguments.length;
switch (G__25609) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__24390__auto___25687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_25652){
var state_val_25653 = (state_25652[(1)]);
if((state_val_25653 === (7))){
var state_25652__$1 = state_25652;
var statearr_25654_25688 = state_25652__$1;
(statearr_25654_25688[(2)] = null);

(statearr_25654_25688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (1))){
var state_25652__$1 = state_25652;
var statearr_25655_25689 = state_25652__$1;
(statearr_25655_25689[(2)] = null);

(statearr_25655_25689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (4))){
var inst_25612 = (state_25652[(7)]);
var inst_25613 = (state_25652[(8)]);
var inst_25615 = (inst_25613 < inst_25612);
var state_25652__$1 = state_25652;
if(cljs.core.truth_(inst_25615)){
var statearr_25656_25690 = state_25652__$1;
(statearr_25656_25690[(1)] = (6));

} else {
var statearr_25657_25691 = state_25652__$1;
(statearr_25657_25691[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (15))){
var inst_25638 = (state_25652[(9)]);
var inst_25643 = cljs.core.apply.call(null,f,inst_25638);
var state_25652__$1 = state_25652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25652__$1,(17),out,inst_25643);
} else {
if((state_val_25653 === (13))){
var inst_25638 = (state_25652[(9)]);
var inst_25638__$1 = (state_25652[(2)]);
var inst_25639 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25638__$1);
var state_25652__$1 = (function (){var statearr_25658 = state_25652;
(statearr_25658[(9)] = inst_25638__$1);

return statearr_25658;
})();
if(cljs.core.truth_(inst_25639)){
var statearr_25659_25692 = state_25652__$1;
(statearr_25659_25692[(1)] = (14));

} else {
var statearr_25660_25693 = state_25652__$1;
(statearr_25660_25693[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (6))){
var state_25652__$1 = state_25652;
var statearr_25661_25694 = state_25652__$1;
(statearr_25661_25694[(2)] = null);

(statearr_25661_25694[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (17))){
var inst_25645 = (state_25652[(2)]);
var state_25652__$1 = (function (){var statearr_25663 = state_25652;
(statearr_25663[(10)] = inst_25645);

return statearr_25663;
})();
var statearr_25664_25695 = state_25652__$1;
(statearr_25664_25695[(2)] = null);

(statearr_25664_25695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (3))){
var inst_25650 = (state_25652[(2)]);
var state_25652__$1 = state_25652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25652__$1,inst_25650);
} else {
if((state_val_25653 === (12))){
var _ = (function (){var statearr_25665 = state_25652;
(statearr_25665[(4)] = cljs.core.rest.call(null,(state_25652[(4)])));

return statearr_25665;
})();
var state_25652__$1 = state_25652;
var ex25662 = (state_25652__$1[(2)]);
var statearr_25666_25696 = state_25652__$1;
(statearr_25666_25696[(5)] = ex25662);


if((ex25662 instanceof Object)){
var statearr_25667_25697 = state_25652__$1;
(statearr_25667_25697[(1)] = (11));

(statearr_25667_25697[(5)] = null);

} else {
throw ex25662;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (2))){
var inst_25611 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25612 = cnt;
var inst_25613 = (0);
var state_25652__$1 = (function (){var statearr_25668 = state_25652;
(statearr_25668[(7)] = inst_25612);

(statearr_25668[(8)] = inst_25613);

(statearr_25668[(11)] = inst_25611);

return statearr_25668;
})();
var statearr_25669_25698 = state_25652__$1;
(statearr_25669_25698[(2)] = null);

(statearr_25669_25698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (11))){
var inst_25617 = (state_25652[(2)]);
var inst_25618 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25652__$1 = (function (){var statearr_25670 = state_25652;
(statearr_25670[(12)] = inst_25617);

return statearr_25670;
})();
var statearr_25671_25699 = state_25652__$1;
(statearr_25671_25699[(2)] = inst_25618);

(statearr_25671_25699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (9))){
var inst_25613 = (state_25652[(8)]);
var _ = (function (){var statearr_25672 = state_25652;
(statearr_25672[(4)] = cljs.core.cons.call(null,(12),(state_25652[(4)])));

return statearr_25672;
})();
var inst_25624 = chs__$1.call(null,inst_25613);
var inst_25625 = done.call(null,inst_25613);
var inst_25626 = cljs.core.async.take_BANG_.call(null,inst_25624,inst_25625);
var ___$1 = (function (){var statearr_25673 = state_25652;
(statearr_25673[(4)] = cljs.core.rest.call(null,(state_25652[(4)])));

return statearr_25673;
})();
var state_25652__$1 = state_25652;
var statearr_25674_25700 = state_25652__$1;
(statearr_25674_25700[(2)] = inst_25626);

(statearr_25674_25700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (5))){
var inst_25636 = (state_25652[(2)]);
var state_25652__$1 = (function (){var statearr_25675 = state_25652;
(statearr_25675[(13)] = inst_25636);

return statearr_25675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25652__$1,(13),dchan);
} else {
if((state_val_25653 === (14))){
var inst_25641 = cljs.core.async.close_BANG_.call(null,out);
var state_25652__$1 = state_25652;
var statearr_25676_25701 = state_25652__$1;
(statearr_25676_25701[(2)] = inst_25641);

(statearr_25676_25701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (16))){
var inst_25648 = (state_25652[(2)]);
var state_25652__$1 = state_25652;
var statearr_25677_25702 = state_25652__$1;
(statearr_25677_25702[(2)] = inst_25648);

(statearr_25677_25702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (10))){
var inst_25613 = (state_25652[(8)]);
var inst_25629 = (state_25652[(2)]);
var inst_25630 = (inst_25613 + (1));
var inst_25613__$1 = inst_25630;
var state_25652__$1 = (function (){var statearr_25678 = state_25652;
(statearr_25678[(8)] = inst_25613__$1);

(statearr_25678[(14)] = inst_25629);

return statearr_25678;
})();
var statearr_25679_25703 = state_25652__$1;
(statearr_25679_25703[(2)] = null);

(statearr_25679_25703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25653 === (8))){
var inst_25634 = (state_25652[(2)]);
var state_25652__$1 = state_25652;
var statearr_25680_25704 = state_25652__$1;
(statearr_25680_25704[(2)] = inst_25634);

(statearr_25680_25704[(1)] = (5));


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
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_25681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25681[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_25681[(1)] = (1));

return statearr_25681;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_25652){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_25652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e25682){var ex__24320__auto__ = e25682;
var statearr_25683_25705 = state_25652;
(statearr_25683_25705[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_25652[(4)]))){
var statearr_25684_25706 = state_25652;
(statearr_25684_25706[(1)] = cljs.core.first.call(null,(state_25652[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25707 = state_25652;
state_25652 = G__25707;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_25652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_25652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_25685 = f__24391__auto__.call(null);
(statearr_25685[(6)] = c__24390__auto___25687);

return statearr_25685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25710 = arguments.length;
switch (G__25710) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24390__auto___25765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_25742){
var state_val_25743 = (state_25742[(1)]);
if((state_val_25743 === (7))){
var inst_25721 = (state_25742[(7)]);
var inst_25722 = (state_25742[(8)]);
var inst_25721__$1 = (state_25742[(2)]);
var inst_25722__$1 = cljs.core.nth.call(null,inst_25721__$1,(0),null);
var inst_25723 = cljs.core.nth.call(null,inst_25721__$1,(1),null);
var inst_25724 = (inst_25722__$1 == null);
var state_25742__$1 = (function (){var statearr_25744 = state_25742;
(statearr_25744[(7)] = inst_25721__$1);

(statearr_25744[(9)] = inst_25723);

(statearr_25744[(8)] = inst_25722__$1);

return statearr_25744;
})();
if(cljs.core.truth_(inst_25724)){
var statearr_25745_25766 = state_25742__$1;
(statearr_25745_25766[(1)] = (8));

} else {
var statearr_25746_25767 = state_25742__$1;
(statearr_25746_25767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (1))){
var inst_25711 = cljs.core.vec.call(null,chs);
var inst_25712 = inst_25711;
var state_25742__$1 = (function (){var statearr_25747 = state_25742;
(statearr_25747[(10)] = inst_25712);

return statearr_25747;
})();
var statearr_25748_25768 = state_25742__$1;
(statearr_25748_25768[(2)] = null);

(statearr_25748_25768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (4))){
var inst_25712 = (state_25742[(10)]);
var state_25742__$1 = state_25742;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25742__$1,(7),inst_25712);
} else {
if((state_val_25743 === (6))){
var inst_25738 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25749_25769 = state_25742__$1;
(statearr_25749_25769[(2)] = inst_25738);

(statearr_25749_25769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (3))){
var inst_25740 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25742__$1,inst_25740);
} else {
if((state_val_25743 === (2))){
var inst_25712 = (state_25742[(10)]);
var inst_25714 = cljs.core.count.call(null,inst_25712);
var inst_25715 = (inst_25714 > (0));
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25715)){
var statearr_25751_25770 = state_25742__$1;
(statearr_25751_25770[(1)] = (4));

} else {
var statearr_25752_25771 = state_25742__$1;
(statearr_25752_25771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (11))){
var inst_25712 = (state_25742[(10)]);
var inst_25731 = (state_25742[(2)]);
var tmp25750 = inst_25712;
var inst_25712__$1 = tmp25750;
var state_25742__$1 = (function (){var statearr_25753 = state_25742;
(statearr_25753[(11)] = inst_25731);

(statearr_25753[(10)] = inst_25712__$1);

return statearr_25753;
})();
var statearr_25754_25772 = state_25742__$1;
(statearr_25754_25772[(2)] = null);

(statearr_25754_25772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (9))){
var inst_25722 = (state_25742[(8)]);
var state_25742__$1 = state_25742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25742__$1,(11),out,inst_25722);
} else {
if((state_val_25743 === (5))){
var inst_25736 = cljs.core.async.close_BANG_.call(null,out);
var state_25742__$1 = state_25742;
var statearr_25755_25773 = state_25742__$1;
(statearr_25755_25773[(2)] = inst_25736);

(statearr_25755_25773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (10))){
var inst_25734 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25756_25774 = state_25742__$1;
(statearr_25756_25774[(2)] = inst_25734);

(statearr_25756_25774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (8))){
var inst_25712 = (state_25742[(10)]);
var inst_25721 = (state_25742[(7)]);
var inst_25723 = (state_25742[(9)]);
var inst_25722 = (state_25742[(8)]);
var inst_25726 = (function (){var cs = inst_25712;
var vec__25717 = inst_25721;
var v = inst_25722;
var c = inst_25723;
return (function (p1__25708_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25708_SHARP_);
});
})();
var inst_25727 = cljs.core.filterv.call(null,inst_25726,inst_25712);
var inst_25712__$1 = inst_25727;
var state_25742__$1 = (function (){var statearr_25757 = state_25742;
(statearr_25757[(10)] = inst_25712__$1);

return statearr_25757;
})();
var statearr_25758_25775 = state_25742__$1;
(statearr_25758_25775[(2)] = null);

(statearr_25758_25775[(1)] = (2));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_25759 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25759[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_25759[(1)] = (1));

return statearr_25759;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_25742){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_25742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e25760){var ex__24320__auto__ = e25760;
var statearr_25761_25776 = state_25742;
(statearr_25761_25776[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_25742[(4)]))){
var statearr_25762_25777 = state_25742;
(statearr_25762_25777[(1)] = cljs.core.first.call(null,(state_25742[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25778 = state_25742;
state_25742 = G__25778;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_25742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_25742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_25763 = f__24391__auto__.call(null);
(statearr_25763[(6)] = c__24390__auto___25765);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25780 = arguments.length;
switch (G__25780) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24390__auto___25826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_25804){
var state_val_25805 = (state_25804[(1)]);
if((state_val_25805 === (7))){
var inst_25786 = (state_25804[(7)]);
var inst_25786__$1 = (state_25804[(2)]);
var inst_25787 = (inst_25786__$1 == null);
var inst_25788 = cljs.core.not.call(null,inst_25787);
var state_25804__$1 = (function (){var statearr_25806 = state_25804;
(statearr_25806[(7)] = inst_25786__$1);

return statearr_25806;
})();
if(inst_25788){
var statearr_25807_25827 = state_25804__$1;
(statearr_25807_25827[(1)] = (8));

} else {
var statearr_25808_25828 = state_25804__$1;
(statearr_25808_25828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (1))){
var inst_25781 = (0);
var state_25804__$1 = (function (){var statearr_25809 = state_25804;
(statearr_25809[(8)] = inst_25781);

return statearr_25809;
})();
var statearr_25810_25829 = state_25804__$1;
(statearr_25810_25829[(2)] = null);

(statearr_25810_25829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (4))){
var state_25804__$1 = state_25804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25804__$1,(7),ch);
} else {
if((state_val_25805 === (6))){
var inst_25799 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
var statearr_25811_25830 = state_25804__$1;
(statearr_25811_25830[(2)] = inst_25799);

(statearr_25811_25830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (3))){
var inst_25801 = (state_25804[(2)]);
var inst_25802 = cljs.core.async.close_BANG_.call(null,out);
var state_25804__$1 = (function (){var statearr_25812 = state_25804;
(statearr_25812[(9)] = inst_25801);

return statearr_25812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25804__$1,inst_25802);
} else {
if((state_val_25805 === (2))){
var inst_25781 = (state_25804[(8)]);
var inst_25783 = (inst_25781 < n);
var state_25804__$1 = state_25804;
if(cljs.core.truth_(inst_25783)){
var statearr_25813_25831 = state_25804__$1;
(statearr_25813_25831[(1)] = (4));

} else {
var statearr_25814_25832 = state_25804__$1;
(statearr_25814_25832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (11))){
var inst_25781 = (state_25804[(8)]);
var inst_25791 = (state_25804[(2)]);
var inst_25792 = (inst_25781 + (1));
var inst_25781__$1 = inst_25792;
var state_25804__$1 = (function (){var statearr_25815 = state_25804;
(statearr_25815[(8)] = inst_25781__$1);

(statearr_25815[(10)] = inst_25791);

return statearr_25815;
})();
var statearr_25816_25833 = state_25804__$1;
(statearr_25816_25833[(2)] = null);

(statearr_25816_25833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (9))){
var state_25804__$1 = state_25804;
var statearr_25817_25834 = state_25804__$1;
(statearr_25817_25834[(2)] = null);

(statearr_25817_25834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (5))){
var state_25804__$1 = state_25804;
var statearr_25818_25835 = state_25804__$1;
(statearr_25818_25835[(2)] = null);

(statearr_25818_25835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (10))){
var inst_25796 = (state_25804[(2)]);
var state_25804__$1 = state_25804;
var statearr_25819_25836 = state_25804__$1;
(statearr_25819_25836[(2)] = inst_25796);

(statearr_25819_25836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25805 === (8))){
var inst_25786 = (state_25804[(7)]);
var state_25804__$1 = state_25804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25804__$1,(11),out,inst_25786);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_25820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25820[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_25820[(1)] = (1));

return statearr_25820;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_25804){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_25804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e25821){var ex__24320__auto__ = e25821;
var statearr_25822_25837 = state_25804;
(statearr_25822_25837[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_25804[(4)]))){
var statearr_25823_25838 = state_25804;
(statearr_25823_25838[(1)] = cljs.core.first.call(null,(state_25804[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25839 = state_25804;
state_25804 = G__25839;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_25804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_25804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_25824 = f__24391__auto__.call(null);
(statearr_25824[(6)] = c__24390__auto___25826);

return statearr_25824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25841 = (function (f,ch,meta25842){
this.f = f;
this.ch = ch;
this.meta25842 = meta25842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25843,meta25842__$1){
var self__ = this;
var _25843__$1 = this;
return (new cljs.core.async.t_cljs$core$async25841(self__.f,self__.ch,meta25842__$1));
}));

(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25843){
var self__ = this;
var _25843__$1 = this;
return self__.meta25842;
}));

(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25844 = (function (f,ch,meta25842,_,fn1,meta25845){
this.f = f;
this.ch = ch;
this.meta25842 = meta25842;
this._ = _;
this.fn1 = fn1;
this.meta25845 = meta25845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25846,meta25845__$1){
var self__ = this;
var _25846__$1 = this;
return (new cljs.core.async.t_cljs$core$async25844(self__.f,self__.ch,self__.meta25842,self__._,self__.fn1,meta25845__$1));
}));

(cljs.core.async.t_cljs$core$async25844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25846){
var self__ = this;
var _25846__$1 = this;
return self__.meta25845;
}));

(cljs.core.async.t_cljs$core$async25844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async25844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__25840_SHARP_){
return f1.call(null,(((p1__25840_SHARP_ == null))?null:self__.f.call(null,p1__25840_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async25844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25842","meta25842",802580484,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25841","cljs.core.async/t_cljs$core$async25841",-1761371467,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25845","meta25845",2138868310,null)], null);
}));

(cljs.core.async.t_cljs$core$async25844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25844");

(cljs.core.async.t_cljs$core$async25844.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25844.
 */
cljs.core.async.__GT_t_cljs$core$async25844 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25844(f__$1,ch__$1,meta25842__$1,___$2,fn1__$1,meta25845){
return (new cljs.core.async.t_cljs$core$async25844(f__$1,ch__$1,meta25842__$1,___$2,fn1__$1,meta25845));
});

}

return (new cljs.core.async.t_cljs$core$async25844(self__.f,self__.ch,self__.meta25842,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async25841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25842","meta25842",802580484,null)], null);
}));

(cljs.core.async.t_cljs$core$async25841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25841");

(cljs.core.async.t_cljs$core$async25841.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25841.
 */
cljs.core.async.__GT_t_cljs$core$async25841 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25841(f__$1,ch__$1,meta25842){
return (new cljs.core.async.t_cljs$core$async25841(f__$1,ch__$1,meta25842));
});

}

return (new cljs.core.async.t_cljs$core$async25841(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25847 = (function (f,ch,meta25848){
this.f = f;
this.ch = ch;
this.meta25848 = meta25848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25849,meta25848__$1){
var self__ = this;
var _25849__$1 = this;
return (new cljs.core.async.t_cljs$core$async25847(self__.f,self__.ch,meta25848__$1));
}));

(cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25849){
var self__ = this;
var _25849__$1 = this;
return self__.meta25848;
}));

(cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async25847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25848","meta25848",-899230785,null)], null);
}));

(cljs.core.async.t_cljs$core$async25847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25847");

(cljs.core.async.t_cljs$core$async25847.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25847.
 */
cljs.core.async.__GT_t_cljs$core$async25847 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25847(f__$1,ch__$1,meta25848){
return (new cljs.core.async.t_cljs$core$async25847(f__$1,ch__$1,meta25848));
});

}

return (new cljs.core.async.t_cljs$core$async25847(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25850 = (function (p,ch,meta25851){
this.p = p;
this.ch = ch;
this.meta25851 = meta25851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25852,meta25851__$1){
var self__ = this;
var _25852__$1 = this;
return (new cljs.core.async.t_cljs$core$async25850(self__.p,self__.ch,meta25851__$1));
}));

(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25852){
var self__ = this;
var _25852__$1 = this;
return self__.meta25851;
}));

(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async25850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25851","meta25851",2061488612,null)], null);
}));

(cljs.core.async.t_cljs$core$async25850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25850");

(cljs.core.async.t_cljs$core$async25850.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async25850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25850.
 */
cljs.core.async.__GT_t_cljs$core$async25850 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25850(p__$1,ch__$1,meta25851){
return (new cljs.core.async.t_cljs$core$async25850(p__$1,ch__$1,meta25851));
});

}

return (new cljs.core.async.t_cljs$core$async25850(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25854 = arguments.length;
switch (G__25854) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24390__auto___25895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_25875){
var state_val_25876 = (state_25875[(1)]);
if((state_val_25876 === (7))){
var inst_25871 = (state_25875[(2)]);
var state_25875__$1 = state_25875;
var statearr_25877_25896 = state_25875__$1;
(statearr_25877_25896[(2)] = inst_25871);

(statearr_25877_25896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (1))){
var state_25875__$1 = state_25875;
var statearr_25878_25897 = state_25875__$1;
(statearr_25878_25897[(2)] = null);

(statearr_25878_25897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (4))){
var inst_25857 = (state_25875[(7)]);
var inst_25857__$1 = (state_25875[(2)]);
var inst_25858 = (inst_25857__$1 == null);
var state_25875__$1 = (function (){var statearr_25879 = state_25875;
(statearr_25879[(7)] = inst_25857__$1);

return statearr_25879;
})();
if(cljs.core.truth_(inst_25858)){
var statearr_25880_25898 = state_25875__$1;
(statearr_25880_25898[(1)] = (5));

} else {
var statearr_25881_25899 = state_25875__$1;
(statearr_25881_25899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (6))){
var inst_25857 = (state_25875[(7)]);
var inst_25862 = p.call(null,inst_25857);
var state_25875__$1 = state_25875;
if(cljs.core.truth_(inst_25862)){
var statearr_25882_25900 = state_25875__$1;
(statearr_25882_25900[(1)] = (8));

} else {
var statearr_25883_25901 = state_25875__$1;
(statearr_25883_25901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (3))){
var inst_25873 = (state_25875[(2)]);
var state_25875__$1 = state_25875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25875__$1,inst_25873);
} else {
if((state_val_25876 === (2))){
var state_25875__$1 = state_25875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25875__$1,(4),ch);
} else {
if((state_val_25876 === (11))){
var inst_25865 = (state_25875[(2)]);
var state_25875__$1 = state_25875;
var statearr_25884_25902 = state_25875__$1;
(statearr_25884_25902[(2)] = inst_25865);

(statearr_25884_25902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (9))){
var state_25875__$1 = state_25875;
var statearr_25885_25903 = state_25875__$1;
(statearr_25885_25903[(2)] = null);

(statearr_25885_25903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (5))){
var inst_25860 = cljs.core.async.close_BANG_.call(null,out);
var state_25875__$1 = state_25875;
var statearr_25886_25904 = state_25875__$1;
(statearr_25886_25904[(2)] = inst_25860);

(statearr_25886_25904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (10))){
var inst_25868 = (state_25875[(2)]);
var state_25875__$1 = (function (){var statearr_25887 = state_25875;
(statearr_25887[(8)] = inst_25868);

return statearr_25887;
})();
var statearr_25888_25905 = state_25875__$1;
(statearr_25888_25905[(2)] = null);

(statearr_25888_25905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (8))){
var inst_25857 = (state_25875[(7)]);
var state_25875__$1 = state_25875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25875__$1,(11),out,inst_25857);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_25889 = [null,null,null,null,null,null,null,null,null];
(statearr_25889[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_25889[(1)] = (1));

return statearr_25889;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_25875){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_25875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e25890){var ex__24320__auto__ = e25890;
var statearr_25891_25906 = state_25875;
(statearr_25891_25906[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_25875[(4)]))){
var statearr_25892_25907 = state_25875;
(statearr_25892_25907[(1)] = cljs.core.first.call(null,(state_25875[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25908 = state_25875;
state_25875 = G__25908;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_25875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_25875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_25893 = f__24391__auto__.call(null);
(statearr_25893[(6)] = c__24390__auto___25895);

return statearr_25893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25910 = arguments.length;
switch (G__25910) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24390__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_25973){
var state_val_25974 = (state_25973[(1)]);
if((state_val_25974 === (7))){
var inst_25969 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
var statearr_25975_26014 = state_25973__$1;
(statearr_25975_26014[(2)] = inst_25969);

(statearr_25975_26014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (20))){
var inst_25939 = (state_25973[(7)]);
var inst_25950 = (state_25973[(2)]);
var inst_25951 = cljs.core.next.call(null,inst_25939);
var inst_25925 = inst_25951;
var inst_25926 = null;
var inst_25927 = (0);
var inst_25928 = (0);
var state_25973__$1 = (function (){var statearr_25976 = state_25973;
(statearr_25976[(8)] = inst_25926);

(statearr_25976[(9)] = inst_25928);

(statearr_25976[(10)] = inst_25927);

(statearr_25976[(11)] = inst_25925);

(statearr_25976[(12)] = inst_25950);

return statearr_25976;
})();
var statearr_25977_26015 = state_25973__$1;
(statearr_25977_26015[(2)] = null);

(statearr_25977_26015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (1))){
var state_25973__$1 = state_25973;
var statearr_25978_26016 = state_25973__$1;
(statearr_25978_26016[(2)] = null);

(statearr_25978_26016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (4))){
var inst_25914 = (state_25973[(13)]);
var inst_25914__$1 = (state_25973[(2)]);
var inst_25915 = (inst_25914__$1 == null);
var state_25973__$1 = (function (){var statearr_25979 = state_25973;
(statearr_25979[(13)] = inst_25914__$1);

return statearr_25979;
})();
if(cljs.core.truth_(inst_25915)){
var statearr_25980_26017 = state_25973__$1;
(statearr_25980_26017[(1)] = (5));

} else {
var statearr_25981_26018 = state_25973__$1;
(statearr_25981_26018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (15))){
var state_25973__$1 = state_25973;
var statearr_25985_26019 = state_25973__$1;
(statearr_25985_26019[(2)] = null);

(statearr_25985_26019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (21))){
var state_25973__$1 = state_25973;
var statearr_25986_26020 = state_25973__$1;
(statearr_25986_26020[(2)] = null);

(statearr_25986_26020[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (13))){
var inst_25926 = (state_25973[(8)]);
var inst_25928 = (state_25973[(9)]);
var inst_25927 = (state_25973[(10)]);
var inst_25925 = (state_25973[(11)]);
var inst_25935 = (state_25973[(2)]);
var inst_25936 = (inst_25928 + (1));
var tmp25982 = inst_25926;
var tmp25983 = inst_25927;
var tmp25984 = inst_25925;
var inst_25925__$1 = tmp25984;
var inst_25926__$1 = tmp25982;
var inst_25927__$1 = tmp25983;
var inst_25928__$1 = inst_25936;
var state_25973__$1 = (function (){var statearr_25987 = state_25973;
(statearr_25987[(8)] = inst_25926__$1);

(statearr_25987[(9)] = inst_25928__$1);

(statearr_25987[(10)] = inst_25927__$1);

(statearr_25987[(14)] = inst_25935);

(statearr_25987[(11)] = inst_25925__$1);

return statearr_25987;
})();
var statearr_25988_26021 = state_25973__$1;
(statearr_25988_26021[(2)] = null);

(statearr_25988_26021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (22))){
var state_25973__$1 = state_25973;
var statearr_25989_26022 = state_25973__$1;
(statearr_25989_26022[(2)] = null);

(statearr_25989_26022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (6))){
var inst_25914 = (state_25973[(13)]);
var inst_25923 = f.call(null,inst_25914);
var inst_25924 = cljs.core.seq.call(null,inst_25923);
var inst_25925 = inst_25924;
var inst_25926 = null;
var inst_25927 = (0);
var inst_25928 = (0);
var state_25973__$1 = (function (){var statearr_25990 = state_25973;
(statearr_25990[(8)] = inst_25926);

(statearr_25990[(9)] = inst_25928);

(statearr_25990[(10)] = inst_25927);

(statearr_25990[(11)] = inst_25925);

return statearr_25990;
})();
var statearr_25991_26023 = state_25973__$1;
(statearr_25991_26023[(2)] = null);

(statearr_25991_26023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (17))){
var inst_25939 = (state_25973[(7)]);
var inst_25943 = cljs.core.chunk_first.call(null,inst_25939);
var inst_25944 = cljs.core.chunk_rest.call(null,inst_25939);
var inst_25945 = cljs.core.count.call(null,inst_25943);
var inst_25925 = inst_25944;
var inst_25926 = inst_25943;
var inst_25927 = inst_25945;
var inst_25928 = (0);
var state_25973__$1 = (function (){var statearr_25992 = state_25973;
(statearr_25992[(8)] = inst_25926);

(statearr_25992[(9)] = inst_25928);

(statearr_25992[(10)] = inst_25927);

(statearr_25992[(11)] = inst_25925);

return statearr_25992;
})();
var statearr_25993_26024 = state_25973__$1;
(statearr_25993_26024[(2)] = null);

(statearr_25993_26024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (3))){
var inst_25971 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25973__$1,inst_25971);
} else {
if((state_val_25974 === (12))){
var inst_25959 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
var statearr_25994_26025 = state_25973__$1;
(statearr_25994_26025[(2)] = inst_25959);

(statearr_25994_26025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (2))){
var state_25973__$1 = state_25973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25973__$1,(4),in$);
} else {
if((state_val_25974 === (23))){
var inst_25967 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
var statearr_25995_26026 = state_25973__$1;
(statearr_25995_26026[(2)] = inst_25967);

(statearr_25995_26026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (19))){
var inst_25954 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
var statearr_25996_26027 = state_25973__$1;
(statearr_25996_26027[(2)] = inst_25954);

(statearr_25996_26027[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (11))){
var inst_25939 = (state_25973[(7)]);
var inst_25925 = (state_25973[(11)]);
var inst_25939__$1 = cljs.core.seq.call(null,inst_25925);
var state_25973__$1 = (function (){var statearr_25997 = state_25973;
(statearr_25997[(7)] = inst_25939__$1);

return statearr_25997;
})();
if(inst_25939__$1){
var statearr_25998_26028 = state_25973__$1;
(statearr_25998_26028[(1)] = (14));

} else {
var statearr_25999_26029 = state_25973__$1;
(statearr_25999_26029[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (9))){
var inst_25961 = (state_25973[(2)]);
var inst_25962 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25973__$1 = (function (){var statearr_26000 = state_25973;
(statearr_26000[(15)] = inst_25961);

return statearr_26000;
})();
if(cljs.core.truth_(inst_25962)){
var statearr_26001_26030 = state_25973__$1;
(statearr_26001_26030[(1)] = (21));

} else {
var statearr_26002_26031 = state_25973__$1;
(statearr_26002_26031[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (5))){
var inst_25917 = cljs.core.async.close_BANG_.call(null,out);
var state_25973__$1 = state_25973;
var statearr_26003_26032 = state_25973__$1;
(statearr_26003_26032[(2)] = inst_25917);

(statearr_26003_26032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (14))){
var inst_25939 = (state_25973[(7)]);
var inst_25941 = cljs.core.chunked_seq_QMARK_.call(null,inst_25939);
var state_25973__$1 = state_25973;
if(inst_25941){
var statearr_26004_26033 = state_25973__$1;
(statearr_26004_26033[(1)] = (17));

} else {
var statearr_26005_26034 = state_25973__$1;
(statearr_26005_26034[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (16))){
var inst_25957 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
var statearr_26006_26035 = state_25973__$1;
(statearr_26006_26035[(2)] = inst_25957);

(statearr_26006_26035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (10))){
var inst_25926 = (state_25973[(8)]);
var inst_25928 = (state_25973[(9)]);
var inst_25933 = cljs.core._nth.call(null,inst_25926,inst_25928);
var state_25973__$1 = state_25973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25973__$1,(13),out,inst_25933);
} else {
if((state_val_25974 === (18))){
var inst_25939 = (state_25973[(7)]);
var inst_25948 = cljs.core.first.call(null,inst_25939);
var state_25973__$1 = state_25973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25973__$1,(20),out,inst_25948);
} else {
if((state_val_25974 === (8))){
var inst_25928 = (state_25973[(9)]);
var inst_25927 = (state_25973[(10)]);
var inst_25930 = (inst_25928 < inst_25927);
var inst_25931 = inst_25930;
var state_25973__$1 = state_25973;
if(cljs.core.truth_(inst_25931)){
var statearr_26007_26036 = state_25973__$1;
(statearr_26007_26036[(1)] = (10));

} else {
var statearr_26008_26037 = state_25973__$1;
(statearr_26008_26037[(1)] = (11));

}

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
}
}
}
}
}
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
var cljs$core$async$mapcat_STAR__$_state_machine__24317__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24317__auto____0 = (function (){
var statearr_26009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26009[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24317__auto__);

(statearr_26009[(1)] = (1));

return statearr_26009;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24317__auto____1 = (function (state_25973){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_25973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e26010){var ex__24320__auto__ = e26010;
var statearr_26011_26038 = state_25973;
(statearr_26011_26038[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_25973[(4)]))){
var statearr_26012_26039 = state_25973;
(statearr_26012_26039[(1)] = cljs.core.first.call(null,(state_25973[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26040 = state_25973;
state_25973 = G__26040;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24317__auto__ = function(state_25973){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24317__auto____1.call(this,state_25973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24317__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24317__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_26013 = f__24391__auto__.call(null);
(statearr_26013[(6)] = c__24390__auto__);

return statearr_26013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));

return c__24390__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26042 = arguments.length;
switch (G__26042) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26045 = arguments.length;
switch (G__26045) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26048 = arguments.length;
switch (G__26048) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24390__auto___26096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_26072){
var state_val_26073 = (state_26072[(1)]);
if((state_val_26073 === (7))){
var inst_26067 = (state_26072[(2)]);
var state_26072__$1 = state_26072;
var statearr_26074_26097 = state_26072__$1;
(statearr_26074_26097[(2)] = inst_26067);

(statearr_26074_26097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26073 === (1))){
var inst_26049 = null;
var state_26072__$1 = (function (){var statearr_26075 = state_26072;
(statearr_26075[(7)] = inst_26049);

return statearr_26075;
})();
var statearr_26076_26098 = state_26072__$1;
(statearr_26076_26098[(2)] = null);

(statearr_26076_26098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26073 === (4))){
var inst_26052 = (state_26072[(8)]);
var inst_26052__$1 = (state_26072[(2)]);
var inst_26053 = (inst_26052__$1 == null);
var inst_26054 = cljs.core.not.call(null,inst_26053);
var state_26072__$1 = (function (){var statearr_26077 = state_26072;
(statearr_26077[(8)] = inst_26052__$1);

return statearr_26077;
})();
if(inst_26054){
var statearr_26078_26099 = state_26072__$1;
(statearr_26078_26099[(1)] = (5));

} else {
var statearr_26079_26100 = state_26072__$1;
(statearr_26079_26100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26073 === (6))){
var state_26072__$1 = state_26072;
var statearr_26080_26101 = state_26072__$1;
(statearr_26080_26101[(2)] = null);

(statearr_26080_26101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26073 === (3))){
var inst_26069 = (state_26072[(2)]);
var inst_26070 = cljs.core.async.close_BANG_.call(null,out);
var state_26072__$1 = (function (){var statearr_26081 = state_26072;
(statearr_26081[(9)] = inst_26069);

return statearr_26081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26072__$1,inst_26070);
} else {
if((state_val_26073 === (2))){
var state_26072__$1 = state_26072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26072__$1,(4),ch);
} else {
if((state_val_26073 === (11))){
var inst_26052 = (state_26072[(8)]);
var inst_26061 = (state_26072[(2)]);
var inst_26049 = inst_26052;
var state_26072__$1 = (function (){var statearr_26082 = state_26072;
(statearr_26082[(7)] = inst_26049);

(statearr_26082[(10)] = inst_26061);

return statearr_26082;
})();
var statearr_26083_26102 = state_26072__$1;
(statearr_26083_26102[(2)] = null);

(statearr_26083_26102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26073 === (9))){
var inst_26052 = (state_26072[(8)]);
var state_26072__$1 = state_26072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26072__$1,(11),out,inst_26052);
} else {
if((state_val_26073 === (5))){
var inst_26049 = (state_26072[(7)]);
var inst_26052 = (state_26072[(8)]);
var inst_26056 = cljs.core._EQ_.call(null,inst_26052,inst_26049);
var state_26072__$1 = state_26072;
if(inst_26056){
var statearr_26085_26103 = state_26072__$1;
(statearr_26085_26103[(1)] = (8));

} else {
var statearr_26086_26104 = state_26072__$1;
(statearr_26086_26104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26073 === (10))){
var inst_26064 = (state_26072[(2)]);
var state_26072__$1 = state_26072;
var statearr_26087_26105 = state_26072__$1;
(statearr_26087_26105[(2)] = inst_26064);

(statearr_26087_26105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26073 === (8))){
var inst_26049 = (state_26072[(7)]);
var tmp26084 = inst_26049;
var inst_26049__$1 = tmp26084;
var state_26072__$1 = (function (){var statearr_26088 = state_26072;
(statearr_26088[(7)] = inst_26049__$1);

return statearr_26088;
})();
var statearr_26089_26106 = state_26072__$1;
(statearr_26089_26106[(2)] = null);

(statearr_26089_26106[(1)] = (2));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_26090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26090[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_26090[(1)] = (1));

return statearr_26090;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_26072){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_26072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e26091){var ex__24320__auto__ = e26091;
var statearr_26092_26107 = state_26072;
(statearr_26092_26107[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_26072[(4)]))){
var statearr_26093_26108 = state_26072;
(statearr_26093_26108[(1)] = cljs.core.first.call(null,(state_26072[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26109 = state_26072;
state_26072 = G__26109;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_26072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_26072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_26094 = f__24391__auto__.call(null);
(statearr_26094[(6)] = c__24390__auto___26096);

return statearr_26094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26111 = arguments.length;
switch (G__26111) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24390__auto___26178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_26149){
var state_val_26150 = (state_26149[(1)]);
if((state_val_26150 === (7))){
var inst_26145 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26151_26179 = state_26149__$1;
(statearr_26151_26179[(2)] = inst_26145);

(statearr_26151_26179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (1))){
var inst_26112 = (new Array(n));
var inst_26113 = inst_26112;
var inst_26114 = (0);
var state_26149__$1 = (function (){var statearr_26152 = state_26149;
(statearr_26152[(7)] = inst_26113);

(statearr_26152[(8)] = inst_26114);

return statearr_26152;
})();
var statearr_26153_26180 = state_26149__$1;
(statearr_26153_26180[(2)] = null);

(statearr_26153_26180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (4))){
var inst_26117 = (state_26149[(9)]);
var inst_26117__$1 = (state_26149[(2)]);
var inst_26118 = (inst_26117__$1 == null);
var inst_26119 = cljs.core.not.call(null,inst_26118);
var state_26149__$1 = (function (){var statearr_26154 = state_26149;
(statearr_26154[(9)] = inst_26117__$1);

return statearr_26154;
})();
if(inst_26119){
var statearr_26155_26181 = state_26149__$1;
(statearr_26155_26181[(1)] = (5));

} else {
var statearr_26156_26182 = state_26149__$1;
(statearr_26156_26182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (15))){
var inst_26139 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26157_26183 = state_26149__$1;
(statearr_26157_26183[(2)] = inst_26139);

(statearr_26157_26183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (13))){
var state_26149__$1 = state_26149;
var statearr_26158_26184 = state_26149__$1;
(statearr_26158_26184[(2)] = null);

(statearr_26158_26184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (6))){
var inst_26114 = (state_26149[(8)]);
var inst_26135 = (inst_26114 > (0));
var state_26149__$1 = state_26149;
if(cljs.core.truth_(inst_26135)){
var statearr_26159_26185 = state_26149__$1;
(statearr_26159_26185[(1)] = (12));

} else {
var statearr_26160_26186 = state_26149__$1;
(statearr_26160_26186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (3))){
var inst_26147 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26149__$1,inst_26147);
} else {
if((state_val_26150 === (12))){
var inst_26113 = (state_26149[(7)]);
var inst_26137 = cljs.core.vec.call(null,inst_26113);
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26149__$1,(15),out,inst_26137);
} else {
if((state_val_26150 === (2))){
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26149__$1,(4),ch);
} else {
if((state_val_26150 === (11))){
var inst_26129 = (state_26149[(2)]);
var inst_26130 = (new Array(n));
var inst_26113 = inst_26130;
var inst_26114 = (0);
var state_26149__$1 = (function (){var statearr_26161 = state_26149;
(statearr_26161[(10)] = inst_26129);

(statearr_26161[(7)] = inst_26113);

(statearr_26161[(8)] = inst_26114);

return statearr_26161;
})();
var statearr_26162_26187 = state_26149__$1;
(statearr_26162_26187[(2)] = null);

(statearr_26162_26187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (9))){
var inst_26113 = (state_26149[(7)]);
var inst_26127 = cljs.core.vec.call(null,inst_26113);
var state_26149__$1 = state_26149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26149__$1,(11),out,inst_26127);
} else {
if((state_val_26150 === (5))){
var inst_26122 = (state_26149[(11)]);
var inst_26117 = (state_26149[(9)]);
var inst_26113 = (state_26149[(7)]);
var inst_26114 = (state_26149[(8)]);
var inst_26121 = (inst_26113[inst_26114] = inst_26117);
var inst_26122__$1 = (inst_26114 + (1));
var inst_26123 = (inst_26122__$1 < n);
var state_26149__$1 = (function (){var statearr_26163 = state_26149;
(statearr_26163[(11)] = inst_26122__$1);

(statearr_26163[(12)] = inst_26121);

return statearr_26163;
})();
if(cljs.core.truth_(inst_26123)){
var statearr_26164_26188 = state_26149__$1;
(statearr_26164_26188[(1)] = (8));

} else {
var statearr_26165_26189 = state_26149__$1;
(statearr_26165_26189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (14))){
var inst_26142 = (state_26149[(2)]);
var inst_26143 = cljs.core.async.close_BANG_.call(null,out);
var state_26149__$1 = (function (){var statearr_26167 = state_26149;
(statearr_26167[(13)] = inst_26142);

return statearr_26167;
})();
var statearr_26168_26190 = state_26149__$1;
(statearr_26168_26190[(2)] = inst_26143);

(statearr_26168_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (10))){
var inst_26133 = (state_26149[(2)]);
var state_26149__$1 = state_26149;
var statearr_26169_26191 = state_26149__$1;
(statearr_26169_26191[(2)] = inst_26133);

(statearr_26169_26191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26150 === (8))){
var inst_26122 = (state_26149[(11)]);
var inst_26113 = (state_26149[(7)]);
var tmp26166 = inst_26113;
var inst_26113__$1 = tmp26166;
var inst_26114 = inst_26122;
var state_26149__$1 = (function (){var statearr_26170 = state_26149;
(statearr_26170[(7)] = inst_26113__$1);

(statearr_26170[(8)] = inst_26114);

return statearr_26170;
})();
var statearr_26171_26192 = state_26149__$1;
(statearr_26171_26192[(2)] = null);

(statearr_26171_26192[(1)] = (2));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_26172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26172[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_26172[(1)] = (1));

return statearr_26172;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_26149){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_26149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e26173){var ex__24320__auto__ = e26173;
var statearr_26174_26193 = state_26149;
(statearr_26174_26193[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_26149[(4)]))){
var statearr_26175_26194 = state_26149;
(statearr_26175_26194[(1)] = cljs.core.first.call(null,(state_26149[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26195 = state_26149;
state_26149 = G__26195;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_26149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_26149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_26176 = f__24391__auto__.call(null);
(statearr_26176[(6)] = c__24390__auto___26178);

return statearr_26176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26197 = arguments.length;
switch (G__26197) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24390__auto___26268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24391__auto__ = (function (){var switch__24316__auto__ = (function (state_26239){
var state_val_26240 = (state_26239[(1)]);
if((state_val_26240 === (7))){
var inst_26235 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26241_26269 = state_26239__$1;
(statearr_26241_26269[(2)] = inst_26235);

(statearr_26241_26269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (1))){
var inst_26198 = [];
var inst_26199 = inst_26198;
var inst_26200 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26239__$1 = (function (){var statearr_26242 = state_26239;
(statearr_26242[(7)] = inst_26200);

(statearr_26242[(8)] = inst_26199);

return statearr_26242;
})();
var statearr_26243_26270 = state_26239__$1;
(statearr_26243_26270[(2)] = null);

(statearr_26243_26270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (4))){
var inst_26203 = (state_26239[(9)]);
var inst_26203__$1 = (state_26239[(2)]);
var inst_26204 = (inst_26203__$1 == null);
var inst_26205 = cljs.core.not.call(null,inst_26204);
var state_26239__$1 = (function (){var statearr_26244 = state_26239;
(statearr_26244[(9)] = inst_26203__$1);

return statearr_26244;
})();
if(inst_26205){
var statearr_26245_26271 = state_26239__$1;
(statearr_26245_26271[(1)] = (5));

} else {
var statearr_26246_26272 = state_26239__$1;
(statearr_26246_26272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (15))){
var inst_26229 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26247_26273 = state_26239__$1;
(statearr_26247_26273[(2)] = inst_26229);

(statearr_26247_26273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (13))){
var state_26239__$1 = state_26239;
var statearr_26248_26274 = state_26239__$1;
(statearr_26248_26274[(2)] = null);

(statearr_26248_26274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (6))){
var inst_26199 = (state_26239[(8)]);
var inst_26224 = inst_26199.length;
var inst_26225 = (inst_26224 > (0));
var state_26239__$1 = state_26239;
if(cljs.core.truth_(inst_26225)){
var statearr_26249_26275 = state_26239__$1;
(statearr_26249_26275[(1)] = (12));

} else {
var statearr_26250_26276 = state_26239__$1;
(statearr_26250_26276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (3))){
var inst_26237 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26239__$1,inst_26237);
} else {
if((state_val_26240 === (12))){
var inst_26199 = (state_26239[(8)]);
var inst_26227 = cljs.core.vec.call(null,inst_26199);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26239__$1,(15),out,inst_26227);
} else {
if((state_val_26240 === (2))){
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26239__$1,(4),ch);
} else {
if((state_val_26240 === (11))){
var inst_26207 = (state_26239[(10)]);
var inst_26203 = (state_26239[(9)]);
var inst_26217 = (state_26239[(2)]);
var inst_26218 = [];
var inst_26219 = inst_26218.push(inst_26203);
var inst_26199 = inst_26218;
var inst_26200 = inst_26207;
var state_26239__$1 = (function (){var statearr_26251 = state_26239;
(statearr_26251[(11)] = inst_26219);

(statearr_26251[(7)] = inst_26200);

(statearr_26251[(8)] = inst_26199);

(statearr_26251[(12)] = inst_26217);

return statearr_26251;
})();
var statearr_26252_26277 = state_26239__$1;
(statearr_26252_26277[(2)] = null);

(statearr_26252_26277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (9))){
var inst_26199 = (state_26239[(8)]);
var inst_26215 = cljs.core.vec.call(null,inst_26199);
var state_26239__$1 = state_26239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26239__$1,(11),out,inst_26215);
} else {
if((state_val_26240 === (5))){
var inst_26207 = (state_26239[(10)]);
var inst_26200 = (state_26239[(7)]);
var inst_26203 = (state_26239[(9)]);
var inst_26207__$1 = f.call(null,inst_26203);
var inst_26208 = cljs.core._EQ_.call(null,inst_26207__$1,inst_26200);
var inst_26209 = cljs.core.keyword_identical_QMARK_.call(null,inst_26200,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26210 = ((inst_26208) || (inst_26209));
var state_26239__$1 = (function (){var statearr_26253 = state_26239;
(statearr_26253[(10)] = inst_26207__$1);

return statearr_26253;
})();
if(cljs.core.truth_(inst_26210)){
var statearr_26254_26278 = state_26239__$1;
(statearr_26254_26278[(1)] = (8));

} else {
var statearr_26255_26279 = state_26239__$1;
(statearr_26255_26279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (14))){
var inst_26232 = (state_26239[(2)]);
var inst_26233 = cljs.core.async.close_BANG_.call(null,out);
var state_26239__$1 = (function (){var statearr_26257 = state_26239;
(statearr_26257[(13)] = inst_26232);

return statearr_26257;
})();
var statearr_26258_26280 = state_26239__$1;
(statearr_26258_26280[(2)] = inst_26233);

(statearr_26258_26280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (10))){
var inst_26222 = (state_26239[(2)]);
var state_26239__$1 = state_26239;
var statearr_26259_26281 = state_26239__$1;
(statearr_26259_26281[(2)] = inst_26222);

(statearr_26259_26281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26240 === (8))){
var inst_26207 = (state_26239[(10)]);
var inst_26199 = (state_26239[(8)]);
var inst_26203 = (state_26239[(9)]);
var inst_26212 = inst_26199.push(inst_26203);
var tmp26256 = inst_26199;
var inst_26199__$1 = tmp26256;
var inst_26200 = inst_26207;
var state_26239__$1 = (function (){var statearr_26260 = state_26239;
(statearr_26260[(14)] = inst_26212);

(statearr_26260[(7)] = inst_26200);

(statearr_26260[(8)] = inst_26199__$1);

return statearr_26260;
})();
var statearr_26261_26282 = state_26239__$1;
(statearr_26261_26282[(2)] = null);

(statearr_26261_26282[(1)] = (2));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__24317__auto__ = null;
var cljs$core$async$state_machine__24317__auto____0 = (function (){
var statearr_26262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26262[(0)] = cljs$core$async$state_machine__24317__auto__);

(statearr_26262[(1)] = (1));

return statearr_26262;
});
var cljs$core$async$state_machine__24317__auto____1 = (function (state_26239){
while(true){
var ret_value__24318__auto__ = (function (){try{while(true){
var result__24319__auto__ = switch__24316__auto__.call(null,state_26239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24319__auto__;
}
break;
}
}catch (e26263){var ex__24320__auto__ = e26263;
var statearr_26264_26283 = state_26239;
(statearr_26264_26283[(2)] = ex__24320__auto__);


if(cljs.core.seq.call(null,(state_26239[(4)]))){
var statearr_26265_26284 = state_26239;
(statearr_26265_26284[(1)] = cljs.core.first.call(null,(state_26239[(4)])));

} else {
throw ex__24320__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26285 = state_26239;
state_26239 = G__26285;
continue;
} else {
return ret_value__24318__auto__;
}
break;
}
});
cljs$core$async$state_machine__24317__auto__ = function(state_26239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24317__auto____1.call(this,state_26239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24317__auto____0;
cljs$core$async$state_machine__24317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24317__auto____1;
return cljs$core$async$state_machine__24317__auto__;
})()
})();
var state__24392__auto__ = (function (){var statearr_26266 = f__24391__auto__.call(null);
(statearr_26266[(6)] = c__24390__auto___26268);

return statearr_26266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24392__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1618871559424
