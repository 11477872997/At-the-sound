/** 
 * 登录模块
*/
const { exec,escape } = require('../db/myslq')
const { genPassword } = require('../utils/cryp')


const login = async (username, password) =>{
    username = escape(username)
    // console.log(username)

    // 生成加密
    password = genPassword(password)
    // console.log(password)
    password = escape(password)

    const sql = `select * from users where username=${username} and password=${password}`

    const rows = await exec(sql)
    return rows[0]
}

const land = async (username,password) =>{
    username = escape(username)

    password = genPassword(password)
    password =escape(password)

    // const sql = `INSERT INTO users  (ID,username,password) VALUES (null,${username},${password})`
    const sql = `INSERT INTO users (username,password) VALUES (${username},${password})`

    const rows = await exec(sql)
    return rows[0]
}

module.exports = {
    login,
    land

}