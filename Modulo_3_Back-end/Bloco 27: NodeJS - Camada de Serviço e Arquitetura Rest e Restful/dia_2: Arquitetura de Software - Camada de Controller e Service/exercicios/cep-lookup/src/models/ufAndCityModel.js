const connection = require('../../config/connection');
const ufOrCityValidation = require('../services/validations/ufOrCityValidation');

const findAll = async () => {
    return connection()
    .then((db) => db.collection('uf_city_logs').find().toArray());
}

const findByUfAndCity = async (log) => {
    if (ufOrCityValidation(log)) {
        return connection()
    .then((db) => db.collection('uf_city_logs').findOne({ uf: log }));
    }
    return connection()
    .then((db) => db.collection('uf_city_logs').findOne({ cidade: log }));
}

const updateUfAndCity = async (log, quantity) => {
    if (ufOrCityValidation(log)) {
        return connection()
        .then((db) => db.collection('uf_city_logs').updateOne({ uf: log },
            { $set: { quantity } }
        )); 
    }
    return connection()
    .then((db) => db.collection('uf_city_logs').updateOne({ cidade: log },
        { $set: { quantity } }
    ));
}

const saveUfAndCity = async (log, quantity) => {
    if (ufOrCityValidation(log)) {
        return connection()
        .then((db) => db.collection('uf_city_logs')
        .insertOne({ uf: log, quantity }));
    }
    return connection()
    .then((db) => db.collection('uf_city_logs')
    .insertOne({ cidade: log, quantity }));
}

module.exports = {
    findAll,
    findByUfAndCity,
    saveUfAndCity,
    updateUfAndCity,
}
