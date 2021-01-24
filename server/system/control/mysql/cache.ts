interface Cache {
  mysqlCache: any
}

class Cache {
  constructor() {
    this.mysqlCache = new Map()
  }

  has(key: string) {
    return this.mysqlCache.has(key)
  }

  get(key: string) {
    return this.mysqlCache.get(key)
  }

  set(key: string, mysqlPool: any) {
    return this.mysqlCache.set(key, mysqlPool)
  }
}

export default Cache
