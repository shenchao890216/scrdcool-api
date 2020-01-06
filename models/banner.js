module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Banner', {
    url: {
      type: DataTypes.STRING,
      unique: true
    },
    deleted: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0
    },
    actived: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0
    }
  }, {
    tableName: 'banner',
    underscored: true
  })
}
