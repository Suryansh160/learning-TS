type Direction = 'left' | 'right' | 'up'

function move (d: Direction) {
  console.log(d)
}

const d1 = 'left'
move(d1)

let d2 = 'left'
move(d2)

let d3: Direction = 'left'
move(d3)
