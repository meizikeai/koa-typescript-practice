import path from 'node:path'
import koa from 'koa'
import compress from 'koa-compress'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import json from 'koa-json'
import jsonp from 'koa-safe-jsonp'
import koaBody from 'koa-body'
import koaBodyParser from 'koa-bodyparser'
import logger from 'koa-visit-logger'
import serve from 'koa-static'
import views from 'koa-views'

import handleRouter from './system/control/handle-router'
import { awaitZookeeper, handleZookeeper } from './libs/zookeeper'
import { isPro } from './config/env'

const app = new koa()
const port = process.env.PORT || 3000

// zookeeper
handleZookeeper()

// logger
app.use(
  logger({
    appName: 'koa-typescript-practice',
  })
)

// public
app.use(serve(path.join(__dirname, '../public')))

// views
app.use(
  views(path.join(__dirname, '../views'), {
    extension: 'hbs',
    map: { hbs: 'handlebars' },
  })
)

// body / files
app.use(koaBody({ multipart: true }))
app.use(koaBodyParser({ enableTypes: ['json', 'form', 'text'] }))

// compress
app.use(
  compress({
    threshold: 2048,
  })
)

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

// cross-origin resource sharing
app.use(
  cors({
    credentials: true,
    maxAge: 5 * 60,
    origin: (e: any) => {
      const white = ['http://127.0.0.1:7000', 'http://127.0.0.1:9000']

      if (white.includes(e.header.origin)) {
        return e.header.origin
      }
    },
  })
)

// json
app.use(json())

// jsonp
jsonp(app)

// router
handleRouter(app)

// redirect
app.use(async (ctx, next) => {
  if (/\w*:/i.test(decodeURIComponent(ctx.path))) {
    ctx.redirect('/404')
    return false
  }

  const proto = ctx.request.header['x-forwarded-proto'] || ''

  const error = !/404$|403$/gi.test(ctx.path)
  const method = /get/gi.test(ctx.request.method)
  const protocol = /http$/gi.test(proto.toString())

  if (isPro && error && method && protocol) {
    ctx.redirect(ctx.request.href.replace(/^http:/gi, 'https:'))
  }

  await next()
})

// forbidden / not found
app.use(async (ctx, next) => {
  await next()

  const { status } = ctx
  const accepts = ctx.accepts('html', 'json')
  const result = {
    json: {
      code: status,
      message: status === 403 ? 'Forbidden' : 'Page Not Found',
    },
    text: {
      type: 'text',
      body: status === 403 ? 'Forbidden' : 'Page Not Found',
    },
  }

  if (status === 404 || status === 403) {
    if (accepts === 'html') {
      ctx.redirect(`/${status}`)
      return false
    } else if (accepts === 'json') {
      ctx.body = result.json
      return false
    } else {
      ctx.type = result.text.type
      ctx.body = result.text.body
      return false
    }
  }
})

// error-handling
process.on('uncaughtException', (err: any, origin: any) => {
  console.error(`${process.stderr.fd}, Caught exception: ${err}, Exception origin: ${origin}`)
})

process.on('unhandledRejection', (reason: any, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

app.on('error', (err) => {
  console.error(err)
})

// listening
awaitZookeeper().then(() => {
  app.listen(port, () => {
    console.log(`Server running on 127.0.0.1:${port}`)
  })
})
