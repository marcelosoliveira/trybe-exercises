const connection = require('../../config/connection');

const findByCep = async (cep) => {
    return connection()
    .then((db) => db.collection('ceps').findOne({ cep }));
}

const saveCep = async (cep, uf, cidade, bairro, logradouro) => {
    connection()
    .then((db) => db.collection('ceps')
    .insertOne({ cep, uf, cidade, bairro, logradouro }));
}

module.exports = {
    findByCep,
    saveCep,
}
