/* _____________ Your Code Here _____________ */

type Zip<
  T extends unknown[],
  U extends unknown[],
  Result extends unknown[] = []
> = T extends [infer TFirst, ...infer TRest]
  ? U extends [infer UFirst, ...infer URest]
    ? Zip<[...TRest], [...URest], [...Result, [TFirst, UFirst]]>
    : Result
  : Result

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
]
