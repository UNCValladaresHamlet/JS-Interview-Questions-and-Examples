////What are the data types supported by JavaScript?
// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof true // Returns "boolean"
// typeof undefined // Returns "undefined"
// typeof null // Returns "object" (kind of a bug in JavaScript)
// typeof Symbol('symbol') // Returns Symbol
// typeof 234567890123456789012345678901234567890n // Returns bigint

////What are the ways to define a variable in JavaScript? What are the differences?
//Var,Let,Const

// let x = function() {
    
//     if (true) {
// // console.log(v);
// // console.log(l);
// var v = 2;
// let l = 1;
// }
// // console.log(v);
// // console.log(l);
// }
// x();

//Var has function scope
//Let has block scope
//const has block scope
//Var gets hoisted / let doesn't
//Within the function, we first declare the v variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable.

// let person = "Nick";
// person = "John";
// console.log(person) // "John", reassignment is allowed with let

// const person2 = "Nick";
// person2 = "John" // Will raise an error, person can't be reassigned

//const cannot be reassigned after the 1st assignment of value

////What is the difference between "==" & "==="
//They are both comparsion operators
1 == "1"     // true, only checks if they are the same value

//strict equality
1 === "1"    // false, checks value and data type left side is a number and right side is a string so brings back false


