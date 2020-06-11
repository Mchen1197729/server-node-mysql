const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

/**********引入路由*********/

const starsRouter = require('./router/stars')
/**********引入路由*********/

const connection = require('./db')

//为http服务设置端口号
const HTTP_PORT = 5400

const app = express()

//cors config
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

/**********使用路由*********/
app.use('/stars', starsRouter)
/**********使用路由*********/

//为数据库添加事件监听
connection.connect(error => {
  if (error) {
    //连接失败
    console.log('database connect error.', error.stack)
  } else {
    //连接成功
    console.log('database connect success,connected as id:', connection.threadId)
    //开启http服务
    app.listen(HTTP_PORT, () => {
      console.log(`http server is running at port ${HTTP_PORT}`)
    })
  }
})



