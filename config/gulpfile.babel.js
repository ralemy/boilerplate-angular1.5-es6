import gulp from "gulp";
import cleanTask from "./gulp_tasks/clean";
import lintTask from "./gulp_tasks/lint";
import mocha from "./gulp_tasks/mocha";
import karma from "./gulp_tasks/karma";
import webpack from "./gulp_tasks/webpack";
import server from "./gulp_tasks/server";
import collect from "./gulp_tasks/collect";


gulp.task("clean",cleanTask());

gulp.task("lint",["clean"],lintTask(gulp));

gulp.task("collect",["lint"],collect());

gulp.task("mocha",["collect"],mocha(gulp));

gulp.task("karma",["lint"],karma());

gulp.task("webpack",["collect"],webpack());

gulp.task("default", ["webpack"]);

gulp.task("serve",server(gulp));
