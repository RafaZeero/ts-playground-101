const excludeThis = {
  name: 'my name',
  age: 22
};

const fromThis = {
  name: 'my other name',
  age: 99,
  isOk: true
};

const newType: Diff<typeof excludeThis, typeof fromThis> = {
  isOk: false
};

type Diff<A, B> = {
  [Key in keyof A | keyof B as Exclude<Key, keyof A & keyof B>]: Key extends keyof A
    ? A[Key]
    : Key extends keyof B
    ? B[Key]
    : never;
};
