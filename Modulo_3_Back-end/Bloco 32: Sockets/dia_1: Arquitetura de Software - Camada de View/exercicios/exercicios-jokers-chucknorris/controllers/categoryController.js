const { getCategories, getCategoriesSearch } = require('../models/categories');

const listCategories = async (_req, res) => {
    const categories = await getCategories();
    res.render('category/categoryView', { categories });
};

const searchCategories = async (req, res) => {
  const { category } = req.query;
  const categories = await getCategoriesSearch(category);
  res.render('category/searchcategoryView', { categories });
};

module.exports = {
  listCategories,
  searchCategories,
};
  