/** 
 * 检车登录模块
*/

const { ErrorModel } = require('../modle/resModle')

module.exports = async (ctx,next) => {
    if(ctx.session.username){
        await next()
        return
    }
    ctx.body = new ErrorModel('未登录')
}