// First example in athematic operators
// + (Plus Sign)
const firstsum = (x, y) => x + y;
console.log(firstsum(4, 5));

// Second  example in athematic operators

const sum = (x, y) => x + y;

console.log(sum('Ashish', ' Singh'));

// First Example - (Minus Sign)
const minus = (x, y) => x - y;

console.log(minus(19, 6));

// First Example x (Multiply  Sign)
const multi = (x, y) => x * y;

console.log(multi(55, 6));

// First. example / (Divide Sign)
const divide = (a, b) => a / b;
console.log(divide(44, 5));

// First. example % (Modulos Sign)
const modul = (a, b) => a % b;
console.log(modul(78, 18));

// Logical Oprators Start
// Let Start with && Oprators

const firstand = (x, y) => x > y && y > x;
console.log(firstand(10, 5));

//  Let start OR oprators
const firstor = (x, y) => x > y || y > x;
console.log(firstor(10, 5));

// Let start ?? nullcolasing

const firstnull = (x, y) => x > y ?? y > x;
console.log(firstnull(10, 5));
