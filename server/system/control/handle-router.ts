import fs from 'fs'
import path from 'path'

const loader = async (dir: string) => {
  const result = await import(dir).catch((err) => {
    console.error(err)
  })

  return result || {}
}

const checkDirectory = (dir: string) => {
  let result = false
  try {
    const state = fs.statSync(dir)
    if (state && state.isDirectory()) {
      result = true
    }
  } catch (err) {
    console.error(`"${dir}" is not a directory!`)
  }
  return result
}

const folder = (dir: string) => {
  let vessel: any = []
  let result: any = []

  const stat = checkDirectory(dir)
  if (stat) {
    vessel = fs.readdirSync(dir)
  }

  vessel.forEach((name: string) => {
    const file = path.join(dir, name)
    const stat = checkDirectory(file)
    if (stat) {
      result = result.concat(folder(file))
    } else {
      result.push({ name: name.split('.')[0], module: file })
    }
  })

  return result
}

export default (app: any) => {
  const route = folder(path.join(__dirname, '../../routers'))

  route.forEach(async (crl: any) => {
    const enable = /\.js$/gi.test(crl.module)
    const unlock = /\.map$/gi.test(crl.module)

    if (enable && !unlock) {
      const { router } = await loader(crl.module)

      if (router) {
        app.use(router.routes()).use(router.allowedMethods())
      }
    }
  })
}
