import gulp from "gulp";
import cleanTask from "./gulp_tasks/clean";
import lintTask from "./gulp_tasks/lint";

gulp.task("clean",cleanTask());

gulp.task("lint",["clean"],lintTask());

gulp.task("default",()=> console.log("Default task called"));

