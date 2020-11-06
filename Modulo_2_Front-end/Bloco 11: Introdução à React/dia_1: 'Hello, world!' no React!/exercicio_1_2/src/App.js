import React from "react";

const task = (value) => {
  return <li key={value}>{value}</li>;
};

const skills = [
  "JavaScript",
  "PostgreeSql",
  "React",
  "NodeJS",
  "Angular",
  "SpringRest",
  "JavaOO",
];

class App extends React.Component {
  render() {
    return skills.map((skill) => <ul>{task(skill)}</ul>);
  }
}

export default App;
