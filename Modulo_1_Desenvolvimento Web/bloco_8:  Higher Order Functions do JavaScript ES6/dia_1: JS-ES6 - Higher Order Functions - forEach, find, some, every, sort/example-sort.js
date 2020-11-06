const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

//Ordem crescente .
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); 

//Ordem decrescente
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){ return b - a });
console.log(points1); 

//Sem uma função de callback no sort ele ordena como se fosse ordem alfabética
//ou seja ele pega o primeiro numero e ordena.
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort();
console.log(points2); 
