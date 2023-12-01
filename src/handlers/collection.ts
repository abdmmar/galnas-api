import * as CollectionService from '@/services/collection.js'
import { Middleware } from '@koa/router'

// @ts-ignore Can't use Middleware type
// const getCollections: Middleware = (ctx, next) => {
const getCollections: Middleware = (ctx, next) => {
  const collections = CollectionService.getCollections()

  if (collections.length === 0) {
    ctx.body = {
      status: 'ok',
      message: 'collection not found',
      data: null
    }
    return
  }

  ctx.response.status = 200
  ctx.body = {
    status: 'ok',
    message: 'successfully get collections',
    data: {
      totals: collections.length,
      items: collections
    }
  }
}

export { getCollections }
