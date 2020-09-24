import Router from 'koa-router'
import { DefaultState, Context } from 'koa'

import test from '../controllers/test'

const router = new Router<DefaultState, Context>()

// test routes
router.get('/demo', test.demo)
router.get('/2020/test', test.test)
router.get('/json', test.json)
router.get('/string', test.string)

export { router }