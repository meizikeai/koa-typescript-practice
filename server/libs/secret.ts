// server/libs/secret.js
import crypto from 'crypto'

const secret: { [propName: string]: string } = {
  bf5d: 'Av7Cc1pfGdKQkJpcJig1Hg==',
}

function handleEncrypt(ak: string, p: string) {
  const iv = crypto.randomBytes(16)
  const key = base64ToBuffer(secret[ak])
  const ciphertext = encryptAes128CBC(p, key, iv)
  const pos = parseInt(ak.slice(0, 1), 16)
  const result = ak + ciphertext.slice(0, pos) + iv.toString('hex') + ciphertext.slice(pos, ciphertext.length)
  // console.log(result)
  return result
}

function handleDecrypt(c: string) {
  const ak = c.slice(0, 4)
  const enc = c.slice(4, c.length)
  const pos = parseInt(ak.slice(0, 1), 16)
  const iv = hexToBuffer(enc.slice(pos, pos + 32))
  const key = base64ToBuffer(secret[ak])
  const cipher = enc.slice(0, pos) + enc.slice(pos + 32, enc.length)
  const plaintext = decryptAes128CBC(cipher, key, iv)
  // console.log(plaintext)
  return plaintext
}

function encryptAes128CBC(plainText: string, key: Buffer, iv: Buffer) {
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv)
  const ciphertext = Buffer.concat([cipher.update(plainText, 'utf8'), cipher.final()])
  const result = ciphertext.toString('hex')
  return result
}

function decryptAes128CBC(ciphertext: string, key: Buffer, iv: Buffer) {
  const cipherBuffer = hexToBuffer(ciphertext)
  const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
  const plainText = Buffer.concat([cipher.update(cipherBuffer), cipher.final()])
  const result = plainText.toString('utf8')
  return result
}

export function handleServiceEncrypt(ak: string, p: string) {
  const cipher = handleEncrypt(ak, p)
  const result = hexToBase64(cipher)
  return result
}

export function handleServiceDecrypt(c: string) {
  const data = base64ToHex(c)
  const result = handleDecrypt(data)
  return result
}

export const base64ToBuffer = (base64: string) => Buffer.from(base64, 'base64')
export const bufferToHex = (buffer: Buffer) => buffer.toString('hex')
export const hexToBuffer = (hex: string) => Buffer.from(hex, 'hex')
export const bufferToBase64 = (buffer: Buffer) => buffer.toString('base64')

export const base64ToHex = (base64: string) => bufferToHex(base64ToBuffer(base64))
export const hexToBase64 = (hex: string) => bufferToBase64(hexToBuffer(hex))
