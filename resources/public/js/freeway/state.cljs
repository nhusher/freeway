(ns freeway.state
  (:require [om.core :as om]
            [freeway.payments :as p]))

(defonce app-state (atom {:price        16900
                          :fees         0
                          :sales-tax    6
                          :trade-in     0
                          :downpayments [1000 2000 3000]
                          :terms        [[36 3.10] [48 4.1] [60 5.1] [72 6.1]]}))

