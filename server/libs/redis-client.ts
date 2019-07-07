import redis from 'redis'
import { list } from 'redis-commands'

import { promisify } from 'util'
import Raven from './raven'
import configMap from '../config/backend'
import { createCache } from './interval-cache-store'
import { getRedisConf } from './qconf-common'

type configMapItem = keyof typeof configMap

const refreshTime = 1e3 * 60

export function getRedisPoolByQconfPath(key: configMapItem) {
  return createCache(`redis-${key}`, () => {
    const configs = getRedisConf(key)
    const redisServer = configs.host
    const redisClient = createRedisClient(redisServer)

    setTimeout(() => {
      try {
        redisClient.quit()
      } catch (e) {
        console.error(`close redis error with host: ${redisServer}`)
        e.redisConfPath = redisServer
        Raven.captureException(e)
      }
    }, refreshTime * 2)

    return redisClient
  }, refreshTime)
}

/**
 * 创建redis客户端连接
 * @param {string} host redis对应的IP
 * @param {number} port 创建链接的端口
 * @return {RedisClient}
 */
export function createRedisClient(host: string, port = 6379) {
  const redisClient = redis.createClient(port, host)

  // build promisify methods
  const redisPromisifyClient = build(redisClient)

  return redisPromisifyClient
}

/**
 * 将 Redis 命令转换为 Promise 版本
 * @param {any} target RedisClient
 * @return {any}
 */
export function build(target: any) {
  list.forEach((method: any) => {
    const func = target[method]
    if (typeof func === 'function') {
      target[method] = promisify(func)
      target[method.toUpperCase()] = promisify(func)
    }
  })

  return target
}

// module.exports = getRedisPoolByQconfPath