import { Context } from 'koa'
import log from '../libs/log.js'

export default class Test {
  public static async demo(ctx: Context) {
    ctx.state = Object.assign(
      {},
      {
        title: 'Hello Demo!',
      }
    )

    // request({
    //   url: 'http://127.0.0.1:3000/json',
    //   reject: (err) => {
    //     console.log(err)
    //   },
    //   resolve: (data) => {
    //     console.log(data)
    //   },
    // })

    await ctx.render('demo')
  }

  public static async json(ctx: Context) {
    log.warn('Hello, warn!')
    log.error('An error occurred!')
    log.info('Hello, Pino!')
    log.debug('This is a debug message')
    log.trace('Hello, trace!')

    ctx.body = {
      title: 'koa2 json',
    }
  }

  public static async string(ctx: Context) {
    ctx.body = 'koa2 string'
  }
}
