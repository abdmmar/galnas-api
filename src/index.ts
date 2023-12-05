import * as CollectionHandler from '@/handlers/collection.js'
import Router from '@koa/router'
import { createServer } from 'http'
import Koa from 'koa'
import { koaBody } from 'koa-body'
import { parse } from 'url'
import { WebSocketServer } from 'ws'

const PORT = parseInt(process.env.PORT as string)

const app = new Koa()
const route = new Router()

app
  .use(koaBody())
  .use(route.routes())
  .use(route.allowedMethods())

const server = createServer(app.callback())
const wss = new WebSocketServer({ noServer: true })

route.get('/api/collection', CollectionHandler.getCollections)

wss.on('connection', function connection(ws, req) {
  console.log("New client connected !");

  ws.send("Hello this is welcome message");

  ws.on("message", (m) => {
    const message = m?.toString()
    console.log(`message: ${message}`);

    if (message === "hi") {
      ws.send("hello");
    } else if (message === "bye") {
      ws.send("goodbye");
    } else {
      ws.send("other message");
    }
  });
})

server.on("upgrade", (request, socket, head) => {
  const { pathname } = request.url ? parse(request.url) : { pathname: null }

  if (pathname === '/foo') {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    })
    return
  }

  socket.destroy();
});

server.listen(PORT, function listening() {
  console.log('Listening on %d', PORT);
});