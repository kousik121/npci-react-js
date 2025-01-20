/**
 * Function which illustrates iterating through array
 * @author koushik T
 */

//#region 
function itrArray() {
    let arr = ["Gita", "Bhaagavath", "Granthsahib", "Quran", "Bible"];
    var itr = arr[Symbol.iterator]();
    for (let i = itr.next(); i.done !== true; i = itr.next()) {
        console.log(i.value);
    }
}
//#endregion

//#region 
function setIter() {
    var arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8];
    var set = new Set(arr);
    var itr = set.keys();
    for (let i = itr.next(); i.done != true; i = itr.next()) {
        console.log(i.value);
    }
    console.log(typeof set);
}
//#endregion

var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["Physics", "Biology", "Geology", "Nuclear physics", "Zoology"];
var map = new Map();
for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], arr2[i]);
}

firIter();

//#region 
function sevenIter() {
    var itra = map.keys();
    for (let i = itra.next(); i.done != true; i = itra.next()) {
        let k = i.value;
        console.log(k + " " + map.get(k));
    }
}
//#endregion

//#region 
/**
 * iteration through keys and map loop
 */
function sixIter() {
    Array.from(map.keys()).map(n => {
        const a = n;
        console.log(a + " " + map.get(a));
    });
}
//#endregion

//#region 
/**
 * using for each applied on map to iterate
 */
function fiveIter() {
    map.forEach((a, b) => {
        console.log(b + " " + a);
    });
}
//#endregion\

//#region 
/**
 * iterating using map entries and taking it as an array and generating iterators from it
 */
function fourIter() {
    var arr5 = Array.from(map.entries());
    var itrd = arr5[Symbol.iterator]();
    for (let i = itrd.next(); i.done != true; i = itrd.next()) {
        console.log(i.value[0] + " " + i.value[1]);
    }
}
//#endregion

//#region 
/**
 * iterating using the iterator obtained from map.entries
 */
function thirdIter() {
    var itrc = map.entries();
    for (let i = itrc.next(); i.done != true; i = itrc.next()) {
        console.log(i.value[0] + " " + i.value[1]);
    }
}
//#endregion

//#region 
/**
 * iterating using forEach obtained on map.keys()
 */
function secIter() {
    Array.from(map.keys()).forEach(n => console.log(n + " " + map.get(n)));
}
//#endregion

//#region 
/**
 * iterating by creating iterator from the array of keys
 */
function firIter() {
    var arr3 = Array.from(map.keys());
    var itrb = arr3[Symbol.iterator]();
    for (let i = itrb.next(); i.done != true; i = itrb.next()) {
        let k = i.value;
        console.log(k + " " + map.get(k));
    }
}
//#endregion