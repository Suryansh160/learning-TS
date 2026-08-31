let username: string = 'sangam'
let age: number = 10
let isCreator: boolean = true

const big: bigint = 2n * 63n - 1n

// Operator '+' cannot be applied to types 'bigint' and 'number'.
// const mixed = big + age

const TOKEN: unique symbol = Symbol('TOKEN')

function yearsToDay (years: number): number {
  return 0
}

console.log(username.toLowerCase());
