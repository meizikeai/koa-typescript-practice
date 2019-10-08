import Raven from 'raven'
import { isPro } from '../config/env'

const ravenURL = isPro ? 'https://738131c84e664edeb5e471ba8424daaf@sentry.blued.cn/10' : ''

export default Raven.config(ravenURL).install()

Raven.disableConsoleAlerts()