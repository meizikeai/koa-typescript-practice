const datum: {
  [key: string]: {
    master: Array<string>
    slave: Array<string>
    username: string
    password: string
    database: string
    connection?: number
  }
} = {
  default: {
    master: ['127.0.0.1:3306'],
    slave: ['127.0.0.1:3306', '127.0.0.1:3306', '127.0.0.1:3306'],
    username: 'root',
    password: 'yintai@123',
    database: 'test',
    connection: 100,
  },
}

export default datum
