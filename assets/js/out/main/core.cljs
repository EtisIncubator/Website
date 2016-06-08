(ns main.core
  (:require [om.core :as om]
            [om.dom :as dom]
            [secretary.core :as sec :refer-macros [defroute]]
            [index.core :as index]))

(defroute "/" []
  (om/root index/video []
    {:target (. js/document (getElementById "app"))}))
(sec/dispatch! "/")

