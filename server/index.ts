import app from './app'
import Raven from './libs/raven'

process.on('uncaughtException', e => {
  Raven.captureException(e)
  console.error(e)
})

process.on('unhandledRejection', (reason: any) => {
  Raven.captureException(reason)
  console.error(reason)
})

export default app.listen('5000', () => {
  console.log(`Server running on f 127.0.0.1:5000`)
})
