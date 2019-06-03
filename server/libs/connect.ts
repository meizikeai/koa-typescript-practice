const createMySQLClient = require('./mysql-client')
const createRedisClient = require('./redis-client')

const mysqlClient = (conf: string) => createMySQLClient(conf)
const redisClient = (conf: string) => createRedisClient(conf)

export {
  mysqlClient,
  redisClient,
}