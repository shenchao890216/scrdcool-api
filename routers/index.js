const koaRouter = require('koa-router')
const home = require('./home')
const user = require('./user')
const admin = require('./admin')
const router = new koaRouter()

router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())

module.exports = router
