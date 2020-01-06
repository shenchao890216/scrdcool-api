const koaRouter = require('koa-router')
const home = require('./home')
const user = require('./user')
const admin = require('./admin')
const upload = require('./upload')
const post = require('./post')
const tag = require('./tag')
const validateImg = require('./validateimg')
const router = new koaRouter()

router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/upload', upload.routes(), upload.allowedMethods())
router.use('/post', post.routes(), post.allowedMethods())
router.use('/tag', tag.routes(), tag.allowedMethods())
router.use('/validateimg', validateImg.routes(), validateImg.allowedMethods())

module.exports = router
