let n = 5;
let aster = "";

for (let i = 1; i <= n; i += 1){
    aster = "";
    for (let j = 1; j <= i; j += 1){       
        aster += "*";
    }
    console.log(aster); 
}