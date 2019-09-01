import { map, reduce, pick, some } from 'lodash-es'
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

  describe('pick', () => {
    it('can pick certain properties of an object', () => {
      const llanowarElves = {
        color: 'green',
        manaCost: ['green'],
        power: 1,
        toughness: 1,
        type: 'creature'
      }
      const result = pick(llanowarElves, ['power', 'toughness'])

      expect(result).toEqual({
        power: 1,
        toughness: 1
      })

      // result should be of type: { power: number, toughness: number }
    })
  })

  describe('some', () => {
    it('returns true if any in a collection return truthy', () => {
      const result = some(
        {
          a: 's',
          b: 3
        },
        prop => typeof prop === 'number'
      )

      expect(result).toBeTruthy()
    })
  })

  // Add tests for your own favourite lodash functions here
})
