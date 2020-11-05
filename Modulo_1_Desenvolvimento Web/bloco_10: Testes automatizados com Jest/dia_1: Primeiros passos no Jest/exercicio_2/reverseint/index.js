// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n < 0) {
    let numberN = n.toString();
    numbersNs = numberN.substr(1);
    let numberReverseNegativo = '-';
    for (index = numbersNs.length -1; index >= 0; index -= 1) {
        numberReverseNegativo += numbersNs[index];
    }
    return parseInt(numberReverseNegativo);              
  } else {
    let numberP = n.toString();
    let numberReversePositivo = '';
    for (index = numberP.length -1; index >= 0; index -= 1) {
        numberReversePositivo += numberP[index];
    }
    return parseInt(numberReversePositivo);     
  }  
}

module.exports = reverseInt;
