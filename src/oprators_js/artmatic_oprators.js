// First example in athematic operators
// + (Plus Sign)
let firstsum = (x, y) => (a = x + y);
console.log(firstsum(4, 5));

// Second  example in athematic operators

let sum = (x, y) => (sum = x + y);

console.log(sum("Ashish", " Singh"));

// First Example - (Minus Sign)
let minus = (x, y) => (minus = x - y);

console.log(minus(19, 6));

// Sec. example - (Minus Sign)
let minus = (a, b) => (b = b - a);
console.log(minus(56, 88));

// First Example x (Multiply  Sign)
let multi = (x, y) => (multi = x * y);

console.log(multi(55, 6));

// Sec. example x (Multiply  Sign)
let multi = (a, b) => (b = b * a);
console.log(multi(5, 88));

// First. example / (Divide Sign)
let divide = (a, b) => (b = b / a);
console.log(divide(5, 44));

// Sec. example / (Divide Sign)
let divide = (a, b) => (b = b / a);
console.log(divide(56, 88));

// First. example % (Modulos Sign)
let modul = (a, b) => (b = b % a);
console.log(modul(56, 88));

// Sec. example % (Modulos Sign)
let modul = (a, b) => (b = b % a);
console.log(modul(6, 8));

VM1556:18 Uncaught SyntaxError: Identifier 'minus' has already been declared
// First example in athematic operators
// + (Plus Sign)
let a = (x, y) => (a = x + y);
console.log(a(4, 5));

// Second  example in athematic operators

let sum = (x, y) => (sum = x + y);

console.log(sum("Ashish", " Singh"));

// First Example - (Minus Sign)
let minus1 = (x, y) => (minus1 = x - y);

console.log(minus1(19, 6));

// Sec. example - (Minus Sign)
let minus2 = (a, b) => (minus2 = b - a);
console.log(minus2(56, 88));

// First Example x (Multiply  Sign)
let multi1 = (x, y) => (multi1 = x * y);

console.log(multi1(55, 6));

// Sec. example x (Multiply  Sign)
let multi2 = (a, b) => (multi2 = b * a);
console.log(multi2(5, 88));

// First. example / (Divide Sign)
let divide1 = (a, b) => (divide1 = b / a);
console.log(divide1(5, 44));

// Sec. example / (Divide Sign)
let divide2 = (a, b) => (divide2 = b / a);
console.log(divide2(56, 88));

// First. example % (Modulos Sign)
let modul1 = (a, b) => (modul1 = b % a);
console.log(modul1(56, 88));

// Sec. example % (Modulos Sign)
let modul2 = (a, b) => (modul2 = b % a);
console.log(modul2(6, 8));
 
// Logical Oprators Start 
// Let Start with && Oprators 

let firstand = (x,y)=> a = x>y && y>x;
console.log(firstand(10,5));

//  Let start OR oprators
let firstor = (x,y)=> a = x>y || y>x;
console.log(firstor(10,5));

// Let start 

let firstell = (x,y)=> a = x>y ?? y>x;
console.log(firstell(10,5));

