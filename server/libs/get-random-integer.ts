/**
 * Get random int - get a random number between tow values
 *
 * @param {Number} min
 * @param {Number} max
 * @param {Boolean} inclusive - include the `max` (false)
 *
 * @return {Number}
 */

export default (min: number, max: number, inclusive = false) => {
  const tempMin = Math.ceil(min)
  const tempMax = Math.floor(max)

  return Math.floor(
    Math.random() * (
      inclusive ? (tempMax - tempMin + 1) : (tempMax - tempMin)
    )
  ) + tempMin
}