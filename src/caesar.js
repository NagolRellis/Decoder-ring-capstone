// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabetNumbered = [
    "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"
  ];

  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();

    result = []
    
    if(shift.length === 0 || shift === 0 || shift < -25 || shift > 25){
    return false
    };
    let inputArray = input.split("")

    for(let i = 0; i < inputArray.length ; i++){
      
      let seperatedInput = inputArray[i];

      for(let j = 0; j < alphabetNumbered.length; j++){ 
        if(encode === true){
        if(seperatedInput === alphabetNumbered[j]){
         let newShift = j + shift
         if(newShift > 25){newShift -= 26}
         if(newShift < 0){newShift += 26}
         newSeperatedInput = alphabetNumbered[newShift]
         result.push(newSeperatedInput)
        }
      }else{
       if(seperatedInput === alphabetNumbered[j]){
        let newShift = j - shift
        if(newShift > 25){newShift -= 26}
        if(newShift < 0){newShift += 26}
        newSeperatedInput = alphabetNumbered[newShift]
        result.push(newSeperatedInput)
       }
      };
    }
    if(seperatedInput === " " || seperatedInput === "."){result.push(inputArray[i])}
  };  
    return result.join("")
  };
  // if the length of the shift goes over 25 should subtract 26 to return to the start and count from there.
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };