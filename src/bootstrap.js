// import angular from "angular";

function getApp(appName) {
    console.log("appName would be", appName);
    return {
        name: appName
    };
}
function bootstrap(app) {
    console.log("bootstrapping", app.name);
}

export {getApp, bootstrap};
