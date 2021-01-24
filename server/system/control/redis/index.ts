import redis from 'redis'
import { list } from 'redis-commands'
import { promisify } from 'util'

import { createCache } from './interval-cache-store'

function getRedisPool(config: any) {
  const interval = 1000 * (config.time || 60)

  const pool = createCache(
    `redis-${config.key}`,
    () => {
      const redisPool = createRedisClient(config.master)

      setTimeout(() => {
        try {
          redisPool.quit()
        } catch (err) {
          console.error(`Close Redis Error → ${config.key}, ${err}`)
        }
      }, interval * 2)

      return redisPool
    },
    interval
  )

  return pool
}

/**
 * 创建redis客户端连接
 * @param {string} host redis对应的IP
 * @param {number} port 创建链接的端口
 * @return {redisClient}
 */
function createRedisClient({ host, port = 6379 }: { host: string; port: number }) {
  const createClien = redis.createClient(port, host)
  const redisClient = build(createClien)

  return redisClient
}

/**
 * 将 Redis 命令转换为 Promise 版本
 * @param {any} target RedisClient
 * @return {any}
 */
function build(target: any) {
  list.forEach((method) => {
    const func = target[method]
    if (typeof func === 'function') {
      target[method] = promisify(func)
      target[method.toUpperCase()] = promisify(func)
    }
  })

  return target
}

export default getRedisPool
