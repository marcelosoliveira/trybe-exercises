const { StatusCodes } = require('http-status-codes');

const service = require('./service');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;    
    const { error, message, token } = await service.login(email, password);
    
    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message });
    }
    res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

module.exports = { login };
