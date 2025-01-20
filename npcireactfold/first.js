function first() {
    console.log(Math.sqrt(4));
}

const sec = function(){
    console.log(Math.sqrt(2));
}

const third = () =>{
    console.log(Math.sqrt(9));
}

function rootCalc(p) {
    return Math.sqrt(p);
}
//console.log(rootCalc(25));

function add(a, b) {
    return a + b;
}
//console.log(add(1982, 'hello'));

function listSum(q) {
    let result = 0;
    for (i = 0; i < q.length; i++) {
        result += q[i];
    }
    return result;
}
//console.log(listSum([1, 2, 3]));

const sumArr = (...a) => {
    const arr = [...a];
    let sum = 0;
    arr.forEach(n => {
        sum += n;
    });
    return sum;
}
const retval = sumArr(1, 2, 3, 4, 5);
//console.log(retval);

const myFun = new Function('a', 'b', 'return a+b');
//console.log(myFun(2, 3));

(function () {
    console.log("I am weird");
})();

(function (a) {
    console.log(Math.sqrt(a));
})((function () {return 2})());

const pythtrip = () => {
    return Math.hypot(3, 4);
}
console.log(pythtrip());

(function (a, b, c) {
    console.log(Math.pow(a+b+c, 1/3));
})(10, 11, 12);

const fund = function(a,f) {
    console.log('Started working on ' + a);
    f(a);
} 
const cb = function(a) {
    console.log('Finished working on function ' + a);
}
//fund('hi', cb);

async function ffa() {
    return "Async function";
}
ffa().then(x => console.log(x));

const ffb = async () => {
    return Math.log(12);
}
ffb().then(x => console.log(x));

var xx = false;
xx?console.log("Its true"):console.log("Its false");

var arr2 = [[2, 3], [4, 5], [6, 7]];
arr2.forEach(x => x.forEach(n => console.log(n)));

var arr3 = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 4, 4, 3];
var set = new Set();
for (let i in arr3) {
    set.add(arr3[i]);
}
console.log(set);

var arr4 = ['a', 'a', 'a', 'b', 'b', 'c', 'd'];
var set1 = new Set();
for (let j of arr4) {
    set1.add(j);
}
console.log(set1);

var arr5 = ['Physics', 'Nuclear physics', 'Chemistry', 'Biology'];
arr5.forEach(function(z){console.log(z)});
arr5.map(z => console.log(z));
console.clear();
console.log("Hi");

var arr11 = [1, 2, 3, 4, 5];
var arr12 = ['Physics', 'Nuclear physics', 'Chemistry', 'Biology', 'Chemistry'];
var map = new Map();
for(let i = 0; i < arr11.length; i++) {
    map.set(arr11[i], arr12[i]);
}
console.log(map);

function seccode() {
    let arr = [1, 2, 3, 4, 5];
    let arr2 = Array.from(['a', 'e', 'i']);
    arr.push("koushik");
    console.log(arr);
    arr.unshift(2122);
    console.log(arr);
    arr.pop();
    console.log(arr);
    arr.shift();
    console.log(arr);

    var k = arr.slice(0, 1);
    var l = arr.slice(1, arr.length);
    k.push(21);
    var p = k.concat(l);
    console.log(p);
}

function fircode() {
    let a = 10;
    let b = 'This is a string';
    let c = true;
    let d = null;
    let e;
    let f = Symbol("a");
    let g = { id: 102, name: "Guna" };
    let h = BigInt("1111111111111111");
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
    console.log(typeof g);
    console.log(typeof h);
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("*".repeat(10));
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 10);
    let l = 'This is a string which is written inside the file';
    let arr = l.split('');
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);

    }
    console.log(f);
}
