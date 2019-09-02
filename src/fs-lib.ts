// Make your own functional library

// Map

export function map<TIn, TOut>(input: TIn[], fn: (t: TIn) => TOut) {}

// Reduce

export function reduce<TIn, TOut>(input: TIn[], fn: (prev: TOut, curr: TIn) => TOut, seed: TOut) {}

// Compose

export function compose<F, FG, G>(f: (x: F) => FG, g: (x: FG) => G) {}

// Identity

export function identity<T>(x: T) {}
