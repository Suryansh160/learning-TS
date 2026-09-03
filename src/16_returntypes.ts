// inference
const doubleFunc = (n: number) => n * 2

export function toTitle (s: string): string {
  return 'he'
}

function booleanToNumber (flag: boolean): number {
  if (flag) {
    return 1
  } else {
    return 0
  }
}

async function loadCountInfered () {
  return 42
}

loadCountInfered().then(n => console.log(n))
