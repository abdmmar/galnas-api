import Router from '@koa/router'
import Koa from 'koa'
import { koaBody } from 'koa-body'

import * as CollectionHandler from '@/handlers/collection.js'

const PORT = parseInt(process.env.PORT as string)

const router = new Router()
const app = new Koa()

app.use(koaBody())

router.get('/api/collection', CollectionHandler.getCollections)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})