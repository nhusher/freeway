(ns freeway.payments)

(defn pow [a b] (js/Math.pow a b))

(defn cost [price sales-tax fees trade-in]
  (+ price (* price sales-tax) sales-tax fees (- trade-in)))

(defn monthly-payment
  "For a given principal, APR, and number of payments, return the monthly payment"
  [principal apr payment-count]
  (let [interest (/ apr 12)]
    (* principal
       (+ interest
          (/ interest
             (- (pow (+ 1 interest) payment-count) 1))))))

(def sample-payment
  {:price     16991
   :trade-ins [3200]
   :fees      [500]
   :apr       0.03
   :payments  48})

(defn sales-tax [p {sales-tax :sales-tax}]
  (* p sales-tax))

(defn trade-ins [p {trades :trade-ins}]
  (reduce - p trades))

(defn fees [p {fees :fees}]
  (reduce - p fees))

