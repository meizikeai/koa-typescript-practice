function BinaryToBase64(binary: Uint8Array) {
  return Buffer.from(binary).toString('base64')
}

function Base64ToBinary(base64: string) {
  return Buffer.from(base64, 'base64')
}

function HexToBuffer(hexString: string) {
  return Buffer.from(hexString, 'hex')
}

function BufferToHex(buffer: Buffer) {
  return buffer.toString('hex')
}

export default { BinaryToBase64, Base64ToBinary, HexToBuffer, BufferToHex }
