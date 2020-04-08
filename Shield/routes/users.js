const router = require('koa-router')()
const loginCheck = require('../middleweare/checklogin')

router.prefix('/users')

router.get('/', async function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar',loginCheck,async function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
