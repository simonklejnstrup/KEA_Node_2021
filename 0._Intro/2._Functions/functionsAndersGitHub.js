// hoisting (function declarations are lifted up)
// greetings();

function greetings() {
    console.log("Hello World");
}

const newGreetings = function greetingsTwo() {
    console.log("Hello World");
};

// anonymous function (a function with no name)
const anonymousFunctionGreeting = function () {
    console.log("Hello World");
};

// console.log(anonymousFunctionGreeting);
// anonymousFunctionGreeting();

function interact(anyFunctionReference) {
    // Why callbacks? It allows the function run with default code
    // and when it's ready it calls OUR function that we give to it
    // imagine that before next line some code is running here....
    anyFunctionReference();
}

interact(anonymousFunctionGreeting);


/* interact(function () {
    console.log("Pooooooke");
}); */

// interact(() => console.log("Kick"));