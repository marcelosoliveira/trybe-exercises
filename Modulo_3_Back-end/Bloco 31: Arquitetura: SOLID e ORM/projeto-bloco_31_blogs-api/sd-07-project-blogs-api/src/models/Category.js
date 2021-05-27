module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      'Category',
      {
        name: DataTypes.STRING,
      },
      {
        // underscored: true,
        timestamps: false,
        tableName: 'Categories',
      },
    );
  
    return Category;
};
