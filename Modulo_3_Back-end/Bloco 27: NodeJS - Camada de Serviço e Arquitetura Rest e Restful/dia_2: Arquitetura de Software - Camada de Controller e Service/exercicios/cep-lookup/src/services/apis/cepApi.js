const fetch = require('node-fetch');

const URL = 'http://cep.la';

const headers = {
    Accept: 'application/json',
};

const findCep = async (cep) => {
    const response = await fetch(`${URL}/${cep}`, { headers });
    const data = await response.json();
    
    return data;
} 

module.exports = findCep;

