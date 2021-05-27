const {
  emailRequired,
  passwordRequired,
  emailNotValid,
  nameLength,
  passwordLength,
  emailEmpty,
  passwordEmpty,
  titleRequired,
  contentRequired,
  categoryIdRequired,
  categoryIsNotEdited,
} = require('./dictionary');

const emailIsValid = (email = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const nameIsValid = (name = '') => {
  const nameMinLength = 8;
  return name.length >= nameMinLength && /^[a-z ]+$/i.test(name);
};

const passwordIsValid = (password) => password && password.length >= 6;

const emailOrPasswordIsUndefined = (email, password) => {
  if (email === undefined) return { error: true, message: emailRequired };
  if (email.length === 0) return { error: true, message: emailEmpty };
  if (password === undefined) return { error: true, message: passwordRequired };
  if (password.length === 0) return { error: true, message: passwordEmpty };

  return { error: false };
};
const emailOrPasswordOrNameIsValid = (email, password, displayName) => {
  if (!nameIsValid(displayName)) return { error: true, message: nameLength };  
  if (!emailIsValid(email)) return { error: true, message: emailNotValid };
  if (!passwordIsValid(password)) return { error: true, message: passwordLength };

  return { error: false };
};

const titleContentCategory = (title, content, categoryIds) => {
  if (!title) return { error: true, message: titleRequired };
  if (!content) return { error: true, message: contentRequired };
  if (!categoryIds) return { error: true, message: categoryIdRequired };

  return { error: false };
};

const titleContent = (title, content, categoryIds) => {
  if (!title) return { error: true, message: titleRequired };
  if (!content) return { error: true, message: contentRequired };
  if (categoryIds) return { error: true, message: categoryIsNotEdited };

  return { error: false };
};

module.exports = {
  emailIsValid,
  passwordIsValid,
  nameIsValid,
  emailOrPasswordIsUndefined,
  emailOrPasswordOrNameIsValid,
  titleContentCategory,
  titleContent,
};
