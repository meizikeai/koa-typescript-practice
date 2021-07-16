import Cache from './cache'

const newCache = new Cache()

function handleCache(key: string, func: any) {
  if (!hasCache(key)) {
    if (!func || typeof func !== 'function') {
      throw new Error('"func" always must be a function call')
    }

    try {
      setCache(key, func())
    } catch (e) {
      console.error(`error with key: ${key}`, e)
    }
  }

  return getCache(key)
}

function getCache(key: string) {
  return newCache.get(key)
}

function hasCache(key: string) {
  return newCache.has(key)
}

function setCache(key: string, value: any) {
  newCache.set(key, value)
}

export { handleCache, getCache, hasCache, setCache }
