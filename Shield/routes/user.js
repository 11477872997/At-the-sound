const router = require('koa-router')()
const {login,land} =require('../controller/user')
const { SuccessModel,ErrorModel }= require('../modle/resModle')
const { resG } = require('../controller/blog')

router.prefix('/api')

router.post('/login', async function (ctx, next) {
    const datas = ctx.request.body;
    const data = await login(datas.user,datas.paw1)
    console.log(data)
    if(data == undefined){

      ctx.body ={
        ss:1,
        msg:new ErrorModel('失败')
      } 

    }else{
      ctx.session.username = data.username;
      // ctx.session.realname = realname;
      ctx.body = {
       id: data.Id,
       name:ctx.session.username,
       msg:  new SuccessModel('登录')
      }
    }
    
})


router.post('/resgi',async function(ctx,next){
      const datas = ctx.request.body;
      console.log(datas)
      const data = await resG(datas.user)
      console.log(data)
      if(data == undefined){
        ctx.body = new SuccessModel('可以使用')
      }else{
        ctx.body = new ErrorModel('用户已存在')
      }
})

router.post('/land',async function(ctx,next){
      const datas = ctx.request.body;
      // console.log(datas)
      const data = await land(datas.user,datas.paw2)
      // console.log(data)
      if(data == undefined){
        ctx.body = {
         msg: new SuccessModel('注册成功')
        }
      }else{
        ctx.body = new ErrorModel('注册失败')
      }
})

router.get('/a',async function(ctx,next){

       if(ctx.session.viewCount == null){
         ctx.session.viewCount =0
       }
       ctx.session.viewCount++

       ctx.body = {
         errno:0,
         viewCount:ctx.session.viewCount,
       }
      // ctx.body={
      //   errno:0
      // }
})




module.exports = router
