import { mysql, redis, server } from './qconf'

const datum: { [key: string]: any } = {
  commonMySQL: {
    qconf: mysql.common,
    database: 'common',
  },

  commonRedis: {
    qconf: redis.common,
  },

  commonServer: {
    qconf: server.common,
  },
}

export default datum
