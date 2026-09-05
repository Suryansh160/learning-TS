"use strict";
function sumAllNumbers(...xs) {
    return xs.reduce((s, n) => s + n, 0);
}
console.log(sumAllNumbers(1, 5, 8, 3));
// Tuple rest
function makeRange(...args) {
    const [start, end, step = 1] = args;
    const out = [];
    for (let n = start; n <= end; n += step)
        out.push(n);
    return out;
}
console.log(makeRange(1, 5));
console.log(makeRange(2, 10, 2));
function draw(x, y) {
    console.log(x, y);
}
const points = [10, 20];
// draw(...points) //not fixed like [number,number]
const fixedPoints = [10, 20]; //either give the type or make it readonly
draw(...fixedPoints);
