/*
An if else statement in programming is a conditional statement 
that runs a different set of statements depending on whether an expression is true or false. 

In JavaScript, there are three forms of the if...else statement.

if statement
if...else statement
if...else if...else statement
*/

//Example 1: if Statement
// check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");

//JavaScript if...else statement
// check if the number is positive or negative/zero

// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");

//JavaScript if...else if statement
//However, if you need to make a choice between more than two alternatives, if...else if...else can be used.

// check if the number if positive, negative or zero

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");

//Example 4: Nested if...else Statement
// check if the number is positive, negative or zero
if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}