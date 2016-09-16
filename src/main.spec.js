/**
 * Created by ralemy on 9/15/16.
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