// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const sum3 = +numberOne + +numberTwo;
console.log(sum3);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sum4 =  parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);

console.log(Number(sum4).toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const avg = (one + two + three) / 3;
console.log(Number(avg).toFixed(5));






// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2));




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const firstPart = fact.slice(0,17);
const lastPart = fact.slice(18, 27);

const finalString = firstPart + fact.charAt(17).toUpperCase() + lastPart;

console.log(finalString);




// --------------------------------------