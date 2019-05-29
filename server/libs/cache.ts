export default class Cache {
  mysqlCache = new Map()

  has (key: string) {
    return this.mysqlCache.has(key)
  }

  get (key: string) {
    return this.mysqlCache.get(key)
  }

  set (key: string, dist: any) {
    return this.mysqlCache.set(key, dist)
  }
}