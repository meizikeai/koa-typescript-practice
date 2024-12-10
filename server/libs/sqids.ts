import Sqids from 'sqids'

const s = new Sqids({
  alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
  minLength: 6,
})

function sqidsEncode(uid: number) {
  const r = s.encode([uid])
  return r
}

function sqidsDecode(id: string) {
  const res = s.decode(id)
  return res
}

export { sqidsEncode, sqidsDecode }
