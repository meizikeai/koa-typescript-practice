import { getMysqlPoolByQconfPath as createMySQLClient } from './mysql-client'
import { getRedisPoolByQconfPath as createRedisClient } from './redis-client'
import configMap from '../config/backend'

type configMapItem = keyof typeof configMap
const mysqlClient = (conf: configMapItem) => createMySQLClient(conf)
const redisClient = (conf: configMapItem) => createRedisClient(conf)

export {
  mysqlClient,
  redisClient,
}