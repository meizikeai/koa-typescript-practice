import Router from 'koa-router'
import { DefaultState, Context } from 'koa'

import common from '../controllers/common'

const router = new Router<DefaultState, Context>()

// common routes
router.get('/', common.home)
router.get('/403', common.forbidden)
router.get('/404', common.notfound)

export { router }