const readline = require('readline-sync');

let answer = readline.question("Do you want to hear a joke\n Yes or NO:");
if (answer == "Yes") {
    let answer = readline.question("What starts with E, ends with E, and has only 1 letter in it? ");
    if(answer == "what"){
    console.log (`An Envelope`);
}}

else {
    console.log ('ok');
}

let base = readline.question ("Type in any number");
if (base % 2== 0){
        console.log(` ${base} is divisible by 2`);
}if (base % 3 == 0) {
        console.log(`${base} is divisible by 3`);
}if (base % 4 == 0) {
             console.log(`${base} is divisible by 4`);
}if (base % 5 == 0) {
                console.log(`${base} is divisible by 5`);
}if (base % 6 == 0) {
    console.log(`${base} is divisible by 6`);
} else {
        console.log(`${base} is not divisible by 2, 3, 4, 5, 6`);

    }


//
let secret = Number(readline.question("Give me a number 1-100"));
if (secret < 20)(
    console.log ("Too Low");
)if (secret > 20)(
    console.log (" Too high");
)if (secret == 20)(
    console.log("You Won");
)

//

