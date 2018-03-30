const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const jwt = require('koa-jwt')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const controller = require('./controller')
const db = require('./db')

//log
app.use(logger())

//jwt
app.use(jwt({ secret: config.app.secret }).unless({ path: [/^(?!\/admin)./] }))

//body parser
app.use(bodyParser())

//controller
app.use(controller())

app.listen(config.app.port)
console.log('app started at http://localhost:' + config.app.port)