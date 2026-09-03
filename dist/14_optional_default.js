"use strict";
function greetPersonOptional(name) {
    const upperRes = name ? name?.toUpperCase() : 'Guest';
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional('suryansh'));
console.log(greetPersonOptional());
function greetPersonDefault(name = 'Guest') {
    return `Hello ${name.toUpperCase()}`;
}
console.log(greetPersonDefault('suryansh'));
console.log(greetPersonDefault());
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? false;
    return `Connect ${host} ${p} ${s}`;
}
console.log(connect('localhost', 500, true));
