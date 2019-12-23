const koaRouter = require('koa-router')
const user = new koaRouter()

const User = require('../models').User

user.get('/', async function (ctx) {
  await ctx.render('user/register')
})

user.post('/adduser', async function (ctx) {
  console.log(2222)
  console.log(ctx.request.body)
  // let newuser = await User.create(ctx.request.body)
  // console.log(newuser.username)
  ctx.body = JSON.stringify(ctx.request.body)
})

module.exports = user