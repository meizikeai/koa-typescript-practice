import { BaseContext } from 'koa'

export default class Test {
  public static async json(ctx: BaseContext) {
    ctx.body = {
      title: 'koa2 json',
    }
  }

  public static async string(ctx: BaseContext) {
    ctx.body = 'koa2 string'
  }

  public static async demo(ctx: BaseContext) {
    const result = {
      title: 'Hello Demo!',
      config: JSON.stringify({ test: 'who is my love?' }),
    }

    const response = Object.assign({}, result)

    await ctx.render('demo', response)
  }
}
