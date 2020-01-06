module.exports = (sequelize, DataTypes) => {
  let Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '标签名称'
    }
  }, {
    tableName: 'tag',
    underscored: true
  })

  Tag.associate = function(models) {
    models.Tag.belongsToMany(models.Post, {
      constraints: false,
      through: 'post_tag'
    })
  }

  return Tag
}
