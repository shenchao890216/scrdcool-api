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
    tableName: 'post',
    underscored: true
  })

  Post.associate = function(models) {
    // 文章、用户.
    models.Post.belongsTo(models.User, {
      // foreignKey: 'author',
      constraints: false
    })
    // 文章、标签.
    models.Post.belongsToMany(models.Tag, {
      constraints: false,
      through: 'post_tag'
    })
    // 文章、分类.
    models.Post.belongsTo(models.Category, {
      constraints: false
    })
  }

  return Post
}
