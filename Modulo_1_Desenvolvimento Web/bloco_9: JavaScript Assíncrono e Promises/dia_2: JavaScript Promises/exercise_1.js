//const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
const fetchJoke = () => {
  const joker = document.getElementById('jokeContainer');
  fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((data) => joker.innerHTML = data.joke); 
};

window.onload = () => fetchJoke();