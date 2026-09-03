"use strict";
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        id.toFixed(2);
    }
}
function describeUser(u) {
    if (u.role === 'Admin') {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyalityPoints);
    }
}
function describeUserWithInOperator(u) {
    if ('permissions' in u) {
        console.log(u.role);
    }
    else {
        console.log(u.loyalityPoints);
    }
}
// array of unions and union of arrays
const arrOfUnion = ['a', 5];
const unionOfArrays = Math.random() > 0.1 ? ['x', 'ifnwo'] : [6];
unionOfArrays.push('r');
