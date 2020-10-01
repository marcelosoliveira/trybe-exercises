const assert = require('assert');
const addOne = (arr) => {
  let array = [];
  for(let index in arr) {
    array.push(arr[index] + 1);    
  }
  return array;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
