const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const service = require('../services/userService');

const SECRET = 'sequelize';

const getAll = async (_req, res) => {
  try {
    const users = await service.getAll();
    res.status(StatusCodes.OK).json(users);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { error, message, user } = await service.getById(Number(id));

    if (error) return res.status(StatusCodes.NOT_FOUND).json({ message });

    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { error, message, result } = await service.create(displayName, email, password, image);

    if (error) {
      return res.status(message !== 'User already registered'
        ? StatusCodes.BAD_REQUEST : StatusCodes.CONFLICT).json({ message });
    }

    res.status(StatusCodes.CREATED).json({ token: result.token });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { id: userId } = jwt.verify(authorization, SECRET);
    
    await service.deleteUser(userId);

    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

module.exports = { 
    getAll,
    create,
    deleteUser,
    getById,
};
