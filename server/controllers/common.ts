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
