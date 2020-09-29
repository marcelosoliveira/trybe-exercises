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
/* 
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