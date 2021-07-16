// 开发、测试、正式环境
const env = process.env.NODE_ENV
export const isLocal = env === 'local'
export const isDev = env === 'development'
export const isPro = env === 'production'

// 在本地使用线上数据库
const dev = process.env.NODE_DEV
export const isLocalPro = dev === 'localPro'

// zookeeper
export const useZookeeper = true
export const release = ['10.10.182.158:2181', '10.10.101.151:2181', '10.10.102.25:2181']
export const test = ['10.9.158.210:2181', '10.9.114.167:2181', '10.9.105.4:2181']
