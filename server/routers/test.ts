import Router from 'koa-router'
import test from '../controllers/test'

const router = new Router()

// test routes
router.get('/demo', test.demo)
router.get('/json', test.json)
router.get('/string', test.string)

export { router }