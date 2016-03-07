(ns figwheel.connect (:require [freeway.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3447/figwheel-ws"})

