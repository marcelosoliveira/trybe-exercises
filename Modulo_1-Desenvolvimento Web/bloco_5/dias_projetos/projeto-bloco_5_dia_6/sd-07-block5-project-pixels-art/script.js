const paletteColor = document.querySelectorAll('#color-palette .color');
  
for(let index = 0; index < paletteColor.length; index += 1) {
    const colors = ['black', 'red', 'blue', 'green'];
    paletteColor[index].style.backgroundColor = colors[index];
}

const botaoGerar = document.querySelector('#generate-board');
const inputNumber = document.querySelector('#board-size');
inputNumber.value = 5;
let number = inputNumber.value;
botaoGerar.addEventListener('click', (event) => {
    if(inputNumber.value === ''){
        alert("Board inválido!");
    }else if (inputNumber.value < 5) {
        alert("Board inválido!");
        inputNumber.value = 5;
    }else if (inputNumber.value > 50) {
        alert("Board inválido!");
        inputNumber.value = 50;
    }
    number = inputNumber.value;
    //initial(number);
});

//initial(number);
//function initial(number) {
    for(let aux = 0; aux < number; aux += 1) {
    for (let index = 0; index < number; index += 1) {
        let pixels = document.createElement('div');
        pixels.className = 'pixel';            
        document.querySelector('#pixel-board').appendChild(pixels);         
    }
    let br = document.createElement('br');
    document.querySelector('#pixel-board').appendChild(br);       
}    

const boardPixel = document.querySelectorAll('#pixel-board .pixel');

    for (let aux = 0; aux < paletteColor.length; aux += 1) {
       paletteColor[aux].addEventListener('click', function () {

    for (let sel = 0; sel < paletteColor.length; sel += 1) {
        if (paletteColor[sel].className === 'selected' || 
        paletteColor[sel].className === 'color selected') {
            paletteColor[sel].classList.remove('selected');
            paletteColor[sel].classList.add('color');
        }
    }
           paletteColor[aux].className = 'selected';
       if (paletteColor[aux].className === 'selected'){
         for(let index = 0; index < boardPixel.length; index += 1) {
            boardPixel[index].addEventListener('click', function () {
            boardPixel[index].style.backgroundColor = paletteColor[aux].style.backgroundColor;            
          });        
         }    
       }
       });
    }

    const botaoLimpar = document.querySelector('#clear-board');
    botaoLimpar.addEventListener('click', (event) => {
        for(let index = 0; index < boardPixel.length; index += 1) {
            boardPixel[index].style.backgroundColor = 'white';
        }
    });

window.onload = initPage;

function initPage(){
    for(let index = 0; index < boardPixel.length; index += 1) {
        paletteColor[0].classList.add('selected');
        paletteColor[0].classList.add('color');
        boardPixel[index].addEventListener('click', function () {          
            boardPixel[index].style.backgroundColor = paletteColor[0].style.backgroundColor;
        });        
    }
}
//}
