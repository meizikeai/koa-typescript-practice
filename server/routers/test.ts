import Router from 'koa-router'
import test from '../controllers/test'

const router = new Router()

// test routes
router.get('/demo', test.demo)
router.get('/json', test.json)
router.get('/string', test.string)

router.get('/users', test.getUsers)
router.get('/users/:id', test.getUser)
router.post('/users', test.createUser)
router.put('/users/:id', test.updateUser)
router.delete('/users/:id', test.deleteUser)

export { router }