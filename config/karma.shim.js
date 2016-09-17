/**
 * Created by ralemy on 9/17/16.
 */

import config from "./config";
import angular from "angular";
import angularRoute from "angular-route";
import angularMocks from "angular-mocks";

let testContext = require.context(config.getAngularApp(), true, /\.spec\.js/);
testContext.keys().forEach(testContext);
