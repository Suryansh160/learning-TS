type inExample1 = { role: 'Admin'; permissions: string[] }
type inExample2 = { role: 'User'; expiresAt: Date }

type userExample = inExample1 | inExample2

function describeUserExample (u: userExample) {
  if ('permissions' in u) {
    return `Admin ${u.permissions.join(',')}`
  }

  return `User ${u.expiresAt.toISOString()}`
}

console.log(describeUserExample({ role: 'Admin', permissions: ['IAM'] }))

// avoid runtime crashes
// ?? and ||
// obj?.a

type ProfileN3 = {
  name: string
  contact?: { email?: string }
}

const P1N3: ProfileN3 = { name: 'John' }
const P2N3: ProfileN3 = { name: 'Ben', contact: { email: 'Ben@gmail.com' } }

// optional chaining ?
const email1N3 = P1N3.contact?.email
const email2N3 = P2N3.contact?.email

// ?? -> uses the right hand default only when the left is null or undefined
// || -> uses the default when the left is any falsy value (0,null,undefined,'',Nan)

const countFromServerN3: number | null = 0
const labelFromServerN3: string | undefined = ''

const aN3 = countFromServerN3 ?? 100 //keeps the right hand default only when lefthand is falsy so 0 will be still there
console.log(aN3)

const bN3 = countFromServerN3 || 100
console.log(bN3)
