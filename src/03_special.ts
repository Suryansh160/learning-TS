// let title: string = 'intro'
// title = undefined

let subtitle: string | undefined = undefined

// void: function doesnt return a useful value
function log (msg: string): void {
  console.log(msg)
}

function fail (msg: string): never {
  throw new Error(msg)
}

// DO NOT USE ANY: TRY TO IGNORE AS MUCH AS POSSIBLE

const valueany: any = JSON.parse('{"x":1}')
