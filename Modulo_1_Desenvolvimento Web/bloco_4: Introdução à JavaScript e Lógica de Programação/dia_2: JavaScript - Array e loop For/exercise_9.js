let cont = [];

for (i = 1; i <= 25; i += 1) {
    cont.push(i);    
}

for (let num of cont) {
    let divisao = num / 2;
    console.log(`A divisão vetores é ${divisao}`);
}