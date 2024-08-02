import { Context } from 'koa'
import ctxUtils from '../libs/ctx-utils'
import j from '../libs/jwt'
import s from '../libs/secret'
// import { getAnchor, getUser } from '../models/common'

export default class GeneralController {
  public static async home(ctx: Context) {
    const { device } = ctxUtils({ ctx })

    ctx.state = {
      title: 'Hello Koa 2!',
      device: device ? 'Personal Computer' : 'Mobile Phone',
      config: JSON.stringify({
        question: 'Who is my love?',
        answer: 'Is you?',
      }),
    }

    // await getAnchor()
    // await getUser()

    await ctx.render('index')
  }

  public static async notfound(ctx: Context, next: () => void) {
    const accepts = ctx.accepts('html', 'json')

    if (accepts === 'html') {
      ctx.state = {
        status: '404',
        message: 'Page Not Found',
      }
      await ctx.render('error')
      await next()
    } else if (accepts === 'json') {
      ctx.body = {
        code: 404,
        message: 'Page Not Found',
      }
    } else {
      ctx.type = 'text'
      ctx.body = 'Page Not Found'
    }
  }

  public static async forbidden(ctx: Context, next: () => void) {
    const accepts = ctx.accepts('html', 'json')

    if (accepts === 'html') {
      ctx.state = {
        status: '403',
        message: 'Forbidden',
      }
      await ctx.render('error')
      await next()
    } else if (accepts === 'json') {
      ctx.body = {
        code: 403,
        message: 'Forbidden',
      }
    } else {
      ctx.type = 'text'
      ctx.body = 'Forbidden'
    }
  }

  // Bearer ciphertext
  // {"exp":1725171583,"iat":1721974783,"vow":"i love you"}
  public static async auth(ctx: Context, next: () => void) {
    const { authorization } = ctx.request.header
    const { method } = ctx.request

    if (method !== 'OPTIONS') {
      if (authorization.trim() === '') {
        this.forbidden(ctx, next)
        return
      }

      const authorizationList = authorization.split(' ')

      if (authorizationList.length !== 2) {
        this.forbidden(ctx, next)
        return
      }

      const bearer = authorizationList[0]
      const tokenDecrypt = authorizationList[1]

      if (bearer.toLowerCase() != 'bearer' || tokenDecrypt.trim() == '') {
        this.forbidden(ctx, next)
        return
      }

      let claims: any = null

      try {
        // 解码
        const token = s.HandleServiceDecrypt(tokenDecrypt)
        // 验证
        claims = j.HandleJsonWebTokenDecrypt(token)
        // console.log(claims)
      } catch (error) {
        console.error(error)
      }

      const times = Date.now() / 1000

      // 验证过期时间 / 判断用户
      if (claims.exp < times || claims.iat > times) {
        ctx.body = {
          code: 401,
          message: 'Invalid login credentials, please log in again.',
        }

        return false
      }

      await next()
    } else {
      await next()
    }
  }
}
