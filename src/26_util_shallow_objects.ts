// partial<T> -> make all the top level fields optional

type AddressN8 = {
  line1: string
  city: string
}

type User10 = {
  id: string
  name: string
  email?: string
  address: AddressN8
}

type UserPatch10 = Partial<User10>
// u cannot pass an extra key but lesser are acceptable

const patch10: UserPatch10 = {
  name: 'suryansh'
}
const patch11: UserPatch10 = { address: { line1: 'fwfw', city: 'fwsff' } }

// Required<T>
// all the fields are compulsary irrespective of email? ?

type userAllRequiredN10 = Required<User10>
const userAllPatch11: userAllRequiredN10 = {
  id: 'i1',
  name: 'sury',
  address: { line1: 'few', city: 'fewf' },
  email: '@'
}

// ReadOnly<T>
type ReadOnlyUserN10 = Readonly<User10>
const readonlyUser: ReadOnlyUserN10 = {
  id: '3u',
  name: 'anything',
  address: {
    line1: 'dq',
    city: 'fecfce'
  }
}

// readonlyUser.name = 'niewofniwo'

// Pick<T,K> -> keep only some keys

type PublicUserN10 = Pick<User10, 'id' | 'name'>
const publicUser: PublicUserN10 = { id: 'u5', name: 'John Doe' }

// Omit<T,K> - remove some keys
type UserWithoutEmailN10 = Omit<User10, 'email'>
const omitUserN10: UserWithoutEmailN10 = {
  id: 'u4',
  name: 'Rasne',
  address: {
    line1: 'e',
    city: 'fe'
  }
}

// Record<K,V>
type RoleK = 'admin' | 'user' | 'editor'
type RoleCheck = Record<RoleK, User10>

const dirN10: RoleCheck = {
  admin: { id: 'i2', name: 'admin', address: { line1: 'line1', city: 'fe' } },
  user: { id: 'i2', name: 'admin', address: { line1: 'line1', city: 'fe' } },
  editor: { id: 'i2', name: 'admin', address: { line1: 'line1', city: 'fe' } }
}
