const createMySQLClient = require('./mysql')
const createRedisClient = require('./redis')

const mysqlClient = (conf: string) => createMySQLClient(conf)
const redisClient = (conf: string) => createRedisClient(conf)

export {
  mysqlClient,
  redisClient,
}