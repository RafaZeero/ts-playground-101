// https://www.typescriptlang.org/play?#code/PTAEAEBcGcFoDsD2BjAFgU2QawFCQJ4AO6oAqvAJaLwAK6MoAvKDgD6gAiiA5i+wMIBDSH1AAKLrwBkoIZACUOPERIBJeJHQAnaJjoNmOGZJYy5SgsU48moAN6gARlvToAJgC5Q0SForxuAG5QX0F-dy9HREQAG3RBeFAAX2UrOVsHZFjELS8fPwDg6GQtYTR0aC94AFcAW0dtZKUs+B9QaspqfUqyTtp6aAycUCcXCNAAclrqyEgJgBphkNLwz2Xq9EWRrJicrwnkQVLa9BiFnBScFrb-TR09Aa91O91kbqGR51c1qZm5reWYXg418GwBOz2k0Ox1O50uADMOshIFREvCKDE7mJiJAvORUd15HYlhR4WIJl93BNQP5QDiiaAQKAACoqazcJYjHEAOkpbiWKRGpPJEK01Np9IcTNZaWEnLp9G5ooFJLJFLGbnFiRxoCkMgO2TFNO19AZ0rZJjMcpGXPoKqSQA

type UnionPets = Dog | Cat | (Dog & Cat)

type IntersecPets = Dog & Cat

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
  scratches: 231,
}

function filter(pet: UnionPets) {
  if ('breed' in pet) {
    // Type Dog
    pet.breed
  }
  if ('color' in pet) {
    // Type Cat
    pet.color
  }
  if ('breed' in pet && 'color' in pet) {
    // Type Dog & Cat
    pet
  }
}
