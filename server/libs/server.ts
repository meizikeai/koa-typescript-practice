import { getCache, getRandom } from '../libs/cache.js'

function getClient(key: string) {
  const client = getCache('server')
  const index = getRandom(client[key].length)

  return client[key][index]
}

export default getClient
