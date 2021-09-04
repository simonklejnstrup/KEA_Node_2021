// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log("Exercise 1: " + letters[1]);


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

friends[0] = "Simon";
friends[1] = "Anne_Mette";
friends[2] = "Kamma";

console.log("Exercise 2: " + friends);

// What a lonely array. Add at least 3 friend objects to it.  


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

const index = significantMathNumbers.indexOf(1729);

console.log("Exercise 3: " + index);

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

diet.splice(2, 0, "hamburger", "soda", "pizza");

console.log("Exercise 4: " + diet);

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket




// --------------------------------------
// Exercise 5 - Remove element

diet.pop();

console.log("Exercise 5: " + diet);


// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 





// --------------------------------------
// Exercise 6 - Copy array

const dinnerTray = [...diet];

console.log("Exercise 6: " + dinnerTray);

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  



// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

let log = "";

for (let i = 0; i < lettersExpanded.length; i++) {

    if (i%2 == 1){
        log += lettersExpanded[i] + " ";
    } 
  } 

  console.log("Exercise 7: " + log);



// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

let anotherLog = "";


    for (let i = numbers.length; i >= 0; i--) {
    
    if (numbers[i] > 6 || numbers[i] < 0){
        anotherLog += numbers[i] + " ";
    } 
    else {
        discardedNumbers.push(numbers[i])
        numbers.splice(i, 1);
    }
  }
  console.log("Exercise 8:")
  console.log("Log: " + anotherLog);
  console.log("Numbers: " + numbers);
  console.log("Discarded numbers: " + discardedNumbers);

// --------------------------------------