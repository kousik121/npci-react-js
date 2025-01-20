// import str from './moda.js';
// console.log(str);
//#region 
var modbb = require('./modb');
var modb = new modbb.MyMod();
modb.funa();
modb.funb();
console.log(modb.func());
const obj = new modb.Books("Ramcharith manas", "Tulsidas");
console.log(JSON.stringify(obj));
console.log(modb.fund(10));
//#endregion

var modc = require('./modc');
const objCar = new modc.Cars("Octavia", "Skoda");
console.log(JSON.stringify(objCar));