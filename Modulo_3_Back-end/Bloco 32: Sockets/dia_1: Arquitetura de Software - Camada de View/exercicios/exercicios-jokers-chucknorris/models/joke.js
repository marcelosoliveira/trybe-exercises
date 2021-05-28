const axios = require('axios').default;

const getJokes = async () => {
  const joker = axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
  .then((response) => response.data.joke)
  .catch((error) => {
    if (error) return { error: error.message };
  });

  return joker;
}

module.exports = getJokes;
