const assert = require('assert');

const greetPeople = (people) => {
  let array = [];
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    array.push(greeting);
  }
  return array;
};
  
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];


assert.deepStrictEqual(greetPeople(parameter), result);