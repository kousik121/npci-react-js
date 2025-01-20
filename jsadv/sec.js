function* MyGen() {
    console.log("First gen");
    yield "First run";
    console.log("Second gen");
    yield "Second run";
    console.log("Third gen");
    yield "Third run";
    console.log("Fourth gen");
    yield "Fourth run";
    console.log("Fifth gen");
    yield "Fifth run";
}

var myGen = MyGen();
for (let i = myGen.next(); i.done != true; i = myGen.next()) {
    console.log(i.value);
}