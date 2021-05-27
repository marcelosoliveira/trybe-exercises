const { validationResult } = require('express-validator');
const status = require('http-status-codes');

const validation = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(status.NOT_FOUND).json(errors);
  }

  next();
};

module.exports = {
  validation,
};
