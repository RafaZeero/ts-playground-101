type Merge<A, B> = {
  [Key in keyof (A & B)]: Key extends keyof A ? A[Key] : Key extends keyof B ? B[Key] : never;
};

type BasicUser = {
  name: string;
  job: string;
  skills: string[];
};

const userWithoutId = {
  name: 'Daniel',
  job: 'toddler',
  skills: ['breastfeed']
};

const userWithId = {
  id: 1
};

type ID = {
  id: number;
};

type User<T = BasicUser> = Merge<T, ID>;
//    ^?

const userDaniel: User<{}> = {
  //      ^?
  ...userWithoutId,
  //      ^?
  ...userWithId
  //      ^?
} as const;

console.log(userDaniel);

type Testing = typeof userDaniel;
//     ^?
