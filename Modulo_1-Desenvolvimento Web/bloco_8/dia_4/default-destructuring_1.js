//Desesturação de um objeto padrão.
const person = {
    name: "João",
    lastName: "Jr",
    age: 34
}

const { nationality = 'Brazilian' } = person;
console.log(nationality);

//Desesturação de um array padrão.
const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d

console.log(z) // 0
