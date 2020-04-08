/**
 * 密码加密模块
 * 加密方式为：md5
 * 
 * 使用的同时可以加入防止sql注入
 * 
 */
const crypto = require('crypto');


// 密匙
const SECRET_KEY = '+_)(*&^%$#@!1234567890QWERTYUIOP';

// md5加密
function md5(content){
    let md5 = crypto.createHash('md5');
    return md5.update(content).digest('hex');
}

// 加密函数
function genPassword(password){
    const str = `password=${password}$key=${SECRET_KEY}`
    return md5(str)
}

module.exports={
    genPassword
}