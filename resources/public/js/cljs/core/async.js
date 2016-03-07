// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21715 = [];
var len__17919__auto___21721 = arguments.length;
var i__17920__auto___21722 = (0);
while(true){
if((i__17920__auto___21722 < len__17919__auto___21721)){
args21715.push((arguments[i__17920__auto___21722]));

var G__21723 = (i__17920__auto___21722 + (1));
i__17920__auto___21722 = G__21723;
continue;
} else {
}
break;
}

var G__21717 = args21715.length;
switch (G__21717) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21715.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21718 = (function (f,blockable,meta21719){
this.f = f;
this.blockable = blockable;
this.meta21719 = meta21719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21720,meta21719__$1){
var self__ = this;
var _21720__$1 = this;
return (new cljs.core.async.t_cljs$core$async21718(self__.f,self__.blockable,meta21719__$1));
});

cljs.core.async.t_cljs$core$async21718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21720){
var self__ = this;
var _21720__$1 = this;
return self__.meta21719;
});

cljs.core.async.t_cljs$core$async21718.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21719","meta21719",351143220,null)], null);
});

cljs.core.async.t_cljs$core$async21718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21718";

cljs.core.async.t_cljs$core$async21718.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async21718");
});

cljs.core.async.__GT_t_cljs$core$async21718 = (function cljs$core$async$__GT_t_cljs$core$async21718(f__$1,blockable__$1,meta21719){
return (new cljs.core.async.t_cljs$core$async21718(f__$1,blockable__$1,meta21719));
});

}

return (new cljs.core.async.t_cljs$core$async21718(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args21727 = [];
var len__17919__auto___21730 = arguments.length;
var i__17920__auto___21731 = (0);
while(true){
if((i__17920__auto___21731 < len__17919__auto___21730)){
args21727.push((arguments[i__17920__auto___21731]));

var G__21732 = (i__17920__auto___21731 + (1));
i__17920__auto___21731 = G__21732;
continue;
} else {
}
break;
}

var G__21729 = args21727.length;
switch (G__21729) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21727.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21734 = [];
var len__17919__auto___21737 = arguments.length;
var i__17920__auto___21738 = (0);
while(true){
if((i__17920__auto___21738 < len__17919__auto___21737)){
args21734.push((arguments[i__17920__auto___21738]));

var G__21739 = (i__17920__auto___21738 + (1));
i__17920__auto___21738 = G__21739;
continue;
} else {
}
break;
}

var G__21736 = args21734.length;
switch (G__21736) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21734.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
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
var args21741 = [];
var len__17919__auto___21744 = arguments.length;
var i__17920__auto___21745 = (0);
while(true){
if((i__17920__auto___21745 < len__17919__auto___21744)){
args21741.push((arguments[i__17920__auto___21745]));

var G__21746 = (i__17920__auto___21745 + (1));
i__17920__auto___21745 = G__21746;
continue;
} else {
}
break;
}

var G__21743 = args21741.length;
switch (G__21743) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21741.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21748 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21748);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21748,ret){
return (function (){
return fn1.call(null,val_21748);
});})(val_21748,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21749 = [];
var len__17919__auto___21752 = arguments.length;
var i__17920__auto___21753 = (0);
while(true){
if((i__17920__auto___21753 < len__17919__auto___21752)){
args21749.push((arguments[i__17920__auto___21753]));

var G__21754 = (i__17920__auto___21753 + (1));
i__17920__auto___21753 = G__21754;
continue;
} else {
}
break;
}

var G__21751 = args21749.length;
switch (G__21751) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21749.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17764__auto___21756 = n;
var x_21757 = (0);
while(true){
if((x_21757 < n__17764__auto___21756)){
(a[x_21757] = (0));

var G__21758 = (x_21757 + (1));
x_21757 = G__21758;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21759 = (i + (1));
i = G__21759;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21763 = (function (alt_flag,flag,meta21764){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21764 = meta21764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21765,meta21764__$1){
var self__ = this;
var _21765__$1 = this;
return (new cljs.core.async.t_cljs$core$async21763(self__.alt_flag,self__.flag,meta21764__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21765){
var self__ = this;
var _21765__$1 = this;
return self__.meta21764;
});})(flag))
;

cljs.core.async.t_cljs$core$async21763.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21763.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21764","meta21764",-327912704,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21763";

cljs.core.async.t_cljs$core$async21763.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async21763");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21763 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21763(alt_flag__$1,flag__$1,meta21764){
return (new cljs.core.async.t_cljs$core$async21763(alt_flag__$1,flag__$1,meta21764));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21763(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21769 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21769 = (function (alt_handler,flag,cb,meta21770){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21770 = meta21770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21771,meta21770__$1){
var self__ = this;
var _21771__$1 = this;
return (new cljs.core.async.t_cljs$core$async21769(self__.alt_handler,self__.flag,self__.cb,meta21770__$1));
});

cljs.core.async.t_cljs$core$async21769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21771){
var self__ = this;
var _21771__$1 = this;
return self__.meta21770;
});

cljs.core.async.t_cljs$core$async21769.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21769.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21770","meta21770",1705758787,null)], null);
});

cljs.core.async.t_cljs$core$async21769.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21769";

cljs.core.async.t_cljs$core$async21769.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async21769");
});

cljs.core.async.__GT_t_cljs$core$async21769 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21769(alt_handler__$1,flag__$1,cb__$1,meta21770){
return (new cljs.core.async.t_cljs$core$async21769(alt_handler__$1,flag__$1,cb__$1,meta21770));
});

}

return (new cljs.core.async.t_cljs$core$async21769(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__21772_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21772_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21773_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21773_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16861__auto__ = wport;
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21774 = (i + (1));
i = G__21774;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16861__auto__ = ret;
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16849__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16849__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16849__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17926__auto__ = [];
var len__17919__auto___21780 = arguments.length;
var i__17920__auto___21781 = (0);
while(true){
if((i__17920__auto___21781 < len__17919__auto___21780)){
args__17926__auto__.push((arguments[i__17920__auto___21781]));

var G__21782 = (i__17920__auto___21781 + (1));
i__17920__auto___21781 = G__21782;
continue;
} else {
}
break;
}

var argseq__17927__auto__ = ((((1) < args__17926__auto__.length))?(new cljs.core.IndexedSeq(args__17926__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17927__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21777){
var map__21778 = p__21777;
var map__21778__$1 = ((((!((map__21778 == null)))?((((map__21778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21778):map__21778);
var opts = map__21778__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21775){
var G__21776 = cljs.core.first.call(null,seq21775);
var seq21775__$1 = cljs.core.next.call(null,seq21775);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21776,seq21775__$1);
});
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
var args21783 = [];
var len__17919__auto___21833 = arguments.length;
var i__17920__auto___21834 = (0);
while(true){
if((i__17920__auto___21834 < len__17919__auto___21833)){
args21783.push((arguments[i__17920__auto___21834]));

var G__21835 = (i__17920__auto___21834 + (1));
i__17920__auto___21834 = G__21835;
continue;
} else {
}
break;
}

var G__21785 = args21783.length;
switch (G__21785) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21783.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21670__auto___21837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___21837){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___21837){
return (function (state_21809){
var state_val_21810 = (state_21809[(1)]);
if((state_val_21810 === (7))){
var inst_21805 = (state_21809[(2)]);
var state_21809__$1 = state_21809;
var statearr_21811_21838 = state_21809__$1;
(statearr_21811_21838[(2)] = inst_21805);

(statearr_21811_21838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (1))){
var state_21809__$1 = state_21809;
var statearr_21812_21839 = state_21809__$1;
(statearr_21812_21839[(2)] = null);

(statearr_21812_21839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (4))){
var inst_21788 = (state_21809[(7)]);
var inst_21788__$1 = (state_21809[(2)]);
var inst_21789 = (inst_21788__$1 == null);
var state_21809__$1 = (function (){var statearr_21813 = state_21809;
(statearr_21813[(7)] = inst_21788__$1);

return statearr_21813;
})();
if(cljs.core.truth_(inst_21789)){
var statearr_21814_21840 = state_21809__$1;
(statearr_21814_21840[(1)] = (5));

} else {
var statearr_21815_21841 = state_21809__$1;
(statearr_21815_21841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (13))){
var state_21809__$1 = state_21809;
var statearr_21816_21842 = state_21809__$1;
(statearr_21816_21842[(2)] = null);

(statearr_21816_21842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (6))){
var inst_21788 = (state_21809[(7)]);
var state_21809__$1 = state_21809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21809__$1,(11),to,inst_21788);
} else {
if((state_val_21810 === (3))){
var inst_21807 = (state_21809[(2)]);
var state_21809__$1 = state_21809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21809__$1,inst_21807);
} else {
if((state_val_21810 === (12))){
var state_21809__$1 = state_21809;
var statearr_21817_21843 = state_21809__$1;
(statearr_21817_21843[(2)] = null);

(statearr_21817_21843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (2))){
var state_21809__$1 = state_21809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21809__$1,(4),from);
} else {
if((state_val_21810 === (11))){
var inst_21798 = (state_21809[(2)]);
var state_21809__$1 = state_21809;
if(cljs.core.truth_(inst_21798)){
var statearr_21818_21844 = state_21809__$1;
(statearr_21818_21844[(1)] = (12));

} else {
var statearr_21819_21845 = state_21809__$1;
(statearr_21819_21845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (9))){
var state_21809__$1 = state_21809;
var statearr_21820_21846 = state_21809__$1;
(statearr_21820_21846[(2)] = null);

(statearr_21820_21846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (5))){
var state_21809__$1 = state_21809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21821_21847 = state_21809__$1;
(statearr_21821_21847[(1)] = (8));

} else {
var statearr_21822_21848 = state_21809__$1;
(statearr_21822_21848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (14))){
var inst_21803 = (state_21809[(2)]);
var state_21809__$1 = state_21809;
var statearr_21823_21849 = state_21809__$1;
(statearr_21823_21849[(2)] = inst_21803);

(statearr_21823_21849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (10))){
var inst_21795 = (state_21809[(2)]);
var state_21809__$1 = state_21809;
var statearr_21824_21850 = state_21809__$1;
(statearr_21824_21850[(2)] = inst_21795);

(statearr_21824_21850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21810 === (8))){
var inst_21792 = cljs.core.async.close_BANG_.call(null,to);
var state_21809__$1 = state_21809;
var statearr_21825_21851 = state_21809__$1;
(statearr_21825_21851[(2)] = inst_21792);

(statearr_21825_21851[(1)] = (10));


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
});})(c__21670__auto___21837))
;
return ((function (switch__21558__auto__,c__21670__auto___21837){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_21829 = [null,null,null,null,null,null,null,null];
(statearr_21829[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_21829[(1)] = (1));

return statearr_21829;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_21809){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_21809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e21830){if((e21830 instanceof Object)){
var ex__21562__auto__ = e21830;
var statearr_21831_21852 = state_21809;
(statearr_21831_21852[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21853 = state_21809;
state_21809 = G__21853;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_21809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_21809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___21837))
})();
var state__21672__auto__ = (function (){var statearr_21832 = f__21671__auto__.call(null);
(statearr_21832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___21837);

return statearr_21832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___21837))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22037){
var vec__22038 = p__22037;
var v = cljs.core.nth.call(null,vec__22038,(0),null);
var p = cljs.core.nth.call(null,vec__22038,(1),null);
var job = vec__22038;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21670__auto___22220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___22220,res,vec__22038,v,p,job,jobs,results){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___22220,res,vec__22038,v,p,job,jobs,results){
return (function (state_22043){
var state_val_22044 = (state_22043[(1)]);
if((state_val_22044 === (1))){
var state_22043__$1 = state_22043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22043__$1,(2),res,v);
} else {
if((state_val_22044 === (2))){
var inst_22040 = (state_22043[(2)]);
var inst_22041 = cljs.core.async.close_BANG_.call(null,res);
var state_22043__$1 = (function (){var statearr_22045 = state_22043;
(statearr_22045[(7)] = inst_22040);

return statearr_22045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22043__$1,inst_22041);
} else {
return null;
}
}
});})(c__21670__auto___22220,res,vec__22038,v,p,job,jobs,results))
;
return ((function (switch__21558__auto__,c__21670__auto___22220,res,vec__22038,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0 = (function (){
var statearr_22049 = [null,null,null,null,null,null,null,null];
(statearr_22049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__);

(statearr_22049[(1)] = (1));

return statearr_22049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1 = (function (state_22043){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22050){if((e22050 instanceof Object)){
var ex__21562__auto__ = e22050;
var statearr_22051_22221 = state_22043;
(statearr_22051_22221[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22222 = state_22043;
state_22043 = G__22222;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = function(state_22043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1.call(this,state_22043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___22220,res,vec__22038,v,p,job,jobs,results))
})();
var state__21672__auto__ = (function (){var statearr_22052 = f__21671__auto__.call(null);
(statearr_22052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___22220);

return statearr_22052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___22220,res,vec__22038,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22053){
var vec__22054 = p__22053;
var v = cljs.core.nth.call(null,vec__22054,(0),null);
var p = cljs.core.nth.call(null,vec__22054,(1),null);
var job = vec__22054;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17764__auto___22223 = n;
var __22224 = (0);
while(true){
if((__22224 < n__17764__auto___22223)){
var G__22055_22225 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22055_22225) {
case "compute":
var c__21670__auto___22227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22224,c__21670__auto___22227,G__22055_22225,n__17764__auto___22223,jobs,results,process,async){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (__22224,c__21670__auto___22227,G__22055_22225,n__17764__auto___22223,jobs,results,process,async){
return (function (state_22068){
var state_val_22069 = (state_22068[(1)]);
if((state_val_22069 === (1))){
var state_22068__$1 = state_22068;
var statearr_22070_22228 = state_22068__$1;
(statearr_22070_22228[(2)] = null);

(statearr_22070_22228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22069 === (2))){
var state_22068__$1 = state_22068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22068__$1,(4),jobs);
} else {
if((state_val_22069 === (3))){
var inst_22066 = (state_22068[(2)]);
var state_22068__$1 = state_22068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22068__$1,inst_22066);
} else {
if((state_val_22069 === (4))){
var inst_22058 = (state_22068[(2)]);
var inst_22059 = process.call(null,inst_22058);
var state_22068__$1 = state_22068;
if(cljs.core.truth_(inst_22059)){
var statearr_22071_22229 = state_22068__$1;
(statearr_22071_22229[(1)] = (5));

} else {
var statearr_22072_22230 = state_22068__$1;
(statearr_22072_22230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22069 === (5))){
var state_22068__$1 = state_22068;
var statearr_22073_22231 = state_22068__$1;
(statearr_22073_22231[(2)] = null);

(statearr_22073_22231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22069 === (6))){
var state_22068__$1 = state_22068;
var statearr_22074_22232 = state_22068__$1;
(statearr_22074_22232[(2)] = null);

(statearr_22074_22232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22069 === (7))){
var inst_22064 = (state_22068[(2)]);
var state_22068__$1 = state_22068;
var statearr_22075_22233 = state_22068__$1;
(statearr_22075_22233[(2)] = inst_22064);

(statearr_22075_22233[(1)] = (3));


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
});})(__22224,c__21670__auto___22227,G__22055_22225,n__17764__auto___22223,jobs,results,process,async))
;
return ((function (__22224,switch__21558__auto__,c__21670__auto___22227,G__22055_22225,n__17764__auto___22223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0 = (function (){
var statearr_22079 = [null,null,null,null,null,null,null];
(statearr_22079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__);

(statearr_22079[(1)] = (1));

return statearr_22079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1 = (function (state_22068){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22080){if((e22080 instanceof Object)){
var ex__21562__auto__ = e22080;
var statearr_22081_22234 = state_22068;
(statearr_22081_22234[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22235 = state_22068;
state_22068 = G__22235;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = function(state_22068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1.call(this,state_22068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__;
})()
;})(__22224,switch__21558__auto__,c__21670__auto___22227,G__22055_22225,n__17764__auto___22223,jobs,results,process,async))
})();
var state__21672__auto__ = (function (){var statearr_22082 = f__21671__auto__.call(null);
(statearr_22082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___22227);

return statearr_22082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(__22224,c__21670__auto___22227,G__22055_22225,n__17764__auto___22223,jobs,results,process,async))
);


break;
case "async":
var c__21670__auto___22236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22224,c__21670__auto___22236,G__22055_22225,n__17764__auto___22223,jobs,results,process,async){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (__22224,c__21670__auto___22236,G__22055_22225,n__17764__auto___22223,jobs,results,process,async){
return (function (state_22095){
var state_val_22096 = (state_22095[(1)]);
if((state_val_22096 === (1))){
var state_22095__$1 = state_22095;
var statearr_22097_22237 = state_22095__$1;
(statearr_22097_22237[(2)] = null);

(statearr_22097_22237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (2))){
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22095__$1,(4),jobs);
} else {
if((state_val_22096 === (3))){
var inst_22093 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22095__$1,inst_22093);
} else {
if((state_val_22096 === (4))){
var inst_22085 = (state_22095[(2)]);
var inst_22086 = async.call(null,inst_22085);
var state_22095__$1 = state_22095;
if(cljs.core.truth_(inst_22086)){
var statearr_22098_22238 = state_22095__$1;
(statearr_22098_22238[(1)] = (5));

} else {
var statearr_22099_22239 = state_22095__$1;
(statearr_22099_22239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (5))){
var state_22095__$1 = state_22095;
var statearr_22100_22240 = state_22095__$1;
(statearr_22100_22240[(2)] = null);

(statearr_22100_22240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (6))){
var state_22095__$1 = state_22095;
var statearr_22101_22241 = state_22095__$1;
(statearr_22101_22241[(2)] = null);

(statearr_22101_22241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22096 === (7))){
var inst_22091 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
var statearr_22102_22242 = state_22095__$1;
(statearr_22102_22242[(2)] = inst_22091);

(statearr_22102_22242[(1)] = (3));


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
});})(__22224,c__21670__auto___22236,G__22055_22225,n__17764__auto___22223,jobs,results,process,async))
;
return ((function (__22224,switch__21558__auto__,c__21670__auto___22236,G__22055_22225,n__17764__auto___22223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0 = (function (){
var statearr_22106 = [null,null,null,null,null,null,null];
(statearr_22106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__);

(statearr_22106[(1)] = (1));

return statearr_22106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1 = (function (state_22095){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22107){if((e22107 instanceof Object)){
var ex__21562__auto__ = e22107;
var statearr_22108_22243 = state_22095;
(statearr_22108_22243[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22244 = state_22095;
state_22095 = G__22244;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = function(state_22095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1.call(this,state_22095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__;
})()
;})(__22224,switch__21558__auto__,c__21670__auto___22236,G__22055_22225,n__17764__auto___22223,jobs,results,process,async))
})();
var state__21672__auto__ = (function (){var statearr_22109 = f__21671__auto__.call(null);
(statearr_22109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___22236);

return statearr_22109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(__22224,c__21670__auto___22236,G__22055_22225,n__17764__auto___22223,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22245 = (__22224 + (1));
__22224 = G__22245;
continue;
} else {
}
break;
}

var c__21670__auto___22246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___22246,jobs,results,process,async){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___22246,jobs,results,process,async){
return (function (state_22131){
var state_val_22132 = (state_22131[(1)]);
if((state_val_22132 === (1))){
var state_22131__$1 = state_22131;
var statearr_22133_22247 = state_22131__$1;
(statearr_22133_22247[(2)] = null);

(statearr_22133_22247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (2))){
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22131__$1,(4),from);
} else {
if((state_val_22132 === (3))){
var inst_22129 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22131__$1,inst_22129);
} else {
if((state_val_22132 === (4))){
var inst_22112 = (state_22131[(7)]);
var inst_22112__$1 = (state_22131[(2)]);
var inst_22113 = (inst_22112__$1 == null);
var state_22131__$1 = (function (){var statearr_22134 = state_22131;
(statearr_22134[(7)] = inst_22112__$1);

return statearr_22134;
})();
if(cljs.core.truth_(inst_22113)){
var statearr_22135_22248 = state_22131__$1;
(statearr_22135_22248[(1)] = (5));

} else {
var statearr_22136_22249 = state_22131__$1;
(statearr_22136_22249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (5))){
var inst_22115 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22131__$1 = state_22131;
var statearr_22137_22250 = state_22131__$1;
(statearr_22137_22250[(2)] = inst_22115);

(statearr_22137_22250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (6))){
var inst_22112 = (state_22131[(7)]);
var inst_22117 = (state_22131[(8)]);
var inst_22117__$1 = cljs.core.async.chan.call(null,(1));
var inst_22118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22119 = [inst_22112,inst_22117__$1];
var inst_22120 = (new cljs.core.PersistentVector(null,2,(5),inst_22118,inst_22119,null));
var state_22131__$1 = (function (){var statearr_22138 = state_22131;
(statearr_22138[(8)] = inst_22117__$1);

return statearr_22138;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22131__$1,(8),jobs,inst_22120);
} else {
if((state_val_22132 === (7))){
var inst_22127 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22139_22251 = state_22131__$1;
(statearr_22139_22251[(2)] = inst_22127);

(statearr_22139_22251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (8))){
var inst_22117 = (state_22131[(8)]);
var inst_22122 = (state_22131[(2)]);
var state_22131__$1 = (function (){var statearr_22140 = state_22131;
(statearr_22140[(9)] = inst_22122);

return statearr_22140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22131__$1,(9),results,inst_22117);
} else {
if((state_val_22132 === (9))){
var inst_22124 = (state_22131[(2)]);
var state_22131__$1 = (function (){var statearr_22141 = state_22131;
(statearr_22141[(10)] = inst_22124);

return statearr_22141;
})();
var statearr_22142_22252 = state_22131__$1;
(statearr_22142_22252[(2)] = null);

(statearr_22142_22252[(1)] = (2));


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
});})(c__21670__auto___22246,jobs,results,process,async))
;
return ((function (switch__21558__auto__,c__21670__auto___22246,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0 = (function (){
var statearr_22146 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__);

(statearr_22146[(1)] = (1));

return statearr_22146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1 = (function (state_22131){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22147){if((e22147 instanceof Object)){
var ex__21562__auto__ = e22147;
var statearr_22148_22253 = state_22131;
(statearr_22148_22253[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22254 = state_22131;
state_22131 = G__22254;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = function(state_22131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1.call(this,state_22131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___22246,jobs,results,process,async))
})();
var state__21672__auto__ = (function (){var statearr_22149 = f__21671__auto__.call(null);
(statearr_22149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___22246);

return statearr_22149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___22246,jobs,results,process,async))
);


var c__21670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto__,jobs,results,process,async){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto__,jobs,results,process,async){
return (function (state_22187){
var state_val_22188 = (state_22187[(1)]);
if((state_val_22188 === (7))){
var inst_22183 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22189_22255 = state_22187__$1;
(statearr_22189_22255[(2)] = inst_22183);

(statearr_22189_22255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (20))){
var state_22187__$1 = state_22187;
var statearr_22190_22256 = state_22187__$1;
(statearr_22190_22256[(2)] = null);

(statearr_22190_22256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (1))){
var state_22187__$1 = state_22187;
var statearr_22191_22257 = state_22187__$1;
(statearr_22191_22257[(2)] = null);

(statearr_22191_22257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (4))){
var inst_22152 = (state_22187[(7)]);
var inst_22152__$1 = (state_22187[(2)]);
var inst_22153 = (inst_22152__$1 == null);
var state_22187__$1 = (function (){var statearr_22192 = state_22187;
(statearr_22192[(7)] = inst_22152__$1);

return statearr_22192;
})();
if(cljs.core.truth_(inst_22153)){
var statearr_22193_22258 = state_22187__$1;
(statearr_22193_22258[(1)] = (5));

} else {
var statearr_22194_22259 = state_22187__$1;
(statearr_22194_22259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (15))){
var inst_22165 = (state_22187[(8)]);
var state_22187__$1 = state_22187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22187__$1,(18),to,inst_22165);
} else {
if((state_val_22188 === (21))){
var inst_22178 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22195_22260 = state_22187__$1;
(statearr_22195_22260[(2)] = inst_22178);

(statearr_22195_22260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (13))){
var inst_22180 = (state_22187[(2)]);
var state_22187__$1 = (function (){var statearr_22196 = state_22187;
(statearr_22196[(9)] = inst_22180);

return statearr_22196;
})();
var statearr_22197_22261 = state_22187__$1;
(statearr_22197_22261[(2)] = null);

(statearr_22197_22261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (6))){
var inst_22152 = (state_22187[(7)]);
var state_22187__$1 = state_22187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22187__$1,(11),inst_22152);
} else {
if((state_val_22188 === (17))){
var inst_22173 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
if(cljs.core.truth_(inst_22173)){
var statearr_22198_22262 = state_22187__$1;
(statearr_22198_22262[(1)] = (19));

} else {
var statearr_22199_22263 = state_22187__$1;
(statearr_22199_22263[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (3))){
var inst_22185 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22187__$1,inst_22185);
} else {
if((state_val_22188 === (12))){
var inst_22162 = (state_22187[(10)]);
var state_22187__$1 = state_22187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22187__$1,(14),inst_22162);
} else {
if((state_val_22188 === (2))){
var state_22187__$1 = state_22187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22187__$1,(4),results);
} else {
if((state_val_22188 === (19))){
var state_22187__$1 = state_22187;
var statearr_22200_22264 = state_22187__$1;
(statearr_22200_22264[(2)] = null);

(statearr_22200_22264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (11))){
var inst_22162 = (state_22187[(2)]);
var state_22187__$1 = (function (){var statearr_22201 = state_22187;
(statearr_22201[(10)] = inst_22162);

return statearr_22201;
})();
var statearr_22202_22265 = state_22187__$1;
(statearr_22202_22265[(2)] = null);

(statearr_22202_22265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (9))){
var state_22187__$1 = state_22187;
var statearr_22203_22266 = state_22187__$1;
(statearr_22203_22266[(2)] = null);

(statearr_22203_22266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (5))){
var state_22187__$1 = state_22187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22204_22267 = state_22187__$1;
(statearr_22204_22267[(1)] = (8));

} else {
var statearr_22205_22268 = state_22187__$1;
(statearr_22205_22268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (14))){
var inst_22167 = (state_22187[(11)]);
var inst_22165 = (state_22187[(8)]);
var inst_22165__$1 = (state_22187[(2)]);
var inst_22166 = (inst_22165__$1 == null);
var inst_22167__$1 = cljs.core.not.call(null,inst_22166);
var state_22187__$1 = (function (){var statearr_22206 = state_22187;
(statearr_22206[(11)] = inst_22167__$1);

(statearr_22206[(8)] = inst_22165__$1);

return statearr_22206;
})();
if(inst_22167__$1){
var statearr_22207_22269 = state_22187__$1;
(statearr_22207_22269[(1)] = (15));

} else {
var statearr_22208_22270 = state_22187__$1;
(statearr_22208_22270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (16))){
var inst_22167 = (state_22187[(11)]);
var state_22187__$1 = state_22187;
var statearr_22209_22271 = state_22187__$1;
(statearr_22209_22271[(2)] = inst_22167);

(statearr_22209_22271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (10))){
var inst_22159 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22210_22272 = state_22187__$1;
(statearr_22210_22272[(2)] = inst_22159);

(statearr_22210_22272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (18))){
var inst_22170 = (state_22187[(2)]);
var state_22187__$1 = state_22187;
var statearr_22211_22273 = state_22187__$1;
(statearr_22211_22273[(2)] = inst_22170);

(statearr_22211_22273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22188 === (8))){
var inst_22156 = cljs.core.async.close_BANG_.call(null,to);
var state_22187__$1 = state_22187;
var statearr_22212_22274 = state_22187__$1;
(statearr_22212_22274[(2)] = inst_22156);

(statearr_22212_22274[(1)] = (10));


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
});})(c__21670__auto__,jobs,results,process,async))
;
return ((function (switch__21558__auto__,c__21670__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0 = (function (){
var statearr_22216 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__);

(statearr_22216[(1)] = (1));

return statearr_22216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1 = (function (state_22187){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22217){if((e22217 instanceof Object)){
var ex__21562__auto__ = e22217;
var statearr_22218_22275 = state_22187;
(statearr_22218_22275[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22276 = state_22187;
state_22187 = G__22276;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__ = function(state_22187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1.call(this,state_22187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto__,jobs,results,process,async))
})();
var state__21672__auto__ = (function (){var statearr_22219 = f__21671__auto__.call(null);
(statearr_22219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto__);

return statearr_22219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto__,jobs,results,process,async))
);

return c__21670__auto__;
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
var args22277 = [];
var len__17919__auto___22280 = arguments.length;
var i__17920__auto___22281 = (0);
while(true){
if((i__17920__auto___22281 < len__17919__auto___22280)){
args22277.push((arguments[i__17920__auto___22281]));

var G__22282 = (i__17920__auto___22281 + (1));
i__17920__auto___22281 = G__22282;
continue;
} else {
}
break;
}

var G__22279 = args22277.length;
switch (G__22279) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22277.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args22284 = [];
var len__17919__auto___22287 = arguments.length;
var i__17920__auto___22288 = (0);
while(true){
if((i__17920__auto___22288 < len__17919__auto___22287)){
args22284.push((arguments[i__17920__auto___22288]));

var G__22289 = (i__17920__auto___22288 + (1));
i__17920__auto___22288 = G__22289;
continue;
} else {
}
break;
}

var G__22286 = args22284.length;
switch (G__22286) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22284.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args22291 = [];
var len__17919__auto___22344 = arguments.length;
var i__17920__auto___22345 = (0);
while(true){
if((i__17920__auto___22345 < len__17919__auto___22344)){
args22291.push((arguments[i__17920__auto___22345]));

var G__22346 = (i__17920__auto___22345 + (1));
i__17920__auto___22345 = G__22346;
continue;
} else {
}
break;
}

var G__22293 = args22291.length;
switch (G__22293) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22291.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21670__auto___22348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___22348,tc,fc){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___22348,tc,fc){
return (function (state_22319){
var state_val_22320 = (state_22319[(1)]);
if((state_val_22320 === (7))){
var inst_22315 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
var statearr_22321_22349 = state_22319__$1;
(statearr_22321_22349[(2)] = inst_22315);

(statearr_22321_22349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (1))){
var state_22319__$1 = state_22319;
var statearr_22322_22350 = state_22319__$1;
(statearr_22322_22350[(2)] = null);

(statearr_22322_22350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (4))){
var inst_22296 = (state_22319[(7)]);
var inst_22296__$1 = (state_22319[(2)]);
var inst_22297 = (inst_22296__$1 == null);
var state_22319__$1 = (function (){var statearr_22323 = state_22319;
(statearr_22323[(7)] = inst_22296__$1);

return statearr_22323;
})();
if(cljs.core.truth_(inst_22297)){
var statearr_22324_22351 = state_22319__$1;
(statearr_22324_22351[(1)] = (5));

} else {
var statearr_22325_22352 = state_22319__$1;
(statearr_22325_22352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (13))){
var state_22319__$1 = state_22319;
var statearr_22326_22353 = state_22319__$1;
(statearr_22326_22353[(2)] = null);

(statearr_22326_22353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (6))){
var inst_22296 = (state_22319[(7)]);
var inst_22302 = p.call(null,inst_22296);
var state_22319__$1 = state_22319;
if(cljs.core.truth_(inst_22302)){
var statearr_22327_22354 = state_22319__$1;
(statearr_22327_22354[(1)] = (9));

} else {
var statearr_22328_22355 = state_22319__$1;
(statearr_22328_22355[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (3))){
var inst_22317 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22319__$1,inst_22317);
} else {
if((state_val_22320 === (12))){
var state_22319__$1 = state_22319;
var statearr_22329_22356 = state_22319__$1;
(statearr_22329_22356[(2)] = null);

(statearr_22329_22356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (2))){
var state_22319__$1 = state_22319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22319__$1,(4),ch);
} else {
if((state_val_22320 === (11))){
var inst_22296 = (state_22319[(7)]);
var inst_22306 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22319__$1,(8),inst_22306,inst_22296);
} else {
if((state_val_22320 === (9))){
var state_22319__$1 = state_22319;
var statearr_22330_22357 = state_22319__$1;
(statearr_22330_22357[(2)] = tc);

(statearr_22330_22357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (5))){
var inst_22299 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22300 = cljs.core.async.close_BANG_.call(null,fc);
var state_22319__$1 = (function (){var statearr_22331 = state_22319;
(statearr_22331[(8)] = inst_22299);

return statearr_22331;
})();
var statearr_22332_22358 = state_22319__$1;
(statearr_22332_22358[(2)] = inst_22300);

(statearr_22332_22358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (14))){
var inst_22313 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
var statearr_22333_22359 = state_22319__$1;
(statearr_22333_22359[(2)] = inst_22313);

(statearr_22333_22359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (10))){
var state_22319__$1 = state_22319;
var statearr_22334_22360 = state_22319__$1;
(statearr_22334_22360[(2)] = fc);

(statearr_22334_22360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (8))){
var inst_22308 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
if(cljs.core.truth_(inst_22308)){
var statearr_22335_22361 = state_22319__$1;
(statearr_22335_22361[(1)] = (12));

} else {
var statearr_22336_22362 = state_22319__$1;
(statearr_22336_22362[(1)] = (13));

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
});})(c__21670__auto___22348,tc,fc))
;
return ((function (switch__21558__auto__,c__21670__auto___22348,tc,fc){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_22340 = [null,null,null,null,null,null,null,null,null];
(statearr_22340[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_22340[(1)] = (1));

return statearr_22340;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_22319){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22341){if((e22341 instanceof Object)){
var ex__21562__auto__ = e22341;
var statearr_22342_22363 = state_22319;
(statearr_22342_22363[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22364 = state_22319;
state_22319 = G__22364;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_22319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_22319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___22348,tc,fc))
})();
var state__21672__auto__ = (function (){var statearr_22343 = f__21671__auto__.call(null);
(statearr_22343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___22348);

return statearr_22343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___22348,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto__){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto__){
return (function (state_22428){
var state_val_22429 = (state_22428[(1)]);
if((state_val_22429 === (7))){
var inst_22424 = (state_22428[(2)]);
var state_22428__$1 = state_22428;
var statearr_22430_22451 = state_22428__$1;
(statearr_22430_22451[(2)] = inst_22424);

(statearr_22430_22451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22429 === (1))){
var inst_22408 = init;
var state_22428__$1 = (function (){var statearr_22431 = state_22428;
(statearr_22431[(7)] = inst_22408);

return statearr_22431;
})();
var statearr_22432_22452 = state_22428__$1;
(statearr_22432_22452[(2)] = null);

(statearr_22432_22452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22429 === (4))){
var inst_22411 = (state_22428[(8)]);
var inst_22411__$1 = (state_22428[(2)]);
var inst_22412 = (inst_22411__$1 == null);
var state_22428__$1 = (function (){var statearr_22433 = state_22428;
(statearr_22433[(8)] = inst_22411__$1);

return statearr_22433;
})();
if(cljs.core.truth_(inst_22412)){
var statearr_22434_22453 = state_22428__$1;
(statearr_22434_22453[(1)] = (5));

} else {
var statearr_22435_22454 = state_22428__$1;
(statearr_22435_22454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22429 === (6))){
var inst_22408 = (state_22428[(7)]);
var inst_22411 = (state_22428[(8)]);
var inst_22415 = (state_22428[(9)]);
var inst_22415__$1 = f.call(null,inst_22408,inst_22411);
var inst_22416 = cljs.core.reduced_QMARK_.call(null,inst_22415__$1);
var state_22428__$1 = (function (){var statearr_22436 = state_22428;
(statearr_22436[(9)] = inst_22415__$1);

return statearr_22436;
})();
if(inst_22416){
var statearr_22437_22455 = state_22428__$1;
(statearr_22437_22455[(1)] = (8));

} else {
var statearr_22438_22456 = state_22428__$1;
(statearr_22438_22456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22429 === (3))){
var inst_22426 = (state_22428[(2)]);
var state_22428__$1 = state_22428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22428__$1,inst_22426);
} else {
if((state_val_22429 === (2))){
var state_22428__$1 = state_22428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22428__$1,(4),ch);
} else {
if((state_val_22429 === (9))){
var inst_22415 = (state_22428[(9)]);
var inst_22408 = inst_22415;
var state_22428__$1 = (function (){var statearr_22439 = state_22428;
(statearr_22439[(7)] = inst_22408);

return statearr_22439;
})();
var statearr_22440_22457 = state_22428__$1;
(statearr_22440_22457[(2)] = null);

(statearr_22440_22457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22429 === (5))){
var inst_22408 = (state_22428[(7)]);
var state_22428__$1 = state_22428;
var statearr_22441_22458 = state_22428__$1;
(statearr_22441_22458[(2)] = inst_22408);

(statearr_22441_22458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22429 === (10))){
var inst_22422 = (state_22428[(2)]);
var state_22428__$1 = state_22428;
var statearr_22442_22459 = state_22428__$1;
(statearr_22442_22459[(2)] = inst_22422);

(statearr_22442_22459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22429 === (8))){
var inst_22415 = (state_22428[(9)]);
var inst_22418 = cljs.core.deref.call(null,inst_22415);
var state_22428__$1 = state_22428;
var statearr_22443_22460 = state_22428__$1;
(statearr_22443_22460[(2)] = inst_22418);

(statearr_22443_22460[(1)] = (10));


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
});})(c__21670__auto__))
;
return ((function (switch__21558__auto__,c__21670__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21559__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21559__auto____0 = (function (){
var statearr_22447 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22447[(0)] = cljs$core$async$reduce_$_state_machine__21559__auto__);

(statearr_22447[(1)] = (1));

return statearr_22447;
});
var cljs$core$async$reduce_$_state_machine__21559__auto____1 = (function (state_22428){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22448){if((e22448 instanceof Object)){
var ex__21562__auto__ = e22448;
var statearr_22449_22461 = state_22428;
(statearr_22449_22461[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22462 = state_22428;
state_22428 = G__22462;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21559__auto__ = function(state_22428){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21559__auto____1.call(this,state_22428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21559__auto____0;
cljs$core$async$reduce_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21559__auto____1;
return cljs$core$async$reduce_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto__))
})();
var state__21672__auto__ = (function (){var statearr_22450 = f__21671__auto__.call(null);
(statearr_22450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto__);

return statearr_22450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto__))
);

return c__21670__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22463 = [];
var len__17919__auto___22515 = arguments.length;
var i__17920__auto___22516 = (0);
while(true){
if((i__17920__auto___22516 < len__17919__auto___22515)){
args22463.push((arguments[i__17920__auto___22516]));

var G__22517 = (i__17920__auto___22516 + (1));
i__17920__auto___22516 = G__22517;
continue;
} else {
}
break;
}

var G__22465 = args22463.length;
switch (G__22465) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22463.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto__){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto__){
return (function (state_22490){
var state_val_22491 = (state_22490[(1)]);
if((state_val_22491 === (7))){
var inst_22472 = (state_22490[(2)]);
var state_22490__$1 = state_22490;
var statearr_22492_22519 = state_22490__$1;
(statearr_22492_22519[(2)] = inst_22472);

(statearr_22492_22519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (1))){
var inst_22466 = cljs.core.seq.call(null,coll);
var inst_22467 = inst_22466;
var state_22490__$1 = (function (){var statearr_22493 = state_22490;
(statearr_22493[(7)] = inst_22467);

return statearr_22493;
})();
var statearr_22494_22520 = state_22490__$1;
(statearr_22494_22520[(2)] = null);

(statearr_22494_22520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (4))){
var inst_22467 = (state_22490[(7)]);
var inst_22470 = cljs.core.first.call(null,inst_22467);
var state_22490__$1 = state_22490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22490__$1,(7),ch,inst_22470);
} else {
if((state_val_22491 === (13))){
var inst_22484 = (state_22490[(2)]);
var state_22490__$1 = state_22490;
var statearr_22495_22521 = state_22490__$1;
(statearr_22495_22521[(2)] = inst_22484);

(statearr_22495_22521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (6))){
var inst_22475 = (state_22490[(2)]);
var state_22490__$1 = state_22490;
if(cljs.core.truth_(inst_22475)){
var statearr_22496_22522 = state_22490__$1;
(statearr_22496_22522[(1)] = (8));

} else {
var statearr_22497_22523 = state_22490__$1;
(statearr_22497_22523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (3))){
var inst_22488 = (state_22490[(2)]);
var state_22490__$1 = state_22490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22490__$1,inst_22488);
} else {
if((state_val_22491 === (12))){
var state_22490__$1 = state_22490;
var statearr_22498_22524 = state_22490__$1;
(statearr_22498_22524[(2)] = null);

(statearr_22498_22524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (2))){
var inst_22467 = (state_22490[(7)]);
var state_22490__$1 = state_22490;
if(cljs.core.truth_(inst_22467)){
var statearr_22499_22525 = state_22490__$1;
(statearr_22499_22525[(1)] = (4));

} else {
var statearr_22500_22526 = state_22490__$1;
(statearr_22500_22526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (11))){
var inst_22481 = cljs.core.async.close_BANG_.call(null,ch);
var state_22490__$1 = state_22490;
var statearr_22501_22527 = state_22490__$1;
(statearr_22501_22527[(2)] = inst_22481);

(statearr_22501_22527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (9))){
var state_22490__$1 = state_22490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22502_22528 = state_22490__$1;
(statearr_22502_22528[(1)] = (11));

} else {
var statearr_22503_22529 = state_22490__$1;
(statearr_22503_22529[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (5))){
var inst_22467 = (state_22490[(7)]);
var state_22490__$1 = state_22490;
var statearr_22504_22530 = state_22490__$1;
(statearr_22504_22530[(2)] = inst_22467);

(statearr_22504_22530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (10))){
var inst_22486 = (state_22490[(2)]);
var state_22490__$1 = state_22490;
var statearr_22505_22531 = state_22490__$1;
(statearr_22505_22531[(2)] = inst_22486);

(statearr_22505_22531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22491 === (8))){
var inst_22467 = (state_22490[(7)]);
var inst_22477 = cljs.core.next.call(null,inst_22467);
var inst_22467__$1 = inst_22477;
var state_22490__$1 = (function (){var statearr_22506 = state_22490;
(statearr_22506[(7)] = inst_22467__$1);

return statearr_22506;
})();
var statearr_22507_22532 = state_22490__$1;
(statearr_22507_22532[(2)] = null);

(statearr_22507_22532[(1)] = (2));


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
});})(c__21670__auto__))
;
return ((function (switch__21558__auto__,c__21670__auto__){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_22511 = [null,null,null,null,null,null,null,null];
(statearr_22511[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_22511[(1)] = (1));

return statearr_22511;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_22490){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22512){if((e22512 instanceof Object)){
var ex__21562__auto__ = e22512;
var statearr_22513_22533 = state_22490;
(statearr_22513_22533[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22534 = state_22490;
state_22490 = G__22534;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_22490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_22490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto__))
})();
var state__21672__auto__ = (function (){var statearr_22514 = f__21671__auto__.call(null);
(statearr_22514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto__);

return statearr_22514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto__))
);

return c__21670__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17516__auto__ = (((_ == null))?null:_);
var m__17517__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,_);
} else {
var m__17517__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17516__auto__ = (((m == null))?null:m);
var m__17517__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17517__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17516__auto__ = (((m == null))?null:m);
var m__17517__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,m,ch);
} else {
var m__17517__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17516__auto__ = (((m == null))?null:m);
var m__17517__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,m);
} else {
var m__17517__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if(typeof cljs.core.async.t_cljs$core$async22756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22756 = (function (mult,ch,cs,meta22757){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22757 = meta22757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22758,meta22757__$1){
var self__ = this;
var _22758__$1 = this;
return (new cljs.core.async.t_cljs$core$async22756(self__.mult,self__.ch,self__.cs,meta22757__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22758){
var self__ = this;
var _22758__$1 = this;
return self__.meta22757;
});})(cs))
;

cljs.core.async.t_cljs$core$async22756.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22756.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22756.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22756.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22756.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22756.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22757","meta22757",29426438,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22756";

cljs.core.async.t_cljs$core$async22756.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async22756");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22756 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22756(mult__$1,ch__$1,cs__$1,meta22757){
return (new cljs.core.async.t_cljs$core$async22756(mult__$1,ch__$1,cs__$1,meta22757));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22756(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21670__auto___22977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___22977,cs,m,dchan,dctr,done){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___22977,cs,m,dchan,dctr,done){
return (function (state_22889){
var state_val_22890 = (state_22889[(1)]);
if((state_val_22890 === (7))){
var inst_22885 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22891_22978 = state_22889__$1;
(statearr_22891_22978[(2)] = inst_22885);

(statearr_22891_22978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (20))){
var inst_22790 = (state_22889[(7)]);
var inst_22800 = cljs.core.first.call(null,inst_22790);
var inst_22801 = cljs.core.nth.call(null,inst_22800,(0),null);
var inst_22802 = cljs.core.nth.call(null,inst_22800,(1),null);
var state_22889__$1 = (function (){var statearr_22892 = state_22889;
(statearr_22892[(8)] = inst_22801);

return statearr_22892;
})();
if(cljs.core.truth_(inst_22802)){
var statearr_22893_22979 = state_22889__$1;
(statearr_22893_22979[(1)] = (22));

} else {
var statearr_22894_22980 = state_22889__$1;
(statearr_22894_22980[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (27))){
var inst_22761 = (state_22889[(9)]);
var inst_22832 = (state_22889[(10)]);
var inst_22830 = (state_22889[(11)]);
var inst_22837 = (state_22889[(12)]);
var inst_22837__$1 = cljs.core._nth.call(null,inst_22830,inst_22832);
var inst_22838 = cljs.core.async.put_BANG_.call(null,inst_22837__$1,inst_22761,done);
var state_22889__$1 = (function (){var statearr_22895 = state_22889;
(statearr_22895[(12)] = inst_22837__$1);

return statearr_22895;
})();
if(cljs.core.truth_(inst_22838)){
var statearr_22896_22981 = state_22889__$1;
(statearr_22896_22981[(1)] = (30));

} else {
var statearr_22897_22982 = state_22889__$1;
(statearr_22897_22982[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (1))){
var state_22889__$1 = state_22889;
var statearr_22898_22983 = state_22889__$1;
(statearr_22898_22983[(2)] = null);

(statearr_22898_22983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (24))){
var inst_22790 = (state_22889[(7)]);
var inst_22807 = (state_22889[(2)]);
var inst_22808 = cljs.core.next.call(null,inst_22790);
var inst_22770 = inst_22808;
var inst_22771 = null;
var inst_22772 = (0);
var inst_22773 = (0);
var state_22889__$1 = (function (){var statearr_22899 = state_22889;
(statearr_22899[(13)] = inst_22773);

(statearr_22899[(14)] = inst_22771);

(statearr_22899[(15)] = inst_22772);

(statearr_22899[(16)] = inst_22807);

(statearr_22899[(17)] = inst_22770);

return statearr_22899;
})();
var statearr_22900_22984 = state_22889__$1;
(statearr_22900_22984[(2)] = null);

(statearr_22900_22984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (39))){
var state_22889__$1 = state_22889;
var statearr_22904_22985 = state_22889__$1;
(statearr_22904_22985[(2)] = null);

(statearr_22904_22985[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (4))){
var inst_22761 = (state_22889[(9)]);
var inst_22761__$1 = (state_22889[(2)]);
var inst_22762 = (inst_22761__$1 == null);
var state_22889__$1 = (function (){var statearr_22905 = state_22889;
(statearr_22905[(9)] = inst_22761__$1);

return statearr_22905;
})();
if(cljs.core.truth_(inst_22762)){
var statearr_22906_22986 = state_22889__$1;
(statearr_22906_22986[(1)] = (5));

} else {
var statearr_22907_22987 = state_22889__$1;
(statearr_22907_22987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (15))){
var inst_22773 = (state_22889[(13)]);
var inst_22771 = (state_22889[(14)]);
var inst_22772 = (state_22889[(15)]);
var inst_22770 = (state_22889[(17)]);
var inst_22786 = (state_22889[(2)]);
var inst_22787 = (inst_22773 + (1));
var tmp22901 = inst_22771;
var tmp22902 = inst_22772;
var tmp22903 = inst_22770;
var inst_22770__$1 = tmp22903;
var inst_22771__$1 = tmp22901;
var inst_22772__$1 = tmp22902;
var inst_22773__$1 = inst_22787;
var state_22889__$1 = (function (){var statearr_22908 = state_22889;
(statearr_22908[(13)] = inst_22773__$1);

(statearr_22908[(18)] = inst_22786);

(statearr_22908[(14)] = inst_22771__$1);

(statearr_22908[(15)] = inst_22772__$1);

(statearr_22908[(17)] = inst_22770__$1);

return statearr_22908;
})();
var statearr_22909_22988 = state_22889__$1;
(statearr_22909_22988[(2)] = null);

(statearr_22909_22988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (21))){
var inst_22811 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22913_22989 = state_22889__$1;
(statearr_22913_22989[(2)] = inst_22811);

(statearr_22913_22989[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (31))){
var inst_22837 = (state_22889[(12)]);
var inst_22841 = done.call(null,null);
var inst_22842 = cljs.core.async.untap_STAR_.call(null,m,inst_22837);
var state_22889__$1 = (function (){var statearr_22914 = state_22889;
(statearr_22914[(19)] = inst_22841);

return statearr_22914;
})();
var statearr_22915_22990 = state_22889__$1;
(statearr_22915_22990[(2)] = inst_22842);

(statearr_22915_22990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (32))){
var inst_22832 = (state_22889[(10)]);
var inst_22830 = (state_22889[(11)]);
var inst_22831 = (state_22889[(20)]);
var inst_22829 = (state_22889[(21)]);
var inst_22844 = (state_22889[(2)]);
var inst_22845 = (inst_22832 + (1));
var tmp22910 = inst_22830;
var tmp22911 = inst_22831;
var tmp22912 = inst_22829;
var inst_22829__$1 = tmp22912;
var inst_22830__$1 = tmp22910;
var inst_22831__$1 = tmp22911;
var inst_22832__$1 = inst_22845;
var state_22889__$1 = (function (){var statearr_22916 = state_22889;
(statearr_22916[(10)] = inst_22832__$1);

(statearr_22916[(11)] = inst_22830__$1);

(statearr_22916[(20)] = inst_22831__$1);

(statearr_22916[(21)] = inst_22829__$1);

(statearr_22916[(22)] = inst_22844);

return statearr_22916;
})();
var statearr_22917_22991 = state_22889__$1;
(statearr_22917_22991[(2)] = null);

(statearr_22917_22991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (40))){
var inst_22857 = (state_22889[(23)]);
var inst_22861 = done.call(null,null);
var inst_22862 = cljs.core.async.untap_STAR_.call(null,m,inst_22857);
var state_22889__$1 = (function (){var statearr_22918 = state_22889;
(statearr_22918[(24)] = inst_22861);

return statearr_22918;
})();
var statearr_22919_22992 = state_22889__$1;
(statearr_22919_22992[(2)] = inst_22862);

(statearr_22919_22992[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (33))){
var inst_22848 = (state_22889[(25)]);
var inst_22850 = cljs.core.chunked_seq_QMARK_.call(null,inst_22848);
var state_22889__$1 = state_22889;
if(inst_22850){
var statearr_22920_22993 = state_22889__$1;
(statearr_22920_22993[(1)] = (36));

} else {
var statearr_22921_22994 = state_22889__$1;
(statearr_22921_22994[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (13))){
var inst_22780 = (state_22889[(26)]);
var inst_22783 = cljs.core.async.close_BANG_.call(null,inst_22780);
var state_22889__$1 = state_22889;
var statearr_22922_22995 = state_22889__$1;
(statearr_22922_22995[(2)] = inst_22783);

(statearr_22922_22995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (22))){
var inst_22801 = (state_22889[(8)]);
var inst_22804 = cljs.core.async.close_BANG_.call(null,inst_22801);
var state_22889__$1 = state_22889;
var statearr_22923_22996 = state_22889__$1;
(statearr_22923_22996[(2)] = inst_22804);

(statearr_22923_22996[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (36))){
var inst_22848 = (state_22889[(25)]);
var inst_22852 = cljs.core.chunk_first.call(null,inst_22848);
var inst_22853 = cljs.core.chunk_rest.call(null,inst_22848);
var inst_22854 = cljs.core.count.call(null,inst_22852);
var inst_22829 = inst_22853;
var inst_22830 = inst_22852;
var inst_22831 = inst_22854;
var inst_22832 = (0);
var state_22889__$1 = (function (){var statearr_22924 = state_22889;
(statearr_22924[(10)] = inst_22832);

(statearr_22924[(11)] = inst_22830);

(statearr_22924[(20)] = inst_22831);

(statearr_22924[(21)] = inst_22829);

return statearr_22924;
})();
var statearr_22925_22997 = state_22889__$1;
(statearr_22925_22997[(2)] = null);

(statearr_22925_22997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (41))){
var inst_22848 = (state_22889[(25)]);
var inst_22864 = (state_22889[(2)]);
var inst_22865 = cljs.core.next.call(null,inst_22848);
var inst_22829 = inst_22865;
var inst_22830 = null;
var inst_22831 = (0);
var inst_22832 = (0);
var state_22889__$1 = (function (){var statearr_22926 = state_22889;
(statearr_22926[(10)] = inst_22832);

(statearr_22926[(11)] = inst_22830);

(statearr_22926[(20)] = inst_22831);

(statearr_22926[(27)] = inst_22864);

(statearr_22926[(21)] = inst_22829);

return statearr_22926;
})();
var statearr_22927_22998 = state_22889__$1;
(statearr_22927_22998[(2)] = null);

(statearr_22927_22998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (43))){
var state_22889__$1 = state_22889;
var statearr_22928_22999 = state_22889__$1;
(statearr_22928_22999[(2)] = null);

(statearr_22928_22999[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (29))){
var inst_22873 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22929_23000 = state_22889__$1;
(statearr_22929_23000[(2)] = inst_22873);

(statearr_22929_23000[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (44))){
var inst_22882 = (state_22889[(2)]);
var state_22889__$1 = (function (){var statearr_22930 = state_22889;
(statearr_22930[(28)] = inst_22882);

return statearr_22930;
})();
var statearr_22931_23001 = state_22889__$1;
(statearr_22931_23001[(2)] = null);

(statearr_22931_23001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (6))){
var inst_22821 = (state_22889[(29)]);
var inst_22820 = cljs.core.deref.call(null,cs);
var inst_22821__$1 = cljs.core.keys.call(null,inst_22820);
var inst_22822 = cljs.core.count.call(null,inst_22821__$1);
var inst_22823 = cljs.core.reset_BANG_.call(null,dctr,inst_22822);
var inst_22828 = cljs.core.seq.call(null,inst_22821__$1);
var inst_22829 = inst_22828;
var inst_22830 = null;
var inst_22831 = (0);
var inst_22832 = (0);
var state_22889__$1 = (function (){var statearr_22932 = state_22889;
(statearr_22932[(10)] = inst_22832);

(statearr_22932[(11)] = inst_22830);

(statearr_22932[(20)] = inst_22831);

(statearr_22932[(29)] = inst_22821__$1);

(statearr_22932[(21)] = inst_22829);

(statearr_22932[(30)] = inst_22823);

return statearr_22932;
})();
var statearr_22933_23002 = state_22889__$1;
(statearr_22933_23002[(2)] = null);

(statearr_22933_23002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (28))){
var inst_22848 = (state_22889[(25)]);
var inst_22829 = (state_22889[(21)]);
var inst_22848__$1 = cljs.core.seq.call(null,inst_22829);
var state_22889__$1 = (function (){var statearr_22934 = state_22889;
(statearr_22934[(25)] = inst_22848__$1);

return statearr_22934;
})();
if(inst_22848__$1){
var statearr_22935_23003 = state_22889__$1;
(statearr_22935_23003[(1)] = (33));

} else {
var statearr_22936_23004 = state_22889__$1;
(statearr_22936_23004[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (25))){
var inst_22832 = (state_22889[(10)]);
var inst_22831 = (state_22889[(20)]);
var inst_22834 = (inst_22832 < inst_22831);
var inst_22835 = inst_22834;
var state_22889__$1 = state_22889;
if(cljs.core.truth_(inst_22835)){
var statearr_22937_23005 = state_22889__$1;
(statearr_22937_23005[(1)] = (27));

} else {
var statearr_22938_23006 = state_22889__$1;
(statearr_22938_23006[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (34))){
var state_22889__$1 = state_22889;
var statearr_22939_23007 = state_22889__$1;
(statearr_22939_23007[(2)] = null);

(statearr_22939_23007[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (17))){
var state_22889__$1 = state_22889;
var statearr_22940_23008 = state_22889__$1;
(statearr_22940_23008[(2)] = null);

(statearr_22940_23008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (3))){
var inst_22887 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22889__$1,inst_22887);
} else {
if((state_val_22890 === (12))){
var inst_22816 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22941_23009 = state_22889__$1;
(statearr_22941_23009[(2)] = inst_22816);

(statearr_22941_23009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (2))){
var state_22889__$1 = state_22889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22889__$1,(4),ch);
} else {
if((state_val_22890 === (23))){
var state_22889__$1 = state_22889;
var statearr_22942_23010 = state_22889__$1;
(statearr_22942_23010[(2)] = null);

(statearr_22942_23010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (35))){
var inst_22871 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22943_23011 = state_22889__$1;
(statearr_22943_23011[(2)] = inst_22871);

(statearr_22943_23011[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (19))){
var inst_22790 = (state_22889[(7)]);
var inst_22794 = cljs.core.chunk_first.call(null,inst_22790);
var inst_22795 = cljs.core.chunk_rest.call(null,inst_22790);
var inst_22796 = cljs.core.count.call(null,inst_22794);
var inst_22770 = inst_22795;
var inst_22771 = inst_22794;
var inst_22772 = inst_22796;
var inst_22773 = (0);
var state_22889__$1 = (function (){var statearr_22944 = state_22889;
(statearr_22944[(13)] = inst_22773);

(statearr_22944[(14)] = inst_22771);

(statearr_22944[(15)] = inst_22772);

(statearr_22944[(17)] = inst_22770);

return statearr_22944;
})();
var statearr_22945_23012 = state_22889__$1;
(statearr_22945_23012[(2)] = null);

(statearr_22945_23012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (11))){
var inst_22770 = (state_22889[(17)]);
var inst_22790 = (state_22889[(7)]);
var inst_22790__$1 = cljs.core.seq.call(null,inst_22770);
var state_22889__$1 = (function (){var statearr_22946 = state_22889;
(statearr_22946[(7)] = inst_22790__$1);

return statearr_22946;
})();
if(inst_22790__$1){
var statearr_22947_23013 = state_22889__$1;
(statearr_22947_23013[(1)] = (16));

} else {
var statearr_22948_23014 = state_22889__$1;
(statearr_22948_23014[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (9))){
var inst_22818 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22949_23015 = state_22889__$1;
(statearr_22949_23015[(2)] = inst_22818);

(statearr_22949_23015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (5))){
var inst_22768 = cljs.core.deref.call(null,cs);
var inst_22769 = cljs.core.seq.call(null,inst_22768);
var inst_22770 = inst_22769;
var inst_22771 = null;
var inst_22772 = (0);
var inst_22773 = (0);
var state_22889__$1 = (function (){var statearr_22950 = state_22889;
(statearr_22950[(13)] = inst_22773);

(statearr_22950[(14)] = inst_22771);

(statearr_22950[(15)] = inst_22772);

(statearr_22950[(17)] = inst_22770);

return statearr_22950;
})();
var statearr_22951_23016 = state_22889__$1;
(statearr_22951_23016[(2)] = null);

(statearr_22951_23016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (14))){
var state_22889__$1 = state_22889;
var statearr_22952_23017 = state_22889__$1;
(statearr_22952_23017[(2)] = null);

(statearr_22952_23017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (45))){
var inst_22879 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22953_23018 = state_22889__$1;
(statearr_22953_23018[(2)] = inst_22879);

(statearr_22953_23018[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (26))){
var inst_22821 = (state_22889[(29)]);
var inst_22875 = (state_22889[(2)]);
var inst_22876 = cljs.core.seq.call(null,inst_22821);
var state_22889__$1 = (function (){var statearr_22954 = state_22889;
(statearr_22954[(31)] = inst_22875);

return statearr_22954;
})();
if(inst_22876){
var statearr_22955_23019 = state_22889__$1;
(statearr_22955_23019[(1)] = (42));

} else {
var statearr_22956_23020 = state_22889__$1;
(statearr_22956_23020[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (16))){
var inst_22790 = (state_22889[(7)]);
var inst_22792 = cljs.core.chunked_seq_QMARK_.call(null,inst_22790);
var state_22889__$1 = state_22889;
if(inst_22792){
var statearr_22957_23021 = state_22889__$1;
(statearr_22957_23021[(1)] = (19));

} else {
var statearr_22958_23022 = state_22889__$1;
(statearr_22958_23022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (38))){
var inst_22868 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22959_23023 = state_22889__$1;
(statearr_22959_23023[(2)] = inst_22868);

(statearr_22959_23023[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (30))){
var state_22889__$1 = state_22889;
var statearr_22960_23024 = state_22889__$1;
(statearr_22960_23024[(2)] = null);

(statearr_22960_23024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (10))){
var inst_22773 = (state_22889[(13)]);
var inst_22771 = (state_22889[(14)]);
var inst_22779 = cljs.core._nth.call(null,inst_22771,inst_22773);
var inst_22780 = cljs.core.nth.call(null,inst_22779,(0),null);
var inst_22781 = cljs.core.nth.call(null,inst_22779,(1),null);
var state_22889__$1 = (function (){var statearr_22961 = state_22889;
(statearr_22961[(26)] = inst_22780);

return statearr_22961;
})();
if(cljs.core.truth_(inst_22781)){
var statearr_22962_23025 = state_22889__$1;
(statearr_22962_23025[(1)] = (13));

} else {
var statearr_22963_23026 = state_22889__$1;
(statearr_22963_23026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (18))){
var inst_22814 = (state_22889[(2)]);
var state_22889__$1 = state_22889;
var statearr_22964_23027 = state_22889__$1;
(statearr_22964_23027[(2)] = inst_22814);

(statearr_22964_23027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (42))){
var state_22889__$1 = state_22889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22889__$1,(45),dchan);
} else {
if((state_val_22890 === (37))){
var inst_22761 = (state_22889[(9)]);
var inst_22848 = (state_22889[(25)]);
var inst_22857 = (state_22889[(23)]);
var inst_22857__$1 = cljs.core.first.call(null,inst_22848);
var inst_22858 = cljs.core.async.put_BANG_.call(null,inst_22857__$1,inst_22761,done);
var state_22889__$1 = (function (){var statearr_22965 = state_22889;
(statearr_22965[(23)] = inst_22857__$1);

return statearr_22965;
})();
if(cljs.core.truth_(inst_22858)){
var statearr_22966_23028 = state_22889__$1;
(statearr_22966_23028[(1)] = (39));

} else {
var statearr_22967_23029 = state_22889__$1;
(statearr_22967_23029[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22890 === (8))){
var inst_22773 = (state_22889[(13)]);
var inst_22772 = (state_22889[(15)]);
var inst_22775 = (inst_22773 < inst_22772);
var inst_22776 = inst_22775;
var state_22889__$1 = state_22889;
if(cljs.core.truth_(inst_22776)){
var statearr_22968_23030 = state_22889__$1;
(statearr_22968_23030[(1)] = (10));

} else {
var statearr_22969_23031 = state_22889__$1;
(statearr_22969_23031[(1)] = (11));

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
});})(c__21670__auto___22977,cs,m,dchan,dctr,done))
;
return ((function (switch__21558__auto__,c__21670__auto___22977,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21559__auto__ = null;
var cljs$core$async$mult_$_state_machine__21559__auto____0 = (function (){
var statearr_22973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22973[(0)] = cljs$core$async$mult_$_state_machine__21559__auto__);

(statearr_22973[(1)] = (1));

return statearr_22973;
});
var cljs$core$async$mult_$_state_machine__21559__auto____1 = (function (state_22889){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_22889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e22974){if((e22974 instanceof Object)){
var ex__21562__auto__ = e22974;
var statearr_22975_23032 = state_22889;
(statearr_22975_23032[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23033 = state_22889;
state_22889 = G__23033;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21559__auto__ = function(state_22889){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21559__auto____1.call(this,state_22889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21559__auto____0;
cljs$core$async$mult_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21559__auto____1;
return cljs$core$async$mult_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___22977,cs,m,dchan,dctr,done))
})();
var state__21672__auto__ = (function (){var statearr_22976 = f__21671__auto__.call(null);
(statearr_22976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___22977);

return statearr_22976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___22977,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23034 = [];
var len__17919__auto___23037 = arguments.length;
var i__17920__auto___23038 = (0);
while(true){
if((i__17920__auto___23038 < len__17919__auto___23037)){
args23034.push((arguments[i__17920__auto___23038]));

var G__23039 = (i__17920__auto___23038 + (1));
i__17920__auto___23038 = G__23039;
continue;
} else {
}
break;
}

var G__23036 = args23034.length;
switch (G__23036) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23034.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17516__auto__ = (((m == null))?null:m);
var m__17517__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,m,ch);
} else {
var m__17517__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17516__auto__ = (((m == null))?null:m);
var m__17517__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,m,ch);
} else {
var m__17517__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17516__auto__ = (((m == null))?null:m);
var m__17517__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,m);
} else {
var m__17517__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17516__auto__ = (((m == null))?null:m);
var m__17517__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,m,state_map);
} else {
var m__17517__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17516__auto__ = (((m == null))?null:m);
var m__17517__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,m,mode);
} else {
var m__17517__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17926__auto__ = [];
var len__17919__auto___23051 = arguments.length;
var i__17920__auto___23052 = (0);
while(true){
if((i__17920__auto___23052 < len__17919__auto___23051)){
args__17926__auto__.push((arguments[i__17920__auto___23052]));

var G__23053 = (i__17920__auto___23052 + (1));
i__17920__auto___23052 = G__23053;
continue;
} else {
}
break;
}

var argseq__17927__auto__ = ((((3) < args__17926__auto__.length))?(new cljs.core.IndexedSeq(args__17926__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17927__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23045){
var map__23046 = p__23045;
var map__23046__$1 = ((((!((map__23046 == null)))?((((map__23046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23046):map__23046);
var opts = map__23046__$1;
var statearr_23048_23054 = state;
(statearr_23048_23054[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23046,map__23046__$1,opts){
return (function (val){
var statearr_23049_23055 = state;
(statearr_23049_23055[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23046,map__23046__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23050_23056 = state;
(statearr_23050_23056[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23041){
var G__23042 = cljs.core.first.call(null,seq23041);
var seq23041__$1 = cljs.core.next.call(null,seq23041);
var G__23043 = cljs.core.first.call(null,seq23041__$1);
var seq23041__$2 = cljs.core.next.call(null,seq23041__$1);
var G__23044 = cljs.core.first.call(null,seq23041__$2);
var seq23041__$3 = cljs.core.next.call(null,seq23041__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23042,G__23043,G__23044,seq23041__$3);
});
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
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23220 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23221){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23221 = meta23221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23222,meta23221__$1){
var self__ = this;
var _23222__$1 = this;
return (new cljs.core.async.t_cljs$core$async23220(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23221__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23222){
var self__ = this;
var _23222__$1 = this;
return self__.meta23221;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23221","meta23221",-853352546,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23220";

cljs.core.async.t_cljs$core$async23220.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async23220");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23220 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23220(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23221){
return (new cljs.core.async.t_cljs$core$async23220(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23221));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23220(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21670__auto___23383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___23383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___23383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23320){
var state_val_23321 = (state_23320[(1)]);
if((state_val_23321 === (7))){
var inst_23238 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23322_23384 = state_23320__$1;
(statearr_23322_23384[(2)] = inst_23238);

(statearr_23322_23384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (20))){
var inst_23250 = (state_23320[(7)]);
var state_23320__$1 = state_23320;
var statearr_23323_23385 = state_23320__$1;
(statearr_23323_23385[(2)] = inst_23250);

(statearr_23323_23385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (27))){
var state_23320__$1 = state_23320;
var statearr_23324_23386 = state_23320__$1;
(statearr_23324_23386[(2)] = null);

(statearr_23324_23386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (1))){
var inst_23226 = (state_23320[(8)]);
var inst_23226__$1 = calc_state.call(null);
var inst_23228 = (inst_23226__$1 == null);
var inst_23229 = cljs.core.not.call(null,inst_23228);
var state_23320__$1 = (function (){var statearr_23325 = state_23320;
(statearr_23325[(8)] = inst_23226__$1);

return statearr_23325;
})();
if(inst_23229){
var statearr_23326_23387 = state_23320__$1;
(statearr_23326_23387[(1)] = (2));

} else {
var statearr_23327_23388 = state_23320__$1;
(statearr_23327_23388[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (24))){
var inst_23294 = (state_23320[(9)]);
var inst_23273 = (state_23320[(10)]);
var inst_23280 = (state_23320[(11)]);
var inst_23294__$1 = inst_23273.call(null,inst_23280);
var state_23320__$1 = (function (){var statearr_23328 = state_23320;
(statearr_23328[(9)] = inst_23294__$1);

return statearr_23328;
})();
if(cljs.core.truth_(inst_23294__$1)){
var statearr_23329_23389 = state_23320__$1;
(statearr_23329_23389[(1)] = (29));

} else {
var statearr_23330_23390 = state_23320__$1;
(statearr_23330_23390[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (4))){
var inst_23241 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23241)){
var statearr_23331_23391 = state_23320__$1;
(statearr_23331_23391[(1)] = (8));

} else {
var statearr_23332_23392 = state_23320__$1;
(statearr_23332_23392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (15))){
var inst_23267 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23267)){
var statearr_23333_23393 = state_23320__$1;
(statearr_23333_23393[(1)] = (19));

} else {
var statearr_23334_23394 = state_23320__$1;
(statearr_23334_23394[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (21))){
var inst_23272 = (state_23320[(12)]);
var inst_23272__$1 = (state_23320[(2)]);
var inst_23273 = cljs.core.get.call(null,inst_23272__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23274 = cljs.core.get.call(null,inst_23272__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23275 = cljs.core.get.call(null,inst_23272__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23320__$1 = (function (){var statearr_23335 = state_23320;
(statearr_23335[(13)] = inst_23274);

(statearr_23335[(10)] = inst_23273);

(statearr_23335[(12)] = inst_23272__$1);

return statearr_23335;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23320__$1,(22),inst_23275);
} else {
if((state_val_23321 === (31))){
var inst_23302 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23302)){
var statearr_23336_23395 = state_23320__$1;
(statearr_23336_23395[(1)] = (32));

} else {
var statearr_23337_23396 = state_23320__$1;
(statearr_23337_23396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (32))){
var inst_23279 = (state_23320[(14)]);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23320__$1,(35),out,inst_23279);
} else {
if((state_val_23321 === (33))){
var inst_23272 = (state_23320[(12)]);
var inst_23250 = inst_23272;
var state_23320__$1 = (function (){var statearr_23338 = state_23320;
(statearr_23338[(7)] = inst_23250);

return statearr_23338;
})();
var statearr_23339_23397 = state_23320__$1;
(statearr_23339_23397[(2)] = null);

(statearr_23339_23397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (13))){
var inst_23250 = (state_23320[(7)]);
var inst_23257 = inst_23250.cljs$lang$protocol_mask$partition0$;
var inst_23258 = (inst_23257 & (64));
var inst_23259 = inst_23250.cljs$core$ISeq$;
var inst_23260 = (inst_23258) || (inst_23259);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23260)){
var statearr_23340_23398 = state_23320__$1;
(statearr_23340_23398[(1)] = (16));

} else {
var statearr_23341_23399 = state_23320__$1;
(statearr_23341_23399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (22))){
var inst_23280 = (state_23320[(11)]);
var inst_23279 = (state_23320[(14)]);
var inst_23278 = (state_23320[(2)]);
var inst_23279__$1 = cljs.core.nth.call(null,inst_23278,(0),null);
var inst_23280__$1 = cljs.core.nth.call(null,inst_23278,(1),null);
var inst_23281 = (inst_23279__$1 == null);
var inst_23282 = cljs.core._EQ_.call(null,inst_23280__$1,change);
var inst_23283 = (inst_23281) || (inst_23282);
var state_23320__$1 = (function (){var statearr_23342 = state_23320;
(statearr_23342[(11)] = inst_23280__$1);

(statearr_23342[(14)] = inst_23279__$1);

return statearr_23342;
})();
if(cljs.core.truth_(inst_23283)){
var statearr_23343_23400 = state_23320__$1;
(statearr_23343_23400[(1)] = (23));

} else {
var statearr_23344_23401 = state_23320__$1;
(statearr_23344_23401[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (36))){
var inst_23272 = (state_23320[(12)]);
var inst_23250 = inst_23272;
var state_23320__$1 = (function (){var statearr_23345 = state_23320;
(statearr_23345[(7)] = inst_23250);

return statearr_23345;
})();
var statearr_23346_23402 = state_23320__$1;
(statearr_23346_23402[(2)] = null);

(statearr_23346_23402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (29))){
var inst_23294 = (state_23320[(9)]);
var state_23320__$1 = state_23320;
var statearr_23347_23403 = state_23320__$1;
(statearr_23347_23403[(2)] = inst_23294);

(statearr_23347_23403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (6))){
var state_23320__$1 = state_23320;
var statearr_23348_23404 = state_23320__$1;
(statearr_23348_23404[(2)] = false);

(statearr_23348_23404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (28))){
var inst_23290 = (state_23320[(2)]);
var inst_23291 = calc_state.call(null);
var inst_23250 = inst_23291;
var state_23320__$1 = (function (){var statearr_23349 = state_23320;
(statearr_23349[(7)] = inst_23250);

(statearr_23349[(15)] = inst_23290);

return statearr_23349;
})();
var statearr_23350_23405 = state_23320__$1;
(statearr_23350_23405[(2)] = null);

(statearr_23350_23405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (25))){
var inst_23316 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23351_23406 = state_23320__$1;
(statearr_23351_23406[(2)] = inst_23316);

(statearr_23351_23406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (34))){
var inst_23314 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23352_23407 = state_23320__$1;
(statearr_23352_23407[(2)] = inst_23314);

(statearr_23352_23407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (17))){
var state_23320__$1 = state_23320;
var statearr_23353_23408 = state_23320__$1;
(statearr_23353_23408[(2)] = false);

(statearr_23353_23408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (3))){
var state_23320__$1 = state_23320;
var statearr_23354_23409 = state_23320__$1;
(statearr_23354_23409[(2)] = false);

(statearr_23354_23409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (12))){
var inst_23318 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23320__$1,inst_23318);
} else {
if((state_val_23321 === (2))){
var inst_23226 = (state_23320[(8)]);
var inst_23231 = inst_23226.cljs$lang$protocol_mask$partition0$;
var inst_23232 = (inst_23231 & (64));
var inst_23233 = inst_23226.cljs$core$ISeq$;
var inst_23234 = (inst_23232) || (inst_23233);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23234)){
var statearr_23355_23410 = state_23320__$1;
(statearr_23355_23410[(1)] = (5));

} else {
var statearr_23356_23411 = state_23320__$1;
(statearr_23356_23411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (23))){
var inst_23279 = (state_23320[(14)]);
var inst_23285 = (inst_23279 == null);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23285)){
var statearr_23357_23412 = state_23320__$1;
(statearr_23357_23412[(1)] = (26));

} else {
var statearr_23358_23413 = state_23320__$1;
(statearr_23358_23413[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (35))){
var inst_23305 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
if(cljs.core.truth_(inst_23305)){
var statearr_23359_23414 = state_23320__$1;
(statearr_23359_23414[(1)] = (36));

} else {
var statearr_23360_23415 = state_23320__$1;
(statearr_23360_23415[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (19))){
var inst_23250 = (state_23320[(7)]);
var inst_23269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23250);
var state_23320__$1 = state_23320;
var statearr_23361_23416 = state_23320__$1;
(statearr_23361_23416[(2)] = inst_23269);

(statearr_23361_23416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (11))){
var inst_23250 = (state_23320[(7)]);
var inst_23254 = (inst_23250 == null);
var inst_23255 = cljs.core.not.call(null,inst_23254);
var state_23320__$1 = state_23320;
if(inst_23255){
var statearr_23362_23417 = state_23320__$1;
(statearr_23362_23417[(1)] = (13));

} else {
var statearr_23363_23418 = state_23320__$1;
(statearr_23363_23418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (9))){
var inst_23226 = (state_23320[(8)]);
var state_23320__$1 = state_23320;
var statearr_23364_23419 = state_23320__$1;
(statearr_23364_23419[(2)] = inst_23226);

(statearr_23364_23419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (5))){
var state_23320__$1 = state_23320;
var statearr_23365_23420 = state_23320__$1;
(statearr_23365_23420[(2)] = true);

(statearr_23365_23420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (14))){
var state_23320__$1 = state_23320;
var statearr_23366_23421 = state_23320__$1;
(statearr_23366_23421[(2)] = false);

(statearr_23366_23421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (26))){
var inst_23280 = (state_23320[(11)]);
var inst_23287 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23280);
var state_23320__$1 = state_23320;
var statearr_23367_23422 = state_23320__$1;
(statearr_23367_23422[(2)] = inst_23287);

(statearr_23367_23422[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (16))){
var state_23320__$1 = state_23320;
var statearr_23368_23423 = state_23320__$1;
(statearr_23368_23423[(2)] = true);

(statearr_23368_23423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (38))){
var inst_23310 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23369_23424 = state_23320__$1;
(statearr_23369_23424[(2)] = inst_23310);

(statearr_23369_23424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (30))){
var inst_23274 = (state_23320[(13)]);
var inst_23273 = (state_23320[(10)]);
var inst_23280 = (state_23320[(11)]);
var inst_23297 = cljs.core.empty_QMARK_.call(null,inst_23273);
var inst_23298 = inst_23274.call(null,inst_23280);
var inst_23299 = cljs.core.not.call(null,inst_23298);
var inst_23300 = (inst_23297) && (inst_23299);
var state_23320__$1 = state_23320;
var statearr_23370_23425 = state_23320__$1;
(statearr_23370_23425[(2)] = inst_23300);

(statearr_23370_23425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (10))){
var inst_23226 = (state_23320[(8)]);
var inst_23246 = (state_23320[(2)]);
var inst_23247 = cljs.core.get.call(null,inst_23246,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23248 = cljs.core.get.call(null,inst_23246,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23249 = cljs.core.get.call(null,inst_23246,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23250 = inst_23226;
var state_23320__$1 = (function (){var statearr_23371 = state_23320;
(statearr_23371[(16)] = inst_23247);

(statearr_23371[(7)] = inst_23250);

(statearr_23371[(17)] = inst_23248);

(statearr_23371[(18)] = inst_23249);

return statearr_23371;
})();
var statearr_23372_23426 = state_23320__$1;
(statearr_23372_23426[(2)] = null);

(statearr_23372_23426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (18))){
var inst_23264 = (state_23320[(2)]);
var state_23320__$1 = state_23320;
var statearr_23373_23427 = state_23320__$1;
(statearr_23373_23427[(2)] = inst_23264);

(statearr_23373_23427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (37))){
var state_23320__$1 = state_23320;
var statearr_23374_23428 = state_23320__$1;
(statearr_23374_23428[(2)] = null);

(statearr_23374_23428[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23321 === (8))){
var inst_23226 = (state_23320[(8)]);
var inst_23243 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23226);
var state_23320__$1 = state_23320;
var statearr_23375_23429 = state_23320__$1;
(statearr_23375_23429[(2)] = inst_23243);

(statearr_23375_23429[(1)] = (10));


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
});})(c__21670__auto___23383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21558__auto__,c__21670__auto___23383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21559__auto__ = null;
var cljs$core$async$mix_$_state_machine__21559__auto____0 = (function (){
var statearr_23379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23379[(0)] = cljs$core$async$mix_$_state_machine__21559__auto__);

(statearr_23379[(1)] = (1));

return statearr_23379;
});
var cljs$core$async$mix_$_state_machine__21559__auto____1 = (function (state_23320){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_23320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e23380){if((e23380 instanceof Object)){
var ex__21562__auto__ = e23380;
var statearr_23381_23430 = state_23320;
(statearr_23381_23430[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23431 = state_23320;
state_23320 = G__23431;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21559__auto__ = function(state_23320){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21559__auto____1.call(this,state_23320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21559__auto____0;
cljs$core$async$mix_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21559__auto____1;
return cljs$core$async$mix_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___23383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21672__auto__ = (function (){var statearr_23382 = f__21671__auto__.call(null);
(statearr_23382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___23383);

return statearr_23382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___23383,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17516__auto__ = (((p == null))?null:p);
var m__17517__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17517__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17516__auto__ = (((p == null))?null:p);
var m__17517__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,p,v,ch);
} else {
var m__17517__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23432 = [];
var len__17919__auto___23435 = arguments.length;
var i__17920__auto___23436 = (0);
while(true){
if((i__17920__auto___23436 < len__17919__auto___23435)){
args23432.push((arguments[i__17920__auto___23436]));

var G__23437 = (i__17920__auto___23436 + (1));
i__17920__auto___23436 = G__23437;
continue;
} else {
}
break;
}

var G__23434 = args23432.length;
switch (G__23434) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23432.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17516__auto__ = (((p == null))?null:p);
var m__17517__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,p);
} else {
var m__17517__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17516__auto__ = (((p == null))?null:p);
var m__17517__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17516__auto__)]);
if(!((m__17517__auto__ == null))){
return m__17517__auto__.call(null,p,v);
} else {
var m__17517__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17517__auto____$1 == null))){
return m__17517__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args23440 = [];
var len__17919__auto___23565 = arguments.length;
var i__17920__auto___23566 = (0);
while(true){
if((i__17920__auto___23566 < len__17919__auto___23565)){
args23440.push((arguments[i__17920__auto___23566]));

var G__23567 = (i__17920__auto___23566 + (1));
i__17920__auto___23566 = G__23567;
continue;
} else {
}
break;
}

var G__23442 = args23440.length;
switch (G__23442) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23440.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16861__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16861__auto__,mults){
return (function (p1__23439_SHARP_){
if(cljs.core.truth_(p1__23439_SHARP_.call(null,topic))){
return p1__23439_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23439_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16861__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23443 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23444){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23444 = meta23444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23445,meta23444__$1){
var self__ = this;
var _23445__$1 = this;
return (new cljs.core.async.t_cljs$core$async23443(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23444__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23445){
var self__ = this;
var _23445__$1 = this;
return self__.meta23444;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23443.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23444","meta23444",699448955,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23443";

cljs.core.async.t_cljs$core$async23443.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async23443");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23443 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23444){
return (new cljs.core.async.t_cljs$core$async23443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23444));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23443(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21670__auto___23569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___23569,mults,ensure_mult,p){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___23569,mults,ensure_mult,p){
return (function (state_23517){
var state_val_23518 = (state_23517[(1)]);
if((state_val_23518 === (7))){
var inst_23513 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
var statearr_23519_23570 = state_23517__$1;
(statearr_23519_23570[(2)] = inst_23513);

(statearr_23519_23570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (20))){
var state_23517__$1 = state_23517;
var statearr_23520_23571 = state_23517__$1;
(statearr_23520_23571[(2)] = null);

(statearr_23520_23571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (1))){
var state_23517__$1 = state_23517;
var statearr_23521_23572 = state_23517__$1;
(statearr_23521_23572[(2)] = null);

(statearr_23521_23572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (24))){
var inst_23496 = (state_23517[(7)]);
var inst_23505 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23496);
var state_23517__$1 = state_23517;
var statearr_23522_23573 = state_23517__$1;
(statearr_23522_23573[(2)] = inst_23505);

(statearr_23522_23573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (4))){
var inst_23448 = (state_23517[(8)]);
var inst_23448__$1 = (state_23517[(2)]);
var inst_23449 = (inst_23448__$1 == null);
var state_23517__$1 = (function (){var statearr_23523 = state_23517;
(statearr_23523[(8)] = inst_23448__$1);

return statearr_23523;
})();
if(cljs.core.truth_(inst_23449)){
var statearr_23524_23574 = state_23517__$1;
(statearr_23524_23574[(1)] = (5));

} else {
var statearr_23525_23575 = state_23517__$1;
(statearr_23525_23575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (15))){
var inst_23490 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
var statearr_23526_23576 = state_23517__$1;
(statearr_23526_23576[(2)] = inst_23490);

(statearr_23526_23576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (21))){
var inst_23510 = (state_23517[(2)]);
var state_23517__$1 = (function (){var statearr_23527 = state_23517;
(statearr_23527[(9)] = inst_23510);

return statearr_23527;
})();
var statearr_23528_23577 = state_23517__$1;
(statearr_23528_23577[(2)] = null);

(statearr_23528_23577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (13))){
var inst_23472 = (state_23517[(10)]);
var inst_23474 = cljs.core.chunked_seq_QMARK_.call(null,inst_23472);
var state_23517__$1 = state_23517;
if(inst_23474){
var statearr_23529_23578 = state_23517__$1;
(statearr_23529_23578[(1)] = (16));

} else {
var statearr_23530_23579 = state_23517__$1;
(statearr_23530_23579[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (22))){
var inst_23502 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
if(cljs.core.truth_(inst_23502)){
var statearr_23531_23580 = state_23517__$1;
(statearr_23531_23580[(1)] = (23));

} else {
var statearr_23532_23581 = state_23517__$1;
(statearr_23532_23581[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (6))){
var inst_23496 = (state_23517[(7)]);
var inst_23448 = (state_23517[(8)]);
var inst_23498 = (state_23517[(11)]);
var inst_23496__$1 = topic_fn.call(null,inst_23448);
var inst_23497 = cljs.core.deref.call(null,mults);
var inst_23498__$1 = cljs.core.get.call(null,inst_23497,inst_23496__$1);
var state_23517__$1 = (function (){var statearr_23533 = state_23517;
(statearr_23533[(7)] = inst_23496__$1);

(statearr_23533[(11)] = inst_23498__$1);

return statearr_23533;
})();
if(cljs.core.truth_(inst_23498__$1)){
var statearr_23534_23582 = state_23517__$1;
(statearr_23534_23582[(1)] = (19));

} else {
var statearr_23535_23583 = state_23517__$1;
(statearr_23535_23583[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (25))){
var inst_23507 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
var statearr_23536_23584 = state_23517__$1;
(statearr_23536_23584[(2)] = inst_23507);

(statearr_23536_23584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (17))){
var inst_23472 = (state_23517[(10)]);
var inst_23481 = cljs.core.first.call(null,inst_23472);
var inst_23482 = cljs.core.async.muxch_STAR_.call(null,inst_23481);
var inst_23483 = cljs.core.async.close_BANG_.call(null,inst_23482);
var inst_23484 = cljs.core.next.call(null,inst_23472);
var inst_23458 = inst_23484;
var inst_23459 = null;
var inst_23460 = (0);
var inst_23461 = (0);
var state_23517__$1 = (function (){var statearr_23537 = state_23517;
(statearr_23537[(12)] = inst_23458);

(statearr_23537[(13)] = inst_23483);

(statearr_23537[(14)] = inst_23459);

(statearr_23537[(15)] = inst_23460);

(statearr_23537[(16)] = inst_23461);

return statearr_23537;
})();
var statearr_23538_23585 = state_23517__$1;
(statearr_23538_23585[(2)] = null);

(statearr_23538_23585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (3))){
var inst_23515 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23517__$1,inst_23515);
} else {
if((state_val_23518 === (12))){
var inst_23492 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
var statearr_23539_23586 = state_23517__$1;
(statearr_23539_23586[(2)] = inst_23492);

(statearr_23539_23586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (2))){
var state_23517__$1 = state_23517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23517__$1,(4),ch);
} else {
if((state_val_23518 === (23))){
var state_23517__$1 = state_23517;
var statearr_23540_23587 = state_23517__$1;
(statearr_23540_23587[(2)] = null);

(statearr_23540_23587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (19))){
var inst_23448 = (state_23517[(8)]);
var inst_23498 = (state_23517[(11)]);
var inst_23500 = cljs.core.async.muxch_STAR_.call(null,inst_23498);
var state_23517__$1 = state_23517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23517__$1,(22),inst_23500,inst_23448);
} else {
if((state_val_23518 === (11))){
var inst_23458 = (state_23517[(12)]);
var inst_23472 = (state_23517[(10)]);
var inst_23472__$1 = cljs.core.seq.call(null,inst_23458);
var state_23517__$1 = (function (){var statearr_23541 = state_23517;
(statearr_23541[(10)] = inst_23472__$1);

return statearr_23541;
})();
if(inst_23472__$1){
var statearr_23542_23588 = state_23517__$1;
(statearr_23542_23588[(1)] = (13));

} else {
var statearr_23543_23589 = state_23517__$1;
(statearr_23543_23589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (9))){
var inst_23494 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
var statearr_23544_23590 = state_23517__$1;
(statearr_23544_23590[(2)] = inst_23494);

(statearr_23544_23590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (5))){
var inst_23455 = cljs.core.deref.call(null,mults);
var inst_23456 = cljs.core.vals.call(null,inst_23455);
var inst_23457 = cljs.core.seq.call(null,inst_23456);
var inst_23458 = inst_23457;
var inst_23459 = null;
var inst_23460 = (0);
var inst_23461 = (0);
var state_23517__$1 = (function (){var statearr_23545 = state_23517;
(statearr_23545[(12)] = inst_23458);

(statearr_23545[(14)] = inst_23459);

(statearr_23545[(15)] = inst_23460);

(statearr_23545[(16)] = inst_23461);

return statearr_23545;
})();
var statearr_23546_23591 = state_23517__$1;
(statearr_23546_23591[(2)] = null);

(statearr_23546_23591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (14))){
var state_23517__$1 = state_23517;
var statearr_23550_23592 = state_23517__$1;
(statearr_23550_23592[(2)] = null);

(statearr_23550_23592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (16))){
var inst_23472 = (state_23517[(10)]);
var inst_23476 = cljs.core.chunk_first.call(null,inst_23472);
var inst_23477 = cljs.core.chunk_rest.call(null,inst_23472);
var inst_23478 = cljs.core.count.call(null,inst_23476);
var inst_23458 = inst_23477;
var inst_23459 = inst_23476;
var inst_23460 = inst_23478;
var inst_23461 = (0);
var state_23517__$1 = (function (){var statearr_23551 = state_23517;
(statearr_23551[(12)] = inst_23458);

(statearr_23551[(14)] = inst_23459);

(statearr_23551[(15)] = inst_23460);

(statearr_23551[(16)] = inst_23461);

return statearr_23551;
})();
var statearr_23552_23593 = state_23517__$1;
(statearr_23552_23593[(2)] = null);

(statearr_23552_23593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (10))){
var inst_23458 = (state_23517[(12)]);
var inst_23459 = (state_23517[(14)]);
var inst_23460 = (state_23517[(15)]);
var inst_23461 = (state_23517[(16)]);
var inst_23466 = cljs.core._nth.call(null,inst_23459,inst_23461);
var inst_23467 = cljs.core.async.muxch_STAR_.call(null,inst_23466);
var inst_23468 = cljs.core.async.close_BANG_.call(null,inst_23467);
var inst_23469 = (inst_23461 + (1));
var tmp23547 = inst_23458;
var tmp23548 = inst_23459;
var tmp23549 = inst_23460;
var inst_23458__$1 = tmp23547;
var inst_23459__$1 = tmp23548;
var inst_23460__$1 = tmp23549;
var inst_23461__$1 = inst_23469;
var state_23517__$1 = (function (){var statearr_23553 = state_23517;
(statearr_23553[(12)] = inst_23458__$1);

(statearr_23553[(14)] = inst_23459__$1);

(statearr_23553[(15)] = inst_23460__$1);

(statearr_23553[(16)] = inst_23461__$1);

(statearr_23553[(17)] = inst_23468);

return statearr_23553;
})();
var statearr_23554_23594 = state_23517__$1;
(statearr_23554_23594[(2)] = null);

(statearr_23554_23594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (18))){
var inst_23487 = (state_23517[(2)]);
var state_23517__$1 = state_23517;
var statearr_23555_23595 = state_23517__$1;
(statearr_23555_23595[(2)] = inst_23487);

(statearr_23555_23595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23518 === (8))){
var inst_23460 = (state_23517[(15)]);
var inst_23461 = (state_23517[(16)]);
var inst_23463 = (inst_23461 < inst_23460);
var inst_23464 = inst_23463;
var state_23517__$1 = state_23517;
if(cljs.core.truth_(inst_23464)){
var statearr_23556_23596 = state_23517__$1;
(statearr_23556_23596[(1)] = (10));

} else {
var statearr_23557_23597 = state_23517__$1;
(statearr_23557_23597[(1)] = (11));

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
});})(c__21670__auto___23569,mults,ensure_mult,p))
;
return ((function (switch__21558__auto__,c__21670__auto___23569,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_23561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23561[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_23561[(1)] = (1));

return statearr_23561;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_23517){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_23517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e23562){if((e23562 instanceof Object)){
var ex__21562__auto__ = e23562;
var statearr_23563_23598 = state_23517;
(statearr_23563_23598[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23599 = state_23517;
state_23517 = G__23599;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_23517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_23517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___23569,mults,ensure_mult,p))
})();
var state__21672__auto__ = (function (){var statearr_23564 = f__21671__auto__.call(null);
(statearr_23564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___23569);

return statearr_23564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___23569,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23600 = [];
var len__17919__auto___23603 = arguments.length;
var i__17920__auto___23604 = (0);
while(true){
if((i__17920__auto___23604 < len__17919__auto___23603)){
args23600.push((arguments[i__17920__auto___23604]));

var G__23605 = (i__17920__auto___23604 + (1));
i__17920__auto___23604 = G__23605;
continue;
} else {
}
break;
}

var G__23602 = args23600.length;
switch (G__23602) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23600.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
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
var args23607 = [];
var len__17919__auto___23610 = arguments.length;
var i__17920__auto___23611 = (0);
while(true){
if((i__17920__auto___23611 < len__17919__auto___23610)){
args23607.push((arguments[i__17920__auto___23611]));

var G__23612 = (i__17920__auto___23611 + (1));
i__17920__auto___23611 = G__23612;
continue;
} else {
}
break;
}

var G__23609 = args23607.length;
switch (G__23609) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23607.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args23614 = [];
var len__17919__auto___23685 = arguments.length;
var i__17920__auto___23686 = (0);
while(true){
if((i__17920__auto___23686 < len__17919__auto___23685)){
args23614.push((arguments[i__17920__auto___23686]));

var G__23687 = (i__17920__auto___23686 + (1));
i__17920__auto___23686 = G__23687;
continue;
} else {
}
break;
}

var G__23616 = args23614.length;
switch (G__23616) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23614.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21670__auto___23689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23655){
var state_val_23656 = (state_23655[(1)]);
if((state_val_23656 === (7))){
var state_23655__$1 = state_23655;
var statearr_23657_23690 = state_23655__$1;
(statearr_23657_23690[(2)] = null);

(statearr_23657_23690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (1))){
var state_23655__$1 = state_23655;
var statearr_23658_23691 = state_23655__$1;
(statearr_23658_23691[(2)] = null);

(statearr_23658_23691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (4))){
var inst_23619 = (state_23655[(7)]);
var inst_23621 = (inst_23619 < cnt);
var state_23655__$1 = state_23655;
if(cljs.core.truth_(inst_23621)){
var statearr_23659_23692 = state_23655__$1;
(statearr_23659_23692[(1)] = (6));

} else {
var statearr_23660_23693 = state_23655__$1;
(statearr_23660_23693[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (15))){
var inst_23651 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
var statearr_23661_23694 = state_23655__$1;
(statearr_23661_23694[(2)] = inst_23651);

(statearr_23661_23694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (13))){
var inst_23644 = cljs.core.async.close_BANG_.call(null,out);
var state_23655__$1 = state_23655;
var statearr_23662_23695 = state_23655__$1;
(statearr_23662_23695[(2)] = inst_23644);

(statearr_23662_23695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (6))){
var state_23655__$1 = state_23655;
var statearr_23663_23696 = state_23655__$1;
(statearr_23663_23696[(2)] = null);

(statearr_23663_23696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (3))){
var inst_23653 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23655__$1,inst_23653);
} else {
if((state_val_23656 === (12))){
var inst_23641 = (state_23655[(8)]);
var inst_23641__$1 = (state_23655[(2)]);
var inst_23642 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23641__$1);
var state_23655__$1 = (function (){var statearr_23664 = state_23655;
(statearr_23664[(8)] = inst_23641__$1);

return statearr_23664;
})();
if(cljs.core.truth_(inst_23642)){
var statearr_23665_23697 = state_23655__$1;
(statearr_23665_23697[(1)] = (13));

} else {
var statearr_23666_23698 = state_23655__$1;
(statearr_23666_23698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (2))){
var inst_23618 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23619 = (0);
var state_23655__$1 = (function (){var statearr_23667 = state_23655;
(statearr_23667[(9)] = inst_23618);

(statearr_23667[(7)] = inst_23619);

return statearr_23667;
})();
var statearr_23668_23699 = state_23655__$1;
(statearr_23668_23699[(2)] = null);

(statearr_23668_23699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (11))){
var inst_23619 = (state_23655[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23655,(10),Object,null,(9));
var inst_23628 = chs__$1.call(null,inst_23619);
var inst_23629 = done.call(null,inst_23619);
var inst_23630 = cljs.core.async.take_BANG_.call(null,inst_23628,inst_23629);
var state_23655__$1 = state_23655;
var statearr_23669_23700 = state_23655__$1;
(statearr_23669_23700[(2)] = inst_23630);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (9))){
var inst_23619 = (state_23655[(7)]);
var inst_23632 = (state_23655[(2)]);
var inst_23633 = (inst_23619 + (1));
var inst_23619__$1 = inst_23633;
var state_23655__$1 = (function (){var statearr_23670 = state_23655;
(statearr_23670[(7)] = inst_23619__$1);

(statearr_23670[(10)] = inst_23632);

return statearr_23670;
})();
var statearr_23671_23701 = state_23655__$1;
(statearr_23671_23701[(2)] = null);

(statearr_23671_23701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (5))){
var inst_23639 = (state_23655[(2)]);
var state_23655__$1 = (function (){var statearr_23672 = state_23655;
(statearr_23672[(11)] = inst_23639);

return statearr_23672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23655__$1,(12),dchan);
} else {
if((state_val_23656 === (14))){
var inst_23641 = (state_23655[(8)]);
var inst_23646 = cljs.core.apply.call(null,f,inst_23641);
var state_23655__$1 = state_23655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23655__$1,(16),out,inst_23646);
} else {
if((state_val_23656 === (16))){
var inst_23648 = (state_23655[(2)]);
var state_23655__$1 = (function (){var statearr_23673 = state_23655;
(statearr_23673[(12)] = inst_23648);

return statearr_23673;
})();
var statearr_23674_23702 = state_23655__$1;
(statearr_23674_23702[(2)] = null);

(statearr_23674_23702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (10))){
var inst_23623 = (state_23655[(2)]);
var inst_23624 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23655__$1 = (function (){var statearr_23675 = state_23655;
(statearr_23675[(13)] = inst_23623);

return statearr_23675;
})();
var statearr_23676_23703 = state_23655__$1;
(statearr_23676_23703[(2)] = inst_23624);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23656 === (8))){
var inst_23637 = (state_23655[(2)]);
var state_23655__$1 = state_23655;
var statearr_23677_23704 = state_23655__$1;
(statearr_23677_23704[(2)] = inst_23637);

(statearr_23677_23704[(1)] = (5));


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
});})(c__21670__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21558__auto__,c__21670__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_23681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23681[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_23681[(1)] = (1));

return statearr_23681;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_23655){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_23655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e23682){if((e23682 instanceof Object)){
var ex__21562__auto__ = e23682;
var statearr_23683_23705 = state_23655;
(statearr_23683_23705[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23706 = state_23655;
state_23655 = G__23706;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_23655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_23655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21672__auto__ = (function (){var statearr_23684 = f__21671__auto__.call(null);
(statearr_23684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___23689);

return statearr_23684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23708 = [];
var len__17919__auto___23764 = arguments.length;
var i__17920__auto___23765 = (0);
while(true){
if((i__17920__auto___23765 < len__17919__auto___23764)){
args23708.push((arguments[i__17920__auto___23765]));

var G__23766 = (i__17920__auto___23765 + (1));
i__17920__auto___23765 = G__23766;
continue;
} else {
}
break;
}

var G__23710 = args23708.length;
switch (G__23710) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23708.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21670__auto___23768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___23768,out){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___23768,out){
return (function (state_23740){
var state_val_23741 = (state_23740[(1)]);
if((state_val_23741 === (7))){
var inst_23720 = (state_23740[(7)]);
var inst_23719 = (state_23740[(8)]);
var inst_23719__$1 = (state_23740[(2)]);
var inst_23720__$1 = cljs.core.nth.call(null,inst_23719__$1,(0),null);
var inst_23721 = cljs.core.nth.call(null,inst_23719__$1,(1),null);
var inst_23722 = (inst_23720__$1 == null);
var state_23740__$1 = (function (){var statearr_23742 = state_23740;
(statearr_23742[(9)] = inst_23721);

(statearr_23742[(7)] = inst_23720__$1);

(statearr_23742[(8)] = inst_23719__$1);

return statearr_23742;
})();
if(cljs.core.truth_(inst_23722)){
var statearr_23743_23769 = state_23740__$1;
(statearr_23743_23769[(1)] = (8));

} else {
var statearr_23744_23770 = state_23740__$1;
(statearr_23744_23770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (1))){
var inst_23711 = cljs.core.vec.call(null,chs);
var inst_23712 = inst_23711;
var state_23740__$1 = (function (){var statearr_23745 = state_23740;
(statearr_23745[(10)] = inst_23712);

return statearr_23745;
})();
var statearr_23746_23771 = state_23740__$1;
(statearr_23746_23771[(2)] = null);

(statearr_23746_23771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (4))){
var inst_23712 = (state_23740[(10)]);
var state_23740__$1 = state_23740;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23740__$1,(7),inst_23712);
} else {
if((state_val_23741 === (6))){
var inst_23736 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23747_23772 = state_23740__$1;
(statearr_23747_23772[(2)] = inst_23736);

(statearr_23747_23772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (3))){
var inst_23738 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23740__$1,inst_23738);
} else {
if((state_val_23741 === (2))){
var inst_23712 = (state_23740[(10)]);
var inst_23714 = cljs.core.count.call(null,inst_23712);
var inst_23715 = (inst_23714 > (0));
var state_23740__$1 = state_23740;
if(cljs.core.truth_(inst_23715)){
var statearr_23749_23773 = state_23740__$1;
(statearr_23749_23773[(1)] = (4));

} else {
var statearr_23750_23774 = state_23740__$1;
(statearr_23750_23774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (11))){
var inst_23712 = (state_23740[(10)]);
var inst_23729 = (state_23740[(2)]);
var tmp23748 = inst_23712;
var inst_23712__$1 = tmp23748;
var state_23740__$1 = (function (){var statearr_23751 = state_23740;
(statearr_23751[(11)] = inst_23729);

(statearr_23751[(10)] = inst_23712__$1);

return statearr_23751;
})();
var statearr_23752_23775 = state_23740__$1;
(statearr_23752_23775[(2)] = null);

(statearr_23752_23775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (9))){
var inst_23720 = (state_23740[(7)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23740__$1,(11),out,inst_23720);
} else {
if((state_val_23741 === (5))){
var inst_23734 = cljs.core.async.close_BANG_.call(null,out);
var state_23740__$1 = state_23740;
var statearr_23753_23776 = state_23740__$1;
(statearr_23753_23776[(2)] = inst_23734);

(statearr_23753_23776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (10))){
var inst_23732 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23754_23777 = state_23740__$1;
(statearr_23754_23777[(2)] = inst_23732);

(statearr_23754_23777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (8))){
var inst_23721 = (state_23740[(9)]);
var inst_23720 = (state_23740[(7)]);
var inst_23712 = (state_23740[(10)]);
var inst_23719 = (state_23740[(8)]);
var inst_23724 = (function (){var cs = inst_23712;
var vec__23717 = inst_23719;
var v = inst_23720;
var c = inst_23721;
return ((function (cs,vec__23717,v,c,inst_23721,inst_23720,inst_23712,inst_23719,state_val_23741,c__21670__auto___23768,out){
return (function (p1__23707_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23707_SHARP_);
});
;})(cs,vec__23717,v,c,inst_23721,inst_23720,inst_23712,inst_23719,state_val_23741,c__21670__auto___23768,out))
})();
var inst_23725 = cljs.core.filterv.call(null,inst_23724,inst_23712);
var inst_23712__$1 = inst_23725;
var state_23740__$1 = (function (){var statearr_23755 = state_23740;
(statearr_23755[(10)] = inst_23712__$1);

return statearr_23755;
})();
var statearr_23756_23778 = state_23740__$1;
(statearr_23756_23778[(2)] = null);

(statearr_23756_23778[(1)] = (2));


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
});})(c__21670__auto___23768,out))
;
return ((function (switch__21558__auto__,c__21670__auto___23768,out){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_23760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23760[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_23760[(1)] = (1));

return statearr_23760;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_23740){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_23740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e23761){if((e23761 instanceof Object)){
var ex__21562__auto__ = e23761;
var statearr_23762_23779 = state_23740;
(statearr_23762_23779[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23780 = state_23740;
state_23740 = G__23780;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_23740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_23740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___23768,out))
})();
var state__21672__auto__ = (function (){var statearr_23763 = f__21671__auto__.call(null);
(statearr_23763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___23768);

return statearr_23763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___23768,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
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
var args23781 = [];
var len__17919__auto___23830 = arguments.length;
var i__17920__auto___23831 = (0);
while(true){
if((i__17920__auto___23831 < len__17919__auto___23830)){
args23781.push((arguments[i__17920__auto___23831]));

var G__23832 = (i__17920__auto___23831 + (1));
i__17920__auto___23831 = G__23832;
continue;
} else {
}
break;
}

var G__23783 = args23781.length;
switch (G__23783) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23781.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21670__auto___23834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___23834,out){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___23834,out){
return (function (state_23807){
var state_val_23808 = (state_23807[(1)]);
if((state_val_23808 === (7))){
var inst_23789 = (state_23807[(7)]);
var inst_23789__$1 = (state_23807[(2)]);
var inst_23790 = (inst_23789__$1 == null);
var inst_23791 = cljs.core.not.call(null,inst_23790);
var state_23807__$1 = (function (){var statearr_23809 = state_23807;
(statearr_23809[(7)] = inst_23789__$1);

return statearr_23809;
})();
if(inst_23791){
var statearr_23810_23835 = state_23807__$1;
(statearr_23810_23835[(1)] = (8));

} else {
var statearr_23811_23836 = state_23807__$1;
(statearr_23811_23836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (1))){
var inst_23784 = (0);
var state_23807__$1 = (function (){var statearr_23812 = state_23807;
(statearr_23812[(8)] = inst_23784);

return statearr_23812;
})();
var statearr_23813_23837 = state_23807__$1;
(statearr_23813_23837[(2)] = null);

(statearr_23813_23837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (4))){
var state_23807__$1 = state_23807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23807__$1,(7),ch);
} else {
if((state_val_23808 === (6))){
var inst_23802 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23814_23838 = state_23807__$1;
(statearr_23814_23838[(2)] = inst_23802);

(statearr_23814_23838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (3))){
var inst_23804 = (state_23807[(2)]);
var inst_23805 = cljs.core.async.close_BANG_.call(null,out);
var state_23807__$1 = (function (){var statearr_23815 = state_23807;
(statearr_23815[(9)] = inst_23804);

return statearr_23815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23807__$1,inst_23805);
} else {
if((state_val_23808 === (2))){
var inst_23784 = (state_23807[(8)]);
var inst_23786 = (inst_23784 < n);
var state_23807__$1 = state_23807;
if(cljs.core.truth_(inst_23786)){
var statearr_23816_23839 = state_23807__$1;
(statearr_23816_23839[(1)] = (4));

} else {
var statearr_23817_23840 = state_23807__$1;
(statearr_23817_23840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (11))){
var inst_23784 = (state_23807[(8)]);
var inst_23794 = (state_23807[(2)]);
var inst_23795 = (inst_23784 + (1));
var inst_23784__$1 = inst_23795;
var state_23807__$1 = (function (){var statearr_23818 = state_23807;
(statearr_23818[(8)] = inst_23784__$1);

(statearr_23818[(10)] = inst_23794);

return statearr_23818;
})();
var statearr_23819_23841 = state_23807__$1;
(statearr_23819_23841[(2)] = null);

(statearr_23819_23841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (9))){
var state_23807__$1 = state_23807;
var statearr_23820_23842 = state_23807__$1;
(statearr_23820_23842[(2)] = null);

(statearr_23820_23842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (5))){
var state_23807__$1 = state_23807;
var statearr_23821_23843 = state_23807__$1;
(statearr_23821_23843[(2)] = null);

(statearr_23821_23843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (10))){
var inst_23799 = (state_23807[(2)]);
var state_23807__$1 = state_23807;
var statearr_23822_23844 = state_23807__$1;
(statearr_23822_23844[(2)] = inst_23799);

(statearr_23822_23844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23808 === (8))){
var inst_23789 = (state_23807[(7)]);
var state_23807__$1 = state_23807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23807__$1,(11),out,inst_23789);
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
});})(c__21670__auto___23834,out))
;
return ((function (switch__21558__auto__,c__21670__auto___23834,out){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_23826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23826[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_23826[(1)] = (1));

return statearr_23826;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_23807){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_23807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e23827){if((e23827 instanceof Object)){
var ex__21562__auto__ = e23827;
var statearr_23828_23845 = state_23807;
(statearr_23828_23845[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23846 = state_23807;
state_23807 = G__23846;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_23807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_23807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___23834,out))
})();
var state__21672__auto__ = (function (){var statearr_23829 = f__21671__auto__.call(null);
(statearr_23829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___23834);

return statearr_23829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___23834,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23854 = (function (map_LT_,f,ch,meta23855){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23855 = meta23855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23856,meta23855__$1){
var self__ = this;
var _23856__$1 = this;
return (new cljs.core.async.t_cljs$core$async23854(self__.map_LT_,self__.f,self__.ch,meta23855__$1));
});

cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23856){
var self__ = this;
var _23856__$1 = this;
return self__.meta23855;
});

cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23857 = (function (map_LT_,f,ch,meta23855,_,fn1,meta23858){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23855 = meta23855;
this._ = _;
this.fn1 = fn1;
this.meta23858 = meta23858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23859,meta23858__$1){
var self__ = this;
var _23859__$1 = this;
return (new cljs.core.async.t_cljs$core$async23857(self__.map_LT_,self__.f,self__.ch,self__.meta23855,self__._,self__.fn1,meta23858__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23859){
var self__ = this;
var _23859__$1 = this;
return self__.meta23858;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23857.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23847_SHARP_){
return f1.call(null,(((p1__23847_SHARP_ == null))?null:self__.f.call(null,p1__23847_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23857.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23855","meta23855",-1187675731,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23854","cljs.core.async/t_cljs$core$async23854",1393466806,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23858","meta23858",829912195,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23857";

cljs.core.async.t_cljs$core$async23857.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async23857");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23857 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23857(map_LT___$1,f__$1,ch__$1,meta23855__$1,___$2,fn1__$1,meta23858){
return (new cljs.core.async.t_cljs$core$async23857(map_LT___$1,f__$1,ch__$1,meta23855__$1,___$2,fn1__$1,meta23858));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23857(self__.map_LT_,self__.f,self__.ch,self__.meta23855,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16849__auto__ = ret;
if(cljs.core.truth_(and__16849__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16849__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23854.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23855","meta23855",-1187675731,null)], null);
});

cljs.core.async.t_cljs$core$async23854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23854";

cljs.core.async.t_cljs$core$async23854.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async23854");
});

cljs.core.async.__GT_t_cljs$core$async23854 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23854(map_LT___$1,f__$1,ch__$1,meta23855){
return (new cljs.core.async.t_cljs$core$async23854(map_LT___$1,f__$1,ch__$1,meta23855));
});

}

return (new cljs.core.async.t_cljs$core$async23854(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23863 = (function (map_GT_,f,ch,meta23864){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23864 = meta23864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23865,meta23864__$1){
var self__ = this;
var _23865__$1 = this;
return (new cljs.core.async.t_cljs$core$async23863(self__.map_GT_,self__.f,self__.ch,meta23864__$1));
});

cljs.core.async.t_cljs$core$async23863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23865){
var self__ = this;
var _23865__$1 = this;
return self__.meta23864;
});

cljs.core.async.t_cljs$core$async23863.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23863.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23863.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23864","meta23864",-1345701221,null)], null);
});

cljs.core.async.t_cljs$core$async23863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23863";

cljs.core.async.t_cljs$core$async23863.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async23863");
});

cljs.core.async.__GT_t_cljs$core$async23863 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23863(map_GT___$1,f__$1,ch__$1,meta23864){
return (new cljs.core.async.t_cljs$core$async23863(map_GT___$1,f__$1,ch__$1,meta23864));
});

}

return (new cljs.core.async.t_cljs$core$async23863(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23869 = (function (filter_GT_,p,ch,meta23870){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23870 = meta23870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23871,meta23870__$1){
var self__ = this;
var _23871__$1 = this;
return (new cljs.core.async.t_cljs$core$async23869(self__.filter_GT_,self__.p,self__.ch,meta23870__$1));
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23871){
var self__ = this;
var _23871__$1 = this;
return self__.meta23870;
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23870","meta23870",71138118,null)], null);
});

cljs.core.async.t_cljs$core$async23869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23869";

cljs.core.async.t_cljs$core$async23869.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cljs.core.async/t_cljs$core$async23869");
});

cljs.core.async.__GT_t_cljs$core$async23869 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23869(filter_GT___$1,p__$1,ch__$1,meta23870){
return (new cljs.core.async.t_cljs$core$async23869(filter_GT___$1,p__$1,ch__$1,meta23870));
});

}

return (new cljs.core.async.t_cljs$core$async23869(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23872 = [];
var len__17919__auto___23916 = arguments.length;
var i__17920__auto___23917 = (0);
while(true){
if((i__17920__auto___23917 < len__17919__auto___23916)){
args23872.push((arguments[i__17920__auto___23917]));

var G__23918 = (i__17920__auto___23917 + (1));
i__17920__auto___23917 = G__23918;
continue;
} else {
}
break;
}

var G__23874 = args23872.length;
switch (G__23874) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23872.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21670__auto___23920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___23920,out){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___23920,out){
return (function (state_23895){
var state_val_23896 = (state_23895[(1)]);
if((state_val_23896 === (7))){
var inst_23891 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23897_23921 = state_23895__$1;
(statearr_23897_23921[(2)] = inst_23891);

(statearr_23897_23921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (1))){
var state_23895__$1 = state_23895;
var statearr_23898_23922 = state_23895__$1;
(statearr_23898_23922[(2)] = null);

(statearr_23898_23922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (4))){
var inst_23877 = (state_23895[(7)]);
var inst_23877__$1 = (state_23895[(2)]);
var inst_23878 = (inst_23877__$1 == null);
var state_23895__$1 = (function (){var statearr_23899 = state_23895;
(statearr_23899[(7)] = inst_23877__$1);

return statearr_23899;
})();
if(cljs.core.truth_(inst_23878)){
var statearr_23900_23923 = state_23895__$1;
(statearr_23900_23923[(1)] = (5));

} else {
var statearr_23901_23924 = state_23895__$1;
(statearr_23901_23924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (6))){
var inst_23877 = (state_23895[(7)]);
var inst_23882 = p.call(null,inst_23877);
var state_23895__$1 = state_23895;
if(cljs.core.truth_(inst_23882)){
var statearr_23902_23925 = state_23895__$1;
(statearr_23902_23925[(1)] = (8));

} else {
var statearr_23903_23926 = state_23895__$1;
(statearr_23903_23926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (3))){
var inst_23893 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23895__$1,inst_23893);
} else {
if((state_val_23896 === (2))){
var state_23895__$1 = state_23895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23895__$1,(4),ch);
} else {
if((state_val_23896 === (11))){
var inst_23885 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23904_23927 = state_23895__$1;
(statearr_23904_23927[(2)] = inst_23885);

(statearr_23904_23927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (9))){
var state_23895__$1 = state_23895;
var statearr_23905_23928 = state_23895__$1;
(statearr_23905_23928[(2)] = null);

(statearr_23905_23928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (5))){
var inst_23880 = cljs.core.async.close_BANG_.call(null,out);
var state_23895__$1 = state_23895;
var statearr_23906_23929 = state_23895__$1;
(statearr_23906_23929[(2)] = inst_23880);

(statearr_23906_23929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (10))){
var inst_23888 = (state_23895[(2)]);
var state_23895__$1 = (function (){var statearr_23907 = state_23895;
(statearr_23907[(8)] = inst_23888);

return statearr_23907;
})();
var statearr_23908_23930 = state_23895__$1;
(statearr_23908_23930[(2)] = null);

(statearr_23908_23930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (8))){
var inst_23877 = (state_23895[(7)]);
var state_23895__$1 = state_23895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23895__$1,(11),out,inst_23877);
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
});})(c__21670__auto___23920,out))
;
return ((function (switch__21558__auto__,c__21670__auto___23920,out){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_23912 = [null,null,null,null,null,null,null,null,null];
(statearr_23912[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_23912[(1)] = (1));

return statearr_23912;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_23895){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_23895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e23913){if((e23913 instanceof Object)){
var ex__21562__auto__ = e23913;
var statearr_23914_23931 = state_23895;
(statearr_23914_23931[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23932 = state_23895;
state_23895 = G__23932;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_23895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_23895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___23920,out))
})();
var state__21672__auto__ = (function (){var statearr_23915 = f__21671__auto__.call(null);
(statearr_23915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___23920);

return statearr_23915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___23920,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23933 = [];
var len__17919__auto___23936 = arguments.length;
var i__17920__auto___23937 = (0);
while(true){
if((i__17920__auto___23937 < len__17919__auto___23936)){
args23933.push((arguments[i__17920__auto___23937]));

var G__23938 = (i__17920__auto___23937 + (1));
i__17920__auto___23937 = G__23938;
continue;
} else {
}
break;
}

var G__23935 = args23933.length;
switch (G__23935) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23933.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto__){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto__){
return (function (state_24105){
var state_val_24106 = (state_24105[(1)]);
if((state_val_24106 === (7))){
var inst_24101 = (state_24105[(2)]);
var state_24105__$1 = state_24105;
var statearr_24107_24148 = state_24105__$1;
(statearr_24107_24148[(2)] = inst_24101);

(statearr_24107_24148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (20))){
var inst_24071 = (state_24105[(7)]);
var inst_24082 = (state_24105[(2)]);
var inst_24083 = cljs.core.next.call(null,inst_24071);
var inst_24057 = inst_24083;
var inst_24058 = null;
var inst_24059 = (0);
var inst_24060 = (0);
var state_24105__$1 = (function (){var statearr_24108 = state_24105;
(statearr_24108[(8)] = inst_24058);

(statearr_24108[(9)] = inst_24057);

(statearr_24108[(10)] = inst_24060);

(statearr_24108[(11)] = inst_24059);

(statearr_24108[(12)] = inst_24082);

return statearr_24108;
})();
var statearr_24109_24149 = state_24105__$1;
(statearr_24109_24149[(2)] = null);

(statearr_24109_24149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (1))){
var state_24105__$1 = state_24105;
var statearr_24110_24150 = state_24105__$1;
(statearr_24110_24150[(2)] = null);

(statearr_24110_24150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (4))){
var inst_24046 = (state_24105[(13)]);
var inst_24046__$1 = (state_24105[(2)]);
var inst_24047 = (inst_24046__$1 == null);
var state_24105__$1 = (function (){var statearr_24111 = state_24105;
(statearr_24111[(13)] = inst_24046__$1);

return statearr_24111;
})();
if(cljs.core.truth_(inst_24047)){
var statearr_24112_24151 = state_24105__$1;
(statearr_24112_24151[(1)] = (5));

} else {
var statearr_24113_24152 = state_24105__$1;
(statearr_24113_24152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (15))){
var state_24105__$1 = state_24105;
var statearr_24117_24153 = state_24105__$1;
(statearr_24117_24153[(2)] = null);

(statearr_24117_24153[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (21))){
var state_24105__$1 = state_24105;
var statearr_24118_24154 = state_24105__$1;
(statearr_24118_24154[(2)] = null);

(statearr_24118_24154[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (13))){
var inst_24058 = (state_24105[(8)]);
var inst_24057 = (state_24105[(9)]);
var inst_24060 = (state_24105[(10)]);
var inst_24059 = (state_24105[(11)]);
var inst_24067 = (state_24105[(2)]);
var inst_24068 = (inst_24060 + (1));
var tmp24114 = inst_24058;
var tmp24115 = inst_24057;
var tmp24116 = inst_24059;
var inst_24057__$1 = tmp24115;
var inst_24058__$1 = tmp24114;
var inst_24059__$1 = tmp24116;
var inst_24060__$1 = inst_24068;
var state_24105__$1 = (function (){var statearr_24119 = state_24105;
(statearr_24119[(8)] = inst_24058__$1);

(statearr_24119[(9)] = inst_24057__$1);

(statearr_24119[(10)] = inst_24060__$1);

(statearr_24119[(11)] = inst_24059__$1);

(statearr_24119[(14)] = inst_24067);

return statearr_24119;
})();
var statearr_24120_24155 = state_24105__$1;
(statearr_24120_24155[(2)] = null);

(statearr_24120_24155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (22))){
var state_24105__$1 = state_24105;
var statearr_24121_24156 = state_24105__$1;
(statearr_24121_24156[(2)] = null);

(statearr_24121_24156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (6))){
var inst_24046 = (state_24105[(13)]);
var inst_24055 = f.call(null,inst_24046);
var inst_24056 = cljs.core.seq.call(null,inst_24055);
var inst_24057 = inst_24056;
var inst_24058 = null;
var inst_24059 = (0);
var inst_24060 = (0);
var state_24105__$1 = (function (){var statearr_24122 = state_24105;
(statearr_24122[(8)] = inst_24058);

(statearr_24122[(9)] = inst_24057);

(statearr_24122[(10)] = inst_24060);

(statearr_24122[(11)] = inst_24059);

return statearr_24122;
})();
var statearr_24123_24157 = state_24105__$1;
(statearr_24123_24157[(2)] = null);

(statearr_24123_24157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (17))){
var inst_24071 = (state_24105[(7)]);
var inst_24075 = cljs.core.chunk_first.call(null,inst_24071);
var inst_24076 = cljs.core.chunk_rest.call(null,inst_24071);
var inst_24077 = cljs.core.count.call(null,inst_24075);
var inst_24057 = inst_24076;
var inst_24058 = inst_24075;
var inst_24059 = inst_24077;
var inst_24060 = (0);
var state_24105__$1 = (function (){var statearr_24124 = state_24105;
(statearr_24124[(8)] = inst_24058);

(statearr_24124[(9)] = inst_24057);

(statearr_24124[(10)] = inst_24060);

(statearr_24124[(11)] = inst_24059);

return statearr_24124;
})();
var statearr_24125_24158 = state_24105__$1;
(statearr_24125_24158[(2)] = null);

(statearr_24125_24158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (3))){
var inst_24103 = (state_24105[(2)]);
var state_24105__$1 = state_24105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24105__$1,inst_24103);
} else {
if((state_val_24106 === (12))){
var inst_24091 = (state_24105[(2)]);
var state_24105__$1 = state_24105;
var statearr_24126_24159 = state_24105__$1;
(statearr_24126_24159[(2)] = inst_24091);

(statearr_24126_24159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (2))){
var state_24105__$1 = state_24105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24105__$1,(4),in$);
} else {
if((state_val_24106 === (23))){
var inst_24099 = (state_24105[(2)]);
var state_24105__$1 = state_24105;
var statearr_24127_24160 = state_24105__$1;
(statearr_24127_24160[(2)] = inst_24099);

(statearr_24127_24160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (19))){
var inst_24086 = (state_24105[(2)]);
var state_24105__$1 = state_24105;
var statearr_24128_24161 = state_24105__$1;
(statearr_24128_24161[(2)] = inst_24086);

(statearr_24128_24161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (11))){
var inst_24057 = (state_24105[(9)]);
var inst_24071 = (state_24105[(7)]);
var inst_24071__$1 = cljs.core.seq.call(null,inst_24057);
var state_24105__$1 = (function (){var statearr_24129 = state_24105;
(statearr_24129[(7)] = inst_24071__$1);

return statearr_24129;
})();
if(inst_24071__$1){
var statearr_24130_24162 = state_24105__$1;
(statearr_24130_24162[(1)] = (14));

} else {
var statearr_24131_24163 = state_24105__$1;
(statearr_24131_24163[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (9))){
var inst_24093 = (state_24105[(2)]);
var inst_24094 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24105__$1 = (function (){var statearr_24132 = state_24105;
(statearr_24132[(15)] = inst_24093);

return statearr_24132;
})();
if(cljs.core.truth_(inst_24094)){
var statearr_24133_24164 = state_24105__$1;
(statearr_24133_24164[(1)] = (21));

} else {
var statearr_24134_24165 = state_24105__$1;
(statearr_24134_24165[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (5))){
var inst_24049 = cljs.core.async.close_BANG_.call(null,out);
var state_24105__$1 = state_24105;
var statearr_24135_24166 = state_24105__$1;
(statearr_24135_24166[(2)] = inst_24049);

(statearr_24135_24166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (14))){
var inst_24071 = (state_24105[(7)]);
var inst_24073 = cljs.core.chunked_seq_QMARK_.call(null,inst_24071);
var state_24105__$1 = state_24105;
if(inst_24073){
var statearr_24136_24167 = state_24105__$1;
(statearr_24136_24167[(1)] = (17));

} else {
var statearr_24137_24168 = state_24105__$1;
(statearr_24137_24168[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (16))){
var inst_24089 = (state_24105[(2)]);
var state_24105__$1 = state_24105;
var statearr_24138_24169 = state_24105__$1;
(statearr_24138_24169[(2)] = inst_24089);

(statearr_24138_24169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24106 === (10))){
var inst_24058 = (state_24105[(8)]);
var inst_24060 = (state_24105[(10)]);
var inst_24065 = cljs.core._nth.call(null,inst_24058,inst_24060);
var state_24105__$1 = state_24105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24105__$1,(13),out,inst_24065);
} else {
if((state_val_24106 === (18))){
var inst_24071 = (state_24105[(7)]);
var inst_24080 = cljs.core.first.call(null,inst_24071);
var state_24105__$1 = state_24105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24105__$1,(20),out,inst_24080);
} else {
if((state_val_24106 === (8))){
var inst_24060 = (state_24105[(10)]);
var inst_24059 = (state_24105[(11)]);
var inst_24062 = (inst_24060 < inst_24059);
var inst_24063 = inst_24062;
var state_24105__$1 = state_24105;
if(cljs.core.truth_(inst_24063)){
var statearr_24139_24170 = state_24105__$1;
(statearr_24139_24170[(1)] = (10));

} else {
var statearr_24140_24171 = state_24105__$1;
(statearr_24140_24171[(1)] = (11));

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
});})(c__21670__auto__))
;
return ((function (switch__21558__auto__,c__21670__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21559__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21559__auto____0 = (function (){
var statearr_24144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24144[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21559__auto__);

(statearr_24144[(1)] = (1));

return statearr_24144;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21559__auto____1 = (function (state_24105){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_24105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e24145){if((e24145 instanceof Object)){
var ex__21562__auto__ = e24145;
var statearr_24146_24172 = state_24105;
(statearr_24146_24172[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24173 = state_24105;
state_24105 = G__24173;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21559__auto__ = function(state_24105){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21559__auto____1.call(this,state_24105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21559__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21559__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto__))
})();
var state__21672__auto__ = (function (){var statearr_24147 = f__21671__auto__.call(null);
(statearr_24147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto__);

return statearr_24147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto__))
);

return c__21670__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24174 = [];
var len__17919__auto___24177 = arguments.length;
var i__17920__auto___24178 = (0);
while(true){
if((i__17920__auto___24178 < len__17919__auto___24177)){
args24174.push((arguments[i__17920__auto___24178]));

var G__24179 = (i__17920__auto___24178 + (1));
i__17920__auto___24178 = G__24179;
continue;
} else {
}
break;
}

var G__24176 = args24174.length;
switch (G__24176) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24174.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24181 = [];
var len__17919__auto___24184 = arguments.length;
var i__17920__auto___24185 = (0);
while(true){
if((i__17920__auto___24185 < len__17919__auto___24184)){
args24181.push((arguments[i__17920__auto___24185]));

var G__24186 = (i__17920__auto___24185 + (1));
i__17920__auto___24185 = G__24186;
continue;
} else {
}
break;
}

var G__24183 = args24181.length;
switch (G__24183) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24181.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24188 = [];
var len__17919__auto___24239 = arguments.length;
var i__17920__auto___24240 = (0);
while(true){
if((i__17920__auto___24240 < len__17919__auto___24239)){
args24188.push((arguments[i__17920__auto___24240]));

var G__24241 = (i__17920__auto___24240 + (1));
i__17920__auto___24240 = G__24241;
continue;
} else {
}
break;
}

var G__24190 = args24188.length;
switch (G__24190) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24188.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21670__auto___24243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___24243,out){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___24243,out){
return (function (state_24214){
var state_val_24215 = (state_24214[(1)]);
if((state_val_24215 === (7))){
var inst_24209 = (state_24214[(2)]);
var state_24214__$1 = state_24214;
var statearr_24216_24244 = state_24214__$1;
(statearr_24216_24244[(2)] = inst_24209);

(statearr_24216_24244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (1))){
var inst_24191 = null;
var state_24214__$1 = (function (){var statearr_24217 = state_24214;
(statearr_24217[(7)] = inst_24191);

return statearr_24217;
})();
var statearr_24218_24245 = state_24214__$1;
(statearr_24218_24245[(2)] = null);

(statearr_24218_24245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (4))){
var inst_24194 = (state_24214[(8)]);
var inst_24194__$1 = (state_24214[(2)]);
var inst_24195 = (inst_24194__$1 == null);
var inst_24196 = cljs.core.not.call(null,inst_24195);
var state_24214__$1 = (function (){var statearr_24219 = state_24214;
(statearr_24219[(8)] = inst_24194__$1);

return statearr_24219;
})();
if(inst_24196){
var statearr_24220_24246 = state_24214__$1;
(statearr_24220_24246[(1)] = (5));

} else {
var statearr_24221_24247 = state_24214__$1;
(statearr_24221_24247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (6))){
var state_24214__$1 = state_24214;
var statearr_24222_24248 = state_24214__$1;
(statearr_24222_24248[(2)] = null);

(statearr_24222_24248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (3))){
var inst_24211 = (state_24214[(2)]);
var inst_24212 = cljs.core.async.close_BANG_.call(null,out);
var state_24214__$1 = (function (){var statearr_24223 = state_24214;
(statearr_24223[(9)] = inst_24211);

return statearr_24223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24214__$1,inst_24212);
} else {
if((state_val_24215 === (2))){
var state_24214__$1 = state_24214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24214__$1,(4),ch);
} else {
if((state_val_24215 === (11))){
var inst_24194 = (state_24214[(8)]);
var inst_24203 = (state_24214[(2)]);
var inst_24191 = inst_24194;
var state_24214__$1 = (function (){var statearr_24224 = state_24214;
(statearr_24224[(10)] = inst_24203);

(statearr_24224[(7)] = inst_24191);

return statearr_24224;
})();
var statearr_24225_24249 = state_24214__$1;
(statearr_24225_24249[(2)] = null);

(statearr_24225_24249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (9))){
var inst_24194 = (state_24214[(8)]);
var state_24214__$1 = state_24214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24214__$1,(11),out,inst_24194);
} else {
if((state_val_24215 === (5))){
var inst_24194 = (state_24214[(8)]);
var inst_24191 = (state_24214[(7)]);
var inst_24198 = cljs.core._EQ_.call(null,inst_24194,inst_24191);
var state_24214__$1 = state_24214;
if(inst_24198){
var statearr_24227_24250 = state_24214__$1;
(statearr_24227_24250[(1)] = (8));

} else {
var statearr_24228_24251 = state_24214__$1;
(statearr_24228_24251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (10))){
var inst_24206 = (state_24214[(2)]);
var state_24214__$1 = state_24214;
var statearr_24229_24252 = state_24214__$1;
(statearr_24229_24252[(2)] = inst_24206);

(statearr_24229_24252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24215 === (8))){
var inst_24191 = (state_24214[(7)]);
var tmp24226 = inst_24191;
var inst_24191__$1 = tmp24226;
var state_24214__$1 = (function (){var statearr_24230 = state_24214;
(statearr_24230[(7)] = inst_24191__$1);

return statearr_24230;
})();
var statearr_24231_24253 = state_24214__$1;
(statearr_24231_24253[(2)] = null);

(statearr_24231_24253[(1)] = (2));


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
});})(c__21670__auto___24243,out))
;
return ((function (switch__21558__auto__,c__21670__auto___24243,out){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_24235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24235[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_24235[(1)] = (1));

return statearr_24235;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_24214){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_24214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e24236){if((e24236 instanceof Object)){
var ex__21562__auto__ = e24236;
var statearr_24237_24254 = state_24214;
(statearr_24237_24254[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24255 = state_24214;
state_24214 = G__24255;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_24214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_24214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___24243,out))
})();
var state__21672__auto__ = (function (){var statearr_24238 = f__21671__auto__.call(null);
(statearr_24238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___24243);

return statearr_24238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___24243,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24256 = [];
var len__17919__auto___24326 = arguments.length;
var i__17920__auto___24327 = (0);
while(true){
if((i__17920__auto___24327 < len__17919__auto___24326)){
args24256.push((arguments[i__17920__auto___24327]));

var G__24328 = (i__17920__auto___24327 + (1));
i__17920__auto___24327 = G__24328;
continue;
} else {
}
break;
}

var G__24258 = args24256.length;
switch (G__24258) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24256.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21670__auto___24330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___24330,out){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___24330,out){
return (function (state_24296){
var state_val_24297 = (state_24296[(1)]);
if((state_val_24297 === (7))){
var inst_24292 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
var statearr_24298_24331 = state_24296__$1;
(statearr_24298_24331[(2)] = inst_24292);

(statearr_24298_24331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (1))){
var inst_24259 = (new Array(n));
var inst_24260 = inst_24259;
var inst_24261 = (0);
var state_24296__$1 = (function (){var statearr_24299 = state_24296;
(statearr_24299[(7)] = inst_24261);

(statearr_24299[(8)] = inst_24260);

return statearr_24299;
})();
var statearr_24300_24332 = state_24296__$1;
(statearr_24300_24332[(2)] = null);

(statearr_24300_24332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (4))){
var inst_24264 = (state_24296[(9)]);
var inst_24264__$1 = (state_24296[(2)]);
var inst_24265 = (inst_24264__$1 == null);
var inst_24266 = cljs.core.not.call(null,inst_24265);
var state_24296__$1 = (function (){var statearr_24301 = state_24296;
(statearr_24301[(9)] = inst_24264__$1);

return statearr_24301;
})();
if(inst_24266){
var statearr_24302_24333 = state_24296__$1;
(statearr_24302_24333[(1)] = (5));

} else {
var statearr_24303_24334 = state_24296__$1;
(statearr_24303_24334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (15))){
var inst_24286 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
var statearr_24304_24335 = state_24296__$1;
(statearr_24304_24335[(2)] = inst_24286);

(statearr_24304_24335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (13))){
var state_24296__$1 = state_24296;
var statearr_24305_24336 = state_24296__$1;
(statearr_24305_24336[(2)] = null);

(statearr_24305_24336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (6))){
var inst_24261 = (state_24296[(7)]);
var inst_24282 = (inst_24261 > (0));
var state_24296__$1 = state_24296;
if(cljs.core.truth_(inst_24282)){
var statearr_24306_24337 = state_24296__$1;
(statearr_24306_24337[(1)] = (12));

} else {
var statearr_24307_24338 = state_24296__$1;
(statearr_24307_24338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (3))){
var inst_24294 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24296__$1,inst_24294);
} else {
if((state_val_24297 === (12))){
var inst_24260 = (state_24296[(8)]);
var inst_24284 = cljs.core.vec.call(null,inst_24260);
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24296__$1,(15),out,inst_24284);
} else {
if((state_val_24297 === (2))){
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24296__$1,(4),ch);
} else {
if((state_val_24297 === (11))){
var inst_24276 = (state_24296[(2)]);
var inst_24277 = (new Array(n));
var inst_24260 = inst_24277;
var inst_24261 = (0);
var state_24296__$1 = (function (){var statearr_24308 = state_24296;
(statearr_24308[(10)] = inst_24276);

(statearr_24308[(7)] = inst_24261);

(statearr_24308[(8)] = inst_24260);

return statearr_24308;
})();
var statearr_24309_24339 = state_24296__$1;
(statearr_24309_24339[(2)] = null);

(statearr_24309_24339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (9))){
var inst_24260 = (state_24296[(8)]);
var inst_24274 = cljs.core.vec.call(null,inst_24260);
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24296__$1,(11),out,inst_24274);
} else {
if((state_val_24297 === (5))){
var inst_24269 = (state_24296[(11)]);
var inst_24264 = (state_24296[(9)]);
var inst_24261 = (state_24296[(7)]);
var inst_24260 = (state_24296[(8)]);
var inst_24268 = (inst_24260[inst_24261] = inst_24264);
var inst_24269__$1 = (inst_24261 + (1));
var inst_24270 = (inst_24269__$1 < n);
var state_24296__$1 = (function (){var statearr_24310 = state_24296;
(statearr_24310[(11)] = inst_24269__$1);

(statearr_24310[(12)] = inst_24268);

return statearr_24310;
})();
if(cljs.core.truth_(inst_24270)){
var statearr_24311_24340 = state_24296__$1;
(statearr_24311_24340[(1)] = (8));

} else {
var statearr_24312_24341 = state_24296__$1;
(statearr_24312_24341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (14))){
var inst_24289 = (state_24296[(2)]);
var inst_24290 = cljs.core.async.close_BANG_.call(null,out);
var state_24296__$1 = (function (){var statearr_24314 = state_24296;
(statearr_24314[(13)] = inst_24289);

return statearr_24314;
})();
var statearr_24315_24342 = state_24296__$1;
(statearr_24315_24342[(2)] = inst_24290);

(statearr_24315_24342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (10))){
var inst_24280 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
var statearr_24316_24343 = state_24296__$1;
(statearr_24316_24343[(2)] = inst_24280);

(statearr_24316_24343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (8))){
var inst_24269 = (state_24296[(11)]);
var inst_24260 = (state_24296[(8)]);
var tmp24313 = inst_24260;
var inst_24260__$1 = tmp24313;
var inst_24261 = inst_24269;
var state_24296__$1 = (function (){var statearr_24317 = state_24296;
(statearr_24317[(7)] = inst_24261);

(statearr_24317[(8)] = inst_24260__$1);

return statearr_24317;
})();
var statearr_24318_24344 = state_24296__$1;
(statearr_24318_24344[(2)] = null);

(statearr_24318_24344[(1)] = (2));


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
});})(c__21670__auto___24330,out))
;
return ((function (switch__21558__auto__,c__21670__auto___24330,out){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_24322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24322[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_24322[(1)] = (1));

return statearr_24322;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_24296){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_24296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e24323){if((e24323 instanceof Object)){
var ex__21562__auto__ = e24323;
var statearr_24324_24345 = state_24296;
(statearr_24324_24345[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24346 = state_24296;
state_24296 = G__24346;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_24296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_24296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___24330,out))
})();
var state__21672__auto__ = (function (){var statearr_24325 = f__21671__auto__.call(null);
(statearr_24325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___24330);

return statearr_24325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___24330,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24347 = [];
var len__17919__auto___24421 = arguments.length;
var i__17920__auto___24422 = (0);
while(true){
if((i__17920__auto___24422 < len__17919__auto___24421)){
args24347.push((arguments[i__17920__auto___24422]));

var G__24423 = (i__17920__auto___24422 + (1));
i__17920__auto___24422 = G__24423;
continue;
} else {
}
break;
}

var G__24349 = args24347.length;
switch (G__24349) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24347.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21670__auto___24425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___24425,out){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___24425,out){
return (function (state_24391){
var state_val_24392 = (state_24391[(1)]);
if((state_val_24392 === (7))){
var inst_24387 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24393_24426 = state_24391__$1;
(statearr_24393_24426[(2)] = inst_24387);

(statearr_24393_24426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (1))){
var inst_24350 = [];
var inst_24351 = inst_24350;
var inst_24352 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24391__$1 = (function (){var statearr_24394 = state_24391;
(statearr_24394[(7)] = inst_24352);

(statearr_24394[(8)] = inst_24351);

return statearr_24394;
})();
var statearr_24395_24427 = state_24391__$1;
(statearr_24395_24427[(2)] = null);

(statearr_24395_24427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (4))){
var inst_24355 = (state_24391[(9)]);
var inst_24355__$1 = (state_24391[(2)]);
var inst_24356 = (inst_24355__$1 == null);
var inst_24357 = cljs.core.not.call(null,inst_24356);
var state_24391__$1 = (function (){var statearr_24396 = state_24391;
(statearr_24396[(9)] = inst_24355__$1);

return statearr_24396;
})();
if(inst_24357){
var statearr_24397_24428 = state_24391__$1;
(statearr_24397_24428[(1)] = (5));

} else {
var statearr_24398_24429 = state_24391__$1;
(statearr_24398_24429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (15))){
var inst_24381 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24399_24430 = state_24391__$1;
(statearr_24399_24430[(2)] = inst_24381);

(statearr_24399_24430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (13))){
var state_24391__$1 = state_24391;
var statearr_24400_24431 = state_24391__$1;
(statearr_24400_24431[(2)] = null);

(statearr_24400_24431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (6))){
var inst_24351 = (state_24391[(8)]);
var inst_24376 = inst_24351.length;
var inst_24377 = (inst_24376 > (0));
var state_24391__$1 = state_24391;
if(cljs.core.truth_(inst_24377)){
var statearr_24401_24432 = state_24391__$1;
(statearr_24401_24432[(1)] = (12));

} else {
var statearr_24402_24433 = state_24391__$1;
(statearr_24402_24433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (3))){
var inst_24389 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24391__$1,inst_24389);
} else {
if((state_val_24392 === (12))){
var inst_24351 = (state_24391[(8)]);
var inst_24379 = cljs.core.vec.call(null,inst_24351);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24391__$1,(15),out,inst_24379);
} else {
if((state_val_24392 === (2))){
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24391__$1,(4),ch);
} else {
if((state_val_24392 === (11))){
var inst_24355 = (state_24391[(9)]);
var inst_24359 = (state_24391[(10)]);
var inst_24369 = (state_24391[(2)]);
var inst_24370 = [];
var inst_24371 = inst_24370.push(inst_24355);
var inst_24351 = inst_24370;
var inst_24352 = inst_24359;
var state_24391__$1 = (function (){var statearr_24403 = state_24391;
(statearr_24403[(11)] = inst_24369);

(statearr_24403[(7)] = inst_24352);

(statearr_24403[(12)] = inst_24371);

(statearr_24403[(8)] = inst_24351);

return statearr_24403;
})();
var statearr_24404_24434 = state_24391__$1;
(statearr_24404_24434[(2)] = null);

(statearr_24404_24434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (9))){
var inst_24351 = (state_24391[(8)]);
var inst_24367 = cljs.core.vec.call(null,inst_24351);
var state_24391__$1 = state_24391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24391__$1,(11),out,inst_24367);
} else {
if((state_val_24392 === (5))){
var inst_24355 = (state_24391[(9)]);
var inst_24352 = (state_24391[(7)]);
var inst_24359 = (state_24391[(10)]);
var inst_24359__$1 = f.call(null,inst_24355);
var inst_24360 = cljs.core._EQ_.call(null,inst_24359__$1,inst_24352);
var inst_24361 = cljs.core.keyword_identical_QMARK_.call(null,inst_24352,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24362 = (inst_24360) || (inst_24361);
var state_24391__$1 = (function (){var statearr_24405 = state_24391;
(statearr_24405[(10)] = inst_24359__$1);

return statearr_24405;
})();
if(cljs.core.truth_(inst_24362)){
var statearr_24406_24435 = state_24391__$1;
(statearr_24406_24435[(1)] = (8));

} else {
var statearr_24407_24436 = state_24391__$1;
(statearr_24407_24436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (14))){
var inst_24384 = (state_24391[(2)]);
var inst_24385 = cljs.core.async.close_BANG_.call(null,out);
var state_24391__$1 = (function (){var statearr_24409 = state_24391;
(statearr_24409[(13)] = inst_24384);

return statearr_24409;
})();
var statearr_24410_24437 = state_24391__$1;
(statearr_24410_24437[(2)] = inst_24385);

(statearr_24410_24437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (10))){
var inst_24374 = (state_24391[(2)]);
var state_24391__$1 = state_24391;
var statearr_24411_24438 = state_24391__$1;
(statearr_24411_24438[(2)] = inst_24374);

(statearr_24411_24438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24392 === (8))){
var inst_24355 = (state_24391[(9)]);
var inst_24351 = (state_24391[(8)]);
var inst_24359 = (state_24391[(10)]);
var inst_24364 = inst_24351.push(inst_24355);
var tmp24408 = inst_24351;
var inst_24351__$1 = tmp24408;
var inst_24352 = inst_24359;
var state_24391__$1 = (function (){var statearr_24412 = state_24391;
(statearr_24412[(7)] = inst_24352);

(statearr_24412[(14)] = inst_24364);

(statearr_24412[(8)] = inst_24351__$1);

return statearr_24412;
})();
var statearr_24413_24439 = state_24391__$1;
(statearr_24413_24439[(2)] = null);

(statearr_24413_24439[(1)] = (2));


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
});})(c__21670__auto___24425,out))
;
return ((function (switch__21558__auto__,c__21670__auto___24425,out){
return (function() {
var cljs$core$async$state_machine__21559__auto__ = null;
var cljs$core$async$state_machine__21559__auto____0 = (function (){
var statearr_24417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24417[(0)] = cljs$core$async$state_machine__21559__auto__);

(statearr_24417[(1)] = (1));

return statearr_24417;
});
var cljs$core$async$state_machine__21559__auto____1 = (function (state_24391){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_24391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e24418){if((e24418 instanceof Object)){
var ex__21562__auto__ = e24418;
var statearr_24419_24440 = state_24391;
(statearr_24419_24440[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24441 = state_24391;
state_24391 = G__24441;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
cljs$core$async$state_machine__21559__auto__ = function(state_24391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21559__auto____1.call(this,state_24391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21559__auto____0;
cljs$core$async$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21559__auto____1;
return cljs$core$async$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___24425,out))
})();
var state__21672__auto__ = (function (){var statearr_24420 = f__21671__auto__.call(null);
(statearr_24420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___24425);

return statearr_24420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___24425,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map