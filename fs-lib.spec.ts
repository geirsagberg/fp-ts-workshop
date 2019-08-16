import { map } from './fs-lib'

describe('map', () => {
  it('can map from numbers to strings', () => {
    const result = map([1, 2, 3], x => x.toString())

    expect(result).toEqual(['1', '2', '3'])

    // result should be of type string[]
  })
})
