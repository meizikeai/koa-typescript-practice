import createMySQLClient from '../system/control/mysql'
import createRedisClient from '../system/control/redis'

import datum from '../config/datum'

const mysqlClient = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createMySQLClient(datum[key])()
}

const redisClient = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createRedisClient(datum[key])()
}

export { mysqlClient, redisClient }
