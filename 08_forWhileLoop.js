/*
A for loop is a control flow statement for specifying iteration, 
which allows code to be executed repeatedly. 

A for loop has two parts: a header specifying the iteration, 
and a body which is executed once per iteration. 
The header often declares an explicit loop counter or loop variable, 
which allows the body to know which iteration is being executed. 
For loops are typically used when the number of iterations is known before entering the loop. 

for (initialExpression; condition; updateExpression) {
    // for loop body
}

Here,

The initialExpression initializes and/or declares variables and executes only once.
The condition is evaluated.
If the condition is false, the for loop is terminated.
If the condition is true, the block of code inside of the for loop is executed.
The updateExpression updates the value of initialExpression when the condition is true.
The condition is evaluated again. This process continues until the condition is false.
*/

// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

/*
The syntax of the while loop is:

while (condition) {
    // body of loop
}
Here,

A while loop evaluates the condition inside the parenthesis ().
If the condition evaluates to true, the code inside the while loop is executed.
The condition is evaluated again.
This process continues until the condition is false.
When the condition evaluates to false, the loop stops.

*/

// program to display numbers from 1 to 5
// initialize the variable
let i = 1;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}

// Example 2: Sum of Positive Numbers Only
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);
