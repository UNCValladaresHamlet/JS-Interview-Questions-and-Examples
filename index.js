////What are the data types supported by JavaScript?
// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof true // Returns "boolean"
// typeof undefined // Returns "undefined"
// typeof null // Returns "object" Object with empty value
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
// 1 == "1"     // true, only checks if they are the same value

// //strict equality
// 1 === "1"    // false, checks value and data type left side is a number and right side is a string so brings back false


//What is the difference between null and undefined?
//both represent empty value
//Undefined, Undefined means a variable has been declared but has not yet been assigned a value. When you define a variable with no value, Javascript gives it a value of undefined.
//null, An object with empty value

// let x = typeof(undefined)
// console.log(x) //returns undefined

// let y = typeof(null);
// console.log(y) //returns object

// ///////////////////////////////////////////////////////
// //What is prototypal inheritance?
// let car = function(model) { //constuctor
//     this.model = model;
// };
// car.prototype.getModel = function() {
//     return this.model;
// }
// let toyota = new car('toyota');
// console.log(toyota.getModel());

// let nissan  = new car('nissan');
// console.log(nissan.getModel());


//What is the difference between function declaration and function expression?

// console.log(a())
// console.log(b())
function a() {
    console.log('function declaration');
};

let b = function() {
    console.log('function expression');
}
// console.log(a())
// console.log(b())

//Function expression is an anonymous function that is saved into the variable. Since it is saved to the variable, it behaves like a variable