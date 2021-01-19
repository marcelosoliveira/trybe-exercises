export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const CLIENTREG = 'CLIENTREG';
export const CLIENTDELETE = 'CLIENTDELETE';
export const TEMP = 'TEMP';

export const login = (status, user) => ({
  type: LOGIN,
  status,
  user,
});

export const signUp = (email, password) => ({
  type: SIGNUP,
  email,
  password,
});

export const clientReg = (name, age, email) => ({
  type: CLIENTREG,
  name,
  age,
  email,
});

export const logOut = () => ({
  type: LOGOUT,
});

export const clientDelete = (name, age, email) => ({
  type: CLIENTDELETE,
  name,
  age,
  email,
});
