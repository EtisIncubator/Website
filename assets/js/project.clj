(defproject incubator_website "1.2.3"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "0.9.0"]
                 [cljsjs/react-with-addons "0.13.3-0"]
                 [cljsjs/react-dom "15.1.0-0"]
                 [secretary "1.2.3"]
                 [ankha "0.1.4"]
                 [facjure/mesh "0.4.0"]
                 [org.clojars.fterrier/om-autocomplete "0.1.0"]
                 [om-reforms "0.4.3"]
                 [om-datepicker "0.0.6"]
                 [prismatic/om-tools "0.4.0"]
                 [sablono "0.7.2"]]
  :plugins [[lein-cljsbuild "1.1.3"]]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :main main.core
                :output-to "../compiled/main.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
