const datum: { [key: string]: { master: Array<string>; password: string; db: number } } = {
  default: {
    master: ['127.0.0.1:6379', '127.0.0.1:6379', '127.0.0.1:6379'],
    password: '',
    db: 0,
  },
}

export default datum
