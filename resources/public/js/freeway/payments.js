// Compiled by ClojureScript 1.7.170 {}
goog.provide('freeway.payments');
goog.require('cljs.core');
freeway.payments.pow = (function freeway$payments$pow(a,b){
return Math.pow(a,b);
});
freeway.payments.__PERCENT_ = (function freeway$payments$__PERCENT_(v){
return (v / (100));
});
freeway.payments.cost_SINGLEQUOTE_ = (function freeway$payments$cost_SINGLEQUOTE_(price,sales_tax,fees,trade_in){
return ((((price + (price * sales_tax)) + sales_tax) + fees) + (- trade_in));
});
freeway.payments.cost = (function freeway$payments$cost(price,sales_tax,fees,trade_in){
return freeway.payments.cost_SINGLEQUOTE_.call(null,price,freeway.payments.__PERCENT_.call(null,sales_tax),fees,trade_in);
});
freeway.payments.monthly_payment_SINGLEQUOTE_ = (function freeway$payments$monthly_payment_SINGLEQUOTE_(principal,apr,payment_count){
var interest = (apr / (12));
return (principal * (interest + (interest / (freeway.payments.pow.call(null,((1) + interest),payment_count) - (1)))));
});
/**
 * For a given principal, APR, and number of payments, return the monthly payment, handles zero % APR correctly.
 */
freeway.payments.monthly_payment = (function freeway$payments$monthly_payment(principal,apr,payment_count){
if((apr === (0))){
return (principal / payment_count);
} else {
return freeway.payments.monthly_payment_SINGLEQUOTE_.call(null,principal,apr,payment_count);
}
});

//# sourceMappingURL=payments.js.map