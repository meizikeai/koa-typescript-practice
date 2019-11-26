import qconf from './qconf'

export default {
  // MySQL
  livedataActivityMySQL: {
    qconf: qconf.livedataActivity,
    database: 'activity',
  },

  // Redis
  liveRedis: {
    qconf: qconf.live,
  },
  liveOverseaRedis: {
    qconf: qconf.liveOversea,
  },
  userRedis: {
    qconf: qconf.user,
  },
}
