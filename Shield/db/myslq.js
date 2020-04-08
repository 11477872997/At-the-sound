/**
 * 连接数据库模块
 * 
 * 这里沿袭了promis异步的写法
 *mysql.escape   为了使数据安全的插入到数据库中而进行过滤
 */
const mysql = require('mysql');
const { MYSQL_CONF } = require('../conf/db')


// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF);


// 开始连接
con.connect()

// 统一执行sql函数
function exec(sql){
    //异步的写法 
    const promise = new Promise((resolve,reject) =>{
        con.query(sql,(err,result) =>{
            if(err){
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}


module.exports = {
    exec,
    escape:mysql.escape
}