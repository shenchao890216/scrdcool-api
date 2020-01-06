module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '分类名称'
    }
  }, {
    tableName: 'category',
    underscored: true
  })

  Category.associate = function(models) {
    models.Category.hasMany(models.Post, {
      constraints: false
    })
  }

  return Category
}
