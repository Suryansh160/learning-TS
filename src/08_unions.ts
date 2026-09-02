function printId (id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    id.toFixed(2)
  }
}

// object union
type Admin = { role: 'Admin'; permissions: [] }
type Customer = { role: 'Cusotmer'; loyalityPoints: number }

function describeUser (u: Admin | Customer) {
  if (u.role === 'Admin') {
    console.log(u.permissions)
  } else {
    console.log(u.loyalityPoints)
  }
}

function describeUserWithInOperator (u: Admin | Customer) {
  if ('permissions' in u) {
    console.log(u.role)
  } else {
    console.log(u.loyalityPoints)
  }
}

// array of unions and union of arrays
const arrOfUnion: (string | number)[] = ['a', 5]

const unionOfArrays: string[] | number[] =
  Math.random() > 0.1 ? ['x', 'ifnwo'] : [6]

unionOfArrays.push('r')
