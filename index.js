
let INPUT = "azaz";
let SHIFT = 26;


const alphabetString = "abcdefghijklmnopqrstuvwxyz";


let encrypt = function(INPUT){
  let OUTPUT = [];
  for(let i = 0; i < INPUT.length; i++){
    console.log(alphabetString[((((alphabetString.indexOf(INPUT[i]))) + (SHIFT % 25)) % 26)]);
  }
  OUTPUT = OUTPUT.join('')
  return OUTPUT;
}

console.log(encrypt(INPUT))