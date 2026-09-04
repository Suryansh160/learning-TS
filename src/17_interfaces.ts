// interface -> named shape for objects

interface User33 {
  id: string
  name: string
  email?: string
  readonly createdAt: Date
}

const user33: User33 = {
  id: '1',
  name: 'suryansh',
  email: 'abc@gmail.com',
  createdAt: new Date()
}

interface Admin33 extends User33 {
  permissions: string[]
}

const admin33: Admin33 = {
  id: '2',
  name: 'suryansh',
  email: 'abc@gmail.com',
  createdAt: new Date(),
  permissions: ['admin']
}

interface withMeta1 {
  meta: {
    active: boolean
  }
}

interface AdminWithMeta extends Admin33, withMeta1 {}

const AdminWithMeta33: AdminWithMeta = {
  id: '2',
  name: 'suryansh',
  email: 'abc@gmail.com',
  createdAt: new Date(),
  permissions: ['admin'],
  meta: { active: true }
}
