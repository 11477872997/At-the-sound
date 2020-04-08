const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const cors = require('koa2-cors'); //跨域处理
const path = require('path')
const fs = require('fs');
const morgan = require('koa-morgan');

const { REDIS_CONF } = require('./conf/db')

const index = require('./routes/index')
const users = require('./routes/users')
const blog = require('./routes/blog')
const user = require('./routes/user')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

const ENV = process.env.NODE_ENV
if(ENV != 'production'){
  app.use(morgan('dev'))
}else{
  const logF = path.join(__dirname,'logs','access.log')
  const writeStream = fs.createWriteStream(logF,{
    flags:'a'
  })
  app.use(morgan('combined'),{
    stream:writeStream
  })
}

app.use(
    cors({
        origin: function(ctx) { //设置允许来自指定域名请求
            if (ctx.url === '/test') {
                return '*'; // 允许来自所有域名请求
            }
            return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
        },
        maxAge: 20, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
);

// session 配置
// app.keys = ['!@#@!#@!aaAAA./3242'],
// app.use(session({
//   // 配置cookie
//   cookie:{
//     path:'/',
//     httpOnly:true,
//     maxAge:24*60*60*1000
//   },
//   // 配置redis
//   store:redisStore({
//      all:'127.0.0.1:6379'
//   }),
//   app
// }))

app.keys = ['!@#$%^&*()09876qwertyuiop'];
const CONFIG = {
   key: '!@#$%^&*()09876qwertyuiop',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(
    CONFIG,
    {
      store:redisStore({
          all:`${REDIS_CONF.host}:${REDIS_CONF.port}`
      })
   },
   app
   ));


// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())
app.use(user.routes(), user.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
