const sum = (arr) => {
    let sumArr = 0
  for (let index of arr) {
    sumArr += index;
  }
  return sumArr;
}

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  if (payable > paid) {
    throw new Error('paid value is not enough');
  } else if (remaining > 0) {
    for(let index in coins) {
      if(sum(change) < remaining) {
        if ((remaining - sum(change)) === 2) {
          change.push(coins[index - 1]);
        } else {
          change.push(coins[index]);
        }
        if (sum(change) > remaining) {
          change.pop();
        }              
      }      
    }    
  }  
  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
