const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackhotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')


const app = express()
const compiler = webpack(WebpackConfig)

// 中间件
app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist/',
    stats: {
        colors: true,
        chunks: false
    }
}))

app.use(webpackhotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// 路由
// 后端路由专用于请求，和文件目录没有任何关系，请求文件（静态资源）是通过url的

// 不论url是否传递参数,这都与接口请求无关,请求的url请看network
const router = express.Router()

router.get('/sample/getx', (req, res) => {
    res.json({
        msg: 'hello express'
    })
})
router.get('/sample/gety', (req, res) => {
    res.json({
        msg: req.query
    })
})

app.use(router)

const port = process.env.PORT || 8086
module.exports =  app.listen(port, () => {
    console.log('server is running at port: ' + port)
})
