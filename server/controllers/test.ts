import { BaseContext } from 'koa'
import ctxUtils from '../libs/ctx-utils'

export default class Test {
  public static async demo(ctx: BaseContext) {
    const { device } = ctxUtils({ ctx })

    ctx.state = Object.assign({}, {
      title: 'Hello Demo!',
      config: JSON.stringify({
        device,
        question: 'Who is my love?',
        answer: 'Is you?',
      }),
    })

    await ctx.render('demo')
  }

  public static async json(ctx: BaseContext) {
    ctx.body = {
      title: 'koa2 json',
    }
  }

  public static async string(ctx: BaseContext) {
    ctx.body = 'koa2 string'
  }
}
