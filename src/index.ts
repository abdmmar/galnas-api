import * as CollectionHandler from '@/handlers/collection.js'
import Router from '@koa/router'
import Koa from 'koa'
import { koaBody } from 'koa-body'

const router = new Router()
const app = new Koa()

app.use(koaBody())

router.get('/', (ctx, next) => CollectionHandler.getCollections(ctx, next))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server started on port 3000")
})