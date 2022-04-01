// 开发、测试、正式环境
const env = process.env.NODE_ENV
export const isLocal = env === 'local'
export const isDev = env === 'development'
export const isPro = env === 'production'

// 在本地使用线上数据库
const dev = process.env.NODE_DEV
export const isLocalPro = dev === 'localPro'

// zookeeper
export const useZookeeper = false
export const release = ['127.0.0.1:2181', '127.0.0.1:2181', '127.0.0.1:2181']
export const test = ['127.0.0.1:2181', '127.0.0.1:2181', '127.0.0.1:2181']
