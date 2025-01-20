const { bList } = require("./dao/booklist");

mainFun();
function mainFun() {
    var arr = bList();
    var obj = arr.sort((a, b) => a.id - b.id).flat(0);
    console.log(JSON.stringify(obj));
}