/**
 * Created by ralemy on 9/17/16.
 */
import packConfig from "./webpack.config";
import webpack from "webpack";

const testConfig = {
    entry: {},
    output: {},
    plugins: [
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify('test')
        })
    ],
    module: packConfig.module,
    devtool: 'inline-cheap-source-map'
};

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        exclude:[],
        files: [
            {pattern: './karma.shim.js', watched: false}
        ],

        preprocessors: {
            "./karma.shim.js":["webpack"]
        },
        webpack: packConfig,

        webpackServer: {noInfo: true},

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS'],

        concurrency: Infinity,

        autoWatch: false,
        singleRun: true

    });
};