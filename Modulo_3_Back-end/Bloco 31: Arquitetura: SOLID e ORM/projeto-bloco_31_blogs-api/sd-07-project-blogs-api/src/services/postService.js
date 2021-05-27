const { Op } = require('sequelize');
const { BlogPost, Category, User, PostCategory } = require('../models');

const {
  dictionary: {
    categoryNotFound,
    postNotFound,
    userUnauthorized,
  },
  validations: {
    titleContentCategory,
    titleContent,
  },
} = require('../helpers');

const getAll = async () => {
  const postAll = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: PostCategory,
        as: 'categories',
        through: { attributes: [] },
        association: 'categories', 
      }] },
    );

  return postAll;
};

const getById = async (id) => {
  const postId = await BlogPost.findByPk(id, 
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: PostCategory,
        as: 'categories',
        through: { attributes: [] },
        association: 'categories', 
      }] });
  if (!postId) return { error: true, message: postNotFound };

  return { postId };
};

async function create(userId, title, content, categoryIds) {
  const postUndefined = titleContentCategory(title, content, categoryIds);

  if (postUndefined.error) return postUndefined;
  
  const category = await Category.findAll({ where: { id: categoryIds } });

  if (category.length !== categoryIds.length) return { error: true, message: categoryNotFound };

  const post = await BlogPost.create(
    { userId, title, content, published: Date(), updated: Date() },
    );
  
/*   categoryIds.forEach(async (index) => {
    await PostCategory.create(
      { categoryId: categoryIds[index - 1], postId: post.id },
      );
  }); */

  return { post };
}

const update = async (ids, title, content, categoryIds) => {
  const postUndefined = titleContent(title, content, categoryIds);

  if (postUndefined.error) return postUndefined;

  const { id, userId } = ids;
  
  const postId = await BlogPost.findOne({ where: { id } });
  
  if (!postId) return { error: true, message: postNotFound };
  if (userId !== postId.userId) return { error: true, message: userUnauthorized };

  await BlogPost.update({ title, content }, { where: { id } });

    const post = await BlogPost.findByPk(id,
      { include: [
        {
          model: Category,
          as: 'categories',
          through: { attributes: [],
          association: 'categories',
          } }],
          attributes: ['title', 'content', 'userId'],
      });
  
  return { post };
};

const deletePost = async (id, userId) => {  
  const postId = await BlogPost.findOne({ where: { id } });
  
  if (!postId) return { error: true, message: postNotFound };
  if (userId !== postId.userId) return { error: true, message: userUnauthorized };

  await BlogPost.destroy({ where: { id } });

  return {};
};

const searchPost = async (query) => {
  const postSearch = await BlogPost.findAll({ where: { [Op.or]: [
    { title: { [Op.like]: `%${query}%` } },
    { content: { [Op.like]: `%${query}%` } },
  ] },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
      association: 'categories',
    },
  ] });

  return postSearch;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deletePost,
  searchPost,
};
