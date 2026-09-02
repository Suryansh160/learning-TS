// tuples - fixed length amd fixed types
// (string|number)[]
// optional tuples

const userEntry: [string, number] = ['suryansh', 21]
// you cannot change the order of elements like here we cannot do [21,'surysnsh'] as its[string,number]

type ResponseRow = [status: number, message?: string]

const r11: ResponseRow = [2]

// readonly tuples
const corners: readonly [number, number] = [2, 8]
