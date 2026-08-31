let count = 0

export function add (a: number, b: number): number {
  return a + b
}

// annotate when type is not obvious

console.log(add(5, 2))

let maybe: string | number
maybe = Math.random() > 0.5 ? 'number' : 10
