"use strict";
const g = [1, 2, 3, 4];
const gnjfd = [1, 2, 3, 4]; //generic form
const gr = [1, 2, 3, 4];
gr[3] = 69; //mutable
gr.splice(1, 6);
function sum(nums) {
    let su = 0;
    for (const s of nums)
        su += s;
    return su;
}
console.log(sum(gr)); //passing mutable array in readonly param is allowed
const res = gr.map(n => n * 0);
