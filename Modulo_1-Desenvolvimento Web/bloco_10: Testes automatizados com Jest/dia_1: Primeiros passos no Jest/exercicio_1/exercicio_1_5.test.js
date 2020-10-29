const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
    test('O obj1 é igual ao obj2', () => {
        expect(obj1).toEqual(obj2);
    });
    test('O obj1 é diferente ao obj3', () => {
        expect(obj1).not.toEqual(obj3);
    });
    test('O obj3 é diferente ao obj2', () => {
        expect(obj3).not.toEqual(obj2);
    });
})