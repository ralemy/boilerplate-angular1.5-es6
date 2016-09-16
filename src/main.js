/**
 * Created by ralemy on 9/14/16.
 * This entry point file should not be edited.
 */

import Myclass from "./MyDefaultClass";
import "./sass/base.scss";

class someClass {
    static someMethod() {
        Myclass.staticMethod();
        new Myclass(10).dynamicMethod();
    }
}

someClass.someMethod();

export default someClass;
