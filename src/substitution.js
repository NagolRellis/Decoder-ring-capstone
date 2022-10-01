// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
  // you can add any code you want within this function scope
  //this is a helper fucntion the removes duplicate characters from a string and returns that string
  function removeDuplicate(str) {
    let result = ""
    let n = str.length
    // Create a set using String characters
    // excluding '\0'
    var s = new Set();

    // HashSet doesn't allow repetition of elements
    for (var i = 0; i < n; i++)
      s.add(str[i]);

    // Print content of the set
    for (const v of s) {
      result += v
    }
    return result
  }
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz"
  function substitution(input, alphabet, encode = true) {
    lowerCaseInput = input.toLowerCase()
    if (!alphabet) { return false }
    alphabet = removeDuplicate(alphabet)
    if (alphabet.length !== 26) {
      return false
    } else {
      if (encode === true) {
        //encode here
        let noSpaceInput = lowerCaseInput.split(" ")
        let newAlphabet = alphabet.split("")
        let newRealAlphabet = realAlphabet.split("")
        let result = ""
      for(let i = 0; i < noSpaceInput.length; i++){
        let partOfNoSpaceInput = noSpaceInput[i];
        let oneAlphabetToAnother = []
    
       for(let j = 0; j < partOfNoSpaceInput.length; j++){
            oneAlphabetToAnother.push(partOfNoSpaceInput[j]);
           };
        for(v = 0; v < oneAlphabetToAnother.length; v++){
                  
           for(f = 0; f < alphabet.length; f++){
            
          if(oneAlphabetToAnother[v] === newRealAlphabet[f]){
             result += newAlphabet[f];
             };
           };
          };
       result += " "
      }
      return result.trim()
      } else {
        //decode here
        let noSpaceInput = lowerCaseInput.split(" ")
        let newAlphabet = alphabet.split("")
        let newRealAlphabet = realAlphabet.split("")
        let result = ""
      for(let i = 0; i < noSpaceInput.length; i++){
        let partOfNoSpaceInput = noSpaceInput[i];
        let oneAlphabetToAnother = []
    
       for(let j = 0; j < partOfNoSpaceInput.length; j++){
            oneAlphabetToAnother.push(partOfNoSpaceInput[j]);
           };
        for(v = 0; v < oneAlphabetToAnother.length; v++){
                  
           for(f = 0; f < alphabet.length; f++){
            
          if(oneAlphabetToAnother[v] === newAlphabet[f]){
             result += newRealAlphabet[f];
             };
           };
          };
       result += " "
      }
      return result.trim()
      };
    };
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
