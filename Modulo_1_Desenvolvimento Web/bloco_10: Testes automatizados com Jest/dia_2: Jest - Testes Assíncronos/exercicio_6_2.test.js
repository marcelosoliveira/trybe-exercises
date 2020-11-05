const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByAge = (age) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const animal = Animals.filter((animal) => animal.age === age);
        if(animal.length !== 0) {
          return resolve(animal);
        }
        const error = 'Nenhum animal com essa idade!';
        return reject(error);
      }, 100)
    })
  )
  
  const getAnimalAge = (age) => {
    return findAnimalByAge(age)
      .then(animal => animal);
  }
  // ---------------------
  
  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o idade procurada', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return expect(getAnimalAge(2)).resolves.toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  
    describe('Quando não existe o animal com a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(getAnimalAge(7)).rejects.toBe('Nenhum animal com essa idade!')
      });
    });
  });