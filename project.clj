(defproject unbalanced "0.1.0-SNAPSHOT"
  :description "("
  :url "http://eutro.github.io/unbalanced/index.html"
  :license {:name "MIT", :url "https://mit-license.org/"}
  :min-lein-version "2.9.1"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async "0.4.500"]
                 [reagent "0.10.0" :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]]]
  :plugins [[lein-figwheel "0.5.20"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]
  :source-paths ["src"]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]
                :figwheel {:open-urls ["http://localhost:3449/index.html"]}
                :compiler {:main unbalanced.core
                           :target :bundle
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/out/index.js"
                           :output-dir "resources/public/js/compiled/out"
                           :bundle-cmd {:none ["npx" "webpack" "--mode=development"]
                                        :default ["npx" "webpack"]}
                           :source-map-timestamp true
                           ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                           ;; https://github.com/binaryage/cljs-devtools
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/unbalanced.js"
                           :main unbalanced.core
                           :optimizations :advanced
                           :pretty-print false}}]}
  :figwheel {:http-server-root "public"                     ;; default and assumes "resources"
             :server-port 3449                              ;; default
             :server-ip "127.0.0.1"
             :css-dirs ["resources/public/css"]             ;; watch and update CSS
             }
  :profiles {:dev {:dependencies [[binaryage/devtools "1.0.0"]
                                  [figwheel-sidecar "0.5.20"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled" :target-path]}})
