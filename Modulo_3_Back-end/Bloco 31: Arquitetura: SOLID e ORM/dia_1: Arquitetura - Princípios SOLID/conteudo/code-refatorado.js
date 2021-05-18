/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
    name,
    disciplines: disciplines.map(({ name, grade }) => {
      let letterGrade;
  
      if (grade >= 0.9) letterGrade = "A";
      else if (grade >= 0.8) letterGrade = "B";
      else if (grade >= 0.7) letterGrade = "C";
      else if (grade >= 0.6) letterGrade = "D";
      else if (grade >= 0.1) letterGrade = "E";
      else letterGrade = "F";
  
      return { name, grade, letterGrade };
    })
  });
  
  /* "Determinar" */
  const approvedStudents = ({ disciplines }) =>
    disciplines.every(({ grade }) => grade > 0.7);
  
  /* "Atualizar" */
  const updateApprovalData = ({ name, disciplines }) => {
    console.log(`A pessoa com nome ${name} foi aprovada!`);
  
    disciplines.map(({ name, letterGrade }) =>
      console.log(`${name}: ${letterGrade}`)
    );
  };
  
  function setApproved(students) {
    students
      .map(percentageGradesIntoLetters)
      .filter(approvedStudents)
      .map(updateApprovalData);
  }
  
  /* Abaixo temos um exemplo de execução */
  // ...