class UserN15 {
  id: string
  name: string
  email?: string
  createdAt: Date = new Date()

  constructor (id: string, name: string, email?: string) {
    // assign all required fields
    this.id = id
    if (email) this.email = email
    this.name = name
  }
}

const result4 = new UserN15('i', 'fer')
const result5 = new UserN15('i2', 'fer', '@g.com')
