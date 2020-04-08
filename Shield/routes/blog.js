const router = require('koa-router')()

router.prefix('/blog')

router.get('/', async function (ctx, next) {
    const query = ctx.query 
  ctx.body = {
      error:0,
      data:'sss'
  }
})

router.get('/h',async function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})


module.exports = router