const Koa = require('koa')
const koaStatic = require('koa-static')
const koaLogger = require('koa-logger')
const koaBodyParser = require('koa-bodyparser')
const session = require('koa-session')
const path = require('path')
const APPCONF = require('./conf/appconf')
const router = require('./routers')
const app = new Koa()

app.keys = ['scrd cool api']

app.use(koaLogger())
app.use(session(APPCONF.session, app))
app.use(koaBodyParser())
app.use(koaStatic(path.join(__dirname, './static')))
app.use(router.routes()).use(router.allowedMethods())

app.listen(APPCONF.server.port)
