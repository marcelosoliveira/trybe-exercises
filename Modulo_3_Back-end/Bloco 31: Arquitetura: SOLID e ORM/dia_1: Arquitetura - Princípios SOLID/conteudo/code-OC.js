// ...

const percentageGradesIntoLetters = ({ name, school, disciplines }) => ({
    name,
    school,
    disciplines: disciplines.map(getLetterGrades)
  });
  
  const approvedStudents = ({ school, disciplines }) =>
    disciplines.every(({ grade }) =>
      school == "Standard" ? grade >= 0.7 : grade >= 0.8
    );
  
  // ...
  
  const students = [
    {
      name: "Lee",
      school: "Standard",
      disciplines: [
        { name: "matemática", grade: 0.8 },
        { name: "história", grade: 0.9 }
      ]
    },
    {
      name: "Albus",
      school: "Hogwarts",
      disciplines: [
        { name: "divination", grade: 0.8 },
        { name: "potions", grade: 0.9 }
      ]
    }
  ];
  
  setApproved(students);