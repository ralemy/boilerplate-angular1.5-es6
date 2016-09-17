"use strict";
import path from "path";
export default {
    build: {
        distribution: path.resolve(__dirname, "..", "dist"),
        src: path.resolve(__dirname, "..", "src"),
        node_modules: path.resolve(__dirname, "..", "node_modules"),
        server: path.resolve(__dirname)
    },
    angular: {
        bootstrap: "bootstrap",
        appName: "MyApp"
    },
    getAngularApp(){
        return path.resolve(this.build.src, "app");
    },
    getKarmaConfig(){
        return path.resolve(__dirname, "karma.config.js");
    },
    getServerScript() {
        return path.resolve(this.build.server, "serve.js");
    },
    getDistribution() {
        return this.build.distribution;
    },
    getDistributionMask() {
        return [path.resolve(this.build.distribution, "**"),this.getRootFile()];
    },
    getSourceMask() {
        return path.resolve(this.build.src, "**", "*.js");
    },
    getUnitTestMask() {
        return path.resolve(this.build.src, "**", "*.spec.js");
    },
    getRootFile() {
        return path.resolve(this.build.src, "entry.js");
    },
    getServerMask(){
        return path.resolve(this.build.src, "server");
    },
    getViews() {
        return path.resolve(this.getServerMask(), "views");
    },
    getRoutes(){
        return path.resolve(this.getServerMask(), "routes.js");
    },
    getBabelNode(){
        return path.resolve(this.build.node_modules, "babel-cli", "bin", "babel-node.js");
    }
};
