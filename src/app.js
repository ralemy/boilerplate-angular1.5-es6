/**
 * Created by ralemy on 9/14/16.
 * File to test gulp lint task
 */

import Myclass from "./MyDefaultClass";

class someClass {
    someMethod() {
        this.someVariable = 10;
    }
}

Myclass.staticMethod();
new Myclass(10).dynamicMethod();
