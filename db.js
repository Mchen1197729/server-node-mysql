const mysql = require('mysql')

//获取mysql数据库的连接对象
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello123',
  database: 'wanjia'
})

//将数据库连接对象默认暴露出去
module.exports = connection