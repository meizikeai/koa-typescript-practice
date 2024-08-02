import logger from '../libs/logger'
import { mysqlClient, redisClient, serverClient } from '../libs/connect'

// 数据结构
// CREATE TABLE `test_user` (
//   `id` int NOT NULL AUTO_INCREMENT COMMENT '序列号',
//   `email` varchar(50) NOT NULL DEFAULT '' COMMENT '用户帐号',
//   `name` varchar(20) NOT NULL DEFAULT '' COMMENT '用户姓名',
//   `type` int NOT NULL DEFAULT '1' COMMENT '用户类型',
//   `status` int NOT NULL DEFAULT '1' COMMENT '帐户状态',
//   `cipher` int NOT NULL DEFAULT '1' COMMENT '密码修改提示',
//   `salt` varchar(256) NOT NULL DEFAULT '' COMMENT '随机密钥的一半',
//   `password` varchar(256) NOT NULL DEFAULT '' COMMENT '用户密码',
//   `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
//   PRIMARY KEY (`id`),
//   UNIQUE KEY `email` (`email`)
// ) ENGINE=InnoDB AUTO_INCREMENT=1000002 DEFAULT CHARSET=utf8;

async function getAnchor() {
  const testhost = serverClient('send')
  console.log(`http://${testhost}`)

  const defaultMySQL = mysqlClient('default.master')

  const selectSQL = 'SELECT * FROM test_user LIMIT 0,10'
  const [result] = await defaultMySQL.query(selectSQL).catch((err: any) => {
    logger.error({ tips: 'test -> query error', err })
  })

  logger.info({ result })

  return result
}

async function getUser() {
  const defaultRedis = redisClient('default.master')

  const result = await defaultRedis.hgetall('u:113').catch((err: any) => {
    logger.error({ tips: 'test -> query error', err })
  })

  logger.info({ result })

  // 使用 pipeline
  const pipeline = defaultRedis.pipeline()

  pipeline.hset('u:133', 'test', '测试一下')
  // pipeline.hdel('u:133', 'test')
  pipeline.hget('u:133', 'test')
  pipeline.exec((err: any, result: any) => {
    console.log(err, result)
  })

  return result
}

export { getAnchor, getUser }
