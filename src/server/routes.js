/**
 * Created by ralemy on 9/16/16.
 */

import index from "./routes/home";

export default function (app) {
    app.use("/", index);
}
