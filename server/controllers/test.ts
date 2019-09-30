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

  public static async getUsers(ctx: BaseContext) {
    ctx.status = 200
    ctx.body = { user: 10000 }
  }

  public static async getUser(ctx: BaseContext) {
    ctx.status = 200
    ctx.body = 'The user is Lucky'
  }

  public static async createUser(ctx: BaseContext) {
    ctx.status = 200
    ctx.body = 'The specified e-mail address already exists'
  }

  public static async updateUser(ctx: BaseContext) {
    ctx.status = 200
    ctx.body = 'The user you are trying to update doesn\'t exist in the db'
  }

  public static async deleteUser(ctx: BaseContext) {
    ctx.status = 200
    ctx.body = 'A user can only be deleted by himself'
  }
}
