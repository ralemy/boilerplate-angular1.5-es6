import gulp from "gulp";
import cleanTask from "./gulp_tasks/clean";
import lintTask from "./gulp_tasks/lint";
import mocha from "./gulp_tasks/mocha";
import webpack from "./gulp_tasks/webpack";
import server from "./gulp_tasks/server";


gulp.task("clean",cleanTask());

gulp.task("lint",["clean"],lintTask(gulp));

gulp.task("mocha",["lint"],mocha(gulp));

gulp.task("webpack",["mocha"],webpack());

gulp.task("default", ["webpack"]);

gulp.task("serve",server(gulp));
