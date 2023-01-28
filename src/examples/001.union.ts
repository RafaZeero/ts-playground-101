type UnionPets = Dog | Cat
type IntersecPets = Dog & Cat

type Dog = { size: number; breed: string; trained: boolean }
type Cat = { size: number; color: string }

//@ts-ignore
const unionPets: UnionPets = {}

//@ts-ignore
const intersecPets: IntersecPets = {}
