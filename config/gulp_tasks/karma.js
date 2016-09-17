import config from "../config";
import Karma from "karma";

export default function () {
    return function (done) {
        new (Karma.Server)({
            configFile:config.getKarmaConfig(),
            singleRun:true,
            autoWatch: false
            },
            result => result > 0
                ? done(new Error(`Karma exited with ${result}`))
                : done()
        ).start();
    };
}