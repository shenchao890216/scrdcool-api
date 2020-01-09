const koaRouter = require('koa-router')
const post = new koaRouter()
const { Post } = require('../models')
const { User } = require('../models')
const { Tag } = require('../models')
const { Category } = require('../models')
const { Sequelize } = require('../models')
const Op = Sequelize.Op

/* 新建文章. */
post.post('/new', async function (ctx) {
  // 1. 校验参数.

  // 2. 取得用户.

  // 3. 取得参数.
  const { postTitle ,postOriginContent ,postContent, postTags, postCategory } = ctx.request.body
  const userId = ctx.session.userId

  const user = await User.findOne({
    where: {
      id: userId
    }
  })

  const category = await Category.findOne({
    where: {
      id: postCategory
    }
  })

  const tags = await Tag.findAll({
    where: {
      id: {
        [Op.in]: postTags
      }
    }
  })

  console.log(postCategory)

  // 4. 保存文章.
  const post = await Post.create({
    title: postTitle,
    content: postContent,
    origin_content: postOriginContent,
    top: 0
  })

  post.setUser(user)
  post.setTags(tags)
  post.setCategory(category)

  // 5. 返回数据.
  ctx.body = {
    code: 0,
    msg: 'success'
  }
})

/* 文章列表. */
post.get('/list', async (ctx) => {
  const posts = await Post.findAll({
    include: [{
      model: User,
      attributes: ['username']
    }, {
      model: Tag,
      attributes: ['id', 'name'],
      through: {
        attributes: []
      }
    }]
  })

  ctx.body = {
    code: 0,
    msg: 'success',
    data: posts
  }
})

/* 更新文章. */
post.post('/:id', async (ctx) => {
  // 1. 校验参数.

  // 2. 取得用户.

  // 3. 取得参数.
  const { id } = ctx.params
  const { postTitle ,postOriginContent ,postContent } = ctx.request.body

  // 4. 保存文章.
  await Post.update({
    title: postTitle,
    content: postContent,
    origin_content: postOriginContent
  }, {
    where: { id }
  })

  // 5. 返回数据.
  ctx.body = {
    code: 0,
    msg: 'success'
  }
})

/* 文章内容. */
post.get('/:id', async (ctx) => {
  const { id } = ctx.params

  const post = await Post.findOne({
    where: { id },
    include: [{
      model: User,
      attributes: ['username']
    }, {
      model: Tag,
      attributes: ['id', 'name'],
      through: {
        attributes: []
      }
    }, {
      model: Category,
      attributes: ['id', 'name']
    }]
  })

  ctx.body = {
    code: 0,
    msg: 'success',
    data: post
  }
})

module.exports = post
