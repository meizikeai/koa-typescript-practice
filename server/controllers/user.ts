import { BaseContext } from 'koa'

export default class UserController {
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
