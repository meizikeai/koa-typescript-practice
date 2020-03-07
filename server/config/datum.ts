import qconf from './qconf'

const datum: { [key: string]: any } = {
  // MySQL
  activityMySQL: {
    qconf: qconf.activity,
    database: 'activity',
  },

  // Redis
  usersRedis: {
    qconf: qconf.users,
  },
}

export default datum
