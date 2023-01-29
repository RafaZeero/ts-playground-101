type UnionPets = Dog | Cat
type IntersecPets = Dog & Cat

type Dog = { animal: 'dog'; size: number; breed: string; trained: boolean }
type Cat = { animal: 'cat'; quantity: number; color: string }

const unionPets: UnionPets = {
  animal: 'dog',
  size: 3,
  breed: 'mutt',
  trained: true,
  quantity: 3,
  color: 'caramel',
}

const intersecPets: IntersecPets = {
  animal: 'dog',
  size: 3,
  breed: 'mutt',
  trained: true,
  quantity: 3,
  color: 'caramel',
}
