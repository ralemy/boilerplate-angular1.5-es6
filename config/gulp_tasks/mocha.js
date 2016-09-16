"use strict";
import config from "../config";
import mocha from "gulp-mocha";

export default function(gulp) {
    return () => gulp.src(config.getUnitTestMask()).pipe(mocha())
        .on("error", ()=>gulp.emit("end"));
}
