const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
  
const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const study = (student) => {
    const arr = Object.keys(student)
  for(let st of arr) {
    console.log(`${st} Nível: ${student[st]}\n`);
  }
}
console.log('Student 1');
study(student1);

console.log('Student 2');
study(student2);