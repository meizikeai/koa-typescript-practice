import { mysqlClient, redisClient } from '../libs/connect'

async function getAnchors({ ctx }: any) {
  const livedataActivityMySQL = mysqlClient('livedataActivityMySQL')()

  const selectSQL = `SELECT uid FROM KAFKA_ACTIVITY_TEST_20191125 limit 0 ,10`
  const anchors = await livedataActivityMySQL.query(selectSQL).catch((err: any) => {
    ctx.logger.error(err, { tips: 'test -> query error' })
  })

  ctx.logger.info({ notice: anchors })

  return anchors
}

async function getUser({ ctx }: any) {
  const activityRedis = redisClient('userRedis')()

  const anchors = await activityRedis.hgetall('u:113').catch((err: any) => {
    ctx.logger.error(err, { tips: 'test -> query error' })
  })

  ctx.logger.info({ notice: anchors })

  return anchors
}

export {
  getAnchors,
  getUser,
}
