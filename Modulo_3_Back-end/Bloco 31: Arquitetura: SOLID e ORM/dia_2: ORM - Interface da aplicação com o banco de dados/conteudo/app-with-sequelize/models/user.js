const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Users',
  });

  return User;
};

module.exports = User;