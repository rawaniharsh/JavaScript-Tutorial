/*
Switch case statement evaluates a given expression and based on 
the evaluated value(matching a certain condition), 
it executes the statements associated with it. Basically, 
it is used to perform different actions based on different conditions(cases). 
*/

// program using switch statement
let a = 1;

switch (a) {
    case "1":
        a = 1;
        break;
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;

    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);