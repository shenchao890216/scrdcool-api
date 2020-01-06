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
  let responseData = {
    code: 0,
    msg: 'Success'
  }
  // 1. 校验图形验证码.

  // 2. 取得参数.
  const { email, password } = ctx.request.body

  // 3. 校验参数.

  // 4. 查询用户.
  const [ {id, salt, password: newPassword} ] = await User.findAll({
    where: { email },
    raw: true
  })

  // 5. 校验数据.
  if (newPassword !== md5(salt + password)) {
    responseData.code = 10086
    responseData.msg = '密码错误'
  }

  // 6. 种植session和token.
  if (responseData.code === 0) {
    ctx.session.userId = id
    ctx.cookies.set('token', 1, {
      domain: '.scrdcool.com',
      httpOnly: true,
      overwrite: false
    })
  }

  // 7. 返回结果.
  ctx.body = responseData
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
