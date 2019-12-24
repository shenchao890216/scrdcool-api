module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    tableName: 'user'
  })

  // User.associate = function(models) {
  //   models.User.hasOne(models.Banner)
  // }

  return User
}
