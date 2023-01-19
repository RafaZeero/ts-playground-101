type Merge<A, B> = any;

type UserWithoutId = {
  name: string;
  job: string;
};

const userWithouId: UserWithoutId = {
  name: 'Daniel',
  job: 'toddler'
};

type UserWithId = {
  id: number;
};

const userWithId: UserWithId = {
  id: 1
};

type User = Merge<UserWithId, UserWithoutId>;

const userDaniel: User = {
  name: 'Daniel',
  job: 'toddler',
  id: 1,
  pleaseErrorOut: ''
};
