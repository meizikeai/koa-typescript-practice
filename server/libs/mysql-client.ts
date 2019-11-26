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
import { Qconf } from '@blued-core/qconf'
import { promisify } from 'util'

import raven from './raven'
import datum from '../config/datum'
import { createCache } from './interval-cache-store'

type Key = keyof typeof datum

interface Column {
  host: string
  port: number
}

interface Options {
  master: Column
  slaves: Column[]
  username: string
  password: string
  database: string
}

interface Configs {
  host: string
  port: number
  user: string
  password: string
  database: string
  connectionLimit: number
}

const qconf = new Qconf(datum)
const refreshTime = 1e3 * 60

export function getMysqlPoolByQconfPath(key: Key) {
  return createCache(`mysql-${key}`, () => {
    const config: any = qconf.getMysqlConf(key)
    const mysqlPool = createMysqlPool(config)

    setTimeout(() => {
      try {
        mysqlPool.end()
      } catch (e) {
        console.error(`close mysql error with path: ${key}`)
        e.mysqlConfPath = key
        raven.captureException(e)
      }
    }, refreshTime * 2)

    return mysqlPool
  }, 1000 * 60)
}

/**
 * 创建promisify版本的mysql连接
 * @param {MysqlClientConfig}
 */
export function createMysqlPool(option: Options) {
  const conf: any = {
    connectionLimit: 1,
    database: option.database,
    password: option.password,
    user: option.username,
  }

  const masterMysqlClient = createPromisifyPool({
    host: option.master.host,
    port: option.master.port,
    ...conf,
  })

  const slaveMysqlClient = createPromisifyPool({
    host: option.slaves[0].host,
    port: option.slaves[0].port,
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

export function createPromisifyPool({ host, user, password, database, connectionLimit, port }: Configs) {
  const pool: any = mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    connectionLimit,
  })

  pool.query = promisify(pool.query)

  return pool
}
