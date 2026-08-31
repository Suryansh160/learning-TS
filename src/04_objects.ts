type User = {
  id: string
  name: string
  email?: string
  readonly createdAt: Date
}

const user1: User = {
  id: 'i1',
  name: 'suryansh',
  createdAt: new Date()
}

const user2: User = {
  id: 'i2',
  email: 'john@gmail.com',
  name: 'john',
  createdAt: new Date()
}

// user1.createdAt = new Date()

type User2 = {
  email?: string
}

type User3 = {
  email: string | undefined
}

type Count = { [k: string]: number }
type Count1 = Record<'likes' | 'views' | 'shares', number>

const c1: Count = { what: 5 }
const c2: Count1 = { views: 6, likes: 6, shares: 8 }
