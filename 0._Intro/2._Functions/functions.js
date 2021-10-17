function greetings() {
    console.log("Hello World")
}

function hello(s, i) {
    console.log("S: ", s)
    console.log("i: ", i)

}

hello("Stefan", "Ingrid")

function hello2(p) {
    return p + " Hej"
    

}

console.log(hello2("Peter"))

//greetings();

const newGreeting = function greetingTwo(){
    console.log("newGreeting Hej")
}

newGreeting();

//Dot-notation virker ikke i ovenstående


function interact(anyFunctionReference){
    anyFunctionReference();
}

//interact(greetings);

function poke(msg){
    console.log(msg)
}

// interact(poke("Poke Poke"))



function poke1(msg){
    console.log(msg)
}

interact(function () {
    console.log("Poooooke")
});

interact(() => {
    console.log("Poooooke")
});

interact(() => console.log("Kick"))

function interactWithSomeone(anyFunctionReference, name) {
    anyFunctionReference(name);
}

/* function callBackLater(name) {
        console.log(`Hi, ${name}. Im ready to help you`);
} */

// Make callBackLater() simpler:
const callBackLater = (name) => console.log(`Hi, ${name}. Im ready to help you`);

interactWithSomeone(callBackLater, "Rune");
interactWithSomeone(callBackLater, "Bob");


// task create a helpWithHomeworkLater function that helps a person later
const helpWithHomeworkLater = (name) => console.log(`Hi there ${name}. The answer to that assignment is 42`)

interactWithSomeone(helpWithHomeworkLater, "Simon");

//console.log(interactWithSomeone(() => "Shake hand"))