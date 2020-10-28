function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

describe('Operações com a função myRemove', () => {
    test('1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });
    test('2.Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });
    test('3.Verifique se o array passado por parâmetro não sofreu alterações', () => {
        expect(() => {
            if (myRemove([1, 2, 3, 4], 3).length === [1, 2, 3, 4].length) {
                throw new Error('O array não sofreu alterações');
            } else {
                throw new Error('O array sofreu alterações');                
            }
        }).toThrow(Error);
    });
    test('4.Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});