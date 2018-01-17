const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const router = require('./router')
app.use(bodyParser())
app.use(router.routes())

app.listen(11301)
console.log('app listening 11301。\nhttp://localhost:11301/api/v1/graphiql \n')
