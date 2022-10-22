/* 
There are eight basic data types in JavaScript. They are:

String	represents textual data	'hello', "hello world!" etc
Number	an integer or a floating-point number	3, 3.234, 3e-2 etc.
BigInt	an integer with arbitrary precision	900719925124740999n , 1n etc.
Boolean	Any of two values: true or false	true and false
undefined	a data type whose variable is not initialized	let a;
null	denotes a null value	let a = null;
Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');
Object	key-value pairs of collection of data	let student = { };
*/

/*
String is used to store text. In JavaScript, strings are surrounded by quotes:

Single quotes: 'Hello'
Double quotes: "Hello"
Backticks: `Hello`
*/

//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;

/* Single quotes and double quotes are practically the same and you can use either of them.

Backticks are generally used when you need to include variables or expressions into a string. 
This is done by wrapping variables or expressions with ${variable or expression} as shown above. 
*/

/* JavaScript Number
Number represents integer and floating numbers (decimals and exponentials). For example,

*/

//A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,

// const number1 = 3;
// const number2 = 3.433;
// const number3 = 3e5 // 3 * 10^5

const number1 = 3/0;
console.log(number1); // Infinity

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN

/* BigInt
In JavaScript, Number type can only represent numbers less than (2^53 - 1) 
and more than -(2^53 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.

*/

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); 

//JavaScript booleans
//Boolean represents one of two values: true or false

const dataChecked = true;
const valueCounted = false;

//JavaScript undefined
//The undefined data type represents value that is not assigned. 
//If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,
let value;
console.log(value); // undefined


//JavaScript null
//In JavaScript, null is a special value that represents empty or unknown value. For example,

const number = null;

//JavaScript Symbol
/* 
This data type was introduced in a newer version of JavaScript (from ES2015).

A value having the data type Symbol can be referred to as a symbol value. 
Symbol is an immutable primitive value that is unique. For example,
*/

// two symbols with the same description

const symValue1 = Symbol('hello');
const symValue2 = Symbol('hello');

//JavaScript Object
//An object is a complex data type that allows us to store collections of data. For example,

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};

// JavaScript typeof
//To find the type of a variable, you can use the typeof operator. For example,

const type = 'ram';
typeof(type); // returns "string"

const numberType = 4;
typeof(numberType); //returns "number"

const valueChecked = true;
typeof(valueChecked); //returns "boolean"

