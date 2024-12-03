const input = require('sync-input');

//FUNCTIONS
function ramdomNumber(n){
  return Math.floor(Math.random() * n)
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


//FUNCTION FOR UNHIDE LETTERS OF THE WORD
function unhideLetter(array, letter){
    array.forEach((element, index)=>{
        if(element === letter){
            // console.log("element", element);
            // console.log("index", index)
            arrayHint[index] = letter
        }
    });
    }   

//START PROGRAM
console.log(`H A N G M A N\n`);
while(attemps !== 0){
    stringHint = arrayHint.join("")
    console.log(stringHint)
    let selection = input(`Input a letter: `);
    if(arrayWord.includes(selection)){
        unhideLetter(arrayWord, selection);
        attemps --
        console.log("attemps", attemps)
    }else{
        console.log("That letter doesn't appear in the word.")
        attemps--
        console.log("attemps", attemps)
    }
}
console.log("Thanks for playing!")