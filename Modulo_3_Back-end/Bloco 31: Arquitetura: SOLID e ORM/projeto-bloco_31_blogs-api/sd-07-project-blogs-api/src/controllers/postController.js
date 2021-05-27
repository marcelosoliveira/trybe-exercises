const StatusCodes = require('http-status-codes');
const jwt = require('jsonwebtoken');
const service = require('../services/postService');

const SECRET = 'sequelize';

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;
    const { id: userId } = jwt.verify(authorization, SECRET);
    const { error, message, post } = await service.create(userId, title, content, categoryIds);

    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message });

    res.status(StatusCodes.CREATED).json({ id: post.id, userId, title, content });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const getAll = async (_req, res) => {
  try {
    const post = await service.getAll();
    res.status(StatusCodes.OK).json(post);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { error, message, postId } = await service.getById(Number(id));
    if (error) return res.status(StatusCodes.NOT_FOUND).json({ message });
    res.status(StatusCodes.OK).json(postId);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const update = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.params;
    const { authorization } = req.headers;
    const { id: userId } = jwt.verify(authorization, SECRET);
    const ids = { id: Number(id), userId };
    const { error, message, post } = await service.update(ids, title, content, categoryIds);

    if (error) {
      return res.status(
        message !== 'Unauthorized user'
        ? StatusCodes.BAD_REQUEST : StatusCodes.UNAUTHORIZED,
        ).json({ message });
    }

    res.status(StatusCodes.OK).json(post);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    const { id: userId } = jwt.verify(authorization, SECRET);
    const { error, message } = await service.deletePost(Number(id), userId);

    if (error) {
      return res.status(
        message !== 'Unauthorized user'
        ? StatusCodes.NOT_FOUND : StatusCodes.UNAUTHORIZED,
        ).json({ message });
    }

    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const searchPost = async (req, res) => {
  try {
    const { q: query } = req.query;
    const postSearch = await service.searchPost(query);

    res.status(StatusCodes.OK).json(postSearch);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deletePost,
  searchPost,
};
