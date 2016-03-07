// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__17975_17979 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__17976_17980 = null;
var count__17977_17981 = (0);
var i__17978_17982 = (0);
while(true){
if((i__17978_17982 < count__17977_17981)){
var k_17983 = cljs.core._nth.call(null,chunk__17976_17980,i__17978_17982);
var v_17984 = (b[k_17983]);
(a[k_17983] = v_17984);

var G__17985 = seq__17975_17979;
var G__17986 = chunk__17976_17980;
var G__17987 = count__17977_17981;
var G__17988 = (i__17978_17982 + (1));
seq__17975_17979 = G__17985;
chunk__17976_17980 = G__17986;
count__17977_17981 = G__17987;
i__17978_17982 = G__17988;
continue;
} else {
var temp__4425__auto___17989 = cljs.core.seq.call(null,seq__17975_17979);
if(temp__4425__auto___17989){
var seq__17975_17990__$1 = temp__4425__auto___17989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17975_17990__$1)){
var c__17664__auto___17991 = cljs.core.chunk_first.call(null,seq__17975_17990__$1);
var G__17992 = cljs.core.chunk_rest.call(null,seq__17975_17990__$1);
var G__17993 = c__17664__auto___17991;
var G__17994 = cljs.core.count.call(null,c__17664__auto___17991);
var G__17995 = (0);
seq__17975_17979 = G__17992;
chunk__17976_17980 = G__17993;
count__17977_17981 = G__17994;
i__17978_17982 = G__17995;
continue;
} else {
var k_17996 = cljs.core.first.call(null,seq__17975_17990__$1);
var v_17997 = (b[k_17996]);
(a[k_17996] = v_17997);

var G__17998 = cljs.core.next.call(null,seq__17975_17990__$1);
var G__17999 = null;
var G__18000 = (0);
var G__18001 = (0);
seq__17975_17979 = G__17998;
chunk__17976_17980 = G__17999;
count__17977_17981 = G__18000;
i__17978_17982 = G__18001;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args18002 = [];
var len__17919__auto___18005 = arguments.length;
var i__17920__auto___18006 = (0);
while(true){
if((i__17920__auto___18006 < len__17919__auto___18005)){
args18002.push((arguments[i__17920__auto___18006]));

var G__18007 = (i__17920__auto___18006 + (1));
i__17920__auto___18006 = G__18007;
continue;
} else {
}
break;
}

var G__18004 = args18002.length;
switch (G__18004) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18002.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18009 = (i + (2));
var G__18010 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18009;
ret = G__18010;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18011_18015 = cljs.core.seq.call(null,v);
var chunk__18012_18016 = null;
var count__18013_18017 = (0);
var i__18014_18018 = (0);
while(true){
if((i__18014_18018 < count__18013_18017)){
var x_18019 = cljs.core._nth.call(null,chunk__18012_18016,i__18014_18018);
ret.push(x_18019);

var G__18020 = seq__18011_18015;
var G__18021 = chunk__18012_18016;
var G__18022 = count__18013_18017;
var G__18023 = (i__18014_18018 + (1));
seq__18011_18015 = G__18020;
chunk__18012_18016 = G__18021;
count__18013_18017 = G__18022;
i__18014_18018 = G__18023;
continue;
} else {
var temp__4425__auto___18024 = cljs.core.seq.call(null,seq__18011_18015);
if(temp__4425__auto___18024){
var seq__18011_18025__$1 = temp__4425__auto___18024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18011_18025__$1)){
var c__17664__auto___18026 = cljs.core.chunk_first.call(null,seq__18011_18025__$1);
var G__18027 = cljs.core.chunk_rest.call(null,seq__18011_18025__$1);
var G__18028 = c__17664__auto___18026;
var G__18029 = cljs.core.count.call(null,c__17664__auto___18026);
var G__18030 = (0);
seq__18011_18015 = G__18027;
chunk__18012_18016 = G__18028;
count__18013_18017 = G__18029;
i__18014_18018 = G__18030;
continue;
} else {
var x_18031 = cljs.core.first.call(null,seq__18011_18025__$1);
ret.push(x_18031);

var G__18032 = cljs.core.next.call(null,seq__18011_18025__$1);
var G__18033 = null;
var G__18034 = (0);
var G__18035 = (0);
seq__18011_18015 = G__18032;
chunk__18012_18016 = G__18033;
count__18013_18017 = G__18034;
i__18014_18018 = G__18035;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18036_18040 = cljs.core.seq.call(null,v);
var chunk__18037_18041 = null;
var count__18038_18042 = (0);
var i__18039_18043 = (0);
while(true){
if((i__18039_18043 < count__18038_18042)){
var x_18044 = cljs.core._nth.call(null,chunk__18037_18041,i__18039_18043);
ret.push(x_18044);

var G__18045 = seq__18036_18040;
var G__18046 = chunk__18037_18041;
var G__18047 = count__18038_18042;
var G__18048 = (i__18039_18043 + (1));
seq__18036_18040 = G__18045;
chunk__18037_18041 = G__18046;
count__18038_18042 = G__18047;
i__18039_18043 = G__18048;
continue;
} else {
var temp__4425__auto___18049 = cljs.core.seq.call(null,seq__18036_18040);
if(temp__4425__auto___18049){
var seq__18036_18050__$1 = temp__4425__auto___18049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18036_18050__$1)){
var c__17664__auto___18051 = cljs.core.chunk_first.call(null,seq__18036_18050__$1);
var G__18052 = cljs.core.chunk_rest.call(null,seq__18036_18050__$1);
var G__18053 = c__17664__auto___18051;
var G__18054 = cljs.core.count.call(null,c__17664__auto___18051);
var G__18055 = (0);
seq__18036_18040 = G__18052;
chunk__18037_18041 = G__18053;
count__18038_18042 = G__18054;
i__18039_18043 = G__18055;
continue;
} else {
var x_18056 = cljs.core.first.call(null,seq__18036_18050__$1);
ret.push(x_18056);

var G__18057 = cljs.core.next.call(null,seq__18036_18050__$1);
var G__18058 = null;
var G__18059 = (0);
var G__18060 = (0);
seq__18036_18040 = G__18057;
chunk__18037_18041 = G__18058;
count__18038_18042 = G__18059;
i__18039_18043 = G__18060;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18061_18065 = cljs.core.seq.call(null,v);
var chunk__18062_18066 = null;
var count__18063_18067 = (0);
var i__18064_18068 = (0);
while(true){
if((i__18064_18068 < count__18063_18067)){
var x_18069 = cljs.core._nth.call(null,chunk__18062_18066,i__18064_18068);
ret.push(x_18069);

var G__18070 = seq__18061_18065;
var G__18071 = chunk__18062_18066;
var G__18072 = count__18063_18067;
var G__18073 = (i__18064_18068 + (1));
seq__18061_18065 = G__18070;
chunk__18062_18066 = G__18071;
count__18063_18067 = G__18072;
i__18064_18068 = G__18073;
continue;
} else {
var temp__4425__auto___18074 = cljs.core.seq.call(null,seq__18061_18065);
if(temp__4425__auto___18074){
var seq__18061_18075__$1 = temp__4425__auto___18074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18061_18075__$1)){
var c__17664__auto___18076 = cljs.core.chunk_first.call(null,seq__18061_18075__$1);
var G__18077 = cljs.core.chunk_rest.call(null,seq__18061_18075__$1);
var G__18078 = c__17664__auto___18076;
var G__18079 = cljs.core.count.call(null,c__17664__auto___18076);
var G__18080 = (0);
seq__18061_18065 = G__18077;
chunk__18062_18066 = G__18078;
count__18063_18067 = G__18079;
i__18064_18068 = G__18080;
continue;
} else {
var x_18081 = cljs.core.first.call(null,seq__18061_18075__$1);
ret.push(x_18081);

var G__18082 = cljs.core.next.call(null,seq__18061_18075__$1);
var G__18083 = null;
var G__18084 = (0);
var G__18085 = (0);
seq__18061_18065 = G__18082;
chunk__18062_18066 = G__18083;
count__18063_18067 = G__18084;
i__18064_18068 = G__18085;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args18086 = [];
var len__17919__auto___18097 = arguments.length;
var i__17920__auto___18098 = (0);
while(true){
if((i__17920__auto___18098 < len__17919__auto___18097)){
args18086.push((arguments[i__17920__auto___18098]));

var G__18099 = (i__17920__auto___18098 + (1));
i__17920__auto___18098 = G__18099;
continue;
} else {
}
break;
}

var G__18088 = args18086.length;
switch (G__18088) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18086.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18089 = obj;
G__18089.push(kfn.call(null,k),vfn.call(null,v));

return G__18089;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18090 = cljs.core.clone.call(null,handlers);
x18090.forEach = ((function (x18090,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18091 = cljs.core.seq.call(null,coll);
var chunk__18092 = null;
var count__18093 = (0);
var i__18094 = (0);
while(true){
if((i__18094 < count__18093)){
var vec__18095 = cljs.core._nth.call(null,chunk__18092,i__18094);
var k = cljs.core.nth.call(null,vec__18095,(0),null);
var v = cljs.core.nth.call(null,vec__18095,(1),null);
f.call(null,v,k);

var G__18101 = seq__18091;
var G__18102 = chunk__18092;
var G__18103 = count__18093;
var G__18104 = (i__18094 + (1));
seq__18091 = G__18101;
chunk__18092 = G__18102;
count__18093 = G__18103;
i__18094 = G__18104;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18091);
if(temp__4425__auto__){
var seq__18091__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18091__$1)){
var c__17664__auto__ = cljs.core.chunk_first.call(null,seq__18091__$1);
var G__18105 = cljs.core.chunk_rest.call(null,seq__18091__$1);
var G__18106 = c__17664__auto__;
var G__18107 = cljs.core.count.call(null,c__17664__auto__);
var G__18108 = (0);
seq__18091 = G__18105;
chunk__18092 = G__18106;
count__18093 = G__18107;
i__18094 = G__18108;
continue;
} else {
var vec__18096 = cljs.core.first.call(null,seq__18091__$1);
var k = cljs.core.nth.call(null,vec__18096,(0),null);
var v = cljs.core.nth.call(null,vec__18096,(1),null);
f.call(null,v,k);

var G__18109 = cljs.core.next.call(null,seq__18091__$1);
var G__18110 = null;
var G__18111 = (0);
var G__18112 = (0);
seq__18091 = G__18109;
chunk__18092 = G__18110;
count__18093 = G__18111;
i__18094 = G__18112;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18090,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18090;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args18113 = [];
var len__17919__auto___18119 = arguments.length;
var i__17920__auto___18120 = (0);
while(true){
if((i__17920__auto___18120 < len__17919__auto___18119)){
args18113.push((arguments[i__17920__auto___18120]));

var G__18121 = (i__17920__auto___18120 + (1));
i__17920__auto___18120 = G__18121;
continue;
} else {
}
break;
}

var G__18115 = args18113.length;
switch (G__18115) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18113.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18116 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18117){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18117 = meta18117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18118,meta18117__$1){
var self__ = this;
var _18118__$1 = this;
return (new cognitect.transit.t_cognitect$transit18116(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18117__$1));
});

cognitect.transit.t_cognitect$transit18116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18118){
var self__ = this;
var _18118__$1 = this;
return self__.meta18117;
});

cognitect.transit.t_cognitect$transit18116.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18116.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18116.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18116.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18117","meta18117",-2227175,null)], null);
});

cognitect.transit.t_cognitect$transit18116.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18116.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18116";

cognitect.transit.t_cognitect$transit18116.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"cognitect.transit/t_cognitect$transit18116");
});

cognitect.transit.__GT_t_cognitect$transit18116 = (function cognitect$transit$__GT_t_cognitect$transit18116(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18117){
return (new cognitect.transit.t_cognitect$transit18116(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18117));
});

}

return (new cognitect.transit.t_cognitect$transit18116(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16861__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map