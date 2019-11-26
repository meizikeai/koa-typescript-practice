import raven from 'raven'
import { isPro } from '../config/env'

const ravenUrl = isPro ? '' : ''

raven.disableConsoleAlerts()

export default raven.config(ravenUrl).install()
