// 二进制 to Base64
function binaryToBase64(binary: Uint8Array) {
  return Buffer.from(binary).toString('base64')
}

// Base64 to 二进制
function base64ToBinary(base64: string) {
  return Buffer.from(base64, 'base64')
}

// 十六进制 to 二进制
function hexToBuffer(hexString: string) {
  return Buffer.from(hexString, 'hex')
}

// 二进制 to 十六进制
function bufferToHex(buffer: Buffer) {
  return buffer.toString('hex')
}
export default { binaryToBase64, base64ToBinary, hexToBuffer, bufferToHex }
