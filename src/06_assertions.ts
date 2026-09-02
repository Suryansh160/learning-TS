const raw = '{"id":1,"name:"a"}'

const riskyuser = JSON.parse(raw) as { id: number; name: string }

console.log(riskyuser.name)

type User22 = { id: number; name: string }

function isUser (v: unknown): v is User22 {
  return typeof v === 'object' && v !== null && 'id' in v
}

const maybe = JSON.parse(raw) as unknown
if (isUser(maybe)) {
  console.log(maybe.name)
}
