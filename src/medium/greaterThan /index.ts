/* _____________ Your Code Here _____________ */

// TODO implement GreaterThanOrEqual type
type GreaterThan<
  T extends number,
  U extends number,
  R extends unknown[] = []
> = T extends R['length']
  ? false
  : U extends R['length']
  ? true
  : GreaterThan<T, U, [...R, unknown]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases1 = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<999, 999>, false>>
  // Expect<Equal<GreaterThan<1000, 1000>, false>>
]
