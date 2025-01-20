function applyTwice(a,f){
return f(f(a));
}
function addTwo(a){
return a+2;
}
const aa = applyTwice(1, addTwo);
console.log(aa)
var bb = [1, 2, 3, 4, 5].reduce((a,b) => a+b);
console.log(bb);