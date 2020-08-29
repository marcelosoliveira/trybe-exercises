let pecaName = "Bishop1";

let pecaName2 = "RAINHA";

if (pecaName.toLowerCase() === "bishop") {
    console.log(`${pecaName} -> diagonal`);
}else if (pecaName2.toLowerCase() === "rainha") {
    console.log(`${pecaName2} -> esquerda`);
}else {
    console.log(console.error("não é peça de xadrez"));
}

