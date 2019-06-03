/**
 * 创建Mysql连接所需要的参数
 * @typedef   {Object} MysqlClientConfig
 * @property  {string} masterHost           mysql 主库连接
 * @property  {string} slaveHost            mysql 从库连接
 * @property  {string} user                 用户名
 * @property  {string} password             密码
 * @property  {string} database             数据库
 * @property  {number} [connectionLimit=1]  最多连接数
 */

import mysql from 'mysql'
import { promisify } from 'util'
import Raven from './raven'
import configMap from '../config/backend'
import { createCache } from './interval-cache-store'
import { getMysqlConf } from './qconf-common'

type configMapItem = keyof typeof configMap

interface MySQLConfig {
  masterHost: string
  username: string
  password: string
  database: string
  slaveHost?: string[]
  connectionLimit: number
}

interface PoolConfig {
  host: string
  user: string
  password: string
  database: string
  connectionLimit: number
}

const refreshTime = 1e3 * 60

function getMysqlPoolByQconfPath(path: configMapItem) {
  return createCache(`mysql-${path}`, () => {

    const mysqlConf: any = getMysqlConf(path)
    const mysqlPool = createMysqlPool(mysqlConf)

    // 同时最多保存2份pool的实例，随后会定时关闭pool，以避免占用太多的连接数
    setTimeout(() => {
      try {
        mysqlPool.end()
      } catch (e) {
        console.error(`close mysql error with path: ${path}`)
        e.mysqlConfPath = path
        Raven.captureException(e)
      }
    }, refreshTime * 2)

    return mysqlPool
  }, 1000 * 60)
}

/**
 * 创建promisify版本的mysql连接
 * @param {MysqlClientConfig}
 */
function createMysqlPool({ masterHost, slaveHost, username, password, database, connectionLimit = 1, }: MySQLConfig) {
  const conf: any = {
    user: username,
    password,
    database,
    connectionLimit,
  }

  const masterMysqlClient = createPromisifyPool({
    host: masterHost,
    ...conf,
  })

  const slaveMysqlClient = createPromisifyPool({
    host: slaveHost[0],
    ...conf,
  })

  return {
    query(sql: string, ...args: any) {
      if (/^[\s\r\n]*SELECT\s/i.test(sql)) {
        return slaveMysqlClient.query(sql, ...args)
      } else {
        return masterMysqlClient.query(sql, ...args)
      }
    },
    end() {
      masterMysqlClient.end()
      slaveMysqlClient.end()
    },
  }
}

function createPromisifyPool({ host, user, password, database, connectionLimit, }: PoolConfig) {
  const pool: any = mysql.createPool({
    host,
    user,
    password,
    database,
    connectionLimit,
  })

  pool.query = promisify(pool.query)

  return pool
}

module.exports = getMysqlPoolByQconfPath