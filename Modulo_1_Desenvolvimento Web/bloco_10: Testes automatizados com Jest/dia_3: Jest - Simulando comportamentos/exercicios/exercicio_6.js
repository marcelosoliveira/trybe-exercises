const fetch = require('node-fetch');

const fetchDog = () => {
  return fetch('https://dog.ceo/api/breeds/image/random Fetch')
    .then(response => response.json())
    .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json));
}

module.exports = { fetchDog };
