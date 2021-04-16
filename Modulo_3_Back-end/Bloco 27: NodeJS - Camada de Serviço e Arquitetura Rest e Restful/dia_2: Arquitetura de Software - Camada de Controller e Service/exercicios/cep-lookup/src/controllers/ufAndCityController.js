const ufAndCityService = require('../services/service/ufAndCityService');

const findByUfAndCity = async (req, res) => {
    const { uf, cidade } = req.query;
    try {
       const result = await ufAndCityService.findByUfAndCity(uf, cidade);
       res.status(200).send(result); 
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    findByUfAndCity,
}
