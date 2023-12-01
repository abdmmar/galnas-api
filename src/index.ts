import Router from '@koa/router'
import Koa from 'koa'
import { koaBody } from 'koa-body'

import * as CollectionHandler from '@/handlers/collection.js'

const router = new Router()
const app = new Koa()

app.use(koaBody())

router.get('/', CollectionHandler.getCollections)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server started on port 3000")
})