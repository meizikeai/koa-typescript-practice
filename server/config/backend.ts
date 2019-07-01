// MySQL
const mysql = {
  livedataActivity: '/blued/backend/udb/livedata_activity',
}

// Redis
const redis = {
  live: '/blued/backend/umem/live',
  liveOversea: '/blued/backend/umem/live_oversea',
  user: '/blued/backend/umem/users',
}

export default {
  // MySQL
  livedataActivityMySQL: {
    qconf: mysql.livedataActivity,
    database: 'activity',
  },

  // Redis
  liveRedis: {
    qconf: redis.live,
  },
  liveOverseaRedis: {
    qconf: redis.liveOversea,
  },
  userRedis: {
    qconf: redis.user,
  },
}
