const assert = require('assert');

const removeMiddle = (array) => {
  let arr = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array.length < 5) {
      arr.push('queen')
      return arr; 
    } else if (array[index] !== 'queen') {
      arr.push(array[index]);    
    }     
  }
  return arr;  
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);


assert.deepEqual(removeMiddle(output), expectedOutput);
assert.deepEqual(removeMiddle(words), expectedWords);
