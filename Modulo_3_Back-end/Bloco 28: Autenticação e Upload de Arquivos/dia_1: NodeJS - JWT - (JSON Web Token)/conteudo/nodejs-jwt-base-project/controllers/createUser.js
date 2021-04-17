const Model = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

module.exports = async (req, res) => {
  let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(2));
  try {
    const username = await Model.registerUser(
      req.body.username,
      password
    );
    if (!username) throw Error;
    res.status(201).json({ message: 'Novo usuário', user: username });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};
