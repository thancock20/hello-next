const Router = require('koa-router')

const router = new Router()

router.get('/', ctx => {
  ctx.body = 'Hello, World!'
})

router.get('/bye', ctx => {
  ctx.body = 'Goodbye, World!'
})

module.exports =  router
