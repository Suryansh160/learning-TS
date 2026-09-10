// Exclude<U,V> -> remove from U those members assignable to V
// Extraxt<U,V> -> keep from U those members assignable to V
// Nonullable

type EventType1 = 'click' | 'hover' | 'submit' | 'keydown' | 'keyup'
type EventType2 = Exclude<EventType1, 'click'>

function handleEvent1 (e: EventType2) {
  console.log(e)
}

handleEvent1('hover')

type ActionsN1 = 'create' | 'update' | 'read' | 'delete'
type ActionsN2 = Extract<ActionsN1, 'create' | 'update'>

function handleEvent2 (e: ActionsN2) {
  console.log(e)
}

handleEvent2('create')

type maybenumber = number | null | undefined
type CleanNumber = NonNullable<maybenumber> //number only

function square (num: CleanNumber) {
  return num * num
}

// square(null)