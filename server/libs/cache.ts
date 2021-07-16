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

export default Cache
