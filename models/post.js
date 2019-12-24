module.exports = (sequelize, DataTypes) => {
  let Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    tableName: 'post'
  })

  Post.associate = function(models) {
    models.Post.belongsTo(models.User, {
      foreignKey: 'author'
    })
  }

  return Post
}
