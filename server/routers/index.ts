import Router from 'koa-router'
import { common, user } from '../controllers/index'

const router = new Router()

// common routes
router.get('/403', common.forbidden)
router.get('/404', common.notFound)

// test routes
router.get('/', common.home)
router.get('/json', common.json)
router.get('/string', common.string)
router.get('/demo', common.demo)

// users routes
router.get('/users', user.getUsers)
router.get('/users/:id', user.getUser)
router.post('/users', user.createUser)
router.put('/users/:id', user.updateUser)
router.delete('/users/:id', user.deleteUser)

export { router }