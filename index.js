//                                              What are the data types supported by JavaScript?
// Answer: Primitive and objects
// typeof returns a string description indicating the type of operand
// SNNUBO (String, Number, Null, Undefined, Boolean, Object)

// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof null // Returns "object" because its technically an Object with empty value 
// typeof undefined // Returns "undefined"
// typeof true // Returns "boolean"
// typeof Symbol('symbol') // Returns Symbol
// typeof 234567890123456789012345678901234567890n // Returns bigint

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                What are the ways to define a variable in JavaScript? What are the differences?
// Var,Let,Const

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

// Var has function scope
// Let has block scope
// const has block scope
// Var gets hoisted / let doesn't
// Within the function, we first declare the v variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable.

// let person = "Nick";
// person = "John";
// console.log(person) // "John", reassignment is allowed with let

// const person2 = "Nick";
// person2 = "John" // Will raise an error, person can't be reassigned

// const cannot be reassigned after the 1st assignment of value


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                              What is the difference between "==" & "==="
// They are both comparsion operators
// 1 == "1"     // true, only checks if they are the same value

// //strict equality
// 1 === "1"    // false, checks value and data type left side is a number and right side is a string so brings back false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                             What is the difference between null and undefined?
// both represent empty value
// Undefined, Undefined means a variable has been declared but has not yet been assigned a value. When you define a variable with no value, Javascript gives it a value of undefined.
// Null, An object with empty value. An intentional absence of data.

// let x = typeof(undefined)
// console.log(x) //returns undefined

// let y = typeof(null);
// console.log(y) //returns object

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  What is prototypal inheritance?
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  What is the difference between function declaration and function expression?

// console.log(a())
// console.log(b())
// function a() {
//     console.log('function declaration');
// };

// let b = function() {
//     console.log('function expression');
// }
// console.log(a())
// console.log(b())


// Function expression is an anonymous function that is saved into the variable. Since it is saved to the variable, it behaves like a variable. It also has a variable scope so it won't be available before its definition.
//A function that is declared without any named identifier is known as an ANONYMOUS function, in general it is inaccessible after its declaration.
// function declaration can be called before the function is defined

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                Explain hoisting?
//Hoisting is the default behavior of JavaScript where all the variable and function declarations are moved on top. In simple words, we can say that Hoisting is a process in which, irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global. Variable initializations are not hoisted, only variable declarations are hoisted.

// console.log(message1); //output : undefined
// var message1 = "The variable Has been hoisted";


// message("Good morning"); //Good morning

// function message(name) {
//   console.log(name);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                                 What are global variables?
// Global variables are accessible through out the webpage or the document. Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable

// msg = "Hello"; // var is missing, it becomes global variable

//                                              What are the problems with global variables?
//The problem with global variables is the conflict of variable names of local and global scope. It is also difficult to debug and test the code that relies on global variables.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                             What is a strict mode in javascript
//Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a ???strict??? operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the Strict mode.


////                                             Why do you need strict mode?
//Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

////                                             How do you declare strict mode?
//The strict mode is declared by adding "use strict"; to the beginning of a script or a function. If declared at the beginning of a script, it has global scope.
// "use strict" strictly checks if the variable is defined using "var" keyword

// "use strict";
// x = 3.14; // This will cause an error because x is not declared
//             // and if you declare inside a function, it has local scope
// x = 3.14; // This will not cause an error.


// myFunction();
// function myFunction() {
//   "use strict";
//   y = 3.14; // This will cause an error
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                             What are closures?
//Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function???s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it.

// function Welcome(name) {
    //     var greetingInfo = function (message) {
        //       console.log(message + " " + name);
        //     };
        //     return greetingInfo;
        //   }
        //   var myFunction = Welcome("Hamlet");
        //   myFunction("Greetings Mr."); //Output: Welcome Hamlet
        //   myFunction("Hello there Mr."); //output: Hello Mr.Hamlet
        
        //As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.
        
        
////                                             Why do we need closures?
//Self contained modules, Self contained state
//Closure makes it possible for a function to have "private" variables
//Closure is a function having access to the parent scope, even after the parent function has closed.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////                                   Explain IIFE? What is the use of IIFE? 

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below.
// The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below.

// (function () {
    //     var message = "IIFE";
    //     console.log(message);
    //   })(); 
    //   console.log(message); //Error: message is not defined
    
    //Anonymous function which gets immediately invoked.
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                             What is the name collision in global scope ? Normal function vs IIFE?

// Name collision happens when you name the same variable names or method names in the same context.
// Because IIFE does not have name, so there is no way you can get name collision.
// A normal function has a name while IIFE does not have name. With a normal function you can have a name collision but with IIFE you will not have name collision.

// function func1() {
//     console.log("This is a first definition");
//   }

// function func1() {
//     console.log("This is a second definition");
//   }
// func1(); // This is a second definition

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                             What are design patterns ? Most used design patterns ?

// Design patterns are time tested architecture solutions. To create a single instance we can use singleton pattern, if the object creational process is complex, we can use factory pattern and so/
// Module Design pattern or the module revealing pattern is the most used design pattern.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                             What are the various ways to create Javascript objects?

// Object literal, Objects create method, Object constuctor, Function constructor, ES6 Class

// The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.Object literal property values can be of any data type, including array, function, and nested object.
// var object = {
//     name: "Sudheer",
//     age: 34
// };

// // The create method of Object creates a new object by passing the prototype object as a parameter
// var patnew = Object.create(pat);
// patnew.age = 10;

// // The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.
// var object = new Object();

// // Create any function and apply the new operator to create object instances,
// function Patient(name) {
//     this.name = name;
//     this.age = 21;
//   }
// var patient1 = new Patient("Sudheer");

// // ES6 introduces class feature to create the objects
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
// var object = new Person("Sudheer");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                               Explain Prototype chaining?

// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language. The prototype on object instance is available through Object.getPrototypeOf(object) or **proto** property whereas prototype on constructors function is available through Object.prototype.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                               What is the Temporal Dead Zone

// The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable???s binding and its declaration, is called the temporal dead zone.
