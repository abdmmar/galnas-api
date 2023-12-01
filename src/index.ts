import Router from '@koa/router'
import Koa from 'koa'
import { koaBody } from 'koa-body'

const router = new Router()
const app = new Koa()

app.use(koaBody())

router.get('/', (ctx) => {
  ctx.body = 'Hello Koa.js'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server started on port 3000")
})