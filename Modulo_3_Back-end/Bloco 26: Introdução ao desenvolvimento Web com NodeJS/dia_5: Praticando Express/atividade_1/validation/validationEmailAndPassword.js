const validationEmailAndPassword = (email, password) => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
      !(password.length >= 4 && password.length <= 8)) {
          return true;
    }
    return false;
}

module.exports = validationEmailAndPassword;
