const cepService = require('../services/service/cepService');

const findByCep = async (req, res) => {
    const { cep } = req.query;
    try {
       const result = await cepService.findByCep(cep);
       res.status(200).send(result); 
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

const saveCep = async (req, res) => {
    const { cep, uf, cidade, bairro, logradouro } = req.body;
    try {
        await cepService.saveCep(cep, uf, cidade, bairro, logradouro);
        res.status(201).send({ message: "Cep successfully created" });
    } catch (error) {
        console.log (error);
        res.status(500).send({ error: error.message });      
    }
}

module.exports = {
    findByCep,
    saveCep,
}
