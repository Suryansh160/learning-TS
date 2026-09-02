const Roles = ['admin', 'user', 'operator'] as const
// read only array

type Role = typeof Roles[number]
// derive a union from array

function setRole (r: Role) {
  console.log(r)
}

setRole('admin')
