import { BaseContext } from 'koa'
import ctxUtils from '../libs/ctx-utils'
// import { getAnchor, getUser } from '../models/common'

export default class GeneralController {
  public static async home(ctx: BaseContext) {
    const { device } = ctxUtils({ ctx })

    ctx.state = {
      title: 'Hello Koa 2!',
      device: device ? 'Personal Computer' : 'Mobile Phone',
      config: JSON.stringify({
        question: 'Who is my love?',
        answer: 'Is you?',
      }),
    }

    // await getAnchor({ ctx })
    // await getUser({ ctx })

    await ctx.render('index')
  }

  public static async notfound(ctx: BaseContext) {
    ctx.state = {
      status: '404',
      message: 'Not Found',
    }
    await ctx.render('error')
  }

  public static async forbidden(ctx: BaseContext) {
    await ctx.render('error', {
      status: '403',
      message: 'Forbidden',
    })
  }
}
