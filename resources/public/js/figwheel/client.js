// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26056 = cljs.core._EQ_;
var expr__26057 = (function (){var or__16861__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26056.call(null,"true",expr__26057))){
return true;
} else {
if(cljs.core.truth_(pred__26056.call(null,"false",expr__26057))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26057)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26059__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26060__i = 0, G__26060__a = new Array(arguments.length -  0);
while (G__26060__i < G__26060__a.length) {G__26060__a[G__26060__i] = arguments[G__26060__i + 0]; ++G__26060__i;}
  args = new cljs.core.IndexedSeq(G__26060__a,0);
} 
return G__26059__delegate.call(this,args);};
G__26059.cljs$lang$maxFixedArity = 0;
G__26059.cljs$lang$applyTo = (function (arglist__26061){
var args = cljs.core.seq(arglist__26061);
return G__26059__delegate(args);
});
G__26059.cljs$core$IFn$_invoke$arity$variadic = G__26059__delegate;
return G__26059;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26062){
var map__26065 = p__26062;
var map__26065__$1 = ((((!((map__26065 == null)))?((((map__26065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26065):map__26065);
var message = cljs.core.get.call(null,map__26065__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26065__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16861__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16861__auto__)){
return or__16861__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16849__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16849__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16849__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21670__auto___26227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___26227,ch){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___26227,ch){
return (function (state_26196){
var state_val_26197 = (state_26196[(1)]);
if((state_val_26197 === (7))){
var inst_26192 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
var statearr_26198_26228 = state_26196__$1;
(statearr_26198_26228[(2)] = inst_26192);

(statearr_26198_26228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (1))){
var state_26196__$1 = state_26196;
var statearr_26199_26229 = state_26196__$1;
(statearr_26199_26229[(2)] = null);

(statearr_26199_26229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (4))){
var inst_26149 = (state_26196[(7)]);
var inst_26149__$1 = (state_26196[(2)]);
var state_26196__$1 = (function (){var statearr_26200 = state_26196;
(statearr_26200[(7)] = inst_26149__$1);

return statearr_26200;
})();
if(cljs.core.truth_(inst_26149__$1)){
var statearr_26201_26230 = state_26196__$1;
(statearr_26201_26230[(1)] = (5));

} else {
var statearr_26202_26231 = state_26196__$1;
(statearr_26202_26231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (15))){
var inst_26156 = (state_26196[(8)]);
var inst_26171 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26156);
var inst_26172 = cljs.core.first.call(null,inst_26171);
var inst_26173 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26172);
var inst_26174 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26173)].join('');
var inst_26175 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26174);
var state_26196__$1 = state_26196;
var statearr_26203_26232 = state_26196__$1;
(statearr_26203_26232[(2)] = inst_26175);

(statearr_26203_26232[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (13))){
var inst_26180 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
var statearr_26204_26233 = state_26196__$1;
(statearr_26204_26233[(2)] = inst_26180);

(statearr_26204_26233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (6))){
var state_26196__$1 = state_26196;
var statearr_26205_26234 = state_26196__$1;
(statearr_26205_26234[(2)] = null);

(statearr_26205_26234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (17))){
var inst_26178 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
var statearr_26206_26235 = state_26196__$1;
(statearr_26206_26235[(2)] = inst_26178);

(statearr_26206_26235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (3))){
var inst_26194 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26196__$1,inst_26194);
} else {
if((state_val_26197 === (12))){
var inst_26155 = (state_26196[(9)]);
var inst_26169 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26155,opts);
var state_26196__$1 = state_26196;
if(cljs.core.truth_(inst_26169)){
var statearr_26207_26236 = state_26196__$1;
(statearr_26207_26236[(1)] = (15));

} else {
var statearr_26208_26237 = state_26196__$1;
(statearr_26208_26237[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (2))){
var state_26196__$1 = state_26196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26196__$1,(4),ch);
} else {
if((state_val_26197 === (11))){
var inst_26156 = (state_26196[(8)]);
var inst_26161 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26162 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26156);
var inst_26163 = cljs.core.async.timeout.call(null,(1000));
var inst_26164 = [inst_26162,inst_26163];
var inst_26165 = (new cljs.core.PersistentVector(null,2,(5),inst_26161,inst_26164,null));
var state_26196__$1 = state_26196;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26196__$1,(14),inst_26165);
} else {
if((state_val_26197 === (9))){
var inst_26156 = (state_26196[(8)]);
var inst_26182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26183 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26156);
var inst_26184 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26183);
var inst_26185 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26184)].join('');
var inst_26186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26185);
var state_26196__$1 = (function (){var statearr_26209 = state_26196;
(statearr_26209[(10)] = inst_26182);

return statearr_26209;
})();
var statearr_26210_26238 = state_26196__$1;
(statearr_26210_26238[(2)] = inst_26186);

(statearr_26210_26238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (5))){
var inst_26149 = (state_26196[(7)]);
var inst_26151 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26152 = (new cljs.core.PersistentArrayMap(null,2,inst_26151,null));
var inst_26153 = (new cljs.core.PersistentHashSet(null,inst_26152,null));
var inst_26154 = figwheel.client.focus_msgs.call(null,inst_26153,inst_26149);
var inst_26155 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26154);
var inst_26156 = cljs.core.first.call(null,inst_26154);
var inst_26157 = figwheel.client.autoload_QMARK_.call(null);
var state_26196__$1 = (function (){var statearr_26211 = state_26196;
(statearr_26211[(9)] = inst_26155);

(statearr_26211[(8)] = inst_26156);

return statearr_26211;
})();
if(cljs.core.truth_(inst_26157)){
var statearr_26212_26239 = state_26196__$1;
(statearr_26212_26239[(1)] = (8));

} else {
var statearr_26213_26240 = state_26196__$1;
(statearr_26213_26240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (14))){
var inst_26167 = (state_26196[(2)]);
var state_26196__$1 = state_26196;
var statearr_26214_26241 = state_26196__$1;
(statearr_26214_26241[(2)] = inst_26167);

(statearr_26214_26241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (16))){
var state_26196__$1 = state_26196;
var statearr_26215_26242 = state_26196__$1;
(statearr_26215_26242[(2)] = null);

(statearr_26215_26242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (10))){
var inst_26188 = (state_26196[(2)]);
var state_26196__$1 = (function (){var statearr_26216 = state_26196;
(statearr_26216[(11)] = inst_26188);

return statearr_26216;
})();
var statearr_26217_26243 = state_26196__$1;
(statearr_26217_26243[(2)] = null);

(statearr_26217_26243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26197 === (8))){
var inst_26155 = (state_26196[(9)]);
var inst_26159 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26155,opts);
var state_26196__$1 = state_26196;
if(cljs.core.truth_(inst_26159)){
var statearr_26218_26244 = state_26196__$1;
(statearr_26218_26244[(1)] = (11));

} else {
var statearr_26219_26245 = state_26196__$1;
(statearr_26219_26245[(1)] = (12));

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
});})(c__21670__auto___26227,ch))
;
return ((function (switch__21558__auto__,c__21670__auto___26227,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21559__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21559__auto____0 = (function (){
var statearr_26223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26223[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21559__auto__);

(statearr_26223[(1)] = (1));

return statearr_26223;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21559__auto____1 = (function (state_26196){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_26196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e26224){if((e26224 instanceof Object)){
var ex__21562__auto__ = e26224;
var statearr_26225_26246 = state_26196;
(statearr_26225_26246[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26247 = state_26196;
state_26196 = G__26247;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21559__auto__ = function(state_26196){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21559__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21559__auto____1.call(this,state_26196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21559__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21559__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___26227,ch))
})();
var state__21672__auto__ = (function (){var statearr_26226 = f__21671__auto__.call(null);
(statearr_26226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___26227);

return statearr_26226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___26227,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26248_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26248_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26255 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26255){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26253 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26254 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26253,_STAR_print_newline_STAR_26254,base_path_26255){
return (function() { 
var G__26256__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26257__i = 0, G__26257__a = new Array(arguments.length -  0);
while (G__26257__i < G__26257__a.length) {G__26257__a[G__26257__i] = arguments[G__26257__i + 0]; ++G__26257__i;}
  args = new cljs.core.IndexedSeq(G__26257__a,0);
} 
return G__26256__delegate.call(this,args);};
G__26256.cljs$lang$maxFixedArity = 0;
G__26256.cljs$lang$applyTo = (function (arglist__26258){
var args = cljs.core.seq(arglist__26258);
return G__26256__delegate(args);
});
G__26256.cljs$core$IFn$_invoke$arity$variadic = G__26256__delegate;
return G__26256;
})()
;})(_STAR_print_fn_STAR_26253,_STAR_print_newline_STAR_26254,base_path_26255))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26254;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26253;
}}catch (e26252){if((e26252 instanceof Error)){
var e = e26252;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26255], null));
} else {
var e = e26252;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26255))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26259){
var map__26266 = p__26259;
var map__26266__$1 = ((((!((map__26266 == null)))?((((map__26266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26266):map__26266);
var opts = map__26266__$1;
var build_id = cljs.core.get.call(null,map__26266__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26266,map__26266__$1,opts,build_id){
return (function (p__26268){
var vec__26269 = p__26268;
var map__26270 = cljs.core.nth.call(null,vec__26269,(0),null);
var map__26270__$1 = ((((!((map__26270 == null)))?((((map__26270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26270):map__26270);
var msg = map__26270__$1;
var msg_name = cljs.core.get.call(null,map__26270__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26269,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26269,map__26270,map__26270__$1,msg,msg_name,_,map__26266,map__26266__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26269,map__26270,map__26270__$1,msg,msg_name,_,map__26266,map__26266__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26266,map__26266__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26276){
var vec__26277 = p__26276;
var map__26278 = cljs.core.nth.call(null,vec__26277,(0),null);
var map__26278__$1 = ((((!((map__26278 == null)))?((((map__26278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26278):map__26278);
var msg = map__26278__$1;
var msg_name = cljs.core.get.call(null,map__26278__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26277,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26280){
var map__26290 = p__26280;
var map__26290__$1 = ((((!((map__26290 == null)))?((((map__26290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26290):map__26290);
var on_compile_warning = cljs.core.get.call(null,map__26290__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26290__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26290,map__26290__$1,on_compile_warning,on_compile_fail){
return (function (p__26292){
var vec__26293 = p__26292;
var map__26294 = cljs.core.nth.call(null,vec__26293,(0),null);
var map__26294__$1 = ((((!((map__26294 == null)))?((((map__26294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26294):map__26294);
var msg = map__26294__$1;
var msg_name = cljs.core.get.call(null,map__26294__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26293,(1));
var pred__26296 = cljs.core._EQ_;
var expr__26297 = msg_name;
if(cljs.core.truth_(pred__26296.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26297))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26296.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26297))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26290,map__26290__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto__,msg_hist,msg_names,msg){
return (function (state_26513){
var state_val_26514 = (state_26513[(1)]);
if((state_val_26514 === (7))){
var inst_26437 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26437)){
var statearr_26515_26561 = state_26513__$1;
(statearr_26515_26561[(1)] = (8));

} else {
var statearr_26516_26562 = state_26513__$1;
(statearr_26516_26562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (20))){
var inst_26507 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26517_26563 = state_26513__$1;
(statearr_26517_26563[(2)] = inst_26507);

(statearr_26517_26563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (27))){
var inst_26503 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26518_26564 = state_26513__$1;
(statearr_26518_26564[(2)] = inst_26503);

(statearr_26518_26564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (1))){
var inst_26430 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26430)){
var statearr_26519_26565 = state_26513__$1;
(statearr_26519_26565[(1)] = (2));

} else {
var statearr_26520_26566 = state_26513__$1;
(statearr_26520_26566[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (24))){
var inst_26505 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26521_26567 = state_26513__$1;
(statearr_26521_26567[(2)] = inst_26505);

(statearr_26521_26567[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (4))){
var inst_26511 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26513__$1,inst_26511);
} else {
if((state_val_26514 === (15))){
var inst_26509 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26522_26568 = state_26513__$1;
(statearr_26522_26568[(2)] = inst_26509);

(statearr_26522_26568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (21))){
var inst_26468 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26523_26569 = state_26513__$1;
(statearr_26523_26569[(2)] = inst_26468);

(statearr_26523_26569[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (31))){
var inst_26492 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26492)){
var statearr_26524_26570 = state_26513__$1;
(statearr_26524_26570[(1)] = (34));

} else {
var statearr_26525_26571 = state_26513__$1;
(statearr_26525_26571[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (32))){
var inst_26501 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26526_26572 = state_26513__$1;
(statearr_26526_26572[(2)] = inst_26501);

(statearr_26526_26572[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (33))){
var inst_26490 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26527_26573 = state_26513__$1;
(statearr_26527_26573[(2)] = inst_26490);

(statearr_26527_26573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (13))){
var inst_26451 = figwheel.client.heads_up.clear.call(null);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(16),inst_26451);
} else {
if((state_val_26514 === (22))){
var inst_26472 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26473 = figwheel.client.heads_up.append_message.call(null,inst_26472);
var state_26513__$1 = state_26513;
var statearr_26528_26574 = state_26513__$1;
(statearr_26528_26574[(2)] = inst_26473);

(statearr_26528_26574[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (36))){
var inst_26499 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26529_26575 = state_26513__$1;
(statearr_26529_26575[(2)] = inst_26499);

(statearr_26529_26575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (29))){
var inst_26483 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26530_26576 = state_26513__$1;
(statearr_26530_26576[(2)] = inst_26483);

(statearr_26530_26576[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (6))){
var inst_26432 = (state_26513[(7)]);
var state_26513__$1 = state_26513;
var statearr_26531_26577 = state_26513__$1;
(statearr_26531_26577[(2)] = inst_26432);

(statearr_26531_26577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (28))){
var inst_26479 = (state_26513[(2)]);
var inst_26480 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26481 = figwheel.client.heads_up.display_warning.call(null,inst_26480);
var state_26513__$1 = (function (){var statearr_26532 = state_26513;
(statearr_26532[(8)] = inst_26479);

return statearr_26532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(29),inst_26481);
} else {
if((state_val_26514 === (25))){
var inst_26477 = figwheel.client.heads_up.clear.call(null);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(28),inst_26477);
} else {
if((state_val_26514 === (34))){
var inst_26494 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(37),inst_26494);
} else {
if((state_val_26514 === (17))){
var inst_26459 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26533_26578 = state_26513__$1;
(statearr_26533_26578[(2)] = inst_26459);

(statearr_26533_26578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (3))){
var inst_26449 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26449)){
var statearr_26534_26579 = state_26513__$1;
(statearr_26534_26579[(1)] = (13));

} else {
var statearr_26535_26580 = state_26513__$1;
(statearr_26535_26580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (12))){
var inst_26445 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26536_26581 = state_26513__$1;
(statearr_26536_26581[(2)] = inst_26445);

(statearr_26536_26581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (2))){
var inst_26432 = (state_26513[(7)]);
var inst_26432__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26513__$1 = (function (){var statearr_26537 = state_26513;
(statearr_26537[(7)] = inst_26432__$1);

return statearr_26537;
})();
if(cljs.core.truth_(inst_26432__$1)){
var statearr_26538_26582 = state_26513__$1;
(statearr_26538_26582[(1)] = (5));

} else {
var statearr_26539_26583 = state_26513__$1;
(statearr_26539_26583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (23))){
var inst_26475 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26475)){
var statearr_26540_26584 = state_26513__$1;
(statearr_26540_26584[(1)] = (25));

} else {
var statearr_26541_26585 = state_26513__$1;
(statearr_26541_26585[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (35))){
var state_26513__$1 = state_26513;
var statearr_26542_26586 = state_26513__$1;
(statearr_26542_26586[(2)] = null);

(statearr_26542_26586[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (19))){
var inst_26470 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26470)){
var statearr_26543_26587 = state_26513__$1;
(statearr_26543_26587[(1)] = (22));

} else {
var statearr_26544_26588 = state_26513__$1;
(statearr_26544_26588[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (11))){
var inst_26441 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26545_26589 = state_26513__$1;
(statearr_26545_26589[(2)] = inst_26441);

(statearr_26545_26589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (9))){
var inst_26443 = figwheel.client.heads_up.clear.call(null);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(12),inst_26443);
} else {
if((state_val_26514 === (5))){
var inst_26434 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26513__$1 = state_26513;
var statearr_26546_26590 = state_26513__$1;
(statearr_26546_26590[(2)] = inst_26434);

(statearr_26546_26590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (14))){
var inst_26461 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26461)){
var statearr_26547_26591 = state_26513__$1;
(statearr_26547_26591[(1)] = (18));

} else {
var statearr_26548_26592 = state_26513__$1;
(statearr_26548_26592[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (26))){
var inst_26485 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26513__$1 = state_26513;
if(cljs.core.truth_(inst_26485)){
var statearr_26549_26593 = state_26513__$1;
(statearr_26549_26593[(1)] = (30));

} else {
var statearr_26550_26594 = state_26513__$1;
(statearr_26550_26594[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (16))){
var inst_26453 = (state_26513[(2)]);
var inst_26454 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26455 = figwheel.client.format_messages.call(null,inst_26454);
var inst_26456 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26457 = figwheel.client.heads_up.display_error.call(null,inst_26455,inst_26456);
var state_26513__$1 = (function (){var statearr_26551 = state_26513;
(statearr_26551[(9)] = inst_26453);

return statearr_26551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(17),inst_26457);
} else {
if((state_val_26514 === (30))){
var inst_26487 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26488 = figwheel.client.heads_up.display_warning.call(null,inst_26487);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(33),inst_26488);
} else {
if((state_val_26514 === (10))){
var inst_26447 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26552_26595 = state_26513__$1;
(statearr_26552_26595[(2)] = inst_26447);

(statearr_26552_26595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (18))){
var inst_26463 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26464 = figwheel.client.format_messages.call(null,inst_26463);
var inst_26465 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26466 = figwheel.client.heads_up.display_error.call(null,inst_26464,inst_26465);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(21),inst_26466);
} else {
if((state_val_26514 === (37))){
var inst_26496 = (state_26513[(2)]);
var state_26513__$1 = state_26513;
var statearr_26553_26596 = state_26513__$1;
(statearr_26553_26596[(2)] = inst_26496);

(statearr_26553_26596[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26514 === (8))){
var inst_26439 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26513__$1 = state_26513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26513__$1,(11),inst_26439);
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
});})(c__21670__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21558__auto__,c__21670__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto____0 = (function (){
var statearr_26557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26557[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto__);

(statearr_26557[(1)] = (1));

return statearr_26557;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto____1 = (function (state_26513){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_26513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e26558){if((e26558 instanceof Object)){
var ex__21562__auto__ = e26558;
var statearr_26559_26597 = state_26513;
(statearr_26559_26597[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26598 = state_26513;
state_26513 = G__26598;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto__ = function(state_26513){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto____1.call(this,state_26513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto__,msg_hist,msg_names,msg))
})();
var state__21672__auto__ = (function (){var statearr_26560 = f__21671__auto__.call(null);
(statearr_26560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto__);

return statearr_26560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto__,msg_hist,msg_names,msg))
);

return c__21670__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21670__auto___26661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto___26661,ch){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto___26661,ch){
return (function (state_26644){
var state_val_26645 = (state_26644[(1)]);
if((state_val_26645 === (1))){
var state_26644__$1 = state_26644;
var statearr_26646_26662 = state_26644__$1;
(statearr_26646_26662[(2)] = null);

(statearr_26646_26662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26645 === (2))){
var state_26644__$1 = state_26644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26644__$1,(4),ch);
} else {
if((state_val_26645 === (3))){
var inst_26642 = (state_26644[(2)]);
var state_26644__$1 = state_26644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26644__$1,inst_26642);
} else {
if((state_val_26645 === (4))){
var inst_26632 = (state_26644[(7)]);
var inst_26632__$1 = (state_26644[(2)]);
var state_26644__$1 = (function (){var statearr_26647 = state_26644;
(statearr_26647[(7)] = inst_26632__$1);

return statearr_26647;
})();
if(cljs.core.truth_(inst_26632__$1)){
var statearr_26648_26663 = state_26644__$1;
(statearr_26648_26663[(1)] = (5));

} else {
var statearr_26649_26664 = state_26644__$1;
(statearr_26649_26664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26645 === (5))){
var inst_26632 = (state_26644[(7)]);
var inst_26634 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26632);
var state_26644__$1 = state_26644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26644__$1,(8),inst_26634);
} else {
if((state_val_26645 === (6))){
var state_26644__$1 = state_26644;
var statearr_26650_26665 = state_26644__$1;
(statearr_26650_26665[(2)] = null);

(statearr_26650_26665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26645 === (7))){
var inst_26640 = (state_26644[(2)]);
var state_26644__$1 = state_26644;
var statearr_26651_26666 = state_26644__$1;
(statearr_26651_26666[(2)] = inst_26640);

(statearr_26651_26666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26645 === (8))){
var inst_26636 = (state_26644[(2)]);
var state_26644__$1 = (function (){var statearr_26652 = state_26644;
(statearr_26652[(8)] = inst_26636);

return statearr_26652;
})();
var statearr_26653_26667 = state_26644__$1;
(statearr_26653_26667[(2)] = null);

(statearr_26653_26667[(1)] = (2));


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
});})(c__21670__auto___26661,ch))
;
return ((function (switch__21558__auto__,c__21670__auto___26661,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21559__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21559__auto____0 = (function (){
var statearr_26657 = [null,null,null,null,null,null,null,null,null];
(statearr_26657[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21559__auto__);

(statearr_26657[(1)] = (1));

return statearr_26657;
});
var figwheel$client$heads_up_plugin_$_state_machine__21559__auto____1 = (function (state_26644){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_26644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e26658){if((e26658 instanceof Object)){
var ex__21562__auto__ = e26658;
var statearr_26659_26668 = state_26644;
(statearr_26659_26668[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26669 = state_26644;
state_26644 = G__26669;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21559__auto__ = function(state_26644){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21559__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21559__auto____1.call(this,state_26644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21559__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21559__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto___26661,ch))
})();
var state__21672__auto__ = (function (){var statearr_26660 = f__21671__auto__.call(null);
(statearr_26660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto___26661);

return statearr_26660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto___26661,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21670__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21670__auto__){
return (function (){
var f__21671__auto__ = (function (){var switch__21558__auto__ = ((function (c__21670__auto__){
return (function (state_26690){
var state_val_26691 = (state_26690[(1)]);
if((state_val_26691 === (1))){
var inst_26685 = cljs.core.async.timeout.call(null,(3000));
var state_26690__$1 = state_26690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26690__$1,(2),inst_26685);
} else {
if((state_val_26691 === (2))){
var inst_26687 = (state_26690[(2)]);
var inst_26688 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26690__$1 = (function (){var statearr_26692 = state_26690;
(statearr_26692[(7)] = inst_26687);

return statearr_26692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26690__$1,inst_26688);
} else {
return null;
}
}
});})(c__21670__auto__))
;
return ((function (switch__21558__auto__,c__21670__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21559__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21559__auto____0 = (function (){
var statearr_26696 = [null,null,null,null,null,null,null,null];
(statearr_26696[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21559__auto__);

(statearr_26696[(1)] = (1));

return statearr_26696;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21559__auto____1 = (function (state_26690){
while(true){
var ret_value__21560__auto__ = (function (){try{while(true){
var result__21561__auto__ = switch__21558__auto__.call(null,state_26690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21561__auto__;
}
break;
}
}catch (e26697){if((e26697 instanceof Object)){
var ex__21562__auto__ = e26697;
var statearr_26698_26700 = state_26690;
(statearr_26698_26700[(5)] = ex__21562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26701 = state_26690;
state_26690 = G__26701;
continue;
} else {
return ret_value__21560__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21559__auto__ = function(state_26690){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21559__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21559__auto____1.call(this,state_26690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21559__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21559__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21559__auto__;
})()
;})(switch__21558__auto__,c__21670__auto__))
})();
var state__21672__auto__ = (function (){var statearr_26699 = f__21671__auto__.call(null);
(statearr_26699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21670__auto__);

return statearr_26699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21672__auto__);
});})(c__21670__auto__))
);

return c__21670__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26702){
var map__26709 = p__26702;
var map__26709__$1 = ((((!((map__26709 == null)))?((((map__26709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26709):map__26709);
var ed = map__26709__$1;
var formatted_exception = cljs.core.get.call(null,map__26709__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26709__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26709__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26711_26715 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26712_26716 = null;
var count__26713_26717 = (0);
var i__26714_26718 = (0);
while(true){
if((i__26714_26718 < count__26713_26717)){
var msg_26719 = cljs.core._nth.call(null,chunk__26712_26716,i__26714_26718);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26719);

var G__26720 = seq__26711_26715;
var G__26721 = chunk__26712_26716;
var G__26722 = count__26713_26717;
var G__26723 = (i__26714_26718 + (1));
seq__26711_26715 = G__26720;
chunk__26712_26716 = G__26721;
count__26713_26717 = G__26722;
i__26714_26718 = G__26723;
continue;
} else {
var temp__4425__auto___26724 = cljs.core.seq.call(null,seq__26711_26715);
if(temp__4425__auto___26724){
var seq__26711_26725__$1 = temp__4425__auto___26724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26711_26725__$1)){
var c__17664__auto___26726 = cljs.core.chunk_first.call(null,seq__26711_26725__$1);
var G__26727 = cljs.core.chunk_rest.call(null,seq__26711_26725__$1);
var G__26728 = c__17664__auto___26726;
var G__26729 = cljs.core.count.call(null,c__17664__auto___26726);
var G__26730 = (0);
seq__26711_26715 = G__26727;
chunk__26712_26716 = G__26728;
count__26713_26717 = G__26729;
i__26714_26718 = G__26730;
continue;
} else {
var msg_26731 = cljs.core.first.call(null,seq__26711_26725__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26731);

var G__26732 = cljs.core.next.call(null,seq__26711_26725__$1);
var G__26733 = null;
var G__26734 = (0);
var G__26735 = (0);
seq__26711_26715 = G__26732;
chunk__26712_26716 = G__26733;
count__26713_26717 = G__26734;
i__26714_26718 = G__26735;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26736){
var map__26739 = p__26736;
var map__26739__$1 = ((((!((map__26739 == null)))?((((map__26739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26739):map__26739);
var w = map__26739__$1;
var message = cljs.core.get.call(null,map__26739__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16849__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16849__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16849__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26747 = cljs.core.seq.call(null,plugins);
var chunk__26748 = null;
var count__26749 = (0);
var i__26750 = (0);
while(true){
if((i__26750 < count__26749)){
var vec__26751 = cljs.core._nth.call(null,chunk__26748,i__26750);
var k = cljs.core.nth.call(null,vec__26751,(0),null);
var plugin = cljs.core.nth.call(null,vec__26751,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26753 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26747,chunk__26748,count__26749,i__26750,pl_26753,vec__26751,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26753.call(null,msg_hist);
});})(seq__26747,chunk__26748,count__26749,i__26750,pl_26753,vec__26751,k,plugin))
);
} else {
}

var G__26754 = seq__26747;
var G__26755 = chunk__26748;
var G__26756 = count__26749;
var G__26757 = (i__26750 + (1));
seq__26747 = G__26754;
chunk__26748 = G__26755;
count__26749 = G__26756;
i__26750 = G__26757;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26747);
if(temp__4425__auto__){
var seq__26747__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26747__$1)){
var c__17664__auto__ = cljs.core.chunk_first.call(null,seq__26747__$1);
var G__26758 = cljs.core.chunk_rest.call(null,seq__26747__$1);
var G__26759 = c__17664__auto__;
var G__26760 = cljs.core.count.call(null,c__17664__auto__);
var G__26761 = (0);
seq__26747 = G__26758;
chunk__26748 = G__26759;
count__26749 = G__26760;
i__26750 = G__26761;
continue;
} else {
var vec__26752 = cljs.core.first.call(null,seq__26747__$1);
var k = cljs.core.nth.call(null,vec__26752,(0),null);
var plugin = cljs.core.nth.call(null,vec__26752,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26762 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26747,chunk__26748,count__26749,i__26750,pl_26762,vec__26752,k,plugin,seq__26747__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26762.call(null,msg_hist);
});})(seq__26747,chunk__26748,count__26749,i__26750,pl_26762,vec__26752,k,plugin,seq__26747__$1,temp__4425__auto__))
);
} else {
}

var G__26763 = cljs.core.next.call(null,seq__26747__$1);
var G__26764 = null;
var G__26765 = (0);
var G__26766 = (0);
seq__26747 = G__26763;
chunk__26748 = G__26764;
count__26749 = G__26765;
i__26750 = G__26766;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26767 = [];
var len__17919__auto___26770 = arguments.length;
var i__17920__auto___26771 = (0);
while(true){
if((i__17920__auto___26771 < len__17919__auto___26770)){
args26767.push((arguments[i__17920__auto___26771]));

var G__26772 = (i__17920__auto___26771 + (1));
i__17920__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var G__26769 = args26767.length;
switch (G__26769) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26767.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17926__auto__ = [];
var len__17919__auto___26778 = arguments.length;
var i__17920__auto___26779 = (0);
while(true){
if((i__17920__auto___26779 < len__17919__auto___26778)){
args__17926__auto__.push((arguments[i__17920__auto___26779]));

var G__26780 = (i__17920__auto___26779 + (1));
i__17920__auto___26779 = G__26780;
continue;
} else {
}
break;
}

var argseq__17927__auto__ = ((((0) < args__17926__auto__.length))?(new cljs.core.IndexedSeq(args__17926__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17927__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26775){
var map__26776 = p__26775;
var map__26776__$1 = ((((!((map__26776 == null)))?((((map__26776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26776):map__26776);
var opts = map__26776__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26774){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26774));
});

//# sourceMappingURL=client.js.map