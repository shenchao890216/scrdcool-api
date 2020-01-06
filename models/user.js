module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      comment: '用户名'
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      comment: '用户邮箱'
    },
    salt: {
      type: DataTypes.STRING,
      comment: '用户密码盐'
    },
    password: {
      type: DataTypes.STRING,
      comment: '用户密码'
    }
  }, {
    tableName: 'user',
    underscored: true
  })

  User.associate = function(models) {
    models.User.hasMany(models.Post, {
      // foreignKey: 'author',
      constraints: false
    })
  }

  return User
}
