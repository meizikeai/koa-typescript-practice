import { mysqlClient, redisClient } from '../libs/connect'

async function getAnchor({ ctx }: any) {
  const activityMySQL = mysqlClient('activityMySQL')()

  const selectSQL = `SELECT uid FROM KAFKA_ACTIVITY_TEST_20191125 limit 0 ,10`
  const anchors = await activityMySQL.query(selectSQL).catch((err: any) => {
    ctx.logger.error(err, { tips: 'test -> query error' })
  })

  ctx.logger.info({ notice: anchors })

  return anchors
}

async function getUser({ ctx }: any) {
  const usersRedis = redisClient('usersRedis')()

  const user = await usersRedis.hgetall('u:113').catch((err: any) => {
    ctx.logger.error(err, { tips: 'test -> query error' })
  })

  ctx.logger.info({ notice: user })

  return user
}

export {
  getAnchor,
  getUser,
}
