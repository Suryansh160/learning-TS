"use strict";
const raw = '{"id":1,"name:"a"}';
const riskyuser = JSON.parse(raw);
console.log(riskyuser.name);
function isUser(v) {
    return typeof v === 'object' && v !== null && 'id' in v;
}
const maybe = JSON.parse(raw);
if (isUser(maybe)) {
    console.log(maybe.name);
}
