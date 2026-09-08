"use strict";
function id(x) {
    return x;
}
const xyzz = id(5);
console.log(xyzz * 8, id(['dew']));
function firstGen(arr) {
    return arr[0];
}
console.log(firstGen([1, 2, 3, 4, 5]));
