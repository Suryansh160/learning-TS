// object shapes -> similar to interfaces
// union types -> (a|b)
// intersection types ->(a&b)

type Person1 = {
  id: String
  address: string
  salary: number
}

const person1: Person1 = {
  id: '1',
  address: 'new Yorker',
  salary: 26
}

type Status = 'new' | 'paid' | 'pending'

function nextActionCheck (s: Status): string {
  switch (s) {
    case 'new':
      return 'new'
    case 'paid':
      return 'paid'
    default:
      return 'pending'
  }
}

type ToMerge1 = { price: number }
type ToMerge2 = { stock: number }

type mergedProductInfo = Person1 & ToMerge1 & ToMerge2
