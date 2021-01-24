import mysql from 'mysql'
import { promisify } from 'util'

import { createCache } from './interval-cache-store'

function getMySQLPool(config: any) {
  const interval = 1000 * (config.time || 60)

  const pool = createCache(
    `mysql-${config.key}`,
    () => {
      const mysqlPool = createMysqlPool(config)

      setTimeout(() => {
        try {
          mysqlPool.end()
        } catch (err) {
          console.error(`Close MySQL Error → ${config.key}, ${err}`)
        }
      }, interval * 2)

      return mysqlPool
    },
    interval
  )

  return pool
}

function createMysqlPool(option: any) {
  const config = {
    connectionLimit: 4,
    database: option.database,
    password: option.password,
    user: option.user,
  }

  const master = Object.assign(
    {
      host: option.master.host,
      port: Number(option.master.port) || 3306,
    },
    config
  )

  const slave = Object.assign(
    {
      host: option.slave.host,
      port: Number(option.slave.port) || 3306,
    },
    config
  )

  const masterMysqlClient = createPool(master)
  const slaveMysqlClient = createPool(slave)

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

function createPool({ host, user, password, database, connectionLimit, port }: any) {
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

export default getMySQLPool
