let INPUT = "this is a sentence";
let SHIFT = 1;

const alphabetString = "abcdefghijklmnopqrstuvwxyz";


let encrypt = function(INPUT){
  let OUTPUT = [];
  for(let i = 0; i < INPUT.length; i++){
    OUTPUT[i] = (alphabetString[((((alphabetString.indexOf(INPUT[i]))) + (SHIFT % 25)) % 26)]);
  }
  OUTPUT = OUTPUT.join('')
  return OUTPUT;
}

console.log(encrypt(INPUT))