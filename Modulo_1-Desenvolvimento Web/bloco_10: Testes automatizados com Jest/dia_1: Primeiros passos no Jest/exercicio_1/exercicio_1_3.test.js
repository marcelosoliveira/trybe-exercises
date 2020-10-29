function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

describe('Operações com a função myRemoveWithoutCopy', () => {
    test('1.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);   
    });
    test('2.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);   
    });
    test('3.Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
        expect(() => {
            if (myRemoveWithoutCopy([1, 2, 3, 4], 3).length === [1, 2, 3, 4].length) {
                throw new Error('O array não sofreu alterações');
            } else {
                throw new Error('O array sofreu alterações');                
            }
        }).toThrow(Error);   
    });
    test('4.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);   
    });
});
