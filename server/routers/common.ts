import Router from 'koa-router'
import common from '../controllers/common'

const router = new Router()

// common routes
router.get('/', common.home)
router.get('/403', common.forbidden)
router.get('/404', common.notFound)

export { router }