// server/types/context.ts
import { Context } from 'koa'

export interface AppContext<Body = any, State = any> extends Context {
  state: State & {
    user?: { uid: number }
  }
  request: Context['request'] & {
    body: Body
  }
}
