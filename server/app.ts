import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import json from 'koa-json'
import jsonp from 'koa-safe-jsonp'
import koaBody from 'koa-body'
import path from 'path'
import serve from 'koa-static'
import views from 'koa-views'
import { baseLogger, loggerError } from 'koa-base-logger'

import raven from './libs/raven'
import handleRouter from './system/control/handle-router'
import { isPro } from './config/env'

const app = new Koa()
const port = process.env.PORT || 3000

// logger
app.use(baseLogger({
  appName: 'koa-typescript-practice',
}))

// public
app.use(serve(path.join(__dirname, '../public')))

// views
app.use(views(path.join(__dirname, '../views'), {
  extension: 'hbs',
  map: { hbs: 'handlebars' },
}))

// body / files
app.use(koaBody({ multipart: true }))
app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }))

// compress
app.use(compress({
  threshold: 2048,
}))

app.use(helmet())

// cors
app.use(cors({
  credentials: true,
  maxAge: 5 * 60,
  origin: (e: any) => {
    const white = [
      'http://127.0.0.1:7000',
      'http://127.0.0.1:9000',
    ]

    if (white.includes(e.header.origin)) {
      return e.header.origin
    }
  },
}))

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

  const error = !/404$|403$/ig.test(ctx.path)
  const method = /get/ig.test(ctx.request.method)
  const protocol = /http$/ig.test(ctx.request.header['x-forwarded-proto'])

  if (isPro && error && method && protocol) {
    ctx.redirect(ctx.request.href.replace(/^http:/ig, 'https:'))
  }

  await next()
})

// 403､404
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
loggerError.on('error', (err, ctx) => {
  raven.captureException(err)
  console.error(err, ctx)
})

process.on('uncaughtException', err => {
  raven.captureException(err)
  console.error(err)
})

process.on('unhandledRejection', (err: any) => {
  raven.captureException(err)
  console.error(err)
})

app.on('error', (err, ctx) => {
  ctx.logger.error(err, { notice: 'server error' })
})

// listening
app.listen(port, () => {
  console.log(`Server running on 127.0.0.1:${port}`)
})
