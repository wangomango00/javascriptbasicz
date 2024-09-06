// my first JS code!
console.log('Hello World');


//variable 
let sigma = 'sigma';
console.log(sigma);

//constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);



//primitive types
let name = 'mango'; // string literal
let age = '30'; //number literal
let isApproved = false; // boolean literal
let firstName = undefined; 
let selectedColor = null;

//objects & notations
let person = {
    name: 'mualani',
    age: '30'
};
//dot notation
person.name = 'sigewinne';

//bracket notation 
let selection = 'name';
person[selection] = 'furina';

console.log(person.name);


/*
arrays: 
arrays are data structures 
that we use to represent
a list of items 
 */
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

/*
functions: 
functions are a set of 
statements that perform 
a task or calculates a value
*/
//task performing function
function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName)
}

greet('lucy', 'maud montgomery');
//calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));
