import createMySQLClient from 'ai-mysql-client'
import createRedisClient from 'ai-Redis-client'
import { Qconf } from '@blued-core/qconf'

import datum from '../config/datum'
import { isLocalPro } from '../config/env'

const qconf = new Qconf(datum)
qconf.flag = isLocalPro ? 'production' : ''

const mysqlClient = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createMySQLClient({ key, option: qconf })
}

const redisClient = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createRedisClient({ key, option: qconf })
}

export {
  mysqlClient,
  redisClient,
}
