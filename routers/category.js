const koaRouter = require('koa-router')
const category = new koaRouter()
const { Category } = require('../models')

/* 新建分类. */
category.post('/new', async function (ctx) {
  // 1. 校验参数.

  // 2. 取得用户.

  // 3. 取得参数.
  const { name } = ctx.request.body

  // 4. 保存文章.
  const category = await Category.create({
    name
  })

  // 5. 返回数据.
  ctx.body = {
    code: 0,
    msg: 'success'
  }
})

/* 分类列表. */
category.get('/list', async (ctx) => {
  const categories = await Category.findAll({
    attributes: ['id', 'name']
  })

  ctx.body = {
    code: 0,
    msg: 'success',
    data: categories
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

module.exports = category
