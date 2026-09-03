function greetPersonOptional (name?: string): string {
  const upperRes = name ? name?.toUpperCase() : 'Guest'

  return `Hello ${upperRes}`
}

console.log(greetPersonOptional('suryansh'))
console.log(greetPersonOptional())

function greetPersonDefault (name: string = 'Guest'): string {
  return `Hello ${name.toUpperCase()}`
}

console.log(greetPersonDefault('suryansh'))
console.log(greetPersonDefault())

function connect (host: string, port?: number, secure?: boolean) {
  const p = port ?? 80
  const s = secure ?? false

  return `Connect ${host} ${p} ${s}`
}

console.log(connect('localhost', 500, true))
