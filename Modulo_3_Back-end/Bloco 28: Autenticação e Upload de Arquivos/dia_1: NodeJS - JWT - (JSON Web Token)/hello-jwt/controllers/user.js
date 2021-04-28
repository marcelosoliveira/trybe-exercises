const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');

const create = async (req, res) => {
  const { username, password } = req.body;

  if (username.length < 5 || password.length < 5)
    return res.status(401).json({
      message: "Usuário e senha devem possuir pelo menos 5 caracteres"
    });
  
  const user = await User.findUser(username);
  
  if (user)
    return res.status(409).json({
      message: "Usuário já existe!"
    });

  let passwordCrypt = bcrypt.hashSync(password, bcrypt.genSaltSync(2));
  await User.create(username, passwordCrypt);
  res.status(200).json({ message: 'Usuário criado com sucesso!' });
};

const findAll = async(req, res) =>
  res.status(200).json(await User.findAll());

  module.exports = {
    create,
    findAll,
  }
