import { getCache } from '../libs/cache-store'
import { getRandomSubscript } from '../libs/random'

function getClient(key: string) {
  const client = getCache('server')
  const index = getRandomSubscript(client[key].length)

  return client[key][index]
}

export default getClient
