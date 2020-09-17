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
