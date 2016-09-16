"use strict";
import path from "path";
export default {
    build: {
        distribution: path.resolve(__dirname, "..", "dist"),
        src: path.resolve(__dirname, "..", "src")
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
    getMainPage: function () {
        return path.resolve(this.build.src, "index.pug");
    }
};
