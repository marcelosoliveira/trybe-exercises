let n = 5;
let aster = "";
let position = n;

for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1 ){
        if (j < position) {
            aster += " "; 
        }else {
            aster += "*";
        }
    }
    console.log(aster);
    aster = "";
    position -= 1;
}