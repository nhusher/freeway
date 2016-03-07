// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__19573__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__19572 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__19572,(0),null);
var body = cljs.core.nthnext.call(null,vec__19572,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__19573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19574__i = 0, G__19574__a = new Array(arguments.length -  0);
while (G__19574__i < G__19574__a.length) {G__19574__a[G__19574__i] = arguments[G__19574__i + 0]; ++G__19574__i;}
  args = new cljs.core.IndexedSeq(G__19574__a,0);
} 
return G__19573__delegate.call(this,args);};
G__19573.cljs$lang$maxFixedArity = 0;
G__19573.cljs$lang$applyTo = (function (arglist__19575){
var args = cljs.core.seq(arglist__19575);
return G__19573__delegate(args);
});
G__19573.cljs$core$IFn$_invoke$arity$variadic = G__19573__delegate;
return G__19573;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17633__auto__ = (function sablono$core$update_arglists_$_iter__19580(s__19581){
return (new cljs.core.LazySeq(null,(function (){
var s__19581__$1 = s__19581;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19581__$1);
if(temp__4425__auto__){
var s__19581__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19581__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__19581__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__19583 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__19582 = (0);
while(true){
if((i__19582 < size__17632__auto__)){
var args = cljs.core._nth.call(null,c__17631__auto__,i__19582);
cljs.core.chunk_append.call(null,b__19583,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__19584 = (i__19582 + (1));
i__19582 = G__19584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19583),sablono$core$update_arglists_$_iter__19580.call(null,cljs.core.chunk_rest.call(null,s__19581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19583),null);
}
} else {
var args = cljs.core.first.call(null,s__19581__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__19580.call(null,cljs.core.rest.call(null,s__19581__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17633__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17926__auto__ = [];
var len__17919__auto___19590 = arguments.length;
var i__17920__auto___19591 = (0);
while(true){
if((i__17920__auto___19591 < len__17919__auto___19590)){
args__17926__auto__.push((arguments[i__17920__auto___19591]));

var G__19592 = (i__17920__auto___19591 + (1));
i__17920__auto___19591 = G__19592;
continue;
} else {
}
break;
}

var argseq__17927__auto__ = ((((0) < args__17926__auto__.length))?(new cljs.core.IndexedSeq(args__17926__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17927__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17633__auto__ = (function sablono$core$iter__19586(s__19587){
return (new cljs.core.LazySeq(null,(function (){
var s__19587__$1 = s__19587;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19587__$1);
if(temp__4425__auto__){
var s__19587__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19587__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__19587__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__19589 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__19588 = (0);
while(true){
if((i__19588 < size__17632__auto__)){
var style = cljs.core._nth.call(null,c__17631__auto__,i__19588);
cljs.core.chunk_append.call(null,b__19589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__19593 = (i__19588 + (1));
i__19588 = G__19593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19589),sablono$core$iter__19586.call(null,cljs.core.chunk_rest.call(null,s__19587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19589),null);
}
} else {
var style = cljs.core.first.call(null,s__19587__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__19586.call(null,cljs.core.rest.call(null,s__19587__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17633__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq19585){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19585));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to19594 = (function sablono$core$link_to19594(var_args){
var args__17926__auto__ = [];
var len__17919__auto___19597 = arguments.length;
var i__17920__auto___19598 = (0);
while(true){
if((i__17920__auto___19598 < len__17919__auto___19597)){
args__17926__auto__.push((arguments[i__17920__auto___19598]));

var G__19599 = (i__17920__auto___19598 + (1));
i__17920__auto___19598 = G__19599;
continue;
} else {
}
break;
}

var argseq__17927__auto__ = ((((1) < args__17926__auto__.length))?(new cljs.core.IndexedSeq(args__17926__auto__.slice((1)),(0))):null);
return sablono.core.link_to19594.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17927__auto__);
});

sablono.core.link_to19594.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to19594.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19594.cljs$lang$applyTo = (function (seq19595){
var G__19596 = cljs.core.first.call(null,seq19595);
var seq19595__$1 = cljs.core.next.call(null,seq19595);
return sablono.core.link_to19594.cljs$core$IFn$_invoke$arity$variadic(G__19596,seq19595__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to19594);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19600 = (function sablono$core$mail_to19600(var_args){
var args__17926__auto__ = [];
var len__17919__auto___19605 = arguments.length;
var i__17920__auto___19606 = (0);
while(true){
if((i__17920__auto___19606 < len__17919__auto___19605)){
args__17926__auto__.push((arguments[i__17920__auto___19606]));

var G__19607 = (i__17920__auto___19606 + (1));
i__17920__auto___19606 = G__19607;
continue;
} else {
}
break;
}

var argseq__17927__auto__ = ((((1) < args__17926__auto__.length))?(new cljs.core.IndexedSeq(args__17926__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19600.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17927__auto__);
});

sablono.core.mail_to19600.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19603){
var vec__19604 = p__19603;
var content = cljs.core.nth.call(null,vec__19604,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16861__auto__ = content;
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19600.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19600.cljs$lang$applyTo = (function (seq19601){
var G__19602 = cljs.core.first.call(null,seq19601);
var seq19601__$1 = cljs.core.next.call(null,seq19601);
return sablono.core.mail_to19600.cljs$core$IFn$_invoke$arity$variadic(G__19602,seq19601__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to19600);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19608 = (function sablono$core$unordered_list19608(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17633__auto__ = (function sablono$core$unordered_list19608_$_iter__19613(s__19614){
return (new cljs.core.LazySeq(null,(function (){
var s__19614__$1 = s__19614;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19614__$1);
if(temp__4425__auto__){
var s__19614__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19614__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__19614__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__19616 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__19615 = (0);
while(true){
if((i__19615 < size__17632__auto__)){
var x = cljs.core._nth.call(null,c__17631__auto__,i__19615);
cljs.core.chunk_append.call(null,b__19616,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19617 = (i__19615 + (1));
i__19615 = G__19617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19616),sablono$core$unordered_list19608_$_iter__19613.call(null,cljs.core.chunk_rest.call(null,s__19614__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19616),null);
}
} else {
var x = cljs.core.first.call(null,s__19614__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list19608_$_iter__19613.call(null,cljs.core.rest.call(null,s__19614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17633__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list19608);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19618 = (function sablono$core$ordered_list19618(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17633__auto__ = (function sablono$core$ordered_list19618_$_iter__19623(s__19624){
return (new cljs.core.LazySeq(null,(function (){
var s__19624__$1 = s__19624;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19624__$1);
if(temp__4425__auto__){
var s__19624__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19624__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__19624__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__19626 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__19625 = (0);
while(true){
if((i__19625 < size__17632__auto__)){
var x = cljs.core._nth.call(null,c__17631__auto__,i__19625);
cljs.core.chunk_append.call(null,b__19626,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__19627 = (i__19625 + (1));
i__19625 = G__19627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19626),sablono$core$ordered_list19618_$_iter__19623.call(null,cljs.core.chunk_rest.call(null,s__19624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19626),null);
}
} else {
var x = cljs.core.first.call(null,s__19624__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list19618_$_iter__19623.call(null,cljs.core.rest.call(null,s__19624__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17633__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list19618);
/**
 * Create an image element.
 */
sablono.core.image19628 = (function sablono$core$image19628(var_args){
var args19629 = [];
var len__17919__auto___19632 = arguments.length;
var i__17920__auto___19633 = (0);
while(true){
if((i__17920__auto___19633 < len__17919__auto___19632)){
args19629.push((arguments[i__17920__auto___19633]));

var G__19634 = (i__17920__auto___19633 + (1));
i__17920__auto___19633 = G__19634;
continue;
} else {
}
break;
}

var G__19631 = args19629.length;
switch (G__19631) {
case 1:
return sablono.core.image19628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19629.length)].join('')));

}
});

sablono.core.image19628.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image19628.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image19628.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image19628);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__19636_SHARP_,p2__19637_SHARP_){
return [cljs.core.str(p1__19636_SHARP_),cljs.core.str("["),cljs.core.str(p2__19637_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__19638_SHARP_,p2__19639_SHARP_){
return [cljs.core.str(p1__19638_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19639_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field19640 = (function sablono$core$color_field19640(var_args){
var args19641 = [];
var len__17919__auto___19708 = arguments.length;
var i__17920__auto___19709 = (0);
while(true){
if((i__17920__auto___19709 < len__17919__auto___19708)){
args19641.push((arguments[i__17920__auto___19709]));

var G__19710 = (i__17920__auto___19709 + (1));
i__17920__auto___19709 = G__19710;
continue;
} else {
}
break;
}

var G__19643 = args19641.length;
switch (G__19643) {
case 1:
return sablono.core.color_field19640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19641.length)].join('')));

}
});

sablono.core.color_field19640.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.color_field19640.call(null,name__19561__auto__,null);
});

sablono.core.color_field19640.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.color_field19640.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field19640);

/**
 * Creates a date input field.
 */
sablono.core.date_field19644 = (function sablono$core$date_field19644(var_args){
var args19645 = [];
var len__17919__auto___19712 = arguments.length;
var i__17920__auto___19713 = (0);
while(true){
if((i__17920__auto___19713 < len__17919__auto___19712)){
args19645.push((arguments[i__17920__auto___19713]));

var G__19714 = (i__17920__auto___19713 + (1));
i__17920__auto___19713 = G__19714;
continue;
} else {
}
break;
}

var G__19647 = args19645.length;
switch (G__19647) {
case 1:
return sablono.core.date_field19644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19645.length)].join('')));

}
});

sablono.core.date_field19644.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.date_field19644.call(null,name__19561__auto__,null);
});

sablono.core.date_field19644.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.date_field19644.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field19644);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19648 = (function sablono$core$datetime_field19648(var_args){
var args19649 = [];
var len__17919__auto___19716 = arguments.length;
var i__17920__auto___19717 = (0);
while(true){
if((i__17920__auto___19717 < len__17919__auto___19716)){
args19649.push((arguments[i__17920__auto___19717]));

var G__19718 = (i__17920__auto___19717 + (1));
i__17920__auto___19717 = G__19718;
continue;
} else {
}
break;
}

var G__19651 = args19649.length;
switch (G__19651) {
case 1:
return sablono.core.datetime_field19648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19649.length)].join('')));

}
});

sablono.core.datetime_field19648.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.datetime_field19648.call(null,name__19561__auto__,null);
});

sablono.core.datetime_field19648.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.datetime_field19648.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field19648);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19652 = (function sablono$core$datetime_local_field19652(var_args){
var args19653 = [];
var len__17919__auto___19720 = arguments.length;
var i__17920__auto___19721 = (0);
while(true){
if((i__17920__auto___19721 < len__17919__auto___19720)){
args19653.push((arguments[i__17920__auto___19721]));

var G__19722 = (i__17920__auto___19721 + (1));
i__17920__auto___19721 = G__19722;
continue;
} else {
}
break;
}

var G__19655 = args19653.length;
switch (G__19655) {
case 1:
return sablono.core.datetime_local_field19652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19653.length)].join('')));

}
});

sablono.core.datetime_local_field19652.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.datetime_local_field19652.call(null,name__19561__auto__,null);
});

sablono.core.datetime_local_field19652.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.datetime_local_field19652.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field19652);

/**
 * Creates a email input field.
 */
sablono.core.email_field19656 = (function sablono$core$email_field19656(var_args){
var args19657 = [];
var len__17919__auto___19724 = arguments.length;
var i__17920__auto___19725 = (0);
while(true){
if((i__17920__auto___19725 < len__17919__auto___19724)){
args19657.push((arguments[i__17920__auto___19725]));

var G__19726 = (i__17920__auto___19725 + (1));
i__17920__auto___19725 = G__19726;
continue;
} else {
}
break;
}

var G__19659 = args19657.length;
switch (G__19659) {
case 1:
return sablono.core.email_field19656.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19656.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19657.length)].join('')));

}
});

sablono.core.email_field19656.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.email_field19656.call(null,name__19561__auto__,null);
});

sablono.core.email_field19656.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.email_field19656.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field19656);

/**
 * Creates a file input field.
 */
sablono.core.file_field19660 = (function sablono$core$file_field19660(var_args){
var args19661 = [];
var len__17919__auto___19728 = arguments.length;
var i__17920__auto___19729 = (0);
while(true){
if((i__17920__auto___19729 < len__17919__auto___19728)){
args19661.push((arguments[i__17920__auto___19729]));

var G__19730 = (i__17920__auto___19729 + (1));
i__17920__auto___19729 = G__19730;
continue;
} else {
}
break;
}

var G__19663 = args19661.length;
switch (G__19663) {
case 1:
return sablono.core.file_field19660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19661.length)].join('')));

}
});

sablono.core.file_field19660.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.file_field19660.call(null,name__19561__auto__,null);
});

sablono.core.file_field19660.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.file_field19660.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field19660);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19664 = (function sablono$core$hidden_field19664(var_args){
var args19665 = [];
var len__17919__auto___19732 = arguments.length;
var i__17920__auto___19733 = (0);
while(true){
if((i__17920__auto___19733 < len__17919__auto___19732)){
args19665.push((arguments[i__17920__auto___19733]));

var G__19734 = (i__17920__auto___19733 + (1));
i__17920__auto___19733 = G__19734;
continue;
} else {
}
break;
}

var G__19667 = args19665.length;
switch (G__19667) {
case 1:
return sablono.core.hidden_field19664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19665.length)].join('')));

}
});

sablono.core.hidden_field19664.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.hidden_field19664.call(null,name__19561__auto__,null);
});

sablono.core.hidden_field19664.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.hidden_field19664.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field19664);

/**
 * Creates a month input field.
 */
sablono.core.month_field19668 = (function sablono$core$month_field19668(var_args){
var args19669 = [];
var len__17919__auto___19736 = arguments.length;
var i__17920__auto___19737 = (0);
while(true){
if((i__17920__auto___19737 < len__17919__auto___19736)){
args19669.push((arguments[i__17920__auto___19737]));

var G__19738 = (i__17920__auto___19737 + (1));
i__17920__auto___19737 = G__19738;
continue;
} else {
}
break;
}

var G__19671 = args19669.length;
switch (G__19671) {
case 1:
return sablono.core.month_field19668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19669.length)].join('')));

}
});

sablono.core.month_field19668.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.month_field19668.call(null,name__19561__auto__,null);
});

sablono.core.month_field19668.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.month_field19668.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field19668);

/**
 * Creates a number input field.
 */
sablono.core.number_field19672 = (function sablono$core$number_field19672(var_args){
var args19673 = [];
var len__17919__auto___19740 = arguments.length;
var i__17920__auto___19741 = (0);
while(true){
if((i__17920__auto___19741 < len__17919__auto___19740)){
args19673.push((arguments[i__17920__auto___19741]));

var G__19742 = (i__17920__auto___19741 + (1));
i__17920__auto___19741 = G__19742;
continue;
} else {
}
break;
}

var G__19675 = args19673.length;
switch (G__19675) {
case 1:
return sablono.core.number_field19672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19673.length)].join('')));

}
});

sablono.core.number_field19672.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.number_field19672.call(null,name__19561__auto__,null);
});

sablono.core.number_field19672.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.number_field19672.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field19672);

/**
 * Creates a password input field.
 */
sablono.core.password_field19676 = (function sablono$core$password_field19676(var_args){
var args19677 = [];
var len__17919__auto___19744 = arguments.length;
var i__17920__auto___19745 = (0);
while(true){
if((i__17920__auto___19745 < len__17919__auto___19744)){
args19677.push((arguments[i__17920__auto___19745]));

var G__19746 = (i__17920__auto___19745 + (1));
i__17920__auto___19745 = G__19746;
continue;
} else {
}
break;
}

var G__19679 = args19677.length;
switch (G__19679) {
case 1:
return sablono.core.password_field19676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19677.length)].join('')));

}
});

sablono.core.password_field19676.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.password_field19676.call(null,name__19561__auto__,null);
});

sablono.core.password_field19676.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.password_field19676.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field19676);

/**
 * Creates a range input field.
 */
sablono.core.range_field19680 = (function sablono$core$range_field19680(var_args){
var args19681 = [];
var len__17919__auto___19748 = arguments.length;
var i__17920__auto___19749 = (0);
while(true){
if((i__17920__auto___19749 < len__17919__auto___19748)){
args19681.push((arguments[i__17920__auto___19749]));

var G__19750 = (i__17920__auto___19749 + (1));
i__17920__auto___19749 = G__19750;
continue;
} else {
}
break;
}

var G__19683 = args19681.length;
switch (G__19683) {
case 1:
return sablono.core.range_field19680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19681.length)].join('')));

}
});

sablono.core.range_field19680.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.range_field19680.call(null,name__19561__auto__,null);
});

sablono.core.range_field19680.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.range_field19680.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field19680);

/**
 * Creates a search input field.
 */
sablono.core.search_field19684 = (function sablono$core$search_field19684(var_args){
var args19685 = [];
var len__17919__auto___19752 = arguments.length;
var i__17920__auto___19753 = (0);
while(true){
if((i__17920__auto___19753 < len__17919__auto___19752)){
args19685.push((arguments[i__17920__auto___19753]));

var G__19754 = (i__17920__auto___19753 + (1));
i__17920__auto___19753 = G__19754;
continue;
} else {
}
break;
}

var G__19687 = args19685.length;
switch (G__19687) {
case 1:
return sablono.core.search_field19684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19685.length)].join('')));

}
});

sablono.core.search_field19684.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.search_field19684.call(null,name__19561__auto__,null);
});

sablono.core.search_field19684.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.search_field19684.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field19684);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19688 = (function sablono$core$tel_field19688(var_args){
var args19689 = [];
var len__17919__auto___19756 = arguments.length;
var i__17920__auto___19757 = (0);
while(true){
if((i__17920__auto___19757 < len__17919__auto___19756)){
args19689.push((arguments[i__17920__auto___19757]));

var G__19758 = (i__17920__auto___19757 + (1));
i__17920__auto___19757 = G__19758;
continue;
} else {
}
break;
}

var G__19691 = args19689.length;
switch (G__19691) {
case 1:
return sablono.core.tel_field19688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19689.length)].join('')));

}
});

sablono.core.tel_field19688.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.tel_field19688.call(null,name__19561__auto__,null);
});

sablono.core.tel_field19688.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.tel_field19688.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field19688);

/**
 * Creates a text input field.
 */
sablono.core.text_field19692 = (function sablono$core$text_field19692(var_args){
var args19693 = [];
var len__17919__auto___19760 = arguments.length;
var i__17920__auto___19761 = (0);
while(true){
if((i__17920__auto___19761 < len__17919__auto___19760)){
args19693.push((arguments[i__17920__auto___19761]));

var G__19762 = (i__17920__auto___19761 + (1));
i__17920__auto___19761 = G__19762;
continue;
} else {
}
break;
}

var G__19695 = args19693.length;
switch (G__19695) {
case 1:
return sablono.core.text_field19692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19693.length)].join('')));

}
});

sablono.core.text_field19692.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.text_field19692.call(null,name__19561__auto__,null);
});

sablono.core.text_field19692.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.text_field19692.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field19692);

/**
 * Creates a time input field.
 */
sablono.core.time_field19696 = (function sablono$core$time_field19696(var_args){
var args19697 = [];
var len__17919__auto___19764 = arguments.length;
var i__17920__auto___19765 = (0);
while(true){
if((i__17920__auto___19765 < len__17919__auto___19764)){
args19697.push((arguments[i__17920__auto___19765]));

var G__19766 = (i__17920__auto___19765 + (1));
i__17920__auto___19765 = G__19766;
continue;
} else {
}
break;
}

var G__19699 = args19697.length;
switch (G__19699) {
case 1:
return sablono.core.time_field19696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19697.length)].join('')));

}
});

sablono.core.time_field19696.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.time_field19696.call(null,name__19561__auto__,null);
});

sablono.core.time_field19696.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.time_field19696.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field19696);

/**
 * Creates a url input field.
 */
sablono.core.url_field19700 = (function sablono$core$url_field19700(var_args){
var args19701 = [];
var len__17919__auto___19768 = arguments.length;
var i__17920__auto___19769 = (0);
while(true){
if((i__17920__auto___19769 < len__17919__auto___19768)){
args19701.push((arguments[i__17920__auto___19769]));

var G__19770 = (i__17920__auto___19769 + (1));
i__17920__auto___19769 = G__19770;
continue;
} else {
}
break;
}

var G__19703 = args19701.length;
switch (G__19703) {
case 1:
return sablono.core.url_field19700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19701.length)].join('')));

}
});

sablono.core.url_field19700.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.url_field19700.call(null,name__19561__auto__,null);
});

sablono.core.url_field19700.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.url_field19700.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field19700);

/**
 * Creates a week input field.
 */
sablono.core.week_field19704 = (function sablono$core$week_field19704(var_args){
var args19705 = [];
var len__17919__auto___19772 = arguments.length;
var i__17920__auto___19773 = (0);
while(true){
if((i__17920__auto___19773 < len__17919__auto___19772)){
args19705.push((arguments[i__17920__auto___19773]));

var G__19774 = (i__17920__auto___19773 + (1));
i__17920__auto___19773 = G__19774;
continue;
} else {
}
break;
}

var G__19707 = args19705.length;
switch (G__19707) {
case 1:
return sablono.core.week_field19704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19705.length)].join('')));

}
});

sablono.core.week_field19704.cljs$core$IFn$_invoke$arity$1 = (function (name__19561__auto__){
return sablono.core.week_field19704.call(null,name__19561__auto__,null);
});

sablono.core.week_field19704.cljs$core$IFn$_invoke$arity$2 = (function (name__19561__auto__,value__19562__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19561__auto__,value__19562__auto__);
});

sablono.core.week_field19704.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field19704);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19776 = (function sablono$core$check_box19776(var_args){
var args19777 = [];
var len__17919__auto___19780 = arguments.length;
var i__17920__auto___19781 = (0);
while(true){
if((i__17920__auto___19781 < len__17919__auto___19780)){
args19777.push((arguments[i__17920__auto___19781]));

var G__19782 = (i__17920__auto___19781 + (1));
i__17920__auto___19781 = G__19782;
continue;
} else {
}
break;
}

var G__19779 = args19777.length;
switch (G__19779) {
case 1:
return sablono.core.check_box19776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19776.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19777.length)].join('')));

}
});

sablono.core.check_box19776.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19776.call(null,name,null);
});

sablono.core.check_box19776.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19776.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box19776.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box19776.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box19776);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19784 = (function sablono$core$radio_button19784(var_args){
var args19785 = [];
var len__17919__auto___19788 = arguments.length;
var i__17920__auto___19789 = (0);
while(true){
if((i__17920__auto___19789 < len__17919__auto___19788)){
args19785.push((arguments[i__17920__auto___19789]));

var G__19790 = (i__17920__auto___19789 + (1));
i__17920__auto___19789 = G__19790;
continue;
} else {
}
break;
}

var G__19787 = args19785.length;
switch (G__19787) {
case 1:
return sablono.core.radio_button19784.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19784.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19784.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19785.length)].join('')));

}
});

sablono.core.radio_button19784.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19784.call(null,group,null);
});

sablono.core.radio_button19784.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19784.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button19784.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button19784.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button19784);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19792 = (function sablono$core$select_options19792(coll){
var iter__17633__auto__ = (function sablono$core$select_options19792_$_iter__19801(s__19802){
return (new cljs.core.LazySeq(null,(function (){
var s__19802__$1 = s__19802;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19802__$1);
if(temp__4425__auto__){
var s__19802__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19802__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__19802__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__19804 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__19803 = (0);
while(true){
if((i__19803 < size__17632__auto__)){
var x = cljs.core._nth.call(null,c__17631__auto__,i__19803);
cljs.core.chunk_append.call(null,b__19804,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19807 = x;
var text = cljs.core.nth.call(null,vec__19807,(0),null);
var val = cljs.core.nth.call(null,vec__19807,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__19807,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options19792.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__19809 = (i__19803 + (1));
i__19803 = G__19809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19804),sablono$core$select_options19792_$_iter__19801.call(null,cljs.core.chunk_rest.call(null,s__19802__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19804),null);
}
} else {
var x = cljs.core.first.call(null,s__19802__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__19808 = x;
var text = cljs.core.nth.call(null,vec__19808,(0),null);
var val = cljs.core.nth.call(null,vec__19808,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__19808,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options19792.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options19792_$_iter__19801.call(null,cljs.core.rest.call(null,s__19802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17633__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options19792);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19810 = (function sablono$core$drop_down19810(var_args){
var args19811 = [];
var len__17919__auto___19814 = arguments.length;
var i__17920__auto___19815 = (0);
while(true){
if((i__17920__auto___19815 < len__17919__auto___19814)){
args19811.push((arguments[i__17920__auto___19815]));

var G__19816 = (i__17920__auto___19815 + (1));
i__17920__auto___19815 = G__19816;
continue;
} else {
}
break;
}

var G__19813 = args19811.length;
switch (G__19813) {
case 2:
return sablono.core.drop_down19810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19810.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19811.length)].join('')));

}
});

sablono.core.drop_down19810.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19810.call(null,name,options,null);
});

sablono.core.drop_down19810.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down19810.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down19810);
/**
 * Creates a text area element.
 */
sablono.core.text_area19818 = (function sablono$core$text_area19818(var_args){
var args19819 = [];
var len__17919__auto___19822 = arguments.length;
var i__17920__auto___19823 = (0);
while(true){
if((i__17920__auto___19823 < len__17919__auto___19822)){
args19819.push((arguments[i__17920__auto___19823]));

var G__19824 = (i__17920__auto___19823 + (1));
i__17920__auto___19823 = G__19824;
continue;
} else {
}
break;
}

var G__19821 = args19819.length;
switch (G__19821) {
case 1:
return sablono.core.text_area19818.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19818.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19819.length)].join('')));

}
});

sablono.core.text_area19818.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19818.call(null,name,null);
});

sablono.core.text_area19818.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area19818.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area19818);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19826 = (function sablono$core$label19826(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label19826);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19827 = (function sablono$core$submit_button19827(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button19827);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19828 = (function sablono$core$reset_button19828(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button19828);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19829 = (function sablono$core$form_to19829(var_args){
var args__17926__auto__ = [];
var len__17919__auto___19834 = arguments.length;
var i__17920__auto___19835 = (0);
while(true){
if((i__17920__auto___19835 < len__17919__auto___19834)){
args__17926__auto__.push((arguments[i__17920__auto___19835]));

var G__19836 = (i__17920__auto___19835 + (1));
i__17920__auto___19835 = G__19836;
continue;
} else {
}
break;
}

var argseq__17927__auto__ = ((((1) < args__17926__auto__.length))?(new cljs.core.IndexedSeq(args__17926__auto__.slice((1)),(0))):null);
return sablono.core.form_to19829.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17927__auto__);
});

sablono.core.form_to19829.cljs$core$IFn$_invoke$arity$variadic = (function (p__19832,body){
var vec__19833 = p__19832;
var method = cljs.core.nth.call(null,vec__19833,(0),null);
var action = cljs.core.nth.call(null,vec__19833,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to19829.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19829.cljs$lang$applyTo = (function (seq19830){
var G__19831 = cljs.core.first.call(null,seq19830);
var seq19830__$1 = cljs.core.next.call(null,seq19830);
return sablono.core.form_to19829.cljs$core$IFn$_invoke$arity$variadic(G__19831,seq19830__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to19829);

//# sourceMappingURL=core.js.map