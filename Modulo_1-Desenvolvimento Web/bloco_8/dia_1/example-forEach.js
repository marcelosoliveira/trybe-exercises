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
  
students.forEach(verifyNote);
  
console.log(students); 
