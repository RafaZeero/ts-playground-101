import { String, Union } from 'ts-toolbelt';

const query = `/home?a=foo&b=wow`;

const naruto = 'Naruto Uzumaki';

type Split<FullString extends string, Deliminator extends string> = string extends FullString
  ? string[]
  : FullString extends ''
  ? []
  : FullString extends `${infer FirstHalf}${Deliminator}${infer SecondHalf}`
  ? [FirstHalf, ...Split<SecondHalf, Deliminator>]
  : [FullString];

type Naruto = Split<typeof naruto, ' '>[0];
type Uzumaki = Split<typeof naruto, ' '>[1];

const splittedNaruto: Naruto = 'Naruto';
//      ^?

const testSplit = 'aa0bb0cc0dd0ee';
//     ^?

type TestSplit = Split<'', '0'>;
//      ^?

type Split2<S extends string, D extends string> = string extends S
  ? never
  : S extends `${infer T}${D}${infer K}`
  ? [T, ...Split2<K, D>]
  : [S];

type GetValueFromIndex<A extends any[], N extends number> = A[N];

const testSplit2: Split2<`${78977881243757}`, '1'>[0] = '7897788';
//        ^?

/**
 * FIRST CALL: ["aa", "bb0cc0dd0ee"],
 *
 * SECOND CALL: ["aa", "bb", "cc0dd0ee"]
 *
 * ...
 *
 * LAST CALL: ["aa","bb","cc","dd","ee"]
 *
 */

type MyQuerySplitted = Split<typeof query, '?'>[1];
//    ^?

type Query = typeof query;
//   ^?

type SecondQueryPart = String.Split<Query, '?'>[1];
//     ^?

type QueryElements = String.Split<SecondQueryPart, '&'>;
//     ^?

type QueryParams = {
  //     ^?

  [QueryElement in QueryElements[number]]: {};
};

/**
 * type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, "=">[0]]: String.Split<
      QueryElement,
      "="
    >[1]
  }
}[QueryElements[number]]
 */

const obj: Union.Merge<QueryParams> = {
  a: 'foo',
  b: 'wow'
};

export {};
