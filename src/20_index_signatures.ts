type NumberDict = { [k: string]: number }

const counters: NumberDict = {}
counters['likes'] = 8
counters['comments'] = 9
counters['subscribers'] = 56

type Metrices = Record<'likes' | 'views' | 'shares', number> //tight and safer
const mm: Metrices = { likes: 1, views: 100, shares: 23 }

const priceMap = new Map<string, number>()
priceMap.set('likes', 5)

type looseMap = Record<string, number | undefined>
const lm: looseMap = {}
lm['a'] = undefined
