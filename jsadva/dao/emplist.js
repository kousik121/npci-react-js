const { Employees } = require('../models/Employees');

function retempList(){
    let emplist = [];
    var arr1 = [31, 242, 12, 112, 241];
    var arr2 = ['Mukesh', 'Manish', 'Jayesh', 'Jaideep', 'Peter'];
    var arr3 = ['Mukesh@yahoo.com', 'Manish@yahoo.com', 'Jayesh@yahoo.com', 'Jaideep@yahoo.com', 'Peter@yahoo.com']
    var arr4 = ['CEO', 'Programmer', 'DevOps', 'COO', 'DBA', 'ML Programmer'];
    var arr5 = [21413, 23242, 13331, 12342, 54224];
    for (let i = 0; i < arr1.length; i++) {
        const emp = new Employees(arr1[i], arr2[i], arr3[i], arr4[i], arr5[i]);
        emplist.push(emp);
    }
    return emplist;
}
module.exports.retempList = retempList;