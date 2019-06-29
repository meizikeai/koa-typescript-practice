// MySQL
const mysql = {
  activity: '/blued/backend/udb/livedata_activity',
}

// Redis
const redis = {
  user: '/blued/backend/umem/users',
  live: '/blued/backend/umem/live',
  ilive: '/blued/backend/umem/live_oversea',
}

export default {
  // MySQL
  activityMySQL: {
    qconf: mysql.activity,
    database: 'activity',
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
