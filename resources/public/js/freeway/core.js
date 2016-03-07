// Compiled by ClojureScript 1.7.170 {}
goog.provide('freeway.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.core');
goog.require('freeway.payments');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
freeway.core.get_value = (function freeway$core$get_value(e){
return e.target.value;
});
freeway.core._BAR_$ = (function freeway$core$_BAR_$(v){
return [cljs.core.str("$"),cljs.core.str(Math.round(v).toLocaleString({"style": "currency"}))].join('');
});
freeway.core.num = (function freeway$core$num(v){
if(cljs.core.truth_(isNaN(parseFloat(v)))){
return (0);
} else {
return parseFloat(v);
}
});
if(typeof freeway.core.app_state !== 'undefined'){
} else {
freeway.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"price","price",22129180),(16900),new cljs.core.Keyword(null,"fees","fees",-2100264520),(0),new cljs.core.Keyword(null,"sales-tax","sales-tax",385685633),(6),new cljs.core.Keyword(null,"trade-in","trade-in",-1833684484),(0),new cljs.core.Keyword(null,"downpayments","downpayments",-222736331),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(2000),(3000)], null),new cljs.core.Keyword(null,"terms","terms",-1556977978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),3.1], null)], null)], null));
}
freeway.core.button = (function freeway$core$button(on_click,text){
return React.createElement("button",{"type": "button", "onClick": on_click, "className": "fw-button"},sablono.interpreter.interpret.call(null,text));
});
freeway.core.numeric_field = (function freeway$core$numeric_field(value,step,on_change){
return sablono.interpreter.create_element.call(null,"input",{"type": "number", "value": value, "min": (0), "step": step, "onChange": cljs.core.comp.call(null,on_change,freeway.core.get_value), "className": "fw-field"});
});
freeway.core.add_term_BANG_ = (function freeway$core$add_term_BANG_(terms){
var vec__41339 = cljs.core.last.call(null,terms);
var months = cljs.core.nth.call(null,vec__41339,(0),null);
var apr = cljs.core.nth.call(null,vec__41339,(1),null);
return cljs.core.conj.call(null,terms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(months + (12)),(apr + (1))], null));
});
freeway.core.worksheet_global_field = (function freeway$core$worksheet_global_field(label,value,step,on_change){
return React.createElement("label",{"className": "fw-worksheet-field"},(function (){var attrs41341 = label;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs41341))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fw-label"], null)], null),attrs41341)):{"className": "fw-label"}),((cljs.core.map_QMARK_.call(null,attrs41341))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41341)], null)));
})(),sablono.interpreter.interpret.call(null,freeway.core.numeric_field.call(null,value,step,on_change)));
});
freeway.core.worksheet_globals = (function freeway$core$worksheet_globals(props){
var map__41351 = props;
var map__41351__$1 = ((((!((map__41351 == null)))?((((map__41351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41351):map__41351);
var price = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"price","price",22129180));
var fees = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"fees","fees",-2100264520));
var sales_tax = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"sales-tax","sales-tax",385685633));
var trade_in = cljs.core.get.call(null,map__41351__$1,new cljs.core.Keyword(null,"trade-in","trade-in",-1833684484));
var set_value = ((function (map__41351,map__41351__$1,price,fees,sales_tax,trade_in){
return (function (keys,value){
return om.core.update_BANG_.call(null,props,keys,freeway.core.num.call(null,value));
});})(map__41351,map__41351__$1,price,fees,sales_tax,trade_in))
;
var attrs41353 = freeway.core.worksheet_global_field.call(null,"Price",price,(100),cljs.core.partial.call(null,set_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"price","price",22129180)], null)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41353))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fw-worksheet-globals"], null)], null),attrs41353)):{"className": "fw-worksheet-globals"}),((cljs.core.map_QMARK_.call(null,attrs41353))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,freeway.core.worksheet_global_field.call(null,"Tax (%)",sales_tax,0.1,cljs.core.partial.call(null,set_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sales-tax","sales-tax",385685633)], null)))),sablono.interpreter.interpret.call(null,freeway.core.worksheet_global_field.call(null,"Fees",fees,(10),cljs.core.partial.call(null,set_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fees","fees",-2100264520)], null)))),sablono.interpreter.interpret.call(null,freeway.core.worksheet_global_field.call(null,"Trade-in",trade_in,(100),cljs.core.partial.call(null,set_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trade-in","trade-in",-1833684484)], null)))),React.createElement("div",{"className": "financed-cost"},React.createElement("div",null,"Financed cost"),(function (){var attrs41356 = freeway.core._BAR_$.call(null,freeway.payments.cost_SINGLEQUOTE_.call(null,price,sales_tax,fees,trade_in));
return cljs.core.apply.call(null,React.createElement,"strong",((cljs.core.map_QMARK_.call(null,attrs41356))?sablono.interpreter.attributes.call(null,attrs41356):null),((cljs.core.map_QMARK_.call(null,attrs41356))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41356)], null)));
})())], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41353),sablono.interpreter.interpret.call(null,freeway.core.worksheet_global_field.call(null,"Tax (%)",sales_tax,0.1,cljs.core.partial.call(null,set_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sales-tax","sales-tax",385685633)], null)))),sablono.interpreter.interpret.call(null,freeway.core.worksheet_global_field.call(null,"Fees",fees,(10),cljs.core.partial.call(null,set_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fees","fees",-2100264520)], null)))),sablono.interpreter.interpret.call(null,freeway.core.worksheet_global_field.call(null,"Trade-in",trade_in,(100),cljs.core.partial.call(null,set_value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trade-in","trade-in",-1833684484)], null)))),React.createElement("div",{"className": "financed-cost"},React.createElement("div",null,"Financed cost"),(function (){var attrs41359 = freeway.core._BAR_$.call(null,freeway.payments.cost_SINGLEQUOTE_.call(null,price,sales_tax,fees,trade_in));
return cljs.core.apply.call(null,React.createElement,"strong",((cljs.core.map_QMARK_.call(null,attrs41359))?sablono.interpreter.attributes.call(null,attrs41359):null),((cljs.core.map_QMARK_.call(null,attrs41359))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41359)], null)));
})())], null)));
});
freeway.core.worksheet_header = (function freeway$core$worksheet_header(p__41363){
var map__41377 = p__41363;
var map__41377__$1 = ((((!((map__41377 == null)))?((((map__41377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41377):map__41377);
var props = map__41377__$1;
var downpayments = cljs.core.get.call(null,map__41377__$1,new cljs.core.Keyword(null,"downpayments","downpayments",-222736331));
return React.createElement("thead",{"className": "fw-payment-header"},React.createElement("tr",null,React.createElement("th",null),cljs.core.into_array.call(null,(function (){var iter__17633__auto__ = ((function (map__41377,map__41377__$1,props,downpayments){
return (function freeway$core$worksheet_header_$_iter__41382(s__41383){
return (new cljs.core.LazySeq(null,((function (map__41377,map__41377__$1,props,downpayments){
return (function (){
var s__41383__$1 = s__41383;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41383__$1);
if(temp__4425__auto__){
var s__41383__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41383__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__41383__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__41385 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__41384 = (0);
while(true){
if((i__41384 < size__17632__auto__)){
var vec__41388 = cljs.core._nth.call(null,c__17631__auto__,i__41384);
var d = cljs.core.nth.call(null,vec__41388,(0),null);
var i = cljs.core.nth.call(null,vec__41388,(1),null);
cljs.core.chunk_append.call(null,b__41385,(function (){var attrs41381 = freeway.core.numeric_field.call(null,d,(100),((function (i__41384,vec__41388,d,i,c__17631__auto__,size__17632__auto__,b__41385,s__41383__$2,temp__4425__auto__,map__41377,map__41377__$1,props,downpayments){
return (function (p1__41362_SHARP_){
return om.core.update_BANG_.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"downpayments","downpayments",-222736331),i], null),p1__41362_SHARP_);
});})(i__41384,vec__41388,d,i,c__17631__auto__,size__17632__auto__,b__41385,s__41383__$2,temp__4425__auto__,map__41377,map__41377__$1,props,downpayments))
);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs41381))?sablono.interpreter.attributes.call(null,attrs41381):null),((cljs.core.map_QMARK_.call(null,attrs41381))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41381)], null)));
})());

var G__41390 = (i__41384 + (1));
i__41384 = G__41390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41385),freeway$core$worksheet_header_$_iter__41382.call(null,cljs.core.chunk_rest.call(null,s__41383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41385),null);
}
} else {
var vec__41389 = cljs.core.first.call(null,s__41383__$2);
var d = cljs.core.nth.call(null,vec__41389,(0),null);
var i = cljs.core.nth.call(null,vec__41389,(1),null);
return cljs.core.cons.call(null,(function (){var attrs41381 = freeway.core.numeric_field.call(null,d,(100),((function (vec__41389,d,i,s__41383__$2,temp__4425__auto__,map__41377,map__41377__$1,props,downpayments){
return (function (p1__41362_SHARP_){
return om.core.update_BANG_.call(null,props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"downpayments","downpayments",-222736331),i], null),p1__41362_SHARP_);
});})(vec__41389,d,i,s__41383__$2,temp__4425__auto__,map__41377,map__41377__$1,props,downpayments))
);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs41381))?sablono.interpreter.attributes.call(null,attrs41381):null),((cljs.core.map_QMARK_.call(null,attrs41381))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41381)], null)));
})(),freeway$core$worksheet_header_$_iter__41382.call(null,cljs.core.rest.call(null,s__41383__$2)));
}
} else {
return null;
}
break;
}
});})(map__41377,map__41377__$1,props,downpayments))
,null,null));
});})(map__41377,map__41377__$1,props,downpayments))
;
return iter__17633__auto__.call(null,cljs.core.map.call(null,((function (iter__17633__auto__,map__41377,map__41377__$1,props,downpayments){
return (function (p1__41360_SHARP_,p2__41361_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__41360_SHARP_,p2__41361_SHARP_],null));
});})(iter__17633__auto__,map__41377,map__41377__$1,props,downpayments))
,downpayments,cljs.core.range.call(null)));
})())));
});
freeway.core.payment_cell = (function freeway$core$payment_cell(props){
var map__41398 = props;
var map__41398__$1 = ((((!((map__41398 == null)))?((((map__41398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41398):map__41398);
var principal = cljs.core.get.call(null,map__41398__$1,new cljs.core.Keyword(null,"principal","principal",1371406427));
var apr = cljs.core.get.call(null,map__41398__$1,new cljs.core.Keyword(null,"apr","apr",-360681431));
var payments = cljs.core.get.call(null,map__41398__$1,new cljs.core.Keyword(null,"payments","payments",-1324138047));
var payment = freeway.payments.monthly_payment_SINGLEQUOTE_.call(null,principal,apr,payments);
var attrs41400 = freeway.core._BAR_$.call(null,payment);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41400))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fw-payment-cell"], null)], null),attrs41400)):{"className": "fw-payment-cell"}),((cljs.core.map_QMARK_.call(null,attrs41400))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("small",null,"/mo")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41400),React.createElement("small",null,"/mo")], null)));
});
freeway.core.worksheet_row = (function freeway$core$worksheet_row(props){
var map__41419 = props;
var map__41419__$1 = ((((!((map__41419 == null)))?((((map__41419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41419):map__41419);
var term = cljs.core.get.call(null,map__41419__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
var principal = cljs.core.get.call(null,map__41419__$1,new cljs.core.Keyword(null,"principal","principal",1371406427));
var payment_data = cljs.core.get.call(null,map__41419__$1,new cljs.core.Keyword(null,"payment-data","payment-data",-2127866334));
var index = cljs.core.get.call(null,map__41419__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var map__41420 = payment_data;
var map__41420__$1 = ((((!((map__41420 == null)))?((((map__41420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41420):map__41420);
var downpayments = cljs.core.get.call(null,map__41420__$1,new cljs.core.Keyword(null,"downpayments","downpayments",-222736331));
var vec__41421 = term;
var months = cljs.core.nth.call(null,vec__41421,(0),null);
var interest = cljs.core.nth.call(null,vec__41421,(1),null);
return React.createElement("tr",null,React.createElement("td",{"className": "fw-term-column"},React.createElement("div",{"className": "fw-term-widget"},(function (){var attrs41425 = freeway.core.numeric_field.call(null,months,(1),((function (map__41419,map__41419__$1,term,principal,payment_data,index,map__41420,map__41420__$1,downpayments,vec__41421,months,interest){
return (function (p1__41405_SHARP_){
return om.core.update_BANG_.call(null,payment_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terms","terms",-1556977978),index,(0)], null),freeway.core.num.call(null,p1__41405_SHARP_));
});})(map__41419,map__41419__$1,term,principal,payment_data,index,map__41420,map__41420__$1,downpayments,vec__41421,months,interest))
);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41425))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fw-months"], null)], null),attrs41425)):{"className": "fw-months"}),((cljs.core.map_QMARK_.call(null,attrs41425))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" months"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41425)," months"], null)));
})(),(function (){var attrs41426 = freeway.core.numeric_field.call(null,interest,0.1,((function (map__41419,map__41419__$1,term,principal,payment_data,index,map__41420,map__41420__$1,downpayments,vec__41421,months,interest){
return (function (p1__41406_SHARP_){
return om.core.update_BANG_.call(null,payment_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terms","terms",-1556977978),index,(1)], null),freeway.core.num.call(null,p1__41406_SHARP_));
});})(map__41419,map__41419__$1,term,principal,payment_data,index,map__41420,map__41420__$1,downpayments,vec__41421,months,interest))
);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41426))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fw-apr"], null)], null),attrs41426)):{"className": "fw-apr"}),((cljs.core.map_QMARK_.call(null,attrs41426))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" %apr"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41426)," %apr"], null)));
})())),cljs.core.into_array.call(null,(function (){var iter__17633__auto__ = ((function (map__41419,map__41419__$1,term,principal,payment_data,index,map__41420,map__41420__$1,downpayments,vec__41421,months,interest){
return (function freeway$core$worksheet_row_$_iter__41427(s__41428){
return (new cljs.core.LazySeq(null,((function (map__41419,map__41419__$1,term,principal,payment_data,index,map__41420,map__41420__$1,downpayments,vec__41421,months,interest){
return (function (){
var s__41428__$1 = s__41428;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41428__$1);
if(temp__4425__auto__){
var s__41428__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41428__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__41428__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__41430 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__41429 = (0);
while(true){
if((i__41429 < size__17632__auto__)){
var d = cljs.core._nth.call(null,c__17631__auto__,i__41429);
cljs.core.chunk_append.call(null,b__41430,(function (){var attrs41424 = freeway.core.payment_cell.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),payment_data,new cljs.core.Keyword(null,"principal","principal",1371406427),(principal - d),new cljs.core.Keyword(null,"apr","apr",-360681431),(interest / (100)),new cljs.core.Keyword(null,"payments","payments",-1324138047),months], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs41424))?sablono.interpreter.attributes.call(null,attrs41424):null),((cljs.core.map_QMARK_.call(null,attrs41424))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41424)], null)));
})());

var G__41431 = (i__41429 + (1));
i__41429 = G__41431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41430),freeway$core$worksheet_row_$_iter__41427.call(null,cljs.core.chunk_rest.call(null,s__41428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41430),null);
}
} else {
var d = cljs.core.first.call(null,s__41428__$2);
return cljs.core.cons.call(null,(function (){var attrs41424 = freeway.core.payment_cell.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),payment_data,new cljs.core.Keyword(null,"principal","principal",1371406427),(principal - d),new cljs.core.Keyword(null,"apr","apr",-360681431),(interest / (100)),new cljs.core.Keyword(null,"payments","payments",-1324138047),months], null));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs41424))?sablono.interpreter.attributes.call(null,attrs41424):null),((cljs.core.map_QMARK_.call(null,attrs41424))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41424)], null)));
})(),freeway$core$worksheet_row_$_iter__41427.call(null,cljs.core.rest.call(null,s__41428__$2)));
}
} else {
return null;
}
break;
}
});})(map__41419,map__41419__$1,term,principal,payment_data,index,map__41420,map__41420__$1,downpayments,vec__41421,months,interest))
,null,null));
});})(map__41419,map__41419__$1,term,principal,payment_data,index,map__41420,map__41420__$1,downpayments,vec__41421,months,interest))
;
return iter__17633__auto__.call(null,downpayments);
})()));
});
freeway.core.payment_worksheet = (function freeway$core$payment_worksheet(props){
var map__41455 = props;
var map__41455__$1 = ((((!((map__41455 == null)))?((((map__41455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41455):map__41455);
var terms = cljs.core.get.call(null,map__41455__$1,new cljs.core.Keyword(null,"terms","terms",-1556977978));
var price = cljs.core.get.call(null,map__41455__$1,new cljs.core.Keyword(null,"price","price",22129180));
var fees = cljs.core.get.call(null,map__41455__$1,new cljs.core.Keyword(null,"fees","fees",-2100264520));
var sales_tax = cljs.core.get.call(null,map__41455__$1,new cljs.core.Keyword(null,"sales-tax","sales-tax",385685633));
var trade_in = cljs.core.get.call(null,map__41455__$1,new cljs.core.Keyword(null,"trade-in","trade-in",-1833684484));
var principal = freeway.payments.cost.call(null,price,(sales_tax / (100)),fees,trade_in);
return React.createElement("div",{"className": "fw-payment-worksheet"},(function (){var attrs41457 = freeway.core.worksheet_header.call(null,props);
return cljs.core.apply.call(null,React.createElement,"table",((cljs.core.map_QMARK_.call(null,attrs41457))?sablono.interpreter.attributes.call(null,attrs41457):null),((cljs.core.map_QMARK_.call(null,attrs41457))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__17633__auto__ = ((function (attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal){
return (function freeway$core$payment_worksheet_$_iter__41458(s__41459){
return (new cljs.core.LazySeq(null,((function (attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal){
return (function (){
var s__41459__$1 = s__41459;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41459__$1);
if(temp__4425__auto__){
var s__41459__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41459__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__41459__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__41461 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__41460 = (0);
while(true){
if((i__41460 < size__17632__auto__)){
var vec__41464 = cljs.core._nth.call(null,c__17631__auto__,i__41460);
var term = cljs.core.nth.call(null,vec__41464,(0),null);
var i = cljs.core.nth.call(null,vec__41464,(1),null);
cljs.core.chunk_append.call(null,b__41461,sablono.interpreter.interpret.call(null,freeway.core.worksheet_row.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"principal","principal",1371406427),principal,new cljs.core.Keyword(null,"payment-data","payment-data",-2127866334),props,new cljs.core.Keyword(null,"index","index",-1531685915),i], null))));

var G__41476 = (i__41460 + (1));
i__41460 = G__41476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41461),freeway$core$payment_worksheet_$_iter__41458.call(null,cljs.core.chunk_rest.call(null,s__41459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41461),null);
}
} else {
var vec__41465 = cljs.core.first.call(null,s__41459__$2);
var term = cljs.core.nth.call(null,vec__41465,(0),null);
var i = cljs.core.nth.call(null,vec__41465,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,freeway.core.worksheet_row.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"principal","principal",1371406427),principal,new cljs.core.Keyword(null,"payment-data","payment-data",-2127866334),props,new cljs.core.Keyword(null,"index","index",-1531685915),i], null))),freeway$core$payment_worksheet_$_iter__41458.call(null,cljs.core.rest.call(null,s__41459__$2)));
}
} else {
return null;
}
break;
}
});})(attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal))
,null,null));
});})(attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal))
;
return iter__17633__auto__.call(null,cljs.core.map.call(null,((function (iter__17633__auto__,attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal){
return (function (p1__41432_SHARP_,p2__41433_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__41432_SHARP_,p2__41433_SHARP_],null));
});})(iter__17633__auto__,attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal))
,terms,cljs.core.range.call(null)));
})()),React.createElement("tr",null,(function (){var attrs41466 = freeway.core.button.call(null,((function (attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal){
return (function (){
return om.core.transact_BANG_.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terms","terms",-1556977978)], null),freeway.core.add_term_BANG_);
});})(attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal))
,"Add another row");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs41466))?sablono.interpreter.attributes.call(null,attrs41466):null),((cljs.core.map_QMARK_.call(null,attrs41466))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41466)], null)));
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41457),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__17633__auto__ = ((function (attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal){
return (function freeway$core$payment_worksheet_$_iter__41467(s__41468){
return (new cljs.core.LazySeq(null,((function (attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal){
return (function (){
var s__41468__$1 = s__41468;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__41468__$1);
if(temp__4425__auto__){
var s__41468__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41468__$2)){
var c__17631__auto__ = cljs.core.chunk_first.call(null,s__41468__$2);
var size__17632__auto__ = cljs.core.count.call(null,c__17631__auto__);
var b__41470 = cljs.core.chunk_buffer.call(null,size__17632__auto__);
if((function (){var i__41469 = (0);
while(true){
if((i__41469 < size__17632__auto__)){
var vec__41473 = cljs.core._nth.call(null,c__17631__auto__,i__41469);
var term = cljs.core.nth.call(null,vec__41473,(0),null);
var i = cljs.core.nth.call(null,vec__41473,(1),null);
cljs.core.chunk_append.call(null,b__41470,sablono.interpreter.interpret.call(null,freeway.core.worksheet_row.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"principal","principal",1371406427),principal,new cljs.core.Keyword(null,"payment-data","payment-data",-2127866334),props,new cljs.core.Keyword(null,"index","index",-1531685915),i], null))));

var G__41477 = (i__41469 + (1));
i__41469 = G__41477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41470),freeway$core$payment_worksheet_$_iter__41467.call(null,cljs.core.chunk_rest.call(null,s__41468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41470),null);
}
} else {
var vec__41474 = cljs.core.first.call(null,s__41468__$2);
var term = cljs.core.nth.call(null,vec__41474,(0),null);
var i = cljs.core.nth.call(null,vec__41474,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,freeway.core.worksheet_row.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"term","term",-1817390416),term,new cljs.core.Keyword(null,"principal","principal",1371406427),principal,new cljs.core.Keyword(null,"payment-data","payment-data",-2127866334),props,new cljs.core.Keyword(null,"index","index",-1531685915),i], null))),freeway$core$payment_worksheet_$_iter__41467.call(null,cljs.core.rest.call(null,s__41468__$2)));
}
} else {
return null;
}
break;
}
});})(attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal))
,null,null));
});})(attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal))
;
return iter__17633__auto__.call(null,cljs.core.map.call(null,((function (iter__17633__auto__,attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal){
return (function (p1__41432_SHARP_,p2__41433_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__41432_SHARP_,p2__41433_SHARP_],null));
});})(iter__17633__auto__,attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal))
,terms,cljs.core.range.call(null)));
})()),React.createElement("tr",null,(function (){var attrs41475 = freeway.core.button.call(null,((function (attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal){
return (function (){
return om.core.transact_BANG_.call(null,props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terms","terms",-1556977978)], null),freeway.core.add_term_BANG_);
});})(attrs41457,map__41455,map__41455__$1,terms,price,fees,sales_tax,trade_in,principal))
,"Add another row");
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs41475))?sablono.interpreter.attributes.call(null,attrs41475):null),((cljs.core.map_QMARK_.call(null,attrs41475))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41475)], null)));
})()))], null)));
})());
});
freeway.core.freeway_app = (function freeway$core$freeway_app(props,_){
if(typeof freeway.core.t_freeway$core41484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
freeway.core.t_freeway$core41484 = (function (freeway_app,props,_,meta41485){
this.freeway_app = freeway_app;
this.props = props;
this._ = _;
this.meta41485 = meta41485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
freeway.core.t_freeway$core41484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41486,meta41485__$1){
var self__ = this;
var _41486__$1 = this;
return (new freeway.core.t_freeway$core41484(self__.freeway_app,self__.props,self__._,meta41485__$1));
});

freeway.core.t_freeway$core41484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41486){
var self__ = this;
var _41486__$1 = this;
return self__.meta41485;
});

freeway.core.t_freeway$core41484.prototype.om$core$IRender$ = true;

freeway.core.t_freeway$core41484.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.createElement("div",{"className": "fw-app"},React.createElement("h1",null,"Auto Loan Payment Calculator"),(function (){var attrs41489 = freeway.core.worksheet_globals.call(null,self__.props);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41489))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fw-app-body"], null)], null),attrs41489)):{"className": "fw-app-body"}),((cljs.core.map_QMARK_.call(null,attrs41489))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,freeway.core.payment_worksheet.call(null,self__.props))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41489),sablono.interpreter.interpret.call(null,freeway.core.payment_worksheet.call(null,self__.props))], null)));
})());
});

freeway.core.t_freeway$core41484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"freeway-app","freeway-app",335488735,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null)),new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta41485","meta41485",-135365331,null)], null);
});

freeway.core.t_freeway$core41484.cljs$lang$type = true;

freeway.core.t_freeway$core41484.cljs$lang$ctorStr = "freeway.core/t_freeway$core41484";

freeway.core.t_freeway$core41484.cljs$lang$ctorPrWriter = (function (this__17459__auto__,writer__17460__auto__,opt__17461__auto__){
return cljs.core._write.call(null,writer__17460__auto__,"freeway.core/t_freeway$core41484");
});

freeway.core.__GT_t_freeway$core41484 = (function freeway$core$freeway_app_$___GT_t_freeway$core41484(freeway_app__$1,props__$1,___$1,meta41485){
return (new freeway.core.t_freeway$core41484(freeway_app__$1,props__$1,___$1,meta41485));
});

}

return (new freeway.core.t_freeway$core41484(freeway$core$freeway_app,props,_,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,freeway.core.freeway_app,freeway.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),goog.dom.getElement("app")], null));

//# sourceMappingURL=core.js.map