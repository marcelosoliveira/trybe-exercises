module.exports = (sequelize, _DataTypes) => {
    const PostCategory = sequelize.define(
      'PostsCategories',
      {},
      { timestamps: false, tableName: 'PostsCategories' },
    );  
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPost', through: PostCategory, foreignKey: 'categoryId', otherKey: 'postId',
      });
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    }; 

    return PostCategory;
};
