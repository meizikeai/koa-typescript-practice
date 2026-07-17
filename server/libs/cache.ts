// server/libs/cache.js
class Cache {
  private cache: any

  constructor() {
    this.cache = new Map()
  }
  has(key: string) {
    return this.cache.has(key)
  }
  get(key: string) {
    return this.cache.get(key)
  }
  set(key: string, value: any) {
    this.cache.set(key, value)
    return value
  }
}

export const appCache = new Cache()
export const getRandomIndex = (len: number) => Math.floor(Math.random() * len)
