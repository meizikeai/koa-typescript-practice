/**
 * Mysql 配置返回值类型
 * @typedef   {Object} MysqlConf
 * @property  {string} masterHost 主库IP
 * @property  {string} slaveHost  从库IP
 * @property  {string} username   账号
 * @property  {string} password   密码
 * @property  {string} database   数据库名
 */

/**
 * Redis 配置返回值类型
 * @typedef   {Object} RedisConf
 * @property  {string} host      IP地址
 * @property  {string} port      端口号
 */

import qconf from 'node-qconf'
import path from 'path'
import { isLocalPro } from '../config'
import configMap from '../config/backend'

export interface MysqlConfig {
  key: string
  host: string[]
  user: string
  password: string
  database: string
  modelPath?: string
  slave?: string
}

// 控制 qconf 配置读取规则，仅在本地开发环境下有效
const flag = isLocalPro ? 'production' : ''
export type configMapItem = keyof typeof configMap
/**
 * 根据 qconf 路径获取 host
 * @param {string} qconfPath qconf 地址
 * @returns  {(null|string)}
 */
export function getQconfHost(qconfPath: string) {
  return qconf.getHost(qconfPath, flag)
}

/**
 * 根据 qconf 路径获取 conf
 * @param   {string} qconfPath qconf 地址
 * @returns  {(null|string)}
 */
export function getQconfConf(qconfPath: string) {
  return qconf.getConf(qconfPath, flag)
}

/**
 * 根据 qconf 路径获取 conf
 * @param   {string} qconfPath qconf 地址
 * @returns  {(null|string)}
 */
export function getQconfAllHost(qconfPath: string) {
  return qconf.getAllHost(qconfPath, flag)
}

/**
 * 根据 key 获取 qconf 对应的 host
 * @param   {string} key        配置标识
 * @returns {(null|string)}
 */
export const getHost = validateQconfMap(getQconfHost)

/**
 * 根据 key 获取 qconf 对应的 conf
 * @param   {string} key        配置标识
 * @returns {(null|string)}
 */
export const getConf = validateQconfMap(getQconfConf)

/**
 * 根据 key 获取对应的 conf
 * @param   {string} key        配置标识
 * @returns {(null|string)}
 */
export const getQconfMapConfig = validateQconfMap((_: any, configItem: MysqlConfig) => configItem)

/**
 * 检查传入的 key 是否为合规的 qconf map节点
 * qconfPath 作为第一个参数传入，第二个参数为完整的configItem
 * @param {Function} accessCallback 校验成功后的函数调用
 */
export function validateQconfMap(accessCallback: Function) {
  return (key: configMapItem) => {
    if (!(key in configMap)) throw new Error(`can not found conf with key: [${key}]`)

    const configItem = configMap[key]

    const {
      qconf: qconfPath,
    } = configItem

    if (!qconfPath) throw new Error(`can not found qconf_path with key: [${key}]`)
    return accessCallback(qconfPath, configItem)
  }
}
/**
 * 获取 redis 配置信息
 * @param   {string}    key       qconf地址
 * @return  {RedisConf}
 */
export function getRedisConf(key: configMapItem) {
  const res = getHost(key)
  if (res === null) throw new Error(`can not found qconf with key: [${key}]`)

  const [host, port] = res.split(':')

  return {
    host,
    port,
  }
}

/**
 * 获取 mysql 配置信息
 * @param   {string}    key       qconf地址
 * @return  {MysqlConf}
 */
export function getMysqlConf(key: configMapItem) {
  const { database, qconf: qconfPath, modelPath } = getQconfMapConfig(key)
  const addQconfPrePath = path.join.bind(null, qconfPath)

  // 获取固定的 qconf 路径，用于拼接 mysql 配置使用的特殊 path
  // addQconfPrePath('master') => /udb/XXX/master
  const masterHostConf = getQconfHost(addQconfPrePath('master'))
  const [masterHost, masterPort] = (masterHostConf || '').split(':')

  if (!masterHostConf) {
    throw new Error(`can not found qconf with key: [${key}]`)
  }

  let slaveHost
  let slavePort
  try {
    const slaveHostConf = getQconfAllHost(addQconfPrePath('slave'))
    const [slave] = slaveHostConf.map((item: string) => item.split(':'))

    const [host, port] = slave
    slaveHost = host
    slavePort = port
  } catch (e) {
    // path have not slave conf
    slaveHost = masterHost
    slavePort = masterPort
  }

  const password = getQconfConf(addQconfPrePath('password'))
  const username = getQconfConf(addQconfPrePath('username'))

  return {
    masterHost,
    masterPort: Number(masterPort) || 3306,
    slaveHost,
    slavePort: Number(slavePort) || 3306,
    username,
    password,
    database,
    modelPath,
  }
}
