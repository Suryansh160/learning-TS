"use strict";
// interface -> best for object shapes that you expect to extend
// supports declaration merging
// types -> more general can be used for objects intersescctions unions
// cannot be reopened -> no merging
const boxDemo = {
    height: 10,
    width: 20
};
// type Bag = { color: string } //cant redeclare types 
