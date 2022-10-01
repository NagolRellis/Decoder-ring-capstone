// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  cypherSolutionArray = [
    {cordinates : ["a", "11"]},
    {cordinates : ["f", "12"]},
    {cordinates : ["l", "13"]},
    {cordinates : ["q", "14"]},
    {cordinates : ["v", "15"]},
    {cordinates : ["b", "21"]},
    {cordinates : ["g", "22"]},
    {cordinates : ["m", "23"]},
    {cordinates : ["r", "24"]},
    {cordinates : ["w", "25"]},
    {cordinates : ["c", "31"]},
    {cordinates : ["h", "32"]},
    {cordinates : ["n", "33"]},
    {cordinates : ["s", "34"]},
    {cordinates : ["x", "35"]},
    {cordinates : ["d", "41"]},
    {cordinates : ["i", "42"]},
    {cordinates : ["j", "42"]},
    {cordinates : ["o", "43"]},
    {cordinates : ["t", "44"]},
    {cordinates : ["y", "45"]},
    {cordinates : ["e", "51"]},
    {cordinates : ["k", "52"]},
    {cordinates : ["p", "53"]},
    {cordinates : ["u", "54"]},
    {cordinates : ["z", "55"]}
  ]

  function oddOrEven(x) {
    if (x % 2 === 0) {
      //returns true if the number is even
        return true
    } else {
      //returns false if the number is odd
        return false
    }
}
//the input is a string with numbers in it, not a number
  function polybius(input, encode = true) {
    newInput = input.toLowerCase()
    if(encode === true){
    //write the encoding here
    let noSpaceInput = newInput.split(" ")
    let result = ""
  for(let i = 0; i < noSpaceInput.length; i++){
    let partOfNoSpaceInput = noSpaceInput[i];
    let lettersToNumbers = []

   for(let j = 0; j < partOfNoSpaceInput.length; j++){
        lettersToNumbers.push(partOfNoSpaceInput[j]);
       };
    for(v = 0; v < lettersToNumbers.length; v++){
              
       for(f = 0; f < cypherSolutionArray.length; f++){
        
      if(lettersToNumbers[v] === cypherSolutionArray[f].cordinates[0]){
         result += cypherSolutionArray[f].cordinates[1];
         };
       };
      };
   result += " "
  }
  return result.trim()
    }else{
    //write the decoding here
    let result = ""
    let oddOrEvenTest = ""
    //takes out the space to decode the words one by one
    let noSpaceInput = input.split(" ")
    //this loop goes through the noSpaceInput one word at a time
    for(let i = 0; i < noSpaceInput.length; i++){
      //this variable is set to move 
      let partOfNoSpaceInput = noSpaceInput[i];
      let numberToLetters = []
      //this variable is then added on with noSpaceInput to double check the length is even because if it was odd it would be an inccorect cypher
      oddOrEvenTest += noSpaceInput[i];
      //This loop goes through each number in pairs and pushes the pairs to the array numberToLetters
      for(let j = 0; j < partOfNoSpaceInput.length; j+= 2){
        numberToLetters.push(partOfNoSpaceInput[j] + partOfNoSpaceInput[j + 1]);
       };
      //This loop goes through the numberToLetters array 
      for(v = 0; v < numberToLetters.length; v++){
              
       for(f = 0; f < cypherSolutionArray.length; f++){
        
      if(numberToLetters[v] === cypherSolutionArray[f].cordinates[1]){
        
        if(cypherSolutionArray[f].cordinates[1] === "42"){
         result += "(i/j)"
         }else{
         result += cypherSolutionArray[f].cordinates[0];
         };
       };
      };
     };
      //adds a space at the end of the word
      result += " "
      };

     if(oddOrEven(oddOrEvenTest.length)){
     return result.trim()
     } else {
     return false
     }
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
