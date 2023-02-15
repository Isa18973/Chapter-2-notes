const readline = require('readline-sync');

//1
let answer = readline.question("Do you want to hear a joke\n Yes or NO:");
if (answer == "Yes") {
    let answer = readline.question("What starts with E, ends with E, and has only 1 letter in it? ");
    if(answer == "what"){
    console.log (`An Envelope`);
}}

else {
    console.log ('ok');
}

//2
let number = readline.question ("Type in any number");
if (number  % 2== 0){
        console.log(` ${base} is divisible by 2`);
}if (number  % 3 == 0) {
        console.log(`${base} is divisible by 3`);
}if (number % 4 == 0) {
             console.log(`${base} is divisible by 4`);
}if (number % 5 == 0) {
                console.log(`${base} is divisible by 5`);
}if (number % 6 == 0) {
    console.log(`${base} is divisible by 6`);
} else {
        console.log(`${base} is not divisible by 2, 3, 4, 5, 6`);

    }


//4
let guess = Number(readline.question("Give me a number 1-100"));
if (guess == 35){
    console.log ("You won")
} else if (guess < 35){
    console.log ("Too small")
}else if (guess >35){
    conosle.log(":too big")
}else {
    console.log("invalid");
}


//5
let cost  = number (readline.question("Enter meal cost "));
let tax = cost * .08;
let newCost = cost + tax
console.log (`Your cost id $newCost .toFixed (2`)

//7
let mealCost = Numebr (realine.question ())