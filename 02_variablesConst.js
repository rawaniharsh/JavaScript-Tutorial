/* 
JavaScript Variables and Constants

a variable is a container (storage area) to hold data

JavaScript is a "dynamically typed language", which means that, 
unlike some other languages, you don't need to specify what data 
type a variable will contain (numbers, strings, arrays, etc.).

In JavaScript, we use either var or let keyword to declare variables. For example,

var is used in the older versions of JavaScript	
let is the new way of declaring variables starting ES6 (ES2015).

var is function scoped (will be discussed in later tutorials).	
let is block scoped (will be discussed in later tutorials).

*/

var x;
let y;

// JavaScript Initialize Variables
// We use the assignment operator = to assign a value to a variable.

x = 5;

//In JavaScript, it's possible to declare variables in a single statement.

let a = 5, b = 6, c = 7;

//If you use a variable without initializing it, it will have an undefined value.

console.log(y); // undefined

//Change the Value of Variables

// 5 is assigned to variable x
let x = 5; 
console.log(x); // 5

// vaue of variable x is changed
x = 3; 
console.log(x); // 3


//JavaScript Constants
// The const keyword was also introduced in the ES6(ES2015) version to create constants. For example,

const x = 5;
x = 10;  // Error! constant cannot be changed.
console.log(x)




