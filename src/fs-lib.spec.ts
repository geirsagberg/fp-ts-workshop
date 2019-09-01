import { map, reduce, compose, identity } from './fs-lib'
import expect = require('expect')

describe('fs-lib', () => {
  describe('identity', () => {
    it('returns whatever was passed in', () => {
      const result = identity(1)

      expect(result).toEqual(1)

      // result should be of type number
    })
  })
  describe('map', () => {
    it('can map from numbers to strings', () => {
      const result = map([1, 2, 3], x => x.toString())

      expect(result).toEqual(['1', '2', '3'])

      // result should be of type string[]
    })
  })

  describe('reduce', () => {
    it('can reduce an array to an object', () => {
      const result = reduce([1, 2, 3], (prev, curr) => ({ sum: prev.sum + curr }), { sum: 0 })

      expect(result).toEqual({ sum: 6 })

      // result should be of type { sum: number }
    })
  })

  describe('compose', () => {
    it('can compose two functions into one', () => {
      const double = (x: number) => x * 2
      const stringify = (x: number) => x.toString()
      const doubleAndStringify = compose(
        double,
        stringify
      )
      const result = doubleAndStringify(3)

      expect(result).toBe('6')
    })
  })
})
