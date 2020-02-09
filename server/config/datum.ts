import qconf from './qconf'

const datum: { [key: string]: any } = {
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

export default datum
