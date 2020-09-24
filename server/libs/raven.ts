import raven from 'raven'
import { isPro, isLocalPro, isDev } from '../config/env'

const ravenUrl = !isLocalPro && (isPro || isDev) ? '' : ''

raven.disableConsoleAlerts()

export default raven.config(ravenUrl).install()
