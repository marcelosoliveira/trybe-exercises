let skill = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

const str = string1 => {
  let str1 = 'Tryber x aqui!';
  let array = [];
  for(let index = 0; index < str1.length; index += 1) {
    if (str1[index].toLowerCase() === 'x') {
      array.push(string1);           
    } else {
      array.push(str1[index]);
    }
  }
  return array.join('');
}

const skills = string2 => {
  return `${string2} Minhas cinco principais habilidades são:

${skill.sort().join('\n\n')}\n\n#goTrybe`;
}

console.log(skills(str('#vqv')));
