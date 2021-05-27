const { StatusCodes } = require('http-status-codes');
const { 
  token: { tokenIsValid },
  dictionary: {
    tokenNotFound,
    tokenExpired,
  },
} = require('../helpers');

const TOKEN_INVALID = 0;

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (token === undefined || token.length === TOKEN_INVALID) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ message: tokenNotFound });
    }

    if (tokenIsValid(token)) {
        return next();
    }

    return res.status(StatusCodes.UNAUTHORIZED).send({ message: tokenExpired });
};

module.exports = authMiddleware;
