import Redis from 'ioredis'
import releaseRedis from '../config/release-redis'
import testRedis from '../config/test-redis'
import { getRandomSubscript } from '../libs/random'
import { handleCache, getCache } from '../libs/cache-store'
import { isPro, isLocalPro } from '../config/env'

function handleRedis(key: string) {
  let datum = testRedis

  if (isPro || isLocalPro) {
    datum = releaseRedis
  }

  const result: any = {}
  const [where] = key.split('.')
  const zk = getCache('redis')

  datum = Object.assign(datum, zk)

  if (!datum[where]) {
    throw new Error(`Can not find the key: ${where}`)
  }

  for (const k in datum) {
    if (k !== where) {
      continue
    }

    const config = datum[k]
    const data = config.master

    result[key] = []

    for (let i = 0; i < data.length; i++) {
      const element = data[i]
      const [host, port] = element.split(':')
      const option = {
        host: host,
        port: Number(port) || 6379,
        password: config.password,
        family: config.family || 4,
        db: config.db,
      }

      result[key][i] = new Redis(option)
    }
  }

  return result
}

function getClient(key: string) {
  const pool = handleCache(`redis.${key}`, () => {
    const client = handleRedis(key)
    const index = getRandomSubscript(client[key].length)

    return client[key][index]
  })

  return pool
}

export default getClient
