const crypto = require('crypto')

/* md5加密. */
exports.md5 = (originStr) => {
  const md5Hash = crypto.createHash('md5')
  md5Hash.update(originStr)

  return md5Hash.digest('hex')
}
