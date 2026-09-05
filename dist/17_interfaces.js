"use strict";
// interface -> named shape for objects
const user33 = {
    id: '1',
    name: 'suryansh',
    email: 'abc@gmail.com',
    createdAt: new Date()
};
const admin33 = {
    id: '2',
    name: 'suryansh',
    email: 'abc@gmail.com',
    createdAt: new Date(),
    permissions: ['admin']
};
const AdminWithMeta33 = {
    id: '2',
    name: 'suryansh',
    email: 'abc@gmail.com',
    createdAt: new Date(),
    permissions: ['admin'],
    meta: { active: true }
};
