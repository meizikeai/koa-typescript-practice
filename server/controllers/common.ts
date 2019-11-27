import { BaseContext } from 'koa'
import { getAnchors, getUser } from '../models/common'

export default class GeneralController {
  public static async home(ctx: BaseContext) {
    const result = {
      title: 'Hello Koa 2!',
    }
    const response = Object.assign({
      menu: true,
      sharebar: true,
    }, result)

    ctx.state = {
      a: 'Who is my love?',
      b: 'Is you?',
    }

    await getAnchors({ ctx })
    await getUser({ ctx })

    await ctx.render('index', response)
  }

  public static async notFound(ctx: BaseContext) {
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
