// let a = 10;
// let b = 20;

// console.log("sum of 10 ans 20 is: " + a + b);
// console.log("sum of 10 ans 20 is " + (a + b));
// console.log(a + b + " is sum of 10 and 20 ");

// output
// sum of 10 ans 20 is: 1020
// vd1.js:5 sum of 10 ans 20 is 30
// 30 is sum of 10 and 20

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// type conversion (coercion) in js

// console.log("1" + 1); // 11 ak string ak number hai toh...conctination
// console.log("1" - 1); // 0  string ko number me convert krke subtraction
// console.log("1" * 1); // 1  string ko number me convert krke multiplication
// console.log("1" / 1); // 1  string ko number me convert krke division

// +++++++++++++++++++++++++++++++++++++
// type conversion/casting

// let age = Number(prompt("Enter your age: "));

// age = Number(age); // convert to number
// console.log(typeof age); agar wo convert ho skta hai toh honga warna NaN

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// swapping two variables 3 methods

// 1-swap with extra variable
// let a = 10;
// let b = 20;
// let c;

// c = a; // c=10, a=10;copy
// a = b; // a=20, b=20;
// b = c; // b=10

// console.log(a);
// console.log(b);

// ++++++++++++++++++

// 2-swap without extra variable
// let a = 10;
// let b = 20;

// a = a + b; // a=30,
// b = a - b; // b=10,
// a = a - b; // a=20

// console.log(a, b);

// +++++++++++++
// 3 - swap with destructuring

// let a = 10;
// let b = 20;

// [a, b] = [b, a];
// console.log(a, b); // 20 10
