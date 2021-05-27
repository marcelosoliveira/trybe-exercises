module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      'BlogPost',
      {
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
      },
      {
        timestamps: false,
        // underscored: true,
        tableName: 'BlogPosts',
      },
    );

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return BlogPost;
};
