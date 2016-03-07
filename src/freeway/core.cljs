(ns freeway.core
  (:require [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [freeway.payments :as p]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defn get-value [e] (.. e -target -value))
(defn |$ [v] (str "$" (-> v js/Math.round (.toLocaleString #js {:style "currency"}))))
(defn num [v] (if (js/isNaN (js/parseFloat v)) 0 (js/parseFloat v)))

(defonce app-state (atom {:price        16900
                          :fees         0
                          :sales-tax    6
                          :trade-in     0
                          :downpayments [1000 2000 3000]
                          :terms        [[24 3.10]]}))

(defn button [on-click text]
  (html [:button.fw-button
         {:type     "button"
          :on-click on-click}
         text]))

(defn numeric-field [value step on-change]
  (html [:input.fw-field
         {:type      "number"
          :value     value
          :min       0
          :step      step
          :on-change (comp on-change get-value)}]))

(defn add-term! [terms]
  (let [[months apr] (last terms)]
    (conj terms [(+ months 12) (+ apr 1)])))

(defn worksheet-global-field [label value step on-change]
  (html [:label.fw-worksheet-field
         [:span.fw-label label]
         (numeric-field value step on-change)]))

(defn worksheet-globals [props]
  (let [{:keys [price fees sales-tax trade-in]} props
        set-value (fn [keys value] (om/update! props keys (num value)))]
    (html [:div.fw-worksheet-globals
           (worksheet-global-field "Price" price 100 (partial set-value [:price]))
           (worksheet-global-field "Tax (%)" sales-tax 0.1 (partial set-value [:sales-tax]))
           (worksheet-global-field "Fees" fees 10 (partial set-value [:fees]))
           (worksheet-global-field "Trade-in" trade-in 100 (partial set-value [:trade-in]))
           [:div.financed-cost
            [:div "Financed cost"]
            [:strong (|$ (p/cost' price sales-tax fees trade-in))]]])))

(defn worksheet-header [{:keys [downpayments] :as props}]
  (html [:thead.fw-payment-header
         [:tr
          [:th]
          (for [[d i] (map #(vector %1 %2) downpayments (range))]
            [:th (numeric-field d 100 #(om/update! props [:downpayments i] %))])]]))

(defn payment-cell [props]
  (let [{:keys [principal apr payments]} props
        payment (p/monthly-payment' principal apr payments)]
    (html [:div.fw-payment-cell (|$ payment) [:small "/mo"]])))

(defn worksheet-row [props]
  (let [{:keys [term principal payment-data index]} props
        {:keys [downpayments]} payment-data
        [months interest] term]
    (html [:tr
           [:td.fw-term-column
            [:div.fw-term-widget
             [:div.fw-months
              (numeric-field months 1 #(om/update! payment-data [:terms index 0] (num %)))
              " months"]
             [:div.fw-apr
              (numeric-field interest 0.1 #(om/update! payment-data [:terms index 1] (num %)))
              " %apr"]]]
           (for [d downpayments]
             [:td (payment-cell {:cursor    payment-data
                                 :principal (- principal d)
                                 :apr       (/ interest 100)
                                 :payments  months})])])))

(defn payment-worksheet [props]
  (let [{:keys [terms price fees sales-tax trade-in]} props
        principal (p/cost price (/ sales-tax 100) fees trade-in)]
    (html [:div.fw-payment-worksheet
           [:table
            (worksheet-header props)
            [:tbody
             (for [[term i] (map #(vector %1 %2) terms (range))]
               (worksheet-row {:term term :principal principal :payment-data props :index i}))
             [:tr [:td (button #(om/transact! props [:terms] add-term!) "Add another row")]]]]])))

(defn freeway-app [props _]
  (reify
    om/IRender
    (render [_]
      (html [:div.fw-app
             [:h1 "Auto Loan Payment Calculator"]
             [:div.fw-app-body
              (worksheet-globals props)
              (payment-worksheet props)]]))))

(om/root freeway-app app-state {:target (gdom/getElement "app")})