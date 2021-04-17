require('dotenv/config');
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt-nodejs');

const { SECRET_PASS } = process.env;

module.exports = async (req, res) => {
  try {
    const username = req.body.username;
    let password = req.body.password;

    if (!username || !password)
      return res
        .status(401)
        .json({ message: "É necessário usuário e senha para fazer login" });

    const user = await User.findUser(username);
    password = bcrypt.compareSync(password, user.password);  

    if (!user || !password)
      return res
        .status(401)
        .json({ message: "Usuário não existe ou senha inválida" });

    if (username === 'admin' && req.body.password !== 's3nh4S3gur4???')
      return res.status(401).json({ message: "Username ou password inválidos!" });

      const admin = username === 'admin' && req.body.password === 's3nh4S3gur4???';
    
    const payload = {
      username,
      admin,
    }

    const jwtConfig = {
      expiresIn: 60*1,
      algorithm: "HS256",
    };

    const token = jwt.sign(payload, SECRET_PASS, jwtConfig);
    return res
      .status(200)
      .json({ message: "Login efetuado com sucesso", ...payload, token });
  } catch (e) {
    return res.status(500).json({ message: "Erro interno", error: e.message });
  }
};
