const ufAndCityModel = require('../../models/ufAndCityModel');
const ufAndCityValidation = require('../validations/ufAndCityValidation');

const findByUfAndCity = async (ufs, cidades) => {
    if (ufs && cidades) {
        const ufCond = await ufAndCityModel.findByUfAndCity(ufs);
        const cidadeCond = await ufAndCityModel.findByUfAndCity(cidades);

        if(!ufCond) {
            await ufAndCityModel.saveUfAndCity(ufs, 1);
        } 
        if (!cidadeCond) {
            await ufAndCityModel.saveUfAndCity(cidades, 1);
        } else {
            const { uf, quantity: quantitys } = ufCond;
            await ufAndCityModel.updateUfAndCity(uf, quantitys + 1);

            const { cidade, quantity } = cidadeCond;
            await ufAndCityModel.updateUfAndCity(cidade, quantity + 1)
        }
    };
    
    if (!ufs || !cidades) {
        const resultUfAndCity = await ufAndCityModel
    .findByUfAndCity(await ufAndCityValidation(ufs, cidades));

    if (!resultUfAndCity) {
        const ufOrCity = await ufAndCityValidation(ufs, cidades);

        if(!ufOrCity) return { message: "Uf ou cidade not found" };
        
        await ufAndCityModel.saveUfAndCity(ufOrCity, 1);
        return;
    }

    const { uf, cidade, quantity } = resultUfAndCity;
    
    if (!cidade || cidade.length < 3) {
        await ufAndCityModel.updateUfAndCity(uf, quantity + 1);

        return await ufAndCityModel.findAll();
    }

    await ufAndCityModel.updateUfAndCity(cidade, quantity + 1);

    return await ufAndCityModel.findAll();
    }
}

module.exports = {
    findByUfAndCity,
}
