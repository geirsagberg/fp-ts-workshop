// Make your own functional library

// Map

type MapFn = <TIn, TOut>(input: TIn[], fn: (t: TIn) => TOut) => TOut[]

export const map: MapFn = <TIn, TOut>(input: TIn[], fn: (t: TIn) => TOut) => {
  let output = []
  for (let i = 0; i < input.length; i++) {
    output[i] = fn(input[i])
  }
  return output
}

const strings = map([1, 2, 3], x => x.toString())

// Reduce

type ReduceFn = <TIn, TOut>(input: TIn[], fn: (prev: TOut, curr: TIn) => TOut, seed: TOut) => TOut

export const reduce: ReduceFn = <TIn, TOut>(input: TIn[], fn: (prev: TOut, curr: TIn) => TOut, seed: TOut) => {
  for (let i = 0; i < input.length; i++) {
    seed = fn(seed, input[i])
  }
  return seed
}

// Curry

// export const curry(fn, )
