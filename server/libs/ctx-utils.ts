/**
 * 从ctx里提取些公共参数
 * @param  {Object} ctx
 * @return {object}
 *   - common      {object}      模块引用的公共脚本
 *   - phone       {Boolean}     判断终端环境
 */
import { Context } from 'koa'
import isPhone from './is-phone'

interface OptionsConfig {
  ctx: Context,
}

export default (options: OptionsConfig) => {
  const that = options.ctx
  const userAgent = that.request.header['user-agent']

  const common = {}
  const device = isPhone(userAgent)

  return {
    common,
    device: !device,
  }
}
