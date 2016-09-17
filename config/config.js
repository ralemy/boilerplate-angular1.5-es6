"use strict";
import path from "path";
export default {
    build: {
        distribution: path.resolve(__dirname, "..", "dist"),
        src: path.resolve(__dirname, "..", "src"),
        node_modules: path.resolve(__dirname,"..","node_modules"),
        server: path.resolve(__dirname)
    },
    getServerScript: function () {
        return path.resolve(this.build.server,"serve.js");
    },
    getDistribution: function () {
        return this.build.distribution;
    },
    getDistributionMask: function () {
        return path.resolve(this.build.distribution, "**");
    },
    getSourceMask: function () {
        return path.resolve(this.build.src, "**", "*.js");
    },
    getUnitTestMask: function () {
        return path.resolve(this.build.src, "**", "*.spec.js");
    },
    getRootFile: function () {
        return path.resolve(this.build.src, "main.js");
    },
    getServerMask:function(){
        return path.resolve(this.build.src, "server");
    },
    getViews: function () {
        return path.resolve(this.getServerMask(),"views");
    },
    getRoutes:function(){
        return path.resolve(this.getServerMask(),"routes.js");
    },
    getBabelNode:function(){
        return path.resolve(this.build.node_modules, "babel-cli","bin","babel-node.js");
    }
};
