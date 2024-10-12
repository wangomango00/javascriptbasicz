/* | declare 2 variables, and set variable a to red and 
set var b to blue 
log into console 
next, write a piece of code to swap the values
of each variable 
| */
let a = "red";
let b = 'blue';
let c = a;
a = b;
b = c; 
console.log(b);
console.log(a);
// excercise 1
// declare a function, set a name & set the values to a, and b.
// if statement : if a > b, return a -- else, return b
//simple way
let number = max(50, 10);
console.log(number);

function max(a, b) {
    if (a > b) return a;
    return b;

    
}

// optimized way

function max(a, b) {
    return (a > b) ? a : b;   
}

