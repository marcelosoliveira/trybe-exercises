const StatusCodes = require('http-status-codes');
const service = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;

  try {
    const { error, message, category } = await service.create(name);

    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message });

    res.status(StatusCodes.CREATED).json(category);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await service.getAll();
    res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  create,
  getAll,
};
