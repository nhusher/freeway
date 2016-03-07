// Compiled by ClojureScript 1.7.170 {}
goog.provide('freeway.state');
goog.require('cljs.core');
goog.require('om.core');
goog.require('freeway.payments');
if(typeof freeway.state.app_state !== 'undefined'){
} else {
freeway.state.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"price","price",22129180),(16900),new cljs.core.Keyword(null,"fees","fees",-2100264520),(0),new cljs.core.Keyword(null,"sales-tax","sales-tax",385685633),(6),new cljs.core.Keyword(null,"trade-in","trade-in",-1833684484),(0),new cljs.core.Keyword(null,"downpayments","downpayments",-222736331),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(2000),(3000)], null),new cljs.core.Keyword(null,"terms","terms",-1556977978),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(36),3.1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(48),4.1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),5.1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(72),6.1], null)], null)], null));
}

//# sourceMappingURL=state.js.map