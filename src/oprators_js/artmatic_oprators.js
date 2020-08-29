// First example in athematic operators
// + (Plus Sign)
let firstsum = (x, y) => ( x + y);
console.log(firstsum(4, 5));

// Second  example in athematic operators

let sum = (x, y) => ( x + y);

console.log(sum("Ashish", " Singh"));

// First Example - (Minus Sign)
let minus = (x, y) => ( x - y);

console.log(minus(19, 6));

// First Example x (Multiply  Sign)
let multi = (x, y) => (x * y);

console.log(multi(55, 6));

// First. example / (Divide Sign)
let divide = (a, b) => (a / b);
console.log(divide(44,5));

// First. example % (Modulos Sign)
let modul = (a, b) => (a % b);
console.log(modul(78, 18));

// Logical Oprators Start
// Let Start with && Oprators

let firstand = (x,y)=>  x>y && y>x;
console.log(firstand(10,5));

//  Let start OR oprators
let firstor = (x,y)=>  x>y || y>x;
console.log(firstor(10,5));

// Let start ?? nullcolasing

let firstnull = (x,y)=> x>y ?? y>x;
console.log(firstnull(10,5));
