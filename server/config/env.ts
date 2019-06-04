// 开发、测试、正式环境
const env = process.env.NODE_ENV
export const isLocal = env === 'local'
export const isDev = env === 'development'
export const isPro = env === 'production'

// 在本地使用线上数据库
const dev = process.env.NODE_DEV
export const isLocalPro = dev === 'localPro'