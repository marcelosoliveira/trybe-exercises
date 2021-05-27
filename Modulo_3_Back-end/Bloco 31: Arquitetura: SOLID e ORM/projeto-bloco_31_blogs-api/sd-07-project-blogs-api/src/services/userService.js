const { User } = require('../models');
const { login } = require('../auth/service');
const {
  validations: {
    emailOrPasswordIsUndefined,
    emailOrPasswordOrNameIsValid,
  },
  dictionary: {
    emailExist,
    userNotFound,
  }, 
} = require('../helpers');

const getAll = async () => (User.findAll());

const getByEmail = async (email) => (User.findOne({ where: { email } }));

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) return { error: true, message: userNotFound };

  return { user };
};

async function create(displayName, email, password, image) {
  const emailOrPasswordUndefined = emailOrPasswordIsUndefined(email, password);
  const emailPasswordNameValid = emailOrPasswordOrNameIsValid(email, password, displayName);

  if (emailOrPasswordUndefined.error) {
    return emailOrPasswordUndefined;
  }
  
  if (emailPasswordNameValid.error) {
    return emailPasswordNameValid;
  }

  const userExists = await User.findOne({ where: { email } });

  if (userExists) return { error: true, message: emailExist };

  await User.create({ displayName, email, password, image });
  return { result: await login(email, password) };
}

const deleteUser = async (id) => {  
  await User.destroy({ where: { id } });
};

module.exports = { 
  getAll,
  getById,
  getByEmail,
  create,
  deleteUser,
};
