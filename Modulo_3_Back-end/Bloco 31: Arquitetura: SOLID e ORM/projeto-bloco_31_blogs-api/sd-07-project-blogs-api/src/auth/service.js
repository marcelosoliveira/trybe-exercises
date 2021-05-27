const { User } = require('../models');
const { 
  token: { generateToken },
  dictionary: {
    userNotExist,
  },
  validations: {
    emailOrPasswordIsUndefined,
  },
} = require('../helpers');

const validateLogin = async (email, password) => {
  const emailOrPasswordUndefined = emailOrPasswordIsUndefined(email, password);

  if (emailOrPasswordUndefined.error) {
    return emailOrPasswordUndefined;
  }

  const user = await User.findOne({ where: { email, password } });  
  if (!user) {
    return { error: true, message: userNotExist };
  }

  return { user };
};

const login = async (userEmail, password) => {  
  const { error, message, user } = await validateLogin(userEmail, password);  
  if (error) return { error, message };
  const token = generateToken(user);

  return { error: false, token };
};

module.exports = { login };
