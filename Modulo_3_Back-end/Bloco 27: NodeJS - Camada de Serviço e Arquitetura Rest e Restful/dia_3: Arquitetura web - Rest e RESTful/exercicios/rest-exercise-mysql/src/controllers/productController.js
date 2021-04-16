const productService = require('../services/service/productService');

const getAll = async (req, res) => {
  try {
    const products = await productService.getAll();

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });    
  } 
};

const getById = async (req, res) => {
  try {
    const product = await productService.getById(req.params.id);

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const add = async (req, res) => {
  try {
    const { name, brand } = req.body;

    const newProduct = await productService.add(name, brand);

    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const exclude = async (req, res) => {
  try {
    await productService.exclude(req.params.id);

    res.status(204).send({ message: "Product deleted!" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, brand } = req.body;

    const products = await productService.update(req.params.id, name, brand);

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  exclude,
  update
};
