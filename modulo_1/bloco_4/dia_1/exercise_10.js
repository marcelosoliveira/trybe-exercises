let prodCusto = 70;
let prodVenda = 90;

let qtd = 1000;

let lucro = (prodVenda - (prodCusto + (prodCusto * 0.2)))*qtd;

if (prodCusto < 0 || prodVenda < 0) {
    console.error("Preços inválidos!");
}else {
    console.log(`O total de lucro foi ${lucro}`);
}