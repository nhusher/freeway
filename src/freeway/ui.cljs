(ns freeway.ui
  (:require [sablono.core :as html :refer-macros [html]]))

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

(defn worksheet-global-field [label value step on-change]
  (html [:label.fw-worksheet-field
         [:span.fw-label label]
         (numeric-field value step on-change)]))
