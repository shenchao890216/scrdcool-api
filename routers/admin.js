const koaRouter = require('koa-router')
const admin = new koaRouter()
const Formidable = require('formidable')
const path = require('path')
const fs = require('fs')
const moment = require('moment')
const { Banner } = require('../models')

/* admin首页. */
admin.get('/', async function (ctx) {
  await ctx.render('admin/index')
})

/* banner页面. */
admin.get('/banner', async (ctx) => {
  await ctx.render('admin/banner')
})

/* 上传banner. */
admin.post('/banner', async (ctx) => {
  const req = ctx.req
  let resPath = ''

  await ((req) => {
    return new Promise(resolve => {
      // 1. 设置相关文件路径.
      const dirName = moment().format('YYYYMMDD')
      const uploadPath = path.join(__dirname, '../static/upload/banner/' + dirName + '/')
      const staticPath = '/upload/banner/' + dirName + '/'

      // 2. 判断是不是multipart类型提交.
      if (ctx.is('multipart')) {
        // 3. 上传文件夹不存在，建立.
        if (!fs.existsSync(uploadPath)) {
          fs.mkdirSync(uploadPath)
        }

        // 4. 使用Formidable.
        const form = new Formidable()

        form.maxFieldsSize = 2 * 1024 * 1024
        form.uploadDir = path.join(__dirname, '../static/upload/banner')
        form.parse(req, async (err, fields, files) => {
          const updateFile = uploadPath + files.myimg.name

          resPath = staticPath + files.myimg.name

          // 5. 重新保存文件.
          fs.renameSync(files.myimg.path, updateFile)
          // 6. 保存到数据库.
          await Banner.create({
            url: resPath
          })
          resolve()
        })
      }
    })
  })(req)

  // 7. 重定向到文件的地址.
  ctx.redirect(resPath)
})

/* 获取banner列表. */
admin.get('/bannerlist', async ctx => {
  // 1. 取得相应的banner数据.
  const bannerList = await Banner.findAll({
    limit: 10,
    raw: true
  })

  // 2. 以json的形势返回.
  ctx.body = {
    code: 0,
    msg: 'success',
    data: bannerList
  }
})

module.exports = admin
