(ns index.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom]
            [om-tools.core :refer-macros[defcomponent]]))
(defcomponent video []
  (render [_]
    (dom/div {:class "front"}
      (dom/video {:autoplay "true"}
        (dom/source {:src "public/logo.mp4" :type "video/mp4"})))))

