// constraint <T> so that only certain shapes are allowed
// <T extends X>
// key constraints -> <k extends keyof T> -> K must be a key of T

function lenN4<T extends { length: number }> (xN4: T): number {
  return xN4.length
}

console.log(lenN4('fesws'))
console.log(lenN4(['fesws']))
console.log(lenN4({ length: 4, tag: 'df' }))

// console.log(lenN4(562))

type UserN6 = { id: string; name: string; age?: number }

function userN6Extract<T, K extends keyof T> (
  arrN4: T[],
  keyN4: K
): Array<T[K]> {
  return arrN4.map(item => item[keyN4])
}

const usersN6: UserN6[] = [
  {
    id: '1',
    name: 'name',
    age: 89
  },
  {
    id: '2',
    name: 'name2'
  }
]

console.log(userN6Extract(usersN6, 'id'))
console.log(userN6Extract(usersN6, 'age'))
