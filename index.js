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

//arithmetic operators
 let x1 = 10; 
 let y = 3; 

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

//increment (++)
 console.log(x++);
 console.log(x);

//decrement (--)
 console.log(--x);

//assignment operator
 let x3  = 10;

 x = x + 5;
 x += 5;

 x = x * 3
 x *= 3;
  
/*comparison operators: 
confirms the validity of a 
comparison
*/
  
 let x2 = 1;
 //relational 
 console.log(x > 0);
 console.log(x >= 1);
 console.log(x < 1);
 console.log(x <= 1);
 //equality
 console.log(x === 1);
 console.log(x !== 1);

//equality operators 

 //strict equality (type + value)
 console.log(1 === 1); 
 console.log('1' === 1);
 //lose equality (value only, type corrects automatically)
 console.log(1 == 1);
 console.log('1' == 1);

//ternary / conditional operator
 /* if a customer has more than 100 pts, they
 are a 'gold' customer, otherwise,
 they are a 'silver' customer. */

 let points = 110;
 let type = points > 100 ? 'gold' : 'silver';
 console.log(type);

//logical AND (&&)
// returns TRUE if both operands are TRUE
/* logical OR (||)
returns TRUE if one of the operands is TRUE*/
 console.log(true && false);
 let highIncome = false;
 let goodCreditScore = true;
 let eligibleForLoan = highIncome || goodCreditScore;
 console.log('eligible', eligibleForLoan);

 //NOT (!)
 let applicationRefused =! eligibleForLoan;
 console.log('application refused', applicationRefused);

/* logical operators with
non-booleans */
 //falsy (false) -- anything otherwise = truthy//
 let userColor = undefined;
 let defaultColor = 'blue';
 let currentColor = userColor || defaultColor;
 console.log(currentColor);

/* bitwise operators */
 //3 = 00000011
 //R = 00000000
 // https://www.rapidtables.com/convert/number/decimal-to-binary.html
 console.log(1 | 2); //bitwise OR
 console.log(1 & 2);
 //unfinished +++

//operators precedence
 let x = (2 + 3) * 4;
 console.log(x);

//if n else 
 // hour
 /* if hour is between 6AM n 12PM: 'good morning!'
 if it is between 12PM n 6PM: 'good afternoon!'
 otherwise: 'good evening!' */
 let hour = 10;
 if (hour >= 6 && hour < 12) 
        console.log('good morning!');
    else if (hour >= 12 && 18)
        console.log('good afternoon!');
    else 
        console.log('good evening!');

/*switch n case 
  | you can compare the value of a variable against a 
    bunch of other values of any type */
 let role = 'guest';

 switch (role) {
     case 'guest': 
     console.log('guest user');
     break;

     case 'moderator':
        console.log('moderator user');
        break;


        default: 
        console.log('unknown user');
 }
 if (role === 'guest') console.log('guest');
 else if (role === 'moderator') console.log('moderator');
 else console.log('unknown user');

//for : loop will execute as long as condition is TRUE //
for (let a = 0; a < 5; a++) {
    console.log('hello world!', a);
}
for (let a = 1; a <= 5; a++) {
    if (a % 2 != 0) console.log(a);
}
/* while loop : a loop that continues to run and
execute a while statement as long as a predetermined
condition holds TRUE 
*/
/*let i = 0;
while (i <= 5) {
    if (i % 2 != 0) console.log(i);
    i++
} */

/* || do--while loops : always executed at least 
ONCE, even if the condition is FALSE. || */
// let i = 0; 
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

//infinite loopz : executes infinitely; forever
 
 let i = 0;
 while (1 < 5) {
    console.log(i);
    // i++;
 }

 for (let i = 0; i > 0; i++)
    console.log(i);

 /* for..in loop : to iterate over the properties of an object
 or elements in an array
 */
 const person = {
    name: 'mosh',
    age: '30'
 };

 for (let key in person[key])
    console.log(key);

 //dot notation
 person.name
 //bracket notation
 person['name']

 const colors = ['red', 'green', 'blue'];

 for (let index in colors)
console.log(index, colors[index]);

//for...of loops : similar to for..in. use 'of' instead of 'in'
 const colors = ['red', 'green', 'blue'];

 for (let color of colors)
    console.log(color);

/*break and continue : can change how loop behaves */
let j = 0;
while(j <=10) {
//if (i === 5) break;
if (j % 2 === 0) {
    j++;
    continue;
}

    console.log(j);
    j++;
}

