const cepModel = require('../../models/cepModel');
const cepValidation = require('../validations/cepValidation');
const cepApi = require('../apis/cepApi');
const ufAndCityModel = require('./ufAndCityService');

const findByCep = async (ceps) => {
    if (!cepValidation(ceps)) return { message: "Cep is not valid!" };

    const result = await cepModel.findByCep(ceps);

    if(!result) {
        const { cep, uf, cidade, bairro, logradouro } = await cepApi(ceps);
        cepModel.saveCep(cep, uf, cidade, bairro, logradouro);
        await ufAndCityModel.findByUfAndCity(uf, cidade);
        return { message: "Cep not found, database added" };
    }
    const { uf, cidade } = result;
    await ufAndCityModel.findByUfAndCity(uf, cidade);
    return result;
}

const saveCep = async (cep, uf, cidade, bairro, logradouro) => {
    if (!cepValidation(cep)) return { message: "Cep is not valid!" };

    cepModel.saveCep(cep, uf, cidade, bairro, logradouro);
}

module.exports = {
    findByCep,
    saveCep,
}
