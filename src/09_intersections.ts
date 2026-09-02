// value must be everything from A or B

type Inter1 = { id: string }
type Inter2 = { createdAt: Date }

type Entity = Inter1 & Inter2 //it must have both id and createdAt

const e: Entity = { id: 'i1', createdAt: new Date() }

// homewoek
type info1 = { username: string }
type info2 = { name: string }

type realUSer = info1 & info2

const user: realUSer = { username: 'suryansh160', name: 'suryansh' }

type Product = { id: string; title: string }
type Priced = { price: number }

type PricedProduct = Product & Priced
