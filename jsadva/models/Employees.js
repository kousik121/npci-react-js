class Employees {
    constructor(id, name, email, desig, salary) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.desig = desig;
        this.salary = salary;
    }
    toString() {
        const finStr = `Id:${this.id}\nName:${this.name}\nEmail:${this.email}\nDesignation:${this.desig}\nSalary:${this.salary}`;
        return finStr;
    }
}
module.exports.Employees = Employees;