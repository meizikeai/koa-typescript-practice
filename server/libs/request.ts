import fetch from 'node-fetch'
import crypto from 'crypto'
import logger from '../libs/logger'
import { getQconfHost } from '../libs/connect'

interface RejectFunc {
  (error: any): any
}

interface ResolveFunc {
  (res: any): any
}

interface Option {
  url: string,
  data?: any,
  headers?: { [key: string]: string },
  method?: string,
  qconf: string,
  reject?: RejectFunc,
  resolve: ResolveFunc,
}

async function request({
  url,
  data,
  headers = {},
  method = 'get',
  qconf,
  reject,
  resolve,
}: Option) {
  let request = ''

  if (/^http/ig.test(url)) {
    request = url
  } else {
    const protocol = getQconfHost(qconf)
    request = `http://${protocol.host}:${protocol.port}${url}`
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
    .then(res => res.json())
    .then(res => {
      if (typeof resolve === 'function') {
        return resolve(res)
      }

      logger.info({ url: request, option, result: res })
    })
    .catch(error => {
      if (typeof reject === 'function') {
        reject(error)
      }

      logger.error(error, { url: request, option })
    })

  return result
}

export default request