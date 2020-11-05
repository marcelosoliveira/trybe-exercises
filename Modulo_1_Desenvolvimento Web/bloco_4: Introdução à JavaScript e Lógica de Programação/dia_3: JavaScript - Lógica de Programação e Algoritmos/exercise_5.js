let n = 7;
let aster = "";
let position = n;

for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= i; j += 1) {          
        if(j < position) {
            aster += " ";
        }else if (j === 4 && i === 5) {
            aster += " ";
        } else if ((j > 2 && j < 6) && i === 6) {
            aster += " ";
        }else {            
            aster += "*";
        }      
    }
    console.log(aster);
    aster = "";
    position -= 1;
}