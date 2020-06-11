const express = require('express')

const connection = require('../db')
/*
* 专门用于处理stars表的路由
*
* */
const router = express.Router()

router.get('/all', (req, res) => {
  //查询数据表中的所有数据
  const sql = 'select * from stars'
  const query = connection.query(sql, (error, results) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', results})
    }
    //关闭连接
    query.end()
  })
})

router.post('/add', (req, res) => {
  // const {name, age, married, gender} = req.body
  console.log(name, age, married, gender)
  //向数据表中新增一条数据
  const sql = `insert into stars (name,age,married,gender) values (?,?,?,?)`
  const query = connection.query(sql, [name, age, married, gender], (error, result) => {
    if (error) {
      res.send({code: -1, msg: 'request error', error})
    } else {
      res.send({code: 0, msg: 'request success', result})
    }
    //关闭查询
    query.end()
  })
})


module.exports = router