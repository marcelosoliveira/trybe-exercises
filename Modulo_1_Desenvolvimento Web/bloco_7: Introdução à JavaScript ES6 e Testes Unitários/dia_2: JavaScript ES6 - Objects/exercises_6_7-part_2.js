const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

/* 6.Usando o objeto criado no exercício 5, crie uma função que 
retorne o número total de estudantes em todas as aulas. */
console.log('Exercise 6 part 2');
const numberStudents = _ => {
  const arrNumber = Object.values(allLessons);
  let result = arrNumber[0].numeroEstudantes + 
  arrNumber[1].numeroEstudantes + arrNumber[2].numeroEstudantes;
  return `O total de estudantes das aulas são ${result} alunos`;
}
console.log(numberStudents());
console.log('-------------------------');

/* 7.Crie uma função que obtenha o valor da chave de acordo com a 
sua posição no objeto. Por exemplo: */
console.log('Exercise 7 Part 2')
const valueKey = (object, key) => {
  const position = Object.values(allLessons[object]);
  return `Output: ${position[key]}`;
}
console.log(valueKey('lesson1', 3));