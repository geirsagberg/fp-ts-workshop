import { map, reduce } from 'lodash-es'
import expect = require('expect')

describe('lodash-es', () => {
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
})
