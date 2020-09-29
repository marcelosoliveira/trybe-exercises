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

/* 1.Crie uma função para adicionar o turno da manhã na lesson2. 
Essa função deve possuir três parâmetros, sendo eles: o objeto 
a ser modificado, a chave que deverá ser adicionada e o valor dela. */
console.log('Exercise 1 Part 2');
const lessonFunction = (obj, key, value) => obj[key] = value;
lessonFunction(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log('-------------------------------');

/* 2.Crie uma função para listar as keys de um objeto. 
Essa função deve receber um objeto como parâmetro. */
console.log('Exercise 2 Part 2');
const keysFunction = object => Object.keys(object).join(`\n`);
console.log(keysFunction(lesson1));
console.log('-------------------------------');

/* 3.Crie uma função para mostrar o tamanho de um objeto. */
console.log('Exercise 3 Part 2');
const sizeFunction = object => `O objeto tem ${Object.keys(object).length} chaves e valores`;
console.log(sizeFunction(lesson3));
console.log('-------------------------------');

/* 4.Crie uma função para listar os valores de um objeto. 
Essa função deve receber um objeto como parâmetro.
 */
console.log('Exercise 4 Part 2');
const valueFunction = object => Object.values(object).join(`\n`);
console.log(valueFunction(lesson1));
console.log('-------------------------------');

/* 5.Crie um objeto de nome allLessons, que deve agrupar todas as 
aulas através do Object.assign. Cada chave desse novo objeto 
será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: */
console.log('Exercise 5 Part 2');
const allLessons = Object.assign({lesson1, lesson2, lesson3});
console.log(allLessons);
