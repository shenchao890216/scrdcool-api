const koaRouter = require('koa-router')
const tag = new koaRouter()
const { Tag } = require('../models')

/* 新建文章. */
tag.post('/new', async function (ctx) {
  // 1. 校验参数.

  // 2. 取得用户.

  // 3. 取得参数.
  const { name } = ctx.request.body

  // 4. 保存文章.
  const post = await Tag.create({
    name
  })

  // 5. 返回数据.
  ctx.body = {
    code: 0,
    msg: 'success'
  }
})

/* 文章列表. */
tag.get('/list', async (ctx) => {
  const tags = await Tag.findAll({
    attributes: ['id', 'name']
  })

  ctx.body = {
    code: 0,
    msg: 'success',
    data: tags
  }
})

/* 更新文章. */
// post.post('/:id', async (ctx) => {
//   // 1. 校验参数.
//
//   // 2. 取得用户.
//
//   // 3. 取得参数.
//   const { id } = ctx.params
//   const { postTitle ,postOriginContent ,postContent } = ctx.request.body
//
//   // 4. 保存文章.
//   await Post.update({
//     title: postTitle,
//     content: postContent,
//     origin_content: postOriginContent
//   }, {
//     where: { id }
//   })
//
//   // 5. 返回数据.
//   ctx.body = {
//     code: 0,
//     msg: 'success'
//   }
// })

module.exports = tag
