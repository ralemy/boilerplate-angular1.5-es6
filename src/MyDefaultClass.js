class MyDefaultClass {
    constructor(counter) {
        this.counter = counter || 0;
    }

    static staticMethod() {
        console.log("static method called");
    }

    dynamicMethod() {
        console.log(this.counter + 10);
    }
}

export default MyDefaultClass;
