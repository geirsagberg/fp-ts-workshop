import { map, reduce, curry } from 'lodash-es'

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

describe('curry', () => {
  it('can turn a function into a curried function', () => {
    function divide(a: number, b: number) {
      return a / b
    }
    const curriedDivide = curry(divide)
    const divideTwoBy = curriedDivide(2)
    const result = divideTwoBy(4)

    expect(result).toEqual(0.5)
  })
})
