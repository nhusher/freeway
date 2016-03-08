(ns freeway.payments)

(defn pow [a b] (js/Math.pow a b))
(defn _% [v] (/ v 100))

(defn cost' "Calculates the cost of a car"
  [price sales-tax fees trade-in]
  (+ price (* price sales-tax) sales-tax fees (- trade-in)))

(defn cost "Calculates the cost of a car, but assumes taxes are 0-100, not 0-1"
  [price sales-tax fees trade-in]
  (cost' price (_% sales-tax) fees trade-in))

(defn monthly-payment'
  "For a given principal, APR, and number of payments, return the monthly payment."
  [principal apr payment-count]
  (let [interest (/ apr 12)]
    (* principal
       (+ interest
          (/ interest
             (- (pow (+ 1 interest) payment-count) 1))))))

(defn monthly-payment
  "For a given principal, APR, and number of payments, return the monthly payment.
   Handles zero % APR correctly."
  [principal apr payment-count]
  (if (zero? apr)
    (/ principal payment-count)
    (monthly-payment' principal apr payment-count)))

