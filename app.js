const Koa = require('koa')
const koaStatic = require('koa-static')
const koaLogger = require('koa-logger')
const koaBodyParser = require('koa-bodyparser')
// const koaBody = require('koa-body')
// const koaViews = require('koa-views')
const path = require('path')
const APPCONF = require('./conf/appconf')
const router = require('./routers')
const models = require('./models')
const app = new Koa()

// models.init()

app.use(koaLogger())
app.use(koaBodyParser())
// app.use(koaBody({
//   multipart: true,
//   formidable: {
//     maxFieldsSize: 2 * 1024 * 1024,
//     multipart: true
//   }
// }))

app.use(koaViews(APPCONF.views.path, {
  extension: 'swig'
}))

app.use(koaStatic(path.join(__dirname, './static')))
app.use(router.routes()).use(router.allowedMethods())

app.listen(APPCONF.server.port)
