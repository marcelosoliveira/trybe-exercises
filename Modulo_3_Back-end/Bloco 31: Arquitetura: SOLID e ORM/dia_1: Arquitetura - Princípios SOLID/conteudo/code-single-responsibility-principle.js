const getLetterGrades = ({ name, grade }) => {
  let letterGrade;

  if (grade >= 0.9) letterGrade = "A";
  else if (grade >= 0.8) letterGrade = "B";
  else if (grade >= 0.7) letterGrade = "C";
  else if (grade >= 0.6) letterGrade = "D";
  else if (grade >= 0.1) letterGrade = "E";
  else letterGrade = "F";

  return { name, grade, letterGrade };
};

const percentageGradesIntoLetters = ({ name, disciplines }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades)
});

// ...