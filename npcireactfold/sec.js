class Books {
    constructor(name, auth) {
        this.name = name;
        this.auth = auth;
    }
}

const book = new Books('Last sigh of moor', 'Salman Rushdie');
console.log(JSON.stringify(book));

class A {
    tester() {
        console.log("From parent");
    }
}
class B extends A {

}
const obj = new B();
obj.tester();