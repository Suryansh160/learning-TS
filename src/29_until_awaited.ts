// Awaited<T>

type Promise1 = Awaited<Promise<number>>
type Promise2 = Awaited<Promise<string>>
type Awaited1 = Awaited<string>

type PromiseUnionExample = Awaited<string | number>

async function fetchCount () {
  return 42 as const
}

type ResolvedFetchCountValue = Awaited<ReturnType<typeof fetchCount>>

async function getData () {
  return Promise.all([
    Promise.resolve(1 as const),
    Promise.resolve('x' as const)
  ] as const)
}

type DataTupledWithPromise = Awaited<ReturnType<typeof getData>> //[1 , 'x'] read only
