"use strict";
import HtmlPlugin from "html-webpack-plugin";
import config from "./config";

let packConfig = {
    entry: {
        app: config.getRootFile()
    },
    output: {
        path: config.getDistribution(),
        publicPath: "/assets/",
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    plugins: [
        new HtmlPlugin({
            template: config.getMainPage()
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                loader: "file"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.pug$/,
                loader: "pug-html"
            },
        ]
    }
};

export default packConfig;
