import { getAnchors, getUser } from '../models/common'

export default class GeneralController {
  public static async home(ctx: any) {
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

  public static async json(ctx: any) {
    ctx.body = {
      title: 'koa2 json',
    }
  }

  public static async string(ctx: any) {
    ctx.body = 'koa2 string'
  }

  public static async demo(ctx: any) {
    const result = {
      title: 'Hello Demo!',
      config: JSON.stringify({ test: 'who is my love?' }),
    }

    const response = Object.assign({}, result)

    await ctx.render('demo/demo', response)
  }

  public static async notFound(ctx: any) {
    ctx.state = {
      status: '404',
      message: 'Not Found',
    }
    await ctx.render('error')
  }

  public static async forbidden(ctx: any) {
    await ctx.render('error', {
      status: '403',
      message: 'Forbidden',
    })
  }
}
