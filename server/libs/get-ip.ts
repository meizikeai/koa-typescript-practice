import os from 'os'

const interfaces = os.networkInterfaces()

let address = '127.0.0.1'

for (const devName in interfaces) {
  const iface = interfaces[devName]

  for (const alias of iface) {
    if (
      alias.family === 'IPv4'
      && alias.address !== address
      && !alias.internal
    ) {
      ({ address } = alias)

      break
    }
  }
}

export default () => address
