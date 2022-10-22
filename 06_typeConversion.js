/*
In programming, type conversion is the process of converting data of one type to another. 
For example: converting String data to Number.

There are two types of type conversion in JavaScript.

Implicit Conversion - automatic type conversion
Explicit Conversion - manual type conversion

JavaScript Implicit Conversion
In certain situations, JavaScript automatically converts one data type to another 
(to the right type). This is known as implicit conversion.

When a number is added to a string, JavaScript converts the number to a string before concatenation.
*/

// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

// numeric string used with - , / , * results number type
//Example 2: Implicit Conversion to Number

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

/*
JavaScript Explicit Conversion
You can also convert one data type to another as per your needs. 
The type conversion that you do manually is known as explicit type conversion.

1. Convert to Number Explicitly
To convert numeric strings and boolean values to numbers, you can use Number(). For example,
*/

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

//2. Convert to String Explicitly
//number to string
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

//3. Convert to Boolean Explicitly
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false