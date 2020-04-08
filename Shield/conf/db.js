/**
 * 环境参数配置模块
 * 
 * msql与redis 的配置环境。分为线上模式与开发模式
 * 
 * 
 */
const env = process.env.NODE_ENV    //配置环境参数

let MYSQL_CONF


if(env === 'dev'){

    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'root',
        port:'3306',
        database:'user' 
    }


    REDIS_CONF ={
        port:6397,
        host:'127.0.0.1'
    }
}

if(env === 'production'){

    MYSQL_CONF = {
        host:'localhost',
        user:'root',
        password:'root',
        port:'3306',
        database:'user' 
    }
    REDIS_CONF ={
        port:6397,
        host:'127.0.0.1'
    }
}


module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}