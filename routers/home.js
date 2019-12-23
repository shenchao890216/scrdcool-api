const koaRouter = require('koa-router')
const home = new koaRouter()


home.get('/', async function (ctx) {
  ctx.session.test = 'scrdcool'
  ctx.redirect('/user/info')
})

module.exports = home
