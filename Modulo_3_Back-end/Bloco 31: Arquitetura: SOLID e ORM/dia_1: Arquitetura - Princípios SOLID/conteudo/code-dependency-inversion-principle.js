const axios = require('axios').default;
const fetch = require('node-fetch');

const url = 'https://icanhazdadjoke.com';

const requestWithAxios = () => {
  axios
    .get(url, {
      headers: { Accept: 'text/plain' },
    })
    .then((response) => console.log(response.data));
};

// const requestWithFetch = () => {
// ...

const getOneJoke = (numberOfJokes, jokeRequester = requestWithFetch) => {
  for (let i = 0; i < numberOfJokes; i += 1) jokeRequester();
};

getOneJoke(5, requestWithAxios);
