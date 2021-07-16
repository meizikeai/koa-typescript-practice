import getMysqlClient from '../libs/mysql'
import getRedisClient from '../libs/redis'
import getserverClient from '../libs/server'

const mysqlClient = (key: string) => {
  return getMysqlClient(key)
}

const redisClient = (key: string) => {
  return getRedisClient(key)
}

const serverClient = (key: string) => {
  return getserverClient(key)
}

export { mysqlClient, redisClient, serverClient }
