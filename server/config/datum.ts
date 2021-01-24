import development from './development'
import production from './production'
import { isPro, isLocalPro } from '../config/env'

let datum = development

if (isPro) {
  datum = production
} else if (isLocalPro) {
  datum = production
}

export default datum
