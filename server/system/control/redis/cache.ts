interface Cache {
  redisCache: any
}

class Cache {
  constructor() {
    this.redisCache = new Map()
  }

  has(key: string) {
    return this.redisCache.has(key)
  }

  get(key: string) {
    return this.redisCache.get(key)
  }

  set(key: string, mysqlPool: any) {
    return this.redisCache.set(key, mysqlPool)
  }
}

export default Cache
