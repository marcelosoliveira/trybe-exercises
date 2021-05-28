const joke = require('../models/joke');

const listJokes = async (_req, res) => {
    const joker = await joke()
    res.render('joker/jokeView', { joker });
};

module.exports = {
  listJokes,
};
  