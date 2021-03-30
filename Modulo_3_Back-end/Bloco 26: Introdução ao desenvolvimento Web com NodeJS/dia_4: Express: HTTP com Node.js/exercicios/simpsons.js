const express = require('express');

const rescue = require('express-rescue');

const fs = require('fs').promises;

const router = express.Router();

router.get('/', rescue(async (req, res) => {
    const file = await fs.readFile(`./simpsons.json`);
    res.status(200).send(file.toString('utf-8'))
}));

router.get('/:id', rescue(async (req, res) => {
    const result = JSON.parse(await fs.readFile('./simpsons.json'));
    const { id } = req.params;
    const findSimpsons = result.filter((res) => res.id === id);
    res.status(200).send(findSimpsons);
}));

router.post('/', rescue(async (req, res) => {
    const result = JSON.parse(await fs.readFile('./simpsons.json'));
    const { id, name } = req.body;
    if (!id || !name) return res.status(400).json({ message: "id or name empty!" });

    const findSimpsons = await result.some((resId) =>  resId.id === id);
    if (findSimpsons) return res.status(400).json({ message: "id exists!" });

    await fs.writeFile('./simpsons.json', JSON.stringify([...result, { id, name }]));   
    return res.status(200).send({message: "Created success"});
}));

router.use((err, req, res, next) => {
    res.status(500).json({ error: 
        `Something is wrong! Error: ${err.message}`})
});

module.exports = router;
