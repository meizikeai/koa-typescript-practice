class Cache {
  private static instance: Cache
  private cache: any

  constructor() {
    this.cache = new Map()
  }

  public has(key: string) {
    return this.cache.has(key)
  }

  public get(key: string) {
    return this.cache.get(key)
  }

  public set(key: string, value: any) {
    return this.cache.set(key, value)
  }
}

const newCache = new Cache()
const getRandom = (len: number) => Math.floor(Math.random() * len + 1) - 1
// const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

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

export { handleCache, getCache, hasCache, setCache, getRandom }
