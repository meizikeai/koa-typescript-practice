const datum: { [key: string]: any } = {
  commonMySQL: {
    key: 'commonMySQL',
    master: {
      host: '127.0.0.1',
      port: '3306',
    },
    slave: {
      host: '127.0.0.1',
      port: '3306',
    },
    database: 'bank',
    password: 'yintai@123',
    user: 'root',
  },

  commonRedis: {
    key: 'commonRedis',
    master: {
      host: '10.9.87.202',
      port: '6379',
    },
  },
}

export default datum
