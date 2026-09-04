// interface -> best for object shapes that you expect to extend
// supports declaration merging
// types -> more general can be used for objects intersescctions unions
// cannot be reopened -> no merging

interface Box1 {
  width: number
}

interface Box1 {
  height: number
}

const boxDemo: Box1 = {
  height: 10,
  width: 20
}

type Bag = { size: number }
// type Bag = { color: string } //cant redeclare types 
