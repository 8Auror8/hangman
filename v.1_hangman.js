const input = require('sync-input');

//FUNCTIONS
function ramdomNumber(n){
  return Math.floor(Math.random() * n)
}

//VARIABLES
let arrayOfWords = ["python", "java", "swift", "javascript"];
let luckyNumber = ramdomNumber(arrayOfWords.length);
let wordSelected = arrayOfWords[luckyNumber];
let fixedIndex = wordSelected.length - 1
let hiddenWord = [...wordSelected]
let hint = ""

// console.log("this is wordSelected", wordSelected)
// console.log("this is hiddenWord.length", hiddenWord.length)
// console.log("this is hiddenWord", hiddenWord)

//LOOP FOR HIDING WORD
for(let i = 3; i <= fixedIndex; i++){
    hiddenWord[i] = "-";
}    
hint = hiddenWord.join("")
// console.log(hint)

//PROGRAM START
console.log(`H A N G M A N`);
let selection = input(`Guess the word ${hint}: `);
if(selection === wordSelected){
    console.log("You survived!")
}else{
    console.log("You lost!")
}