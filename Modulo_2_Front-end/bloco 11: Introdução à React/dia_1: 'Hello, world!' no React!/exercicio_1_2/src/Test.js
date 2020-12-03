import React from 'react';

const Task = (value) => {
  return (
    <li>{value.hardskills}</li>
  );
}

const skills = ['JavaScript', 'PostgreeSql', 'React', 'NodeJS', 'Angular', 'SpringRest', 'JavaOO'];

class Test extends React.Component {
  render() {
  return (
    skills.map(skill => <ul><br />< Task key={skill.toString()} hardskills={skill} /></ul>)
  );
  }
}

export default Test;
