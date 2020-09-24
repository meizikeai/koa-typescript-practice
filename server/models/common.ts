import logger from '../libs/logger'
import { mysqlClient, redisClient } from '../libs/connect'

async function getAnchor() {
  const commonMySQL = mysqlClient('commonMySQL')

  const selectSQL = `SELECT uid FROM Table limit 0 ,10`
  const result = await commonMySQL.query(selectSQL).catch((err: any) => {
    logger.error(err, { tips: 'test -> query error' })
  })

  logger.info({ notice: result })

  return result
}

async function getUser() {
  const commonRedis = redisClient('commonRedis')

  const result = await commonRedis.hgetall('u:113').catch((err: any) => {
    logger.error(err, { tips: 'test -> query error' })
  })

  logger.info({ notice: result })

  return result
}

export {
  getAnchor,
  getUser,
}
