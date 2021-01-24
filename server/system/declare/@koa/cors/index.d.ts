import * as Koa from 'koa'

declare namespace Cors {
  /**
   * Middleware configration options.
   */
  interface Options {
    /**
     * `Access-Control-Allow-Origin`, default is request Origin header.
     *
     * @remarks
     * If a function is provided, it will be called for each request with
     * the koa context object. It may return a string or a promise that
     * will resolve with a string.
     */
    origin?: ((ctx: Koa.Context) => string) | ((ctx: Koa.Context) => PromiseLike<string>) | string

    /**
     * `Access-Control-Allow-Methods`, default is
     * 'GET,HEAD,PUT,POST,DELETE,PATCH'
     */
    allowMethods?: string[] | string

    /**
     * `Access-Control-Expose-Headers`
     */
    exposeHeaders?: string[] | string

    /**
     * `Access-Control-Allow-Headers`
     */
    allowHeaders?: string[] | string

    /**
     * `Access-Control-Max-Age` in seconds
     */
    maxAge?: number | string

    /**
     * `Access-Control-Allow-Credentials`
     */
    credentials?: boolean

    /**
     * Add set headers to `err.header` if an error is thrown
     */
    keepHeadersOnError?: boolean
  }
}

/**
 * CORS middleware factory.
 * @param options - Configuration options.
 * @returns cors middleware
 */
declare function cors(options?: Cors.Options): Koa.Middleware

export = cors
