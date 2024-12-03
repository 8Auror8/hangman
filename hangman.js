const input = require('sync-input');

//FUNCTION FOR RANDOM NUMBER
function ramdomNumber(n){
  return Math.floor(Math.random() * n)
}

//FUNCTION FOR UNHIDE LETTERS OF THE WORD
function unhideLetter(array, letter){
    array.forEach((element, index)=>{
        if(element === letter){
            arrayHint[index] = letter
        }
    });
    }   

//VARIABLES
let arrayOfWords = ["python", "java", "swift", "javascript"];
let attemps = 8;
let regex = /^[a-z]+$/
let wonVar = 0;
let lostVar = 0;
let menuSelection = "";

let luckyNumber = ramdomNumber(arrayOfWords.length);
let wordSelected = arrayOfWords[luckyNumber];
let arrayWord = [...wordSelected];
let fixedIndex = wordSelected.length - 1;
let arrayHint = [...wordSelected];
let stringHint = "";
let arraySelectedChar = [];
let finished = false;


// FUNCTION PLAY()
function play(){
    luckyNumber = ramdomNumber(arrayOfWords.length);
    wordSelected = arrayOfWords[luckyNumber];
    arrayWord = [...wordSelected];
    fixedIndex = wordSelected.length - 1;
    arrayHint = [...wordSelected];
    stringHint = "";
    arraySelectedChar = [];
    finished = false;
    for(let i = 0; i <= fixedIndex; i++){
        arrayHint[i] = "-";
    }    

    while(attemps !== 0 && arrayHint.includes("-") && finished === false){
        stringHint = arrayHint.join("")
        console.log("")
        console.log(stringHint)
        let selection = input(`Input a letter: `);
        if(selection.length === 0 || selection.length !== 1){
            console.log("Please, input a single letter.")
        }
        else if(!regex.test(selection)){
            console.log("Please, enter a lowercase letter from the English alphabet.")
        }
        else if(arrayHint.includes(selection) || arraySelectedChar.includes(selection)){
            console.log("You've already guessed this letter.")
        }
        else if(arrayWord.includes(selection)){
            arraySelectedChar.push(selection)
            unhideLetter(arrayWord, selection);
            // console.log("attemps", attemps)
        }else{
            arraySelectedChar.push(selection)
            console.log("That letter doesn't appear in the word.")
            attemps--
            // console.log("attemps", attemps)
        }
    }
    if(!arrayHint.includes("-")){
        console.log("")
        stringHint = arrayHint.join("")
        wonVar ++
        finished = true
        console.log(`You guessed the word ${stringHint}!
    You survived!`)
    }else{
        lostVar ++
        finished = true
        console.log("You lost!")
        
    }
}

//FUNCTION RESULTS
function printResults(won, lost){
    console.log(`You won: ${won} times.
You lost: ${lost} times.`)
}

//FUNCTION MENU()
function menu(){
    menuSelection = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: `)
    if(menuSelection === "play"){
        play()
    }else if(menuSelection === "results"){
        printResults(wonVar, lostVar)
    }
}


//START PROGRAM
console.log(`H A N G M A N`);

while(menuSelection !== "exit"){
    menu()
}