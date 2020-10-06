/* Cada objeto é um estudante com seu nome, nota e situação no curso. 
Para ser aprovado, ele precisa obter uma nota acima de 60. Como você pode ver, 
o objeto abaixo está desatualizado e precisa ser atualizado: ele não contém a 
informação acerca da aprovação. Para atualizá-lo, você provavelmente escreveria 
algo assim, utilizando loops: */
const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];
  
function verifyNote (student){
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}
  
let i;
for (i = 0; i < students.length; i += 1) {
  verifyNote(students[i]);
}
  
console.log(students);

//Agora utilizando o Array.forEach
function verifyNote (student){
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}
  
students.forEach(verifyNote);
  
console.log(students); 
