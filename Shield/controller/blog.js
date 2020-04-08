/**
 * 业务逻辑模块
 * 数据模块
 */
const xss = require('xss');
const { exec,escape } = require('../db/myslq')


const getList = async (author,keyword) =>{
    let sql = `select * from blogs where 1=1` 
    if(author){
        sql += `and author='${author}'`
    }
    if(keyword){
        sql += `and title like '%${keyword}%'`
    }
    sql += `order by createtime desc`

    return await exec(sql)
}

const getData = async (id) =>{
    const sql = `select * from  users where '${id}'`
    const row = await exec(sql);
    return row[0]
}


const resG = async (username) =>{
    console.log(username)
    username = escape(username)
    const sql = `select * from users where username=${username}`
    const rows = await exec(sql)
    return rows[0] 
}

module.exports = {
    getList,
    getData,
    resG
}