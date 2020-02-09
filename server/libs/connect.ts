import createMySQLClient from 'ai-mysql-client'
import createRedisClient from 'ai-redis-client'
import createQconfClient from 'ai-qconf-client'
import { Qconf } from '@blued-core/qconf'

import datum from '../config/datum'
import { isLocalPro } from '../config/env'

const qconf = new Qconf(datum)
qconf.flag = isLocalPro ? 'production' : ''

const mysqlClient = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createMySQLClient({
    key,
    option: qconf,
  })
}

const redisClient = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createRedisClient({
    key,
    option: qconf,
  })
}

const getQconfHost = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createQconfClient.qconfHost({
    key,
    path: datum[key].qconf,
    option: qconf,
  })
}

const getQconfAllHost = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createQconfClient.qconfAllHost({
    key,
    path: datum[key].qconf,
    option: qconf,
  })
}

const getQconfConf = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createQconfClient.qconfConf({
    key,
    path: datum[key].qconf,
    option: qconf,
  })
}

export {
  getQconfConf,
  getQconfHost,
  getQconfAllHost,
  mysqlClient,
  redisClient,
}
