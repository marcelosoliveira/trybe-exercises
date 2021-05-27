const { Category } = require('../models');
const dictionary = require('../helpers/dictionary');

const getAll = () => Category.findAll();

async function create(name) {  
  if (!name) return { error: true, message: dictionary.nameRequired };

  const category = await Category.create({ name });
  return { category };
}

const getById = async (id) => {
  const category = await Category.findOne({ where: { id } });

  if (!category) return { error: true, message: dictionary.categoryNotFound };

  return category;
};

module.exports = {
  create,
  getAll,
  getById,
};
