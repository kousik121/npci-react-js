const { Books } = require('../models/Books')

function bList() {
    let bList = [];
    var arr1 = [15, 32, 13, 40, 25];
    var arr2 = ['Ramayan', 'Mahabharath', 'Last sighof moor', 'Elephant song', 'Sakuntalam'];
    var arr3 = ['Valmiki', 'Ved Vyas', 'Salman Rushdie', 'Wilbur smith', 'Kalidas'];
    for (let i = 0; i < arr1.length; i++) {
        const book = new Books(arr1[i], arr2[i], arr3[i]);
        bList.push(book);
    }
    return bList;
}
module.exports.bList = bList;