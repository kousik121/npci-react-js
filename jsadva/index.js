var empMod = require('./dao/emplist');
let empArr = empMod.retempList();

var ids = empArr.map(n => n.id);
ids.sort((a, b) => b - a);
console.log(ids[0]);

function perAnnumSalaryEmp() {
    empArr.filter(n => n.name === 'Manish').map(n => n.salary).forEach(n => console.log(n * 12));
}

function perAnnumSalary(emp) {
    return emp.salary * 12;
}
//empArr.map(n => console.log(perAnnumSalary(n)));

//select * from Employees order by salary desc
function srtDescBySalary() {
    var finArr = empArr.sort((a, b) => b.salary - a.salary);
    var itr = empArr[Symbol.iterator]();
    for (let i = itr.next(); i.done !== true; i = itr.next()) {
        console.log(i.value.toString());
    }
}

//select * from Employees order by salary
function srtAscBySalary() {
    empArr.sort((a, b) => a.salary - b.salary).forEach(n => console.log(n.toString()));
}

//select id, name from employees
function fun2() {
    empArr.forEach(n => {
        console.log(`${n.id}, ${n.name}`);
    });
}

//select * from Employees order by id desc
function srtDesc() {
    empArr.sort((a, b) => b.id - a.id).map(n => console.log(n.toString()));
}

//select * from Employees order by id
function sortAsc() {
    empArr.sort((a, b) => a.id - b.id).forEach(n => console.log(n.toString()));
}

//select * from Employees where the name in ('M%')
function filQuery() {
    empArr.filter(n => n.name === 'Manish' || n.name === 'Mukesh').forEach(n => console.log(n.toString()));
}

//select * from Employees
function fun1() {
    empArr.forEach(n => {
        console.log(n.toString());
    });
}
