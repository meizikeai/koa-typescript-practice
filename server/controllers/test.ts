import { Context } from 'koa'
import ctxUtils from '../libs/ctx-utils'
// import request from '../libs/request'
import log from '../libs/logger'

export default class Test {
  public static async demo(ctx: Context) {
    const { device } = ctxUtils({ ctx })

    ctx.state = Object.assign(
      {},
      {
        title: 'Hello Demo!',
        config: JSON.stringify({
          device,
          question: 'Who is my love?',
          answer: 'Is you?',
        }),
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

  public static async test(ctx: Context) {
    const { device } = ctxUtils({ ctx })

    ctx.state = Object.assign(
      {},
      {
        title: 'Hello Demo!',
        config: JSON.stringify({
          device,
          question: 'Who is my love?',
          answer: 'Is you?',
        }),
      }
    )

    await ctx.render('2020/test')
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
