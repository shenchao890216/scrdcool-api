const koaRouter = require('koa-router')
const home = new koaRouter()

const User = require('../models').User

home.get('/', async function (ctx) {
  // const user = await User.findOne({
  //   where: {
  //     id: 1
  //   }
  // })

  // await ctx.render('home/index', {
  //   user
  // })
  await ctx.render('home/index')
})

home.get('gettest', async function (ctx) {
  console.log(ctx.query.username)
  await ctx.render('home/index')
})

home.post('gettest', async function (ctx) {
  await ctx.render('home/index')
})

home.get('adduser', async function (ctx) {
  await ctx.render('adduser')
})

home.post('adduser', async function (ctx) {
  console.log(2222)
  console.log(ctx.request)
})

home.get('vuetest', async function (ctx) {
  await ctx.render('home/vuetest')
})

module.exports = home