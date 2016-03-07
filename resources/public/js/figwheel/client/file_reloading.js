// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16861__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16861__auto__){
return or__16861__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16861__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24613_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24613_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24618 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24619 = null;
var count__24620 = (0);
var i__24621 = (0);
while(true){
if((i__24621 < count__24620)){
var n = cljs.core._nth.call(null,chunk__24619,i__24621);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24622 = seq__24618;
var G__24623 = chunk__24619;
var G__24624 = count__24620;
var G__24625 = (i__24621 + (1));
seq__24618 = G__24622;
chunk__24619 = G__24623;
count__24620 = G__24624;
i__24621 = G__24625;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24618);
if(temp__4425__auto__){
var seq__24618__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24618__$1)){
var c__17664__auto__ = cljs.core.chunk_first.call(null,seq__24618__$1);
var G__24626 = cljs.core.chunk_rest.call(null,seq__24618__$1);
var G__24627 = c__17664__auto__;
var G__24628 = cljs.core.count.call(null,c__17664__auto__);
var G__24629 = (0);
seq__24618 = G__24626;
chunk__24619 = G__24627;
count__24620 = G__24628;
i__24621 = G__24629;
continue;
} else {
var n = cljs.core.first.call(null,seq__24618__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24630 = cljs.core.next.call(null,seq__24618__$1);
var G__24631 = null;
var G__24632 = (0);
var G__24633 = (0);
seq__24618 = G__24630;
chunk__24619 = G__24631;
count__24620 = G__24632;
i__24621 = G__24633;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24672_24679 = cljs.core.seq.call(null,deps);
var chunk__24673_24680 = null;
var count__24674_24681 = (0);
var i__24675_24682 = (0);
while(true){
if((i__24675_24682 < count__24674_24681)){
var dep_24683 = cljs.core._nth.call(null,chunk__24673_24680,i__24675_24682);
topo_sort_helper_STAR_.call(null,dep_24683,(depth + (1)),state);

var G__24684 = seq__24672_24679;
var G__24685 = chunk__24673_24680;
var G__24686 = count__24674_24681;
var G__24687 = (i__24675_24682 + (1));
seq__24672_24679 = G__24684;
chunk__24673_24680 = G__24685;
count__24674_24681 = G__24686;
i__24675_24682 = G__24687;
continue;
} else {
var temp__4425__auto___24688 = cljs.core.seq.call(null,seq__24672_24679);
if(temp__4425__auto___24688){
var seq__24672_24689__$1 = temp__4425__auto___24688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24672_24689__$1)){
var c__17664__auto___24690 = cljs.core.chunk_first.call(null,seq__24672_24689__$1);
var G__24691 = cljs.core.chunk_rest.call(null,seq__24672_24689__$1);
var G__24692 = c__17664__auto___24690;
var G__24693 = cljs.core.count.call(null,c__17664__auto___24690);
var G__24694 = (0);
seq__24672_24679 = G__24691;
chunk__24673_24680 = G__24692;
count__24674_24681 = G__24693;
i__24675_24682 = G__24694;
continue;
} else {
var dep_24695 = cljs.core.first.call(null,seq__24672_24689__$1);
topo_sort_helper_STAR_.call(null,dep_24695,(depth + (1)),state);

var G__24696 = cljs.core.next.call(null,seq__24672_24689__$1);
var G__24697 = null;
var G__24698 = (0);
var G__24699 = (0);
seq__24672_24679 = G__24696;
chunk__24673_24680 = G__24697;
count__24674_24681 = G__24698;
i__24675_24682 = G__24699;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24676){
var vec__24678 = p__24676;
var x = cljs.core.nth.call(null,vec__24678,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24678,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24678,x,xs,get_deps__$1){
return (function (p1__24634_SHARP_){
return clojure.set.difference.call(null,p1__24634_SHARP_,x);
});})(vec__24678,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24712 = cljs.core.seq.call(null,provides);
var chunk__24713 = null;
var count__24714 = (0);
var i__24715 = (0);
while(true){
if((i__24715 < count__24714)){
var prov = cljs.core._nth.call(null,chunk__24713,i__24715);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24716_24724 = cljs.core.seq.call(null,requires);
var chunk__24717_24725 = null;
var count__24718_24726 = (0);
var i__24719_24727 = (0);
while(true){
if((i__24719_24727 < count__24718_24726)){
var req_24728 = cljs.core._nth.call(null,chunk__24717_24725,i__24719_24727);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24728,prov);

var G__24729 = seq__24716_24724;
var G__24730 = chunk__24717_24725;
var G__24731 = count__24718_24726;
var G__24732 = (i__24719_24727 + (1));
seq__24716_24724 = G__24729;
chunk__24717_24725 = G__24730;
count__24718_24726 = G__24731;
i__24719_24727 = G__24732;
continue;
} else {
var temp__4425__auto___24733 = cljs.core.seq.call(null,seq__24716_24724);
if(temp__4425__auto___24733){
var seq__24716_24734__$1 = temp__4425__auto___24733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24716_24734__$1)){
var c__17664__auto___24735 = cljs.core.chunk_first.call(null,seq__24716_24734__$1);
var G__24736 = cljs.core.chunk_rest.call(null,seq__24716_24734__$1);
var G__24737 = c__17664__auto___24735;
var G__24738 = cljs.core.count.call(null,c__17664__auto___24735);
var G__24739 = (0);
seq__24716_24724 = G__24736;
chunk__24717_24725 = G__24737;
count__24718_24726 = G__24738;
i__24719_24727 = G__24739;
continue;
} else {
var req_24740 = cljs.core.first.call(null,seq__24716_24734__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24740,prov);

var G__24741 = cljs.core.next.call(null,seq__24716_24734__$1);
var G__24742 = null;
var G__24743 = (0);
var G__24744 = (0);
seq__24716_24724 = G__24741;
chunk__24717_24725 = G__24742;
count__24718_24726 = G__24743;
i__24719_24727 = G__24744;
continue;
}
} else {
}
}
break;
}

var G__24745 = seq__24712;
var G__24746 = chunk__24713;
var G__24747 = count__24714;
var G__24748 = (i__24715 + (1));
seq__24712 = G__24745;
chunk__24713 = G__24746;
count__24714 = G__24747;
i__24715 = G__24748;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24712);
if(temp__4425__auto__){
var seq__24712__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24712__$1)){
var c__17664__auto__ = cljs.core.chunk_first.call(null,seq__24712__$1);
var G__24749 = cljs.core.chunk_rest.call(null,seq__24712__$1);
var G__24750 = c__17664__auto__;
var G__24751 = cljs.core.count.call(null,c__17664__auto__);
var G__24752 = (0);
seq__24712 = G__24749;
chunk__24713 = G__24750;
count__24714 = G__24751;
i__24715 = G__24752;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24712__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24720_24753 = cljs.core.seq.call(null,requires);
var chunk__24721_24754 = null;
var count__24722_24755 = (0);
var i__24723_24756 = (0);
while(true){
if((i__24723_24756 < count__24722_24755)){
var req_24757 = cljs.core._nth.call(null,chunk__24721_24754,i__24723_24756);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24757,prov);

var G__24758 = seq__24720_24753;
var G__24759 = chunk__24721_24754;
var G__24760 = count__24722_24755;
var G__24761 = (i__24723_24756 + (1));
seq__24720_24753 = G__24758;
chunk__24721_24754 = G__24759;
count__24722_24755 = G__24760;
i__24723_24756 = G__24761;
continue;
} else {
var temp__4425__auto___24762__$1 = cljs.core.seq.call(null,seq__24720_24753);
if(temp__4425__auto___24762__$1){
var seq__24720_24763__$1 = temp__4425__auto___24762__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24720_24763__$1)){
var c__17664__auto___24764 = cljs.core.chunk_first.call(null,seq__24720_24763__$1);
var G__24765 = cljs.core.chunk_rest.call(null,seq__24720_24763__$1);
var G__24766 = c__17664__auto___24764;
var G__24767 = cljs.core.count.call(null,c__17664__auto___24764);
var G__24768 = (0);
seq__24720_24753 = G__24765;
chunk__24721_24754 = G__24766;
count__24722_24755 = G__24767;
i__24723_24756 = G__24768;
continue;
} else {
var req_24769 = cljs.core.first.call(null,seq__24720_24763__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24769,prov);

var G__24770 = cljs.core.next.call(null,seq__24720_24763__$1);
var G__24771 = null;
var G__24772 = (0);
var G__24773 = (0);
seq__24720_24753 = G__24770;
chunk__24721_24754 = G__24771;
count__24722_24755 = G__24772;
i__24723_24756 = G__24773;
continue;
}
} else {
}
}
break;
}

var G__24774 = cljs.core.next.call(null,seq__24712__$1);
var G__24775 = null;
var G__24776 = (0);
var G__24777 = (0);
seq__24712 = G__24774;
chunk__24713 = G__24775;
count__24714 = G__24776;
i__24715 = G__24777;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24782_24786 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24783_24787 = null;
var count__24784_24788 = (0);
var i__24785_24789 = (0);
while(true){
if((i__24785_24789 < count__24784_24788)){
var ns_24790 = cljs.core._nth.call(null,chunk__24783_24787,i__24785_24789);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24790);

var G__24791 = seq__24782_24786;
var G__24792 = chunk__24783_24787;
var G__24793 = count__24784_24788;
var G__24794 = (i__24785_24789 + (1));
seq__24782_24786 = G__24791;
chunk__24783_24787 = G__24792;
count__24784_24788 = G__24793;
i__24785_24789 = G__24794;
continue;
} else {
var temp__4425__auto___24795 = cljs.core.seq.call(null,seq__24782_24786);
if(temp__4425__auto___24795){
var seq__24782_24796__$1 = temp__4425__auto___24795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24782_24796__$1)){
var c__17664__auto___24797 = cljs.core.chunk_first.call(null,seq__24782_24796__$1);
var G__24798 = cljs.core.chunk_rest.call(null,seq__24782_24796__$1);
var G__24799 = c__17664__auto___24797;
var G__24800 = cljs.core.count.call(null,c__17664__auto___24797);
var G__24801 = (0);
seq__24782_24786 = G__24798;
chunk__24783_24787 = G__24799;
count__24784_24788 = G__24800;
i__24785_24789 = G__24801;
continue;
} else {
var ns_24802 = cljs.core.first.call(null,seq__24782_24796__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24802);

var G__24803 = cljs.core.next.call(null,seq__24782_24796__$1);
var G__24804 = null;
var G__24805 = (0);
var G__24806 = (0);
seq__24782_24786 = G__24803;
chunk__24783_24787 = G__24804;
count__24784_24788 = G__24805;
i__24785_24789 = G__24806;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16861__auto__ = goog.require__;
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24807__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24808__i = 0, G__24808__a = new Array(arguments.length -  0);
while (G__24808__i < G__24808__a.length) {G__24808__a[G__24808__i] = arguments[G__24808__i + 0]; ++G__24808__i;}
  args = new cljs.core.IndexedSeq(G__24808__a,0);
} 
return G__24807__delegate.call(this,args);};
G__24807.cljs$lang$maxFixedArity = 0;
G__24807.cljs$lang$applyTo = (function (arglist__24809){
var args = cljs.core.seq(arglist__24809);
return G__24807__delegate(args);
});
G__24807.cljs$core$IFn$_invoke$arity$variadic = G__24807__delegate;
return G__24807;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24811 = cljs.core._EQ_;
var expr__24812 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24811.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24812))){
var path_parts = ((function (pred__24811,expr__24812){
return (function (p1__24810_SHARP_){
return clojure.string.split.call(null,p1__24810_SHARP_,/[\/\\]/);
});})(pred__24811,expr__24812))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24811,expr__24812){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24814){if((e24814 instanceof Error)){
var e = e24814;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24814;

}
}})());
});
;})(path_parts,sep,root,pred__24811,expr__24812))
} else {
if(cljs.core.truth_(pred__24811.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24812))){
return ((function (pred__24811,expr__24812){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24811,expr__24812){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24811,expr__24812))
);

return deferred.addErrback(((function (deferred,pred__24811,expr__24812){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24811,expr__24812))
);
});
;})(pred__24811,expr__24812))
} else {
return ((function (pred__24811,expr__24812){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24811,expr__24812))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24815,callback){
var map__24818 = p__24815;
var map__24818__$1 = ((((!((map__24818 == null)))?((((map__24818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24818):map__24818);
var file_msg = map__24818__$1;
var request_url = cljs.core.get.call(null,map__24818__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24818,map__24818__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24818,map__24818__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto__){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto__){
return (function (state_24842){
var state_val_24843 = (state_24842[(1)]);
if((state_val_24843 === (7))){
var inst_24838 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
var statearr_24844_24864 = state_24842__$1;
(statearr_24844_24864[(2)] = inst_24838);

(statearr_24844_24864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (1))){
var state_24842__$1 = state_24842;
var statearr_24845_24865 = state_24842__$1;
(statearr_24845_24865[(2)] = null);

(statearr_24845_24865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (4))){
var inst_24822 = (state_24842[(7)]);
var inst_24822__$1 = (state_24842[(2)]);
var state_24842__$1 = (function (){var statearr_24846 = state_24842;
(statearr_24846[(7)] = inst_24822__$1);

return statearr_24846;
})();
if(cljs.core.truth_(inst_24822__$1)){
var statearr_24847_24866 = state_24842__$1;
(statearr_24847_24866[(1)] = (5));

} else {
var statearr_24848_24867 = state_24842__$1;
(statearr_24848_24867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (6))){
var state_24842__$1 = state_24842;
var statearr_24849_24868 = state_24842__$1;
(statearr_24849_24868[(2)] = null);

(statearr_24849_24868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (3))){
var inst_24840 = (state_24842[(2)]);
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24842__$1,inst_24840);
} else {
if((state_val_24843 === (2))){
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24842__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24843 === (11))){
var inst_24834 = (state_24842[(2)]);
var state_24842__$1 = (function (){var statearr_24850 = state_24842;
(statearr_24850[(8)] = inst_24834);

return statearr_24850;
})();
var statearr_24851_24869 = state_24842__$1;
(statearr_24851_24869[(2)] = null);

(statearr_24851_24869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (9))){
var inst_24826 = (state_24842[(9)]);
var inst_24828 = (state_24842[(10)]);
var inst_24830 = inst_24828.call(null,inst_24826);
var state_24842__$1 = state_24842;
var statearr_24852_24870 = state_24842__$1;
(statearr_24852_24870[(2)] = inst_24830);

(statearr_24852_24870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (5))){
var inst_24822 = (state_24842[(7)]);
var inst_24824 = figwheel.client.file_reloading.blocking_load.call(null,inst_24822);
var state_24842__$1 = state_24842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24842__$1,(8),inst_24824);
} else {
if((state_val_24843 === (10))){
var inst_24826 = (state_24842[(9)]);
var inst_24832 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24826);
var state_24842__$1 = state_24842;
var statearr_24853_24871 = state_24842__$1;
(statearr_24853_24871[(2)] = inst_24832);

(statearr_24853_24871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24843 === (8))){
var inst_24822 = (state_24842[(7)]);
var inst_24828 = (state_24842[(10)]);
var inst_24826 = (state_24842[(2)]);
var inst_24827 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24828__$1 = cljs.core.get.call(null,inst_24827,inst_24822);
var state_24842__$1 = (function (){var statearr_24854 = state_24842;
(statearr_24854[(9)] = inst_24826);

(statearr_24854[(10)] = inst_24828__$1);

return statearr_24854;
})();
if(cljs.core.truth_(inst_24828__$1)){
var statearr_24855_24872 = state_24842__$1;
(statearr_24855_24872[(1)] = (9));

} else {
var statearr_24856_24873 = state_24842__$1;
(statearr_24856_24873[(1)] = (10));

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
});})(c__21670__auto__))
;
return ((function (switch__21558__auto__,c__21670__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21559__auto__ = null;
var figwheel$client$file_reloading$state_machine__21559__auto____0 = (function (){
var statearr_24860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24860[(0)] = figwheel$client$file_reloading$state_machine__21559__auto__);

(statearr_24860[(1)] = (1));

return statearr_24860;
});
var figwheel$client$file_reloading$state_machine__21559__auto____1 = (function (state_24842){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_24842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e24861){if((e24861 instanceof Object)){
var ex__21562__auto__ = e24861;
var statearr_24862_24874 = state_24842;
(statearr_24862_24874[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24875 = state_24842;
state_24842 = G__24875;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21559__auto__ = function(state_24842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21559__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21559__auto____1.call(this,state_24842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21559__auto____0;
figwheel$client$file_reloading$state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21559__auto____1;
return figwheel$client$file_reloading$state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto__))
})();
var state__21672__auto__ = (function (){var statearr_24863 = f__21671__auto__.call(null);
(statearr_24863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto__);

return statearr_24863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto__))
);

return c__21670__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24876,callback){
var map__24879 = p__24876;
var map__24879__$1 = ((((!((map__24879 == null)))?((((map__24879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24879):map__24879);
var file_msg = map__24879__$1;
var namespace = cljs.core.get.call(null,map__24879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24879,map__24879__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24879,map__24879__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24881){
var map__24884 = p__24881;
var map__24884__$1 = ((((!((map__24884 == null)))?((((map__24884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24884):map__24884);
var file_msg = map__24884__$1;
var namespace = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16849__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16849__auto__){
var or__16861__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
var or__16861__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16861__auto____$1)){
return or__16861__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16849__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24886,callback){
var map__24889 = p__24886;
var map__24889__$1 = ((((!((map__24889 == null)))?((((map__24889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24889):map__24889);
var file_msg = map__24889__$1;
var request_url = cljs.core.get.call(null,map__24889__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24889__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21670__auto___24977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___24977,out){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___24977,out){
return (function (state_24959){
var state_val_24960 = (state_24959[(1)]);
if((state_val_24960 === (1))){
var inst_24937 = cljs.core.nth.call(null,files,(0),null);
var inst_24938 = cljs.core.nthnext.call(null,files,(1));
var inst_24939 = files;
var state_24959__$1 = (function (){var statearr_24961 = state_24959;
(statearr_24961[(7)] = inst_24939);

(statearr_24961[(8)] = inst_24938);

(statearr_24961[(9)] = inst_24937);

return statearr_24961;
})();
var statearr_24962_24978 = state_24959__$1;
(statearr_24962_24978[(2)] = null);

(statearr_24962_24978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (2))){
var inst_24939 = (state_24959[(7)]);
var inst_24942 = (state_24959[(10)]);
var inst_24942__$1 = cljs.core.nth.call(null,inst_24939,(0),null);
var inst_24943 = cljs.core.nthnext.call(null,inst_24939,(1));
var inst_24944 = (inst_24942__$1 == null);
var inst_24945 = cljs.core.not.call(null,inst_24944);
var state_24959__$1 = (function (){var statearr_24963 = state_24959;
(statearr_24963[(11)] = inst_24943);

(statearr_24963[(10)] = inst_24942__$1);

return statearr_24963;
})();
if(inst_24945){
var statearr_24964_24979 = state_24959__$1;
(statearr_24964_24979[(1)] = (4));

} else {
var statearr_24965_24980 = state_24959__$1;
(statearr_24965_24980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (3))){
var inst_24957 = (state_24959[(2)]);
var state_24959__$1 = state_24959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24959__$1,inst_24957);
} else {
if((state_val_24960 === (4))){
var inst_24942 = (state_24959[(10)]);
var inst_24947 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24942);
var state_24959__$1 = state_24959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24959__$1,(7),inst_24947);
} else {
if((state_val_24960 === (5))){
var inst_24953 = cljs.core.async.close_BANG_.call(null,out);
var state_24959__$1 = state_24959;
var statearr_24966_24981 = state_24959__$1;
(statearr_24966_24981[(2)] = inst_24953);

(statearr_24966_24981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (6))){
var inst_24955 = (state_24959[(2)]);
var state_24959__$1 = state_24959;
var statearr_24967_24982 = state_24959__$1;
(statearr_24967_24982[(2)] = inst_24955);

(statearr_24967_24982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (7))){
var inst_24943 = (state_24959[(11)]);
var inst_24949 = (state_24959[(2)]);
var inst_24950 = cljs.core.async.put_BANG_.call(null,out,inst_24949);
var inst_24939 = inst_24943;
var state_24959__$1 = (function (){var statearr_24968 = state_24959;
(statearr_24968[(7)] = inst_24939);

(statearr_24968[(12)] = inst_24950);

return statearr_24968;
})();
var statearr_24969_24983 = state_24959__$1;
(statearr_24969_24983[(2)] = null);

(statearr_24969_24983[(1)] = (2));


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
});})(c__21670__auto___24977,out))
;
return ((function (switch__21558__auto__,c__21670__auto___24977,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto____0 = (function (){
var statearr_24973 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24973[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto__);

(statearr_24973[(1)] = (1));

return statearr_24973;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto____1 = (function (state_24959){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_24959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e24974){if((e24974 instanceof Object)){
var ex__21562__auto__ = e24974;
var statearr_24975_24984 = state_24959;
(statearr_24975_24984[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24985 = state_24959;
state_24959 = G__24985;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto__ = function(state_24959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto____1.call(this,state_24959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___24977,out))
})();
var state__21672__auto__ = (function (){var statearr_24976 = f__21671__auto__.call(null);
(statearr_24976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___24977);

return statearr_24976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___24977,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24986,opts){
var map__24990 = p__24986;
var map__24990__$1 = ((((!((map__24990 == null)))?((((map__24990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24990):map__24990);
var eval_body__$1 = cljs.core.get.call(null,map__24990__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24990__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16849__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16849__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16849__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24992){var e = e24992;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24993_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24993_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24998){
var vec__24999 = p__24998;
var k = cljs.core.nth.call(null,vec__24999,(0),null);
var v = cljs.core.nth.call(null,vec__24999,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25000){
var vec__25001 = p__25000;
var k = cljs.core.nth.call(null,vec__25001,(0),null);
var v = cljs.core.nth.call(null,vec__25001,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25005,p__25006){
var map__25253 = p__25005;
var map__25253__$1 = ((((!((map__25253 == null)))?((((map__25253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25253):map__25253);
var opts = map__25253__$1;
var before_jsload = cljs.core.get.call(null,map__25253__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25253__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25253__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25254 = p__25006;
var map__25254__$1 = ((((!((map__25254 == null)))?((((map__25254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25254):map__25254);
var msg = map__25254__$1;
var files = cljs.core.get.call(null,map__25254__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25254__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25254__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25407){
var state_val_25408 = (state_25407[(1)]);
if((state_val_25408 === (7))){
var inst_25269 = (state_25407[(7)]);
var inst_25270 = (state_25407[(8)]);
var inst_25268 = (state_25407[(9)]);
var inst_25271 = (state_25407[(10)]);
var inst_25276 = cljs.core._nth.call(null,inst_25269,inst_25271);
var inst_25277 = figwheel.client.file_reloading.eval_body.call(null,inst_25276,opts);
var inst_25278 = (inst_25271 + (1));
var tmp25409 = inst_25269;
var tmp25410 = inst_25270;
var tmp25411 = inst_25268;
var inst_25268__$1 = tmp25411;
var inst_25269__$1 = tmp25409;
var inst_25270__$1 = tmp25410;
var inst_25271__$1 = inst_25278;
var state_25407__$1 = (function (){var statearr_25412 = state_25407;
(statearr_25412[(7)] = inst_25269__$1);

(statearr_25412[(8)] = inst_25270__$1);

(statearr_25412[(9)] = inst_25268__$1);

(statearr_25412[(10)] = inst_25271__$1);

(statearr_25412[(11)] = inst_25277);

return statearr_25412;
})();
var statearr_25413_25499 = state_25407__$1;
(statearr_25413_25499[(2)] = null);

(statearr_25413_25499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (20))){
var inst_25311 = (state_25407[(12)]);
var inst_25319 = figwheel.client.file_reloading.sort_files.call(null,inst_25311);
var state_25407__$1 = state_25407;
var statearr_25414_25500 = state_25407__$1;
(statearr_25414_25500[(2)] = inst_25319);

(statearr_25414_25500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (27))){
var state_25407__$1 = state_25407;
var statearr_25415_25501 = state_25407__$1;
(statearr_25415_25501[(2)] = null);

(statearr_25415_25501[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (1))){
var inst_25260 = (state_25407[(13)]);
var inst_25257 = before_jsload.call(null,files);
var inst_25258 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25259 = (function (){return ((function (inst_25260,inst_25257,inst_25258,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25002_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25002_SHARP_);
});
;})(inst_25260,inst_25257,inst_25258,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25260__$1 = cljs.core.filter.call(null,inst_25259,files);
var inst_25261 = cljs.core.not_empty.call(null,inst_25260__$1);
var state_25407__$1 = (function (){var statearr_25416 = state_25407;
(statearr_25416[(14)] = inst_25257);

(statearr_25416[(15)] = inst_25258);

(statearr_25416[(13)] = inst_25260__$1);

return statearr_25416;
})();
if(cljs.core.truth_(inst_25261)){
var statearr_25417_25502 = state_25407__$1;
(statearr_25417_25502[(1)] = (2));

} else {
var statearr_25418_25503 = state_25407__$1;
(statearr_25418_25503[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (24))){
var state_25407__$1 = state_25407;
var statearr_25419_25504 = state_25407__$1;
(statearr_25419_25504[(2)] = null);

(statearr_25419_25504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (39))){
var inst_25361 = (state_25407[(16)]);
var state_25407__$1 = state_25407;
var statearr_25420_25505 = state_25407__$1;
(statearr_25420_25505[(2)] = inst_25361);

(statearr_25420_25505[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (46))){
var inst_25402 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25421_25506 = state_25407__$1;
(statearr_25421_25506[(2)] = inst_25402);

(statearr_25421_25506[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (4))){
var inst_25305 = (state_25407[(2)]);
var inst_25306 = cljs.core.List.EMPTY;
var inst_25307 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25306);
var inst_25308 = (function (){return ((function (inst_25305,inst_25306,inst_25307,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25003_SHARP_){
var and__16849__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25003_SHARP_);
if(cljs.core.truth_(and__16849__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25003_SHARP_));
} else {
return and__16849__auto__;
}
});
;})(inst_25305,inst_25306,inst_25307,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25309 = cljs.core.filter.call(null,inst_25308,files);
var inst_25310 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25311 = cljs.core.concat.call(null,inst_25309,inst_25310);
var state_25407__$1 = (function (){var statearr_25422 = state_25407;
(statearr_25422[(17)] = inst_25307);

(statearr_25422[(18)] = inst_25305);

(statearr_25422[(12)] = inst_25311);

return statearr_25422;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25423_25507 = state_25407__$1;
(statearr_25423_25507[(1)] = (16));

} else {
var statearr_25424_25508 = state_25407__$1;
(statearr_25424_25508[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (15))){
var inst_25295 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25425_25509 = state_25407__$1;
(statearr_25425_25509[(2)] = inst_25295);

(statearr_25425_25509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (21))){
var inst_25321 = (state_25407[(19)]);
var inst_25321__$1 = (state_25407[(2)]);
var inst_25322 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25321__$1);
var state_25407__$1 = (function (){var statearr_25426 = state_25407;
(statearr_25426[(19)] = inst_25321__$1);

return statearr_25426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25407__$1,(22),inst_25322);
} else {
if((state_val_25408 === (31))){
var inst_25405 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25407__$1,inst_25405);
} else {
if((state_val_25408 === (32))){
var inst_25361 = (state_25407[(16)]);
var inst_25366 = inst_25361.cljs$lang$protocol_mask$partition0$;
var inst_25367 = (inst_25366 & (64));
var inst_25368 = inst_25361.cljs$core$ISeq$;
var inst_25369 = (inst_25367) || (inst_25368);
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25369)){
var statearr_25427_25510 = state_25407__$1;
(statearr_25427_25510[(1)] = (35));

} else {
var statearr_25428_25511 = state_25407__$1;
(statearr_25428_25511[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (40))){
var inst_25382 = (state_25407[(20)]);
var inst_25381 = (state_25407[(2)]);
var inst_25382__$1 = cljs.core.get.call(null,inst_25381,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25383 = cljs.core.get.call(null,inst_25381,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25384 = cljs.core.not_empty.call(null,inst_25382__$1);
var state_25407__$1 = (function (){var statearr_25429 = state_25407;
(statearr_25429[(21)] = inst_25383);

(statearr_25429[(20)] = inst_25382__$1);

return statearr_25429;
})();
if(cljs.core.truth_(inst_25384)){
var statearr_25430_25512 = state_25407__$1;
(statearr_25430_25512[(1)] = (41));

} else {
var statearr_25431_25513 = state_25407__$1;
(statearr_25431_25513[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (33))){
var state_25407__$1 = state_25407;
var statearr_25432_25514 = state_25407__$1;
(statearr_25432_25514[(2)] = false);

(statearr_25432_25514[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (13))){
var inst_25281 = (state_25407[(22)]);
var inst_25285 = cljs.core.chunk_first.call(null,inst_25281);
var inst_25286 = cljs.core.chunk_rest.call(null,inst_25281);
var inst_25287 = cljs.core.count.call(null,inst_25285);
var inst_25268 = inst_25286;
var inst_25269 = inst_25285;
var inst_25270 = inst_25287;
var inst_25271 = (0);
var state_25407__$1 = (function (){var statearr_25433 = state_25407;
(statearr_25433[(7)] = inst_25269);

(statearr_25433[(8)] = inst_25270);

(statearr_25433[(9)] = inst_25268);

(statearr_25433[(10)] = inst_25271);

return statearr_25433;
})();
var statearr_25434_25515 = state_25407__$1;
(statearr_25434_25515[(2)] = null);

(statearr_25434_25515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (22))){
var inst_25325 = (state_25407[(23)]);
var inst_25324 = (state_25407[(24)]);
var inst_25329 = (state_25407[(25)]);
var inst_25321 = (state_25407[(19)]);
var inst_25324__$1 = (state_25407[(2)]);
var inst_25325__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25324__$1);
var inst_25326 = (function (){var all_files = inst_25321;
var res_SINGLEQUOTE_ = inst_25324__$1;
var res = inst_25325__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25325,inst_25324,inst_25329,inst_25321,inst_25324__$1,inst_25325__$1,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25004_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25004_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25325,inst_25324,inst_25329,inst_25321,inst_25324__$1,inst_25325__$1,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25327 = cljs.core.filter.call(null,inst_25326,inst_25324__$1);
var inst_25328 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25329__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25328);
var inst_25330 = cljs.core.not_empty.call(null,inst_25329__$1);
var state_25407__$1 = (function (){var statearr_25435 = state_25407;
(statearr_25435[(23)] = inst_25325__$1);

(statearr_25435[(24)] = inst_25324__$1);

(statearr_25435[(25)] = inst_25329__$1);

(statearr_25435[(26)] = inst_25327);

return statearr_25435;
})();
if(cljs.core.truth_(inst_25330)){
var statearr_25436_25516 = state_25407__$1;
(statearr_25436_25516[(1)] = (23));

} else {
var statearr_25437_25517 = state_25407__$1;
(statearr_25437_25517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (36))){
var state_25407__$1 = state_25407;
var statearr_25438_25518 = state_25407__$1;
(statearr_25438_25518[(2)] = false);

(statearr_25438_25518[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (41))){
var inst_25382 = (state_25407[(20)]);
var inst_25386 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25387 = cljs.core.map.call(null,inst_25386,inst_25382);
var inst_25388 = cljs.core.pr_str.call(null,inst_25387);
var inst_25389 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25388)].join('');
var inst_25390 = figwheel.client.utils.log.call(null,inst_25389);
var state_25407__$1 = state_25407;
var statearr_25439_25519 = state_25407__$1;
(statearr_25439_25519[(2)] = inst_25390);

(statearr_25439_25519[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (43))){
var inst_25383 = (state_25407[(21)]);
var inst_25393 = (state_25407[(2)]);
var inst_25394 = cljs.core.not_empty.call(null,inst_25383);
var state_25407__$1 = (function (){var statearr_25440 = state_25407;
(statearr_25440[(27)] = inst_25393);

return statearr_25440;
})();
if(cljs.core.truth_(inst_25394)){
var statearr_25441_25520 = state_25407__$1;
(statearr_25441_25520[(1)] = (44));

} else {
var statearr_25442_25521 = state_25407__$1;
(statearr_25442_25521[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (29))){
var inst_25325 = (state_25407[(23)]);
var inst_25324 = (state_25407[(24)]);
var inst_25361 = (state_25407[(16)]);
var inst_25329 = (state_25407[(25)]);
var inst_25327 = (state_25407[(26)]);
var inst_25321 = (state_25407[(19)]);
var inst_25357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25360 = (function (){var all_files = inst_25321;
var res_SINGLEQUOTE_ = inst_25324;
var res = inst_25325;
var files_not_loaded = inst_25327;
var dependencies_that_loaded = inst_25329;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25325,inst_25324,inst_25361,inst_25329,inst_25327,inst_25321,inst_25357,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25359){
var map__25443 = p__25359;
var map__25443__$1 = ((((!((map__25443 == null)))?((((map__25443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25443):map__25443);
var namespace = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25325,inst_25324,inst_25361,inst_25329,inst_25327,inst_25321,inst_25357,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25361__$1 = cljs.core.group_by.call(null,inst_25360,inst_25327);
var inst_25363 = (inst_25361__$1 == null);
var inst_25364 = cljs.core.not.call(null,inst_25363);
var state_25407__$1 = (function (){var statearr_25445 = state_25407;
(statearr_25445[(28)] = inst_25357);

(statearr_25445[(16)] = inst_25361__$1);

return statearr_25445;
})();
if(inst_25364){
var statearr_25446_25522 = state_25407__$1;
(statearr_25446_25522[(1)] = (32));

} else {
var statearr_25447_25523 = state_25407__$1;
(statearr_25447_25523[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (44))){
var inst_25383 = (state_25407[(21)]);
var inst_25396 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25383);
var inst_25397 = cljs.core.pr_str.call(null,inst_25396);
var inst_25398 = [cljs.core.str("not required: "),cljs.core.str(inst_25397)].join('');
var inst_25399 = figwheel.client.utils.log.call(null,inst_25398);
var state_25407__$1 = state_25407;
var statearr_25448_25524 = state_25407__$1;
(statearr_25448_25524[(2)] = inst_25399);

(statearr_25448_25524[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (6))){
var inst_25302 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25449_25525 = state_25407__$1;
(statearr_25449_25525[(2)] = inst_25302);

(statearr_25449_25525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (28))){
var inst_25327 = (state_25407[(26)]);
var inst_25354 = (state_25407[(2)]);
var inst_25355 = cljs.core.not_empty.call(null,inst_25327);
var state_25407__$1 = (function (){var statearr_25450 = state_25407;
(statearr_25450[(29)] = inst_25354);

return statearr_25450;
})();
if(cljs.core.truth_(inst_25355)){
var statearr_25451_25526 = state_25407__$1;
(statearr_25451_25526[(1)] = (29));

} else {
var statearr_25452_25527 = state_25407__$1;
(statearr_25452_25527[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (25))){
var inst_25325 = (state_25407[(23)]);
var inst_25341 = (state_25407[(2)]);
var inst_25342 = cljs.core.not_empty.call(null,inst_25325);
var state_25407__$1 = (function (){var statearr_25453 = state_25407;
(statearr_25453[(30)] = inst_25341);

return statearr_25453;
})();
if(cljs.core.truth_(inst_25342)){
var statearr_25454_25528 = state_25407__$1;
(statearr_25454_25528[(1)] = (26));

} else {
var statearr_25455_25529 = state_25407__$1;
(statearr_25455_25529[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (34))){
var inst_25376 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25376)){
var statearr_25456_25530 = state_25407__$1;
(statearr_25456_25530[(1)] = (38));

} else {
var statearr_25457_25531 = state_25407__$1;
(statearr_25457_25531[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (17))){
var state_25407__$1 = state_25407;
var statearr_25458_25532 = state_25407__$1;
(statearr_25458_25532[(2)] = recompile_dependents);

(statearr_25458_25532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (3))){
var state_25407__$1 = state_25407;
var statearr_25459_25533 = state_25407__$1;
(statearr_25459_25533[(2)] = null);

(statearr_25459_25533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (12))){
var inst_25298 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25460_25534 = state_25407__$1;
(statearr_25460_25534[(2)] = inst_25298);

(statearr_25460_25534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (2))){
var inst_25260 = (state_25407[(13)]);
var inst_25267 = cljs.core.seq.call(null,inst_25260);
var inst_25268 = inst_25267;
var inst_25269 = null;
var inst_25270 = (0);
var inst_25271 = (0);
var state_25407__$1 = (function (){var statearr_25461 = state_25407;
(statearr_25461[(7)] = inst_25269);

(statearr_25461[(8)] = inst_25270);

(statearr_25461[(9)] = inst_25268);

(statearr_25461[(10)] = inst_25271);

return statearr_25461;
})();
var statearr_25462_25535 = state_25407__$1;
(statearr_25462_25535[(2)] = null);

(statearr_25462_25535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (23))){
var inst_25325 = (state_25407[(23)]);
var inst_25324 = (state_25407[(24)]);
var inst_25329 = (state_25407[(25)]);
var inst_25327 = (state_25407[(26)]);
var inst_25321 = (state_25407[(19)]);
var inst_25332 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25334 = (function (){var all_files = inst_25321;
var res_SINGLEQUOTE_ = inst_25324;
var res = inst_25325;
var files_not_loaded = inst_25327;
var dependencies_that_loaded = inst_25329;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25325,inst_25324,inst_25329,inst_25327,inst_25321,inst_25332,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25333){
var map__25463 = p__25333;
var map__25463__$1 = ((((!((map__25463 == null)))?((((map__25463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25463):map__25463);
var request_url = cljs.core.get.call(null,map__25463__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25325,inst_25324,inst_25329,inst_25327,inst_25321,inst_25332,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25335 = cljs.core.reverse.call(null,inst_25329);
var inst_25336 = cljs.core.map.call(null,inst_25334,inst_25335);
var inst_25337 = cljs.core.pr_str.call(null,inst_25336);
var inst_25338 = figwheel.client.utils.log.call(null,inst_25337);
var state_25407__$1 = (function (){var statearr_25465 = state_25407;
(statearr_25465[(31)] = inst_25332);

return statearr_25465;
})();
var statearr_25466_25536 = state_25407__$1;
(statearr_25466_25536[(2)] = inst_25338);

(statearr_25466_25536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (35))){
var state_25407__$1 = state_25407;
var statearr_25467_25537 = state_25407__$1;
(statearr_25467_25537[(2)] = true);

(statearr_25467_25537[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (19))){
var inst_25311 = (state_25407[(12)]);
var inst_25317 = figwheel.client.file_reloading.expand_files.call(null,inst_25311);
var state_25407__$1 = state_25407;
var statearr_25468_25538 = state_25407__$1;
(statearr_25468_25538[(2)] = inst_25317);

(statearr_25468_25538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (11))){
var state_25407__$1 = state_25407;
var statearr_25469_25539 = state_25407__$1;
(statearr_25469_25539[(2)] = null);

(statearr_25469_25539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (9))){
var inst_25300 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25470_25540 = state_25407__$1;
(statearr_25470_25540[(2)] = inst_25300);

(statearr_25470_25540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (5))){
var inst_25270 = (state_25407[(8)]);
var inst_25271 = (state_25407[(10)]);
var inst_25273 = (inst_25271 < inst_25270);
var inst_25274 = inst_25273;
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25274)){
var statearr_25471_25541 = state_25407__$1;
(statearr_25471_25541[(1)] = (7));

} else {
var statearr_25472_25542 = state_25407__$1;
(statearr_25472_25542[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (14))){
var inst_25281 = (state_25407[(22)]);
var inst_25290 = cljs.core.first.call(null,inst_25281);
var inst_25291 = figwheel.client.file_reloading.eval_body.call(null,inst_25290,opts);
var inst_25292 = cljs.core.next.call(null,inst_25281);
var inst_25268 = inst_25292;
var inst_25269 = null;
var inst_25270 = (0);
var inst_25271 = (0);
var state_25407__$1 = (function (){var statearr_25473 = state_25407;
(statearr_25473[(7)] = inst_25269);

(statearr_25473[(8)] = inst_25270);

(statearr_25473[(9)] = inst_25268);

(statearr_25473[(10)] = inst_25271);

(statearr_25473[(32)] = inst_25291);

return statearr_25473;
})();
var statearr_25474_25543 = state_25407__$1;
(statearr_25474_25543[(2)] = null);

(statearr_25474_25543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (45))){
var state_25407__$1 = state_25407;
var statearr_25475_25544 = state_25407__$1;
(statearr_25475_25544[(2)] = null);

(statearr_25475_25544[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (26))){
var inst_25325 = (state_25407[(23)]);
var inst_25324 = (state_25407[(24)]);
var inst_25329 = (state_25407[(25)]);
var inst_25327 = (state_25407[(26)]);
var inst_25321 = (state_25407[(19)]);
var inst_25344 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25346 = (function (){var all_files = inst_25321;
var res_SINGLEQUOTE_ = inst_25324;
var res = inst_25325;
var files_not_loaded = inst_25327;
var dependencies_that_loaded = inst_25329;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25325,inst_25324,inst_25329,inst_25327,inst_25321,inst_25344,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25345){
var map__25476 = p__25345;
var map__25476__$1 = ((((!((map__25476 == null)))?((((map__25476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25476):map__25476);
var namespace = cljs.core.get.call(null,map__25476__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25325,inst_25324,inst_25329,inst_25327,inst_25321,inst_25344,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25347 = cljs.core.map.call(null,inst_25346,inst_25325);
var inst_25348 = cljs.core.pr_str.call(null,inst_25347);
var inst_25349 = figwheel.client.utils.log.call(null,inst_25348);
var inst_25350 = (function (){var all_files = inst_25321;
var res_SINGLEQUOTE_ = inst_25324;
var res = inst_25325;
var files_not_loaded = inst_25327;
var dependencies_that_loaded = inst_25329;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25325,inst_25324,inst_25329,inst_25327,inst_25321,inst_25344,inst_25346,inst_25347,inst_25348,inst_25349,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25325,inst_25324,inst_25329,inst_25327,inst_25321,inst_25344,inst_25346,inst_25347,inst_25348,inst_25349,state_val_25408,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25351 = setTimeout(inst_25350,(10));
var state_25407__$1 = (function (){var statearr_25478 = state_25407;
(statearr_25478[(33)] = inst_25344);

(statearr_25478[(34)] = inst_25349);

return statearr_25478;
})();
var statearr_25479_25545 = state_25407__$1;
(statearr_25479_25545[(2)] = inst_25351);

(statearr_25479_25545[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (16))){
var state_25407__$1 = state_25407;
var statearr_25480_25546 = state_25407__$1;
(statearr_25480_25546[(2)] = reload_dependents);

(statearr_25480_25546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (38))){
var inst_25361 = (state_25407[(16)]);
var inst_25378 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25361);
var state_25407__$1 = state_25407;
var statearr_25481_25547 = state_25407__$1;
(statearr_25481_25547[(2)] = inst_25378);

(statearr_25481_25547[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (30))){
var state_25407__$1 = state_25407;
var statearr_25482_25548 = state_25407__$1;
(statearr_25482_25548[(2)] = null);

(statearr_25482_25548[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (10))){
var inst_25281 = (state_25407[(22)]);
var inst_25283 = cljs.core.chunked_seq_QMARK_.call(null,inst_25281);
var state_25407__$1 = state_25407;
if(inst_25283){
var statearr_25483_25549 = state_25407__$1;
(statearr_25483_25549[(1)] = (13));

} else {
var statearr_25484_25550 = state_25407__$1;
(statearr_25484_25550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (18))){
var inst_25315 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
if(cljs.core.truth_(inst_25315)){
var statearr_25485_25551 = state_25407__$1;
(statearr_25485_25551[(1)] = (19));

} else {
var statearr_25486_25552 = state_25407__$1;
(statearr_25486_25552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (42))){
var state_25407__$1 = state_25407;
var statearr_25487_25553 = state_25407__$1;
(statearr_25487_25553[(2)] = null);

(statearr_25487_25553[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (37))){
var inst_25373 = (state_25407[(2)]);
var state_25407__$1 = state_25407;
var statearr_25488_25554 = state_25407__$1;
(statearr_25488_25554[(2)] = inst_25373);

(statearr_25488_25554[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25408 === (8))){
var inst_25268 = (state_25407[(9)]);
var inst_25281 = (state_25407[(22)]);
var inst_25281__$1 = cljs.core.seq.call(null,inst_25268);
var state_25407__$1 = (function (){var statearr_25489 = state_25407;
(statearr_25489[(22)] = inst_25281__$1);

return statearr_25489;
})();
if(inst_25281__$1){
var statearr_25490_25555 = state_25407__$1;
(statearr_25490_25555[(1)] = (10));

} else {
var statearr_25491_25556 = state_25407__$1;
(statearr_25491_25556[(1)] = (11));

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
}
});})(c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21558__auto__,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto____0 = (function (){
var statearr_25495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25495[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto__);

(statearr_25495[(1)] = (1));

return statearr_25495;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto____1 = (function (state_25407){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_25407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e25496){if((e25496 instanceof Object)){
var ex__21562__auto__ = e25496;
var statearr_25497_25557 = state_25407;
(statearr_25497_25557[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25558 = state_25407;
state_25407 = G__25558;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto__ = function(state_25407){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto____1.call(this,state_25407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21672__auto__ = (function (){var statearr_25498 = f__21671__auto__.call(null);
(statearr_25498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto__);

return statearr_25498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto__,map__25253,map__25253__$1,opts,before_jsload,on_jsload,reload_dependents,map__25254,map__25254__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21670__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25561,link){
var map__25564 = p__25561;
var map__25564__$1 = ((((!((map__25564 == null)))?((((map__25564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25564):map__25564);
var file = cljs.core.get.call(null,map__25564__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25564,map__25564__$1,file){
return (function (p1__25559_SHARP_,p2__25560_SHARP_){
if(cljs.core._EQ_.call(null,p1__25559_SHARP_,p2__25560_SHARP_)){
return p1__25559_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25564,map__25564__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25570){
var map__25571 = p__25570;
var map__25571__$1 = ((((!((map__25571 == null)))?((((map__25571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25571):map__25571);
var match_length = cljs.core.get.call(null,map__25571__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25571__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25566_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25566_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25573 = [];
var len__17919__auto___25576 = arguments.length;
var i__17920__auto___25577 = (0);
while(true){
if((i__17920__auto___25577 < len__17919__auto___25576)){
args25573.push((arguments[i__17920__auto___25577]));

var G__25578 = (i__17920__auto___25577 + (1));
i__17920__auto___25577 = G__25578;
continue;
} else {
}
break;
}

var G__25575 = args25573.length;
switch (G__25575) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25573.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25580_SHARP_,p2__25581_SHARP_){
return cljs.core.assoc.call(null,p1__25580_SHARP_,cljs.core.get.call(null,p2__25581_SHARP_,key),p2__25581_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25582){
var map__25585 = p__25582;
var map__25585__$1 = ((((!((map__25585 == null)))?((((map__25585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25585):map__25585);
var f_data = map__25585__$1;
var file = cljs.core.get.call(null,map__25585__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25587,files_msg){
var map__25594 = p__25587;
var map__25594__$1 = ((((!((map__25594 == null)))?((((map__25594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25594):map__25594);
var opts = map__25594__$1;
var on_cssload = cljs.core.get.call(null,map__25594__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25596_25600 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25597_25601 = null;
var count__25598_25602 = (0);
var i__25599_25603 = (0);
while(true){
if((i__25599_25603 < count__25598_25602)){
var f_25604 = cljs.core._nth.call(null,chunk__25597_25601,i__25599_25603);
figwheel.client.file_reloading.reload_css_file.call(null,f_25604);

var G__25605 = seq__25596_25600;
var G__25606 = chunk__25597_25601;
var G__25607 = count__25598_25602;
var G__25608 = (i__25599_25603 + (1));
seq__25596_25600 = G__25605;
chunk__25597_25601 = G__25606;
count__25598_25602 = G__25607;
i__25599_25603 = G__25608;
continue;
} else {
var temp__4425__auto___25609 = cljs.core.seq.call(null,seq__25596_25600);
if(temp__4425__auto___25609){
var seq__25596_25610__$1 = temp__4425__auto___25609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25596_25610__$1)){
var c__17664__auto___25611 = cljs.core.chunk_first.call(null,seq__25596_25610__$1);
var G__25612 = cljs.core.chunk_rest.call(null,seq__25596_25610__$1);
var G__25613 = c__17664__auto___25611;
var G__25614 = cljs.core.count.call(null,c__17664__auto___25611);
var G__25615 = (0);
seq__25596_25600 = G__25612;
chunk__25597_25601 = G__25613;
count__25598_25602 = G__25614;
i__25599_25603 = G__25615;
continue;
} else {
var f_25616 = cljs.core.first.call(null,seq__25596_25610__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25616);

var G__25617 = cljs.core.next.call(null,seq__25596_25610__$1);
var G__25618 = null;
var G__25619 = (0);
var G__25620 = (0);
seq__25596_25600 = G__25617;
chunk__25597_25601 = G__25618;
count__25598_25602 = G__25619;
i__25599_25603 = G__25620;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25594,map__25594__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25594,map__25594__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map