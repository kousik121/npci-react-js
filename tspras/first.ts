let x: number = 10;
console.log(x);
let y: string = "This is a string";
console.log(y);
let z: boolean = true;
console.log(z);
let obj = {id: 10, name: "Satish"};
console.log(JSON.stringify(obj));
class MyCls{
    _id: number;
    _name: string;
    constructor(a: number, b: string) {
        this._id = a;
        this._name = b;
    }
}
const obja: MyCls = new MyCls(21, "Sunidhi Chauhan");
console.log(JSON.stringify(obja));
enum MyEnum{
    sun, mon, tue, wed, thu, fri, sat
}
console.log(MyEnum.sun);
console.log(MyEnum.thu);

interface Iface {
    testA();
    testB();
}
interface IfaceA {
    testC();
    testD();
}
class MyChdCls implements Iface, IfaceA {
    static testera() {
        console.log("Static method");
    }
    testA() {
        console.log("First method");
    }
    testB() {
        console.log("Second method");
    }
    testC() {
        console.log("Third method");
    }
    testD() {
        console.log("Fourth method");
    }
}
var objb = new MyChdCls();
objb.testA();
objb.testB();
objb.testC();
objb.testD();
MyChdCls.testera();

function myFun(a: number): number {
    return Math.sqrt(a);
}
console.log(myFun(4));

