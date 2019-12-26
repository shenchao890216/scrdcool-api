const koaRouter = require('koa-router')
const user = new koaRouter()
const { md5 } = require('../util/encryption')
const { User } = require('../models')
const { inspect } = require('util')

/* 注册. */
user.post('/register', async function (ctx) {
  // 1. 验证图形验证码.

  // 2. 验证各个参数.
  const { username, email, password } = ctx.request.body

  // 3. 生成密码.
  const originHashStr = (new Date()).toDateString()
  const salt = md5(originHashStr)
  const newPassword = md5(salt + password)

  // 4. 存储用户.
  await User.create({
    username,
    email,
    salt,
    password: newPassword
  })

  // 5. 返回结果.
  ctx.body = {
    code: 0,
    msg: 'success'
  }
})

/* 登录. */
user.post('/login', async function (ctx) {
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
