// server/libs/client.js
import crypto from 'crypto'

interface RequestType {
  url: string
  data?: any
  headers?: { [key: string]: string }
  method?: string
  timeout?: number
}

interface HType {
  headers?: { [key: string]: string }
  timeout?: number
}

async function coreRequest({ url, data, headers = {}, method = 'GET', timeout = 4000 }: RequestType) {
  const normalizedMethod = method.toUpperCase()

  const option: any = {
    method: normalizedMethod,
    headers: Object.assign(
      {
        'Content-Type': 'application/json',
        'X-Request-ID': headers['X-Request-ID'] || crypto.randomBytes(16).toString('hex'),
      },
      headers
    ),
    signal: AbortSignal.timeout(timeout),
  }

  if (['POST', 'PUT', 'PATCH'].includes(normalizedMethod) && data) {
    option.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(url, option)

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
    }

    const resData = await response.json()
    // console.log({ url, method: normalizedMethod, status: response.status, result: resData })
    return resData
  } catch (error: any) {
    if (error.name === 'TimeoutError') {
      console.error(`Request Timeout [${normalizedMethod}] -> ${url} exceeded ${timeout}ms`)
    } else {
      console.error(`Request Failed [${normalizedMethod}] -> ${url}:`, error.message)
    }
    throw error
  }
}

const client = {
  get: (url: string, { headers, timeout }: HType = {}) => coreRequest({ url, method: 'GET', headers, timeout }),
  post: (url: string, data?: any, { headers, timeout }: HType = {}) =>
    coreRequest({ url, method: 'POST', data, headers, timeout }),
  put: (url: string, data?: any, { headers, timeout }: HType = {}) =>
    coreRequest({ url, method: 'PUT', data, headers, timeout }),
  delete: (url: string, data?: any, { headers, timeout }: HType = {}) =>
    coreRequest({ url, method: 'DELETE', data, headers, timeout }),
}

export default client
