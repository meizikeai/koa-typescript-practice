import { mysqlClient, redisClient } from '../libs/connect'

async function getAnchor({ ctx }: any) {
  const commonMySQL = mysqlClient('commonMySQL')

  const selectSQL = `SELECT uid FROM Table limit 0 ,10`
  const result = await commonMySQL.query(selectSQL).catch((err: any) => {
    ctx.logger.error(err, { tips: 'test -> query error' })
  })

  ctx.logger.info({ notice: result })

  return result
}

async function getUser({ ctx }: any) {
  const commonRedis = redisClient('commonRedis')

  const result = await commonRedis.hgetall('u:113').catch((err: any) => {
    ctx.logger.error(err, { tips: 'test -> query error' })
  })

  ctx.logger.info({ notice: result })

  return result
}

export {
  getAnchor,
  getUser,
}
