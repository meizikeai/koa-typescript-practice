import { Context } from 'koa'
import ctxUtils from '../libs/ctx-utils'

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
    ctx.body = {
      title: 'koa2 json',
    }
  }

  public static async string(ctx: Context) {
    ctx.body = 'koa2 string'
  }
}
