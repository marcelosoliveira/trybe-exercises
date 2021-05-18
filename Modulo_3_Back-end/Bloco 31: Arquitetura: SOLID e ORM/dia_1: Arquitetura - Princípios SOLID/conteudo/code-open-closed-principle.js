const SCHOOL_DATA = {
    Standard: {
      approvalGrade: 0.7
    },
    Hogwarts: {
      approvalGrade: 0.8
    }
  };
  
  // ...
  
  const approvedStudents = ({ school, disciplines }) => {
    const { approvalGrade } = SCHOOL_DATA[`${school}`];
  
    return disciplines.every(({ grade }) => grade >= approvalGrade);
  };
  
  // ...