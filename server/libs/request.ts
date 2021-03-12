import fetch from 'node-fetch'
import crypto from 'crypto'
import logger from '../libs/logger'

interface RejectFunc {
  (error: any): any
}

interface ResolveFunc {
  (res: any): any
}

interface Option {
  url: string
  data?: any
  headers?: { [key: string]: string }
  method?: string
  qconf: string
  reject?: RejectFunc
  resolve: ResolveFunc
}

async function request({ url, data, headers = {}, method = 'get', reject, resolve }: Option) {
  let request = ''

  if (/^http/gi.test(url)) {
    request = url
  }

  const option: any = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Request-ID': crypto.randomBytes(16).toString('hex'),
      ...headers,
    },
  }

  if (method.toLocaleLowerCase() === 'post') {
    option.body = JSON.stringify(data || {})
  }

  const result = await fetch(request, option)
    .then((res) => res.json())
    .then((res) => {
      logger.info({ url: request, option, result: res })

      if (typeof resolve === 'function') {
        return resolve(res)
      }
    })
    .catch((error) => {
      logger.error(error, { url: request, option })

      if (typeof reject === 'function') {
        reject(error)
      }
    })

  return result
}

export default request
