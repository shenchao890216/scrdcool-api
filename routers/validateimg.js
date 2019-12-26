const koaRouter = require('koa-router')
const validateImg = new koaRouter()


validateImg.get('/', async function (ctx) {
  ctx.session.test = 'scrdcool'
  ctx.redirect('/user/info')
})

module.exports = validateImg
