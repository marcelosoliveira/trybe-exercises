const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 7.Crie uma função que obtenha o valor da chave de acordo com a 
sua posição no objeto. Por exemplo: */
console.log('Exercise 7 Part 2')
const valueKey = (object, key) => {
  const position = Object.values(object);
  return position[key];
}
console.log(valueKey(lesson2, 2));
console.log('----------------------------');

/* 8.Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da 
chave e o valor da chave. Exemplo: */
console.log('Exercise 8 Part 2');
const verifyPair1 = (object, key, value) => {
  let bool1 = false;
  let bool2 = false;
  for (let keys of Object.keys(object)) {
    if (keys === key) {
      bool1 = true;
    }
  }

  for (let values of Object.values(object)) {
    if (values === value) {
      bool2 = true;
    }
  }

  if (bool1 && bool2) {
    return `Output: ${true}`;
  } else {
    return `Output: ${false}`;
  }
}
console.log(verifyPair1(lesson1, 'turno', 'noite'))
//Dois exercise 8 part 2, feitos de dois jeitos.
const verifyPair2 = (object, key, value) => {
  const arr = Object.entries(object);
  let count = 0;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) {
      count += 1;    
    }
  }
  if (count > 0) {
    return `Output: ${true}`;
  } else {
    return `Output: ${false}`;
  }
}
console.log(verifyPair2(lesson2, 'professor', 'Carlos'))