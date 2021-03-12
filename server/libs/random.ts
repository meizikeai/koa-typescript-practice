export const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

export const getRandomSubscript = (len: number) => Math.floor(Math.random() * len + 1) - 1
