import { mysql, redis } from './qconf-map'
import { isLocal, isDev } from '../env'

export default {
  // MySQL
  livedataMySQL: {
    qconf: mysql.liveData,
    database: 'activity',
    modelPath: 'liveData',
  },

  // Redis
  userRedis: {
    qconf: redis.user,
  },
  liveRedis: {
    qconf: redis.live,
  },
  iliveRedis: {
    qconf: redis.ilive,
  }
}
