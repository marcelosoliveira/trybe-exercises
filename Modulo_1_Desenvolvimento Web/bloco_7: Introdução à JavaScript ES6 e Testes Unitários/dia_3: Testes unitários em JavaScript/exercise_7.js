const assert = require('assert');
const wordLengths = (arr) => {
  let array = [];
  for (let index in arr) {
    array.push(arr[index].length);
  }
  return array;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
