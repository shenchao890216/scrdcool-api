const koaRouter = require('koa-router')
const post = new koaRouter()
const { Post } = require('../models')

/* 新建文章. */
post.post('/new', async function (ctx) {
  // 1. 校验参数.

  // 2. 取得用户.

  // 3. 取得参数.
  const { postTitle ,postOriginContent ,postContent } = ctx.request.body

  // 4. 保存文章.
  await Post.create({
    title: postTitle,
    content: postContent,
    origin_content: postOriginContent,
    top: 0,
    auth: 1
  })

  // 5. 返回数据.
  ctx.body = {
    code: 0,
    msg: 'success'
  }
})

/* 文章列表. */
post.get('/list', async (ctx) => {
  const posts = await Post.findAll()

  ctx.body = {
    code: 0,
    msg: 'success',
    data: posts
  }
})

/* 文章内容. */
post.get('/:id', async (ctx) => {
  const { id } = ctx.params

  const post = await Post.findAll({
    where: { id },
    raw: true
  })

  ctx.body = {
    code: 0,
    msg: 'success',
    data: post[0]
  }
})

module.exports = post
