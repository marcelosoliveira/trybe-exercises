console.log('Example 1');
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};
  
const info = {
  age: 23,
  job: 'engenheiro',
};
  
const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};
  
Object.assign(person, info, family)
console.log(person)
console.log(`\n`);

console.log('Example 2');
const person1 = {
  name: 'Roberto',
}
  
const lastName = {
  lastName: 'Silva',
}

const clone = Object.assign(person1, lastName);
  
console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person1); // { name: 'Roberto', lastName: 'Silva' }
console.log('--------------');

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person1.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Ferreira' }

console.log('--------------');
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;
cloneObj.value1 = 07;
console.log(obj);
obj.value2 = 15;
console.log(cloneObj);


console.log('--------------');
const person2 = {
  name:'Roberto',
};
 
const lastName2 = {
  lastName: 'Silva',
};
  
const newPerson = Object.assign({},person2,lastName2);
newPerson.name = 'Gilberto';
console.log(newPerson);
person2.lastName = 'Santos';
console.log(person2);
