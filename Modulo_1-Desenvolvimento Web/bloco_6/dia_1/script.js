let select = document.querySelector('#estado');

let estado = ['Selecione', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 
'Distrito Federal', 'Espirito Santo' , 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso',
'Minas Gerais', 'Pará', 'Paraíba', 'Parana', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Ronraima', 'Santa Catarina',
'São Paulo', 'Sergipe', 'Tocantins'];


for (let index = 0; index < estado.length; index += 1) {
    let option = document.createElement('option');
    option.setAttribute('name', 'estado'); 
    option.innerText = estado[index];
    select.append(option);
}

let dataInput = document.querySelector('#data')
dataInput.addEventListener('blur', (event) => {
    let data = event.target.value
    console.log(data);
    let dataFormat = [];    
        for (let index = 0; index < data.length; index += 1) {
            dataFormat.push(data[index]);
            console.log(index);
            if (index === 1) {
                dataFormat.push('/');
        }
        if (index === 3) {
                dataFormat.push('/');
        }  
                                    
       }
       dataFormat1 = dataFormat.slice(0, 3);
       dataFormat2 = dataFormat.slice(3, 6);
       dataFormat3 = dataFormat.slice(6, 10);
         
   dataInput.value = `${dataFormat1.join('')}${dataFormat2.join('')}${dataFormat3.join('')}`;  
});


function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}
 
let botaoEnviar = document.querySelector('#botao-enviar');
let retornar = document.querySelector('#request-id');
function formsRequest() {
    let capitura = document.cadastro.nome.value + '<br>';
    capitura += document.cadastro.email.value + '<br>';
    capitura += document.cadastro.cpf.value + '<br>';
    capitura += document.cadastro.endereco.value + '<br>';
    capitura += document.cadastro.cidade.value + '<br>';
    capitura += document.cadastro.estado.value + '<br>';
    capitura += document.cadastro.morada.value + '<br>';
    capitura += document.cadastro.area.value + '<br>';
    capitura += document.cadastro.cargo.value + '<br>';
    capitura += document.cadastro.data.value + '<br>';
    retornar.innerHTML = capitura;
}
