/* _____________ Your Code Here _____________ */

type LastIndexOf<T extends unknown[], U extends unknown> = T extends [
  ...infer Head,
  infer Tail
]
  ? Equal<Tail, U> extends true
    ? Head['length']
    : LastIndexOf<Head, U>
  : -1

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], 'a'>, 3>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>
]
