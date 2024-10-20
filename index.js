
let INPUT = "z";
let SHIFT = 1;


const alphabetString = "abcdefghijklmnopqrstuvwxyz";


let encrypt = function(INPUT){
  let OUTPUT = [];
  for(let i = 0; i < INPUT.length; i++){
    OUTPUT[i] = alphabetString[((alphabetString.indexOf(INPUT[i])) + SHIFT)];
  }
  OUTPUT = OUTPUT.join('')
  return OUTPUT;
}

console.log(encrypt(INPUT))