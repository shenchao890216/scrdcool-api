const { md5 } = require('../util/encryption')

const salt = md5('111')

console.log(salt)
