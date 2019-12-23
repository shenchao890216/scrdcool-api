const path = require('path')
const glob = require('glob')
const Sequelize = require('sequelize')
const APPCONF = require('../conf/appconf').db
const sequelize = new Sequelize(APPCONF.database, APPCONF.username, APPCONF.password, {
  host: APPCONF.host,
  dialect: APPCONF.dialect
})
let db = {}

// 1. 取得所有models的文件路径.
const modelFiles = glob.sync(path.join(__dirname, '**/*.js'),{
  ignore: [path.join(__dirname, 'index.js')]
})

// 2. 引入models，存入db.
modelFiles.forEach(modelFile => {
  const model = sequelize.import(modelFile)
  db[model.name] = model
})

// 3. 解决models的关系.
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

// 4. 返回相关的对象.
module.exports = {
  Sequelize,
  sequelize,
  ...db
}
