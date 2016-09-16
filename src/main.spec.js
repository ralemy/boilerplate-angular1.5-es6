/**
 * Created by ralemy on 9/15/16.
 * Sample spec unit test file to show use of mocha.
 */

import MyDefaultClass from "./MyDefaultClass";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
chai.should();

describe("MyDefaultClass" , () => {
    it("Should have a static function called staticMethod",()=>{
        return MyDefaultClass.staticMethod.should.be.ok;
    });
});