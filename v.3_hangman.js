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
let luckyNumber = ramdomNumber(arrayOfWords.length);
let wordSelected = arrayOfWords[luckyNumber];
let arrayWord = [...wordSelected];
let fixedIndex = wordSelected.length - 1;
let arrayHint = [...wordSelected];
let stringHint = "";
let attemps = 8;


//LOOP FOR HIDING WORD
for(let i = 0; i <= fixedIndex; i++){
    arrayHint[i] = "-";
}    


//START PROGRAM
console.log(`H A N G M A N`);
while(attemps !== 0 && arrayHint.includes("-")){
    stringHint = arrayHint.join("")
    console.log("")
    console.log(stringHint)
    let selection = input(`Input a letter: `);
    if(arrayHint.includes(selection)){
        console.log("No improvements.")
        attemps --
    }
    else if(arrayWord.includes(selection)){
        unhideLetter(arrayWord, selection);
        // console.log("attemps", attemps)
    }else{
        console.log("That letter doesn't appear in the word.")
        attemps--
        // console.log("attemps", attemps)
    }
}
if(!arrayHint.includes("-")){
    console.log("")
    stringHint = arrayHint.join("")
    console.log(stringHint)
    console.log(`You guessed the word!
You survived!`)
}else{
    console.log("You lost!")
}
