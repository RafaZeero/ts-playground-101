const query = `/home?a=foo&b=wow`

const concat = 'aaa' + 'bbb'

const naruto = 'Naruto Uzumaki'

query.split('?') // ['/home', 'a=foo&b=wow']

type Split<StringValue extends string, Separator extends string> = string extends StringValue
  ? never
  : StringValue extends `${infer FirstPart}${Separator}${infer LastPart}`
  ? [FirstPart, ...Split<LastPart, Separator>]
  : [StringValue]

type Query = Uppercase<Split<typeof naruto, ' '>[0]>
//     ^?

const pattern = 'aa0bb0cc0dd'

const result = pattern.split('0')

type SplitPattern = Split<typeof pattern, '0'>[1]
//     ^?
