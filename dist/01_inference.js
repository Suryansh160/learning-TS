let count = 0;
export function add(a, b) {
    return a + b;
}
// annotate when type is not obvious
console.log(add(5, 2));
let maybe;
maybe = Math.random() > 0.5 ? 'number' : 10;
