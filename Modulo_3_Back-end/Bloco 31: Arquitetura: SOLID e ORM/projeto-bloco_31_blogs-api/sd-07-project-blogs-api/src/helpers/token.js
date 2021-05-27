const jwt = require('jsonwebtoken');

const SECRET = 'sequelize';
const SECONDS = 60;
const NUMBER = 5;

const generateToken = ({ name, email, id }) => {
  const payload = {
    name,
    email,
    id,
  };

  const jwtConfig = {
    expiresIn: SECONDS * NUMBER,
    algorithm: 'HS256',
  };

  return jwt.sign(payload, SECRET, jwtConfig);
};

const tokenIsValid = (token) => {
  try {
      jwt.verify(token, SECRET);
      return true;
  } catch (error) {
      return false;
  }
};

module.exports = { 
  generateToken,
  tokenIsValid,
};
