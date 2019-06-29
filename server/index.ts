import app from './app'
import Raven from './libs/raven'
import { port } from './config'

process.on('uncaughtException', e => {
  Raven.captureException(e)
  console.error(e)
})

process.on('unhandledRejection', (reason: any) => {
  Raven.captureException(reason)
  console.error(reason)
})

export default app.listen(port || '5000', () => {
  console.log(`Server running on 127.0.0.1:${port}`)
})
