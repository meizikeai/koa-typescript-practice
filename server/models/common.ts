import logger from '../libs/logger'
import { mysqlClient, redisClient } from '../libs/connect'

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
  const defaultMySQL = mysqlClient('default')

  const selectSQL = 'SELECT * FROM test_user LIMIT 0,10'
  const result = await defaultMySQL.query(selectSQL).catch((err: any) => {
    logger.error(err, { tips: 'test -> query error' })
  })

  logger.info({ result })

  return result
}

async function getUser() {
  const defaultRedis = redisClient('default')

  const result = await defaultRedis.hgetall('u:113').catch((err: any) => {
    logger.error(err, { tips: 'test -> query error' })
  })

  logger.info({ result })

  return result
}

export { getAnchor, getUser }
