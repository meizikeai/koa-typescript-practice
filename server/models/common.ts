import { mysqlClient, redisClient } from '../libs/connect'

async function getAnchors({ ctx }: any) {
  const activityMySQL = mysqlClient('livedataMySQL')()

  const [anchors] = await activityMySQL.query(`SELECT uid FROM ACTIVITY20190123 limit 0 ,10`).catch((err: any) => {
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