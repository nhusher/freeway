// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25637_25651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25638_25652 = null;
var count__25639_25653 = (0);
var i__25640_25654 = (0);
while(true){
if((i__25640_25654 < count__25639_25653)){
var f_25655 = cljs.core._nth.call(null,chunk__25638_25652,i__25640_25654);
cljs.core.println.call(null,"  ",f_25655);

var G__25656 = seq__25637_25651;
var G__25657 = chunk__25638_25652;
var G__25658 = count__25639_25653;
var G__25659 = (i__25640_25654 + (1));
seq__25637_25651 = G__25656;
chunk__25638_25652 = G__25657;
count__25639_25653 = G__25658;
i__25640_25654 = G__25659;
continue;
} else {
var temp__4425__auto___25660 = cljs.core.seq.call(null,seq__25637_25651);
if(temp__4425__auto___25660){
var seq__25637_25661__$1 = temp__4425__auto___25660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25637_25661__$1)){
var c__17664__auto___25662 = cljs.core.chunk_first.call(null,seq__25637_25661__$1);
var G__25663 = cljs.core.chunk_rest.call(null,seq__25637_25661__$1);
var G__25664 = c__17664__auto___25662;
var G__25665 = cljs.core.count.call(null,c__17664__auto___25662);
var G__25666 = (0);
seq__25637_25651 = G__25663;
chunk__25638_25652 = G__25664;
count__25639_25653 = G__25665;
i__25640_25654 = G__25666;
continue;
} else {
var f_25667 = cljs.core.first.call(null,seq__25637_25661__$1);
cljs.core.println.call(null,"  ",f_25667);

var G__25668 = cljs.core.next.call(null,seq__25637_25661__$1);
var G__25669 = null;
var G__25670 = (0);
var G__25671 = (0);
seq__25637_25651 = G__25668;
chunk__25638_25652 = G__25669;
count__25639_25653 = G__25670;
i__25640_25654 = G__25671;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25672 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16861__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25672);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25672)))?cljs.core.second.call(null,arglists_25672):arglists_25672));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25641 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25642 = null;
var count__25643 = (0);
var i__25644 = (0);
while(true){
if((i__25644 < count__25643)){
var vec__25645 = cljs.core._nth.call(null,chunk__25642,i__25644);
var name = cljs.core.nth.call(null,vec__25645,(0),null);
var map__25646 = cljs.core.nth.call(null,vec__25645,(1),null);
var map__25646__$1 = ((((!((map__25646 == null)))?((((map__25646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25646):map__25646);
var doc = cljs.core.get.call(null,map__25646__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25646__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25673 = seq__25641;
var G__25674 = chunk__25642;
var G__25675 = count__25643;
var G__25676 = (i__25644 + (1));
seq__25641 = G__25673;
chunk__25642 = G__25674;
count__25643 = G__25675;
i__25644 = G__25676;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25641);
if(temp__4425__auto__){
var seq__25641__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25641__$1)){
var c__17664__auto__ = cljs.core.chunk_first.call(null,seq__25641__$1);
var G__25677 = cljs.core.chunk_rest.call(null,seq__25641__$1);
var G__25678 = c__17664__auto__;
var G__25679 = cljs.core.count.call(null,c__17664__auto__);
var G__25680 = (0);
seq__25641 = G__25677;
chunk__25642 = G__25678;
count__25643 = G__25679;
i__25644 = G__25680;
continue;
} else {
var vec__25648 = cljs.core.first.call(null,seq__25641__$1);
var name = cljs.core.nth.call(null,vec__25648,(0),null);
var map__25649 = cljs.core.nth.call(null,vec__25648,(1),null);
var map__25649__$1 = ((((!((map__25649 == null)))?((((map__25649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25649):map__25649);
var doc = cljs.core.get.call(null,map__25649__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25649__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25681 = cljs.core.next.call(null,seq__25641__$1);
var G__25682 = null;
var G__25683 = (0);
var G__25684 = (0);
seq__25641 = G__25681;
chunk__25642 = G__25682;
count__25643 = G__25683;
i__25644 = G__25684;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map