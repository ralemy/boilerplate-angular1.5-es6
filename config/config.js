"use strict";
import path from "path";
export default {
    build: {
        destination: path.resolve(__dirname, "..", "dist", "**"),
        src: path.resolve(__dirname,"..","src")
    },
    getSourceMask:function(){
        return path.resolve(this.build.src,"**","*.js");
    },
    getSpecsMask:function(){
        return path.resolve(this.build.src,"**","*.spec.js");
    }
};
