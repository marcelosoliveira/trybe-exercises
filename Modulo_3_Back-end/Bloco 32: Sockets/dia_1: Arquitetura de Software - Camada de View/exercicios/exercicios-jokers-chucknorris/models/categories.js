const axios = require('axios').default;

const getCategories = async () => {
  const categorys = axios.get('https://api.chucknorris.io/jokes/categories')
  .then((response) => response.data)
  .catch((error) => {
    if (error) return { error: error.message };
  });

  return categorys;
}

const getCategoriesSearch = async (category) => {
  const categorys = axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
  .then((response) => response.data.value)
  .catch((error) => {
    if (error) return { error: error.message };
  });

  return categorys;
}

module.exports = {
  getCategories,
  getCategoriesSearch,
};
