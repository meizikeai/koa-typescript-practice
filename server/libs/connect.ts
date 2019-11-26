import datum from '../config/datum'
import { getMysqlPoolByQconfPath as createMySQLClient } from './mysql-client'
import { getRedisPoolByQconfPath as createRedisClient } from './redis-client'

type configDatum = keyof typeof datum

const mysqlClient = (conf: configDatum) => createMySQLClient(conf)
const redisClient = (conf: configDatum) => createRedisClient(conf)

export {
  mysqlClient,
  redisClient,
}