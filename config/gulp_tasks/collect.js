import config from "../config";
import requireDir from "require-dir";
import _ from "lodash";
import fs from "fs";

function makeMain(collection, prefix = "./app/") {
    const namespace = prefix.replace(/^[.]/, "").replace(/[/]/g, "_");
    return _.reduce(collection, (r, v, k)=> {
        if (v.default)
            r[namespace + k] = prefix + k;
        else
            _.merge(r, makeMain(v, `${prefix + k}/`));
        return r;
    }, {});
}

function makeLines(components) {
    const imports = _.reduce(components, (r, v, k)=> {
        return r.concat([`import ${k} from "${v}";`]);
    }, []);
    const logic = [
        `import { bootstrap,getApp } from "./${config.angular.bootstrap}"`,
        `const app = getApp("${config.angular.appName}");`
    ];
    const declarations = _.reduce(components, (r, v, k)=> {
        return r.concat([`${k}(app);`]);
    },[]);
    return imports.concat(logic).concat(declarations).concat([
        `bootstrap(app);`,
        ""
    ]);
}

export default function () {
    return function () {
        const collection = requireDir(config.getAngularApp(), {recurse: true}),
            components = makeMain(collection),
            lines = makeLines(components);
        fs.writeFileSync(config.getRootFile(),lines.join("\n"));
    };
}