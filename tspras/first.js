var x = 10;
console.log(x);
var y = "This is a string";
console.log(y);
var z = true;
console.log(z);
var obj = { id: 10, name: "Satish" };
console.log(JSON.stringify(obj));
var MyCls = /** @class */ (function () {
    function MyCls(a, b) {
        this._id = a;
        this._name = b;
    }
    return MyCls;
}());
var obja = new MyCls(21, "Sunidhi Chauhan");
console.log(JSON.stringify(obja));
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["sun"] = 0] = "sun";
    MyEnum[MyEnum["mon"] = 1] = "mon";
    MyEnum[MyEnum["tue"] = 2] = "tue";
    MyEnum[MyEnum["wed"] = 3] = "wed";
    MyEnum[MyEnum["thu"] = 4] = "thu";
    MyEnum[MyEnum["fri"] = 5] = "fri";
    MyEnum[MyEnum["sat"] = 6] = "sat";
})(MyEnum || (MyEnum = {}));
console.log(MyEnum.sun);
console.log(MyEnum.thu);
var MyChdCls = /** @class */ (function () {
    function MyChdCls() {
    }
    MyChdCls.testera = function () {
        console.log("Static method");
    };
    MyChdCls.prototype.testA = function () {
        console.log("First method");
    };
    MyChdCls.prototype.testB = function () {
        console.log("Second method");
    };
    MyChdCls.prototype.testC = function () {
        console.log("Third method");
    };
    MyChdCls.prototype.testD = function () {
        console.log("Fourth method");
    };
    return MyChdCls;
}());
var objb = new MyChdCls();
objb.testA();
objb.testB();
objb.testC();
objb.testD();
MyChdCls.testera();
function myFun(a) {
    return Math.sqrt(a);
}
console.log(myFun(4));
