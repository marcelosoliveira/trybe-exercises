//Criando um vetor.
let num = [5, 2, 9, 3];

console.log(`Nosso vetor é ${num}`, "\n");

//Acrescentar valores nom vetor.
num.push(7);
console.log(`Acréscimo do vetor:  ${num}`, "\n");

//Mostrando o tamanho do vetor
console.log(`O vetor tem ${num.length} posições`, "\n");

//Mostrando o primeiro valor do vetor
console.log(`O priemiro valor do vetor é ${num[0]}`, "\n");

//ordenando os valores do vetor
console.log(`Ordenando os valores do vetor ${num.sort()}`);

//Usando estrutura de repetição for para exibir os valores dos vetores
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}
console.log("\n");
//Usando estrutura for propria para vetores e object, 
//para exibir os valores dos elementos(posições)
for (let i of num) {
    console.log(i);
}

console.log("\n");
//Usando a estrutura for propria para os vetores e object, 
//mas exeibindo as elementos(posições) do vetores.
for (let i in num) {
    console.log(i);
} 

//remover um array do final 
num.pop();

//remover um array do inicio 
num.shift();

//Adicionar valores nom inicio do array
num.unshift(3);

//Procurar o índice de um item na Array
num.indexOf(5);

//Remover um item pela posição do índice
num.splice(pos, 1);

//Para Copiar um array
num.slice();