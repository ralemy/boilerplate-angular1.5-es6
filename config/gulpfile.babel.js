import gulp from "gulp";
import cleanTask from "./gulp_tasks/clean";
import lintTask from "./gulp_tasks/lint";
import webpack from "./gulp_tasks/webpack";

gulp.task("clean",cleanTask());

gulp.task("lint",["clean"],lintTask(gulp));

gulp.task("webpack",["lint"],webpack());

gulp.task("default",()=> console.log("Default task called"));

