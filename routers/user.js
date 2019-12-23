const koaRouter = require('koa-router')
const user = new koaRouter()

/* 注册. */
user.post('/register', async function (ctx) {
})

/* 登录. */
user.post('/register', async function (ctx) {
})

/* 用户信息. */
user.get('/info', async function (ctx) {
  ctx.body = {
    code: 0,
    msg: 'success',
    data: ctx.session.test
  }
})

module.exports = user
