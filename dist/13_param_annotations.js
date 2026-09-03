"use strict";
function func1(a, b) {
    return a + b;
}
const nums12 = [1, 2, 3];
const doubled = nums12.map(n => n * 2);
console.log(doubled);
const times2 = (n) => n * 2; //always prefer to give annotations
function distancefromOrigin(p) {
    return Math.hypot(p.x, p.y);
}
console.log(distancefromOrigin({ x: 3, y: 5 }));
