import config from "../config";
import livereload from "gulp-livereload";
import nodemon from "gulp-nodemon";
import notify from "gulp-notify";

function onError(error) {
    if (error.syscall !== "listen") throw error;
    console.error("Server Error", error.code, error);
    process.exit(1);
}

function onListening(server) {
    return function () {
        const addr = server.address();
        console.log(`Listening on ${typeof addr === "string" ? addr : addr.port}`);
    };
}

export default function (gulp) {
    return function () {
        livereload.listen();
        nodemon({
            script: config.getServerScript(),
            watch: config.build.src,
            execMap:{
                js: config.getBabelNode()
            },
            tasks:["webpack"],
            ext:"*"
        }).on("restart", () =>
            gulp.src(config.getServerScript())
                .pipe(livereload())
                .pipe(notify("Reloading page, please wait....")));
    }
}
