/**
 * 检查某个参数是不是某种类型
 * @param {any} param
 * @param {string} type
 * @return {boolean}
 */
export default (param: any, type: string) => Object.prototype.toString.call(param) === `[object ${type}]`