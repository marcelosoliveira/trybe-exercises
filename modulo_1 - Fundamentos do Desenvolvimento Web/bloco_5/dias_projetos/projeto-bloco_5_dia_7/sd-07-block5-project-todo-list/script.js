const inputText = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const adicionar = document.querySelector('#criar-tarefa');
const botaoLimpa = document.querySelector('#apaga-tudo');
const botaoCompleto = document.querySelector('#remover-finalizados');
const botaoSalvar = document.querySelector('#salvar-tarefas');
const botaoRemover = document.querySelector('#remover-selecionado');
const botaoCima = document.querySelector('#mover-cima');
const botaoBaixo = document.querySelector('#mover-baixo');

function criaLista(inputText) {
    if (inputText.value === '') {
        alert("Preencha os campos");
    } else {
        let criaLista = document.createElement('li');
        criaLista.innerText = inputText.value;
        lista.appendChild(criaLista);
        inputText.value = '';
    }
}

function selected() {
    let listada =  document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < listada.length; index += 1) {
        listada[index].addEventListener('click', (event) => {
            for (let sel = 0; sel < listada.length; sel += 1) {
                if (listada[sel].className === 'selected' ||
                listada[sel].className === 'completed') {
                    listada[sel].classList.remove('selected');
                    listada[sel].style.backgroundColor = '';                        
                }
            }
            if (listada[index].className === 'completed') {
                listada[index].className = 'completed'
            } else {
                listada[index].className = 'selected';
            }
            if (listada[index].className === 'completed' ||
            listada[index].className === 'selected') {
                listada[index].style.backgroundColor = 'rgb(128,128,128)';
            }                              
        });
    }
}

lista.addEventListener('dblclick' , (event) => {
    if (event.target.className === 'completed') {
         event.target.className = 'selected';                                              
    } else  {
        event.target.className = 'completed'; 
    }                                                        
});


adicionar.addEventListener('click', function () {
    criaLista(inputText);
    selected();           
});

botaoLimpa.addEventListener('click', function () {
    let listada =  document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < listada.length; index += 1) {
        if (listada.length > 0) {
            listada[index].remove();
        }
        
    }
});

botaoCompleto.addEventListener('click', function () {
    let listada =  document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < listada.length; index += 1) {
        if (listada[index].className === 'completed') {
            listada[index].remove(document.getElementsByClassName('completed'));                  
        }
    }
});

botaoSalvar.addEventListener('click', (event) => {
    let listada = document.querySelectorAll('#lista-tarefas li');
    let todo = [];
    for (let index = 0; index < listada.length; index += 1) {
        /*todo.push(listada[index].outerText);*/
        todo.push(listada[index].outerHTML); /* Retorna as tags e todos nomes de atributos da tag*/            
   }
   localStorage.setItem(`lista-todos`, JSON.stringify(todo));
})

window.onload = render;
function render() {    
    let listTodo = JSON.parse(localStorage.getItem('lista-todos'));
    if (listTodo !== null) {
        for (let index = 0; index < listTodo.length; index += 1) {
            lista.innerHTML += listTodo[index];
        }
        selected();
    }
}

botaoRemover.addEventListener('click', function () {
    let listada =  document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < listada.length; index += 1) {
        if (listada[index].className === 'selected') {
            listada[index].remove(document.getElementsByClassName('selected'));                  
        }
    }
});

botaoCima.addEventListener('click', function () {
    let listada =  document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < listada.length; index += 1) {
        if (listada[index].className === 'selected') {
            if (listada[index].previousElementSibling === null) {
                alert("Você é o primeiro!");
            } else {
                listada[index].previousElementSibling.before(listada[index]);  
            }                           
        }
    }
});

/*botaoBaixo.addEventListener('click', function () {
    let listada =  document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < listada.length; index += 1) {
        if (listada[index].className === 'selected') {
            if (listada[index].nextElementSibling === null) {
                alert("Você é o ultimo!");
            } else {
                listada[index].nextElementSibling.before(listada[index]);  
            }                           
        }
    }
});*/

botaoBaixo.addEventListener('click', function () {
    let move =  document.querySelector('.selected');
         if(move !== null) {
            if (move.nextElementSibling === null) {
                alert("Você é o ultimo!");
            } else {
                let baixo = move.nextElementSibling;  
                move.before(baixo);
            }
         }
        
});
