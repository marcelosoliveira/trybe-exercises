const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "Retorna o array [1, 2, 4]");

//2.Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], "Não retorna o array [1, 2, 3, 4]");

//3.Verifique se o array passado por parâmetro não sofreu alterações
const validEqualArray = (arrFunc, arr ) => {
  if (arrFunc.length === arr.length) {
    console.log('O array não sofreu alterações!');
  } else {
    console.log('O array sofreu alterações!');
  }
}
validEqualArray(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//4.Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "O array retorna [1, 2, 3, 4]");
validEqualArray(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);