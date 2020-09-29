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
/*EXERCISES BONUS 
1.Crie uma função para contar quantos estudantes assistiram às 
aulas de Matemática. Use o objeto criado no exercício 5. */
console.log('Exercise 1 bonus');
const studyMath = () => {
  const aulas = Object.values(allLessons);
  let estudantes = 0;
  for( let index = 0; index < aulas.length; index += 1) {
    if (aulas[index].materia === 'Matemática') {
      estudantes += aulas[index].numeroEstudantes;
    }
  }
  return `Quantidade de estudantes de Matemática é ${estudantes}`;
}
console.log(studyMath());
console.log('----------------------------------');

/* 2.Crie uma função que deverá retornar um objeto que representa o relatório do 
professor ou professora, as aulas que ele ou ela ministrou e o número total de 
estudantes. Use o objeto criado no exercício 5: */
console.log('Exercise 2 Bonus');
const createReport = (object, professor) => {
  const prof = Object.values(object);
  const newObject = {professor: '', aulas: '', estudantes: 0,};
  let arr = [];
  for (let index = 0; index < prof.length; index += 1) {
    if (prof[index].professor === professor) {
      arr.push(prof[index].materia);
      newObject.professor = professor;
      newObject.aulas = arr;
      newObject.estudantes += prof[index].numeroEstudantes;
    }
  }
  return newObject;
}
console.log(createReport(allLessons, 'Maria Clara'));