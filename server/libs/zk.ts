import ZooKeeper from 'zookeeper'
import zk from '../config/zk'
import { getRandomSubscript } from '../libs/random'
import { isPro, isLocalPro, release, test } from '../config/env'

interface ConfigMySQL {
  master: Array<string>
  slave: Array<string>
  username: string
  password: string
  database: string
}

interface ConfigRedis {
  master: Array<string>
  password: string
  db: number
}

// interface Person {
//   [propName: string]: ConfigMySQL
// }

// 方法一
// 由于 connect(options, connect_cb) 方式的回调是 callback 即异步，其里面的方法不能实时返回
// 导致外部方法不能通过await拿到数据，原因是 connect_cb 时异步执行，return 没任何意义
// 获取方式问题

// 方式二
// 通过全局变量，并把获取的方法在项目启动时第一个执行
// 如启动完成即要拉取数据，有可能全局变量还没拉取到值，从而导致error的发生
// 此方式行不通，也不建议
global.zookeeperConfigMySQL = {}
global.zookeeperConfigRedis = {}
global.zookeeperConfigServer = {}

function getZkConfig() {
  let zk = test

  if (isPro) {
    zk = release
  } else if (isLocalPro) {
    zk = release
  }

  const key = getRandomSubscript(zk.length)
  const result = zk[key]

  return result
}

let client: ZooKeeper

/**
 * @param timeoutMs {number}
 * @returns {ZooKeeper}
 */
function createClient(timeoutMs = 5000) {
  if (!client) {
    const config = {
      connect: getZkConfig(),
      timeout: timeoutMs,
      debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN,
      host_order_deterministic: false,
    }

    client = new ZooKeeper(config)

    client.on('close', () => {
      console.log('close', `session closed, id=${client.client_id}`)

      client = null
    })

    client.on('connecting', () => {
      console.log('connecting', `session connecting, id=${client.client_id}`)
    })

    client.on('connect', () => {
      console.log('connect', `session connect, id=${client.client_id}`)
    })

    setTimeout(() => {
      client.init({})
    }, 500)
  }

  return client
}

function handleZookeeper() {
  const client = createClient()

  client.on('connect', async () => {
    await Promise.all([await getMySQL(), await getRedis(), await getServer()])
  })
}

async function getMySQL() {
  for (const key in zk.mysql) {
    const path = zk.mysql[key]
    const mysql: ConfigMySQL = {
      master: [],
      slave: [],
      username: '',
      password: '',
      database: '',
    }
    const res = await client.get_children(path, false)
    const back: Array<string> = []

    res.forEach((val: string) => {
      switch (val) {
        case 'master':
          back[0] = 'master'
        case 'slave':
          back[1] = 'slave'
        case 'username':
          back[2] = 'username'
        case 'password':
          back[3] = 'password'
        case 'database':
          back[4] = 'database'
      }
    })

    const [master, slave, username, password, database] = await Promise.all([
      await client.get_children(path + '/' + back[0], false),
      await client.get_children(path + '/' + back[1], false),
      await client.get(path + '/' + back[2], false).then((data) => {
        return data[1].toString()
      }),
      await client.get(path + '/' + back[3], false).then((data) => {
        return data[1].toString()
      }),
      await client.get(path + '/' + back[4], false).then((data) => {
        return data[1].toString()
      }),
    ])

    mysql.master = master
    mysql.slave = slave
    mysql.username = username
    mysql.password = password
    mysql.database = database

    console.log('Children of %s are: %j.', path, mysql)

    global.zookeeperConfigMySQL[key] = mysql
  }
}

async function getRedis() {
  for (const key in zk.redis) {
    const path = zk.redis[key]
    const redis: ConfigRedis = {
      master: [],
      password: '',
      db: 0,
    }
    const res = await client.get_children(path, false)

    redis.master = res

    console.log('Children of %s are: %j.', path, res)

    global.zookeeperConfigRedis[key] = redis
  }
}

async function getServer() {
  for (const key in zk.server) {
    let server = ''
    const path = zk.server[key]
    const master = await client.get_children(path, false)
    const count = getRandomSubscript(master.length)

    server = master[count]

    console.log('Children of %s are: %j.', path, master)

    global.zookeeperConfigServer[key] = server
  }
}

export default handleZookeeper
