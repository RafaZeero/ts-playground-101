// @ts-nocheck
type UnionPets = 
| Dog 
| Cat 
| (Dog & Cat)

type IntersecPets = 
& Dog 
& Cat

type Dog = { breed: string; trained: boolean }
type Cat = { color: string; scratches: number }

const unionPets: UnionPets = {
  breed: 'mutt',
  trained: true,
  color: 'caramel',
}

const intersecPets: IntersecPets = {
  breed: 'mutt',
  trained: true,
  color: 'caramel',
}

function filter(pet: UnionPets){
  if('breed' in pet){ // Type Dog
    pet.breed
  }
  if('color' in pet){ // Type Cat
    pet.color
  }
  if('breed' in pet && 'color' in pet){ // Type Dog & Cat
    pet
  }
}