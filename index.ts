const foos = [{ a: 2 }, { a: 6 }]

const bars = foos.map(foo => ({
  b: foo.a + 4
}))
