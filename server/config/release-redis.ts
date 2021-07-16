const datum: {
  [key: string]: {
    master: Array<string>
    password: string
    family?: number
    db: number
  }
} = {
  default: {
    master: ['127.0.0.1:6379', '127.0.0.1:6379', '127.0.0.1:6379'],
    password: '',
    family: 4,
    db: 0,
  },
}

export default datum
