// TS infers<T> sutomatically based on the arguments passed

function id<T> (x: T): T {
  return x
}

const xyzz = id(5)

console.log(xyzz * 8, id(['dew']))

function firstGen<T> (arr: T[]): T | undefined {
  return arr[0]
}

console.log(firstGen([1, 2, 3, 4, 5]))

// without generics -> (x:unknown)=>unknown
// with generics: (x:T)=>T //keep the exact type

function wrap<T> (value: T): { value: T } {
  return { value }
}
