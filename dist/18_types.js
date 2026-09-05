"use strict";
// object shapes -> similar to interfaces
// union types -> (a|b)
// intersection types ->(a&b)
const person1 = {
    id: '1',
    address: 'new Yorker',
    salary: 26
};
function nextActionCheck(s) {
    switch (s) {
        case 'new':
            return 'new';
        case 'paid':
            return 'paid';
        default:
            return 'pending';
    }
}
