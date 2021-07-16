const datum: {
  [key: string]: {
    master: Array<string>
    password: string
    family?: number
    db: number
  }
} = {
  default: {
    master: ['10.9.87.202:6379'],
    password: '',
    family: 4,
    db: 0,
  },
}

export default datum
