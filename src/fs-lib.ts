// Make your own functional library

// Map

export function map<TIn, TOut>(input: TIn[], fn: (t: TIn) => TOut) {
  let output: TOut[] = []
  for (let i = 0; i < input.length; i++) {
    output[i] = fn(input[i])
  }
  return output
}

// Reduce

export function reduce<TIn, TOut>(input: TIn[], fn: (prev: TOut, curr: TIn) => TOut, seed: TOut) {
  for (let i = 0; i < input.length; i++) {
    seed = fn(seed, input[i])
  }
  return seed
}

// Compose

export function compose<F, FG, G>(f: (x: F) => FG, g: (x: FG) => G) {
  const composed = (x: F) => g(f(x))
  return composed
}

// Identity

export function identity<T>(x: T) {
  return x
}
