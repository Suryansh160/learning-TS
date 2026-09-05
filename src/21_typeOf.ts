function describeTypeOf (x: unknown) {
  if (typeof x === 'string') {
    return 'string'
  }

  if (typeof x === 'number') {
    return 10
  }

  if (typeof x === 'boolean') {
    return true
  }

  if (typeof x === 'bigint') {
    return 'bigint'
  }

  if (typeof x === 'symbol') {
    return 'symbol'
  }

  if (typeof x === 'undefined') {
    return 'undefinde'
  }

  if (typeof x === 'function') {
    return 'function'
  }

  if (x === null) {
    return null
  }

  return 'object'
}

console.log(describeTypeOf('hi'))
console.log(describeTypeOf(undefined))
console.log(describeTypeOf({}))
console.log(describeTypeOf(null))
console.log(describeTypeOf(true))
console.log(describeTypeOf(1))
console.log(describeTypeOf(() => {}))
console.log(describeTypeOf(Symbol('suryansh')))

function info (z: unknown) {
  if (Array.isArray(z)) {
    return z
  }

  if (z instanceof Date) {
    return new Date()
  }

  if (z instanceof Error) {
    return new Error('xyz')
  }

  return 'other'
}

console.log(
  info([1, 2, 3, 4]),
  info(new Date()),
  info(new Error()),
  info({ x: 1 })
)
