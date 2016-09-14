import gulp from "gulp";
import cleanTask from "./gulp_tasks/clean";

gulp.task("clean",cleanTask());

gulp.task("default",()=> console.log("Default task called"));

