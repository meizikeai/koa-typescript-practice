// env
export const env = process.env.NODE_ENV || 'development'
export const isDev = env === 'development'
export const isPro = env === 'production'

interface MySQLInstanceConfig {
  master: string[]
  slave: string[]
  username: string
  password: string
  database: string
  connection: number
}

interface RedisInstanceConfig {
  master: string[]
  password: string
  family?: number
  db?: number
}

interface EnvConfig<T> {
  development: T
  production: T
  [env: string]: T
}

interface ConfigWrapper<T> {
  [key: string]: EnvConfig<T>
}

// mysql config
export const mysql: ConfigWrapper<MySQLInstanceConfig> = {
  default: {
    development: {
      master: ['127.0.0.1:3306'],
      slave: ['127.0.0.1:3306', '127.0.0.1:3306'],
      username: 'root',
      password: 'your@password',
      database: 'test',
      connection: 20,
    },
    production: {
      master: ['127.0.0.1:3306'],
      slave: ['127.0.0.1:3306', '127.0.0.1:3306'],
      username: 'root',
      password: 'your@password',
      database: 'test',
      connection: 100,
    },
  },
}

export const redis: ConfigWrapper<RedisInstanceConfig> = {
  default: {
    development: {
      master: ['127.0.0.1:6379'],
      password: '',
    },
    production: {
      master: ['127.0.0.1:6379'],
      password: '',
    },
  },
}
