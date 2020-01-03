module.exports = (sequelize, DataTypes) => {
  let Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '文章标题'
    },
    origin_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '文章原始内容'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '文章内容'
    },
    top: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      comment: '文章置顶：0【不置顶】1【置顶】'
    }
  }, {
    tableName: 'post'
  })

  Post.associate = function(models) {
    models.Post.belongsTo(models.User, {
      foreignKey: 'author',
      constraints: false
    })
  }

  return Post
}
