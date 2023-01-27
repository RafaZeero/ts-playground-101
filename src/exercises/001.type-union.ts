// https://www.typescriptlang.org/play?#code/MYewdgzgLgBAZgJwK4EsoRgXhgbwFAwwCGADiQDYCmAXDAOwA0BMARkWO0bQIwBMThEAnYBzGjACseAL548UAJ4lKMAILlyAMWRoM2RcpBx4O9HIMqA8mErbUsbPkKkK4p4RgpIKACaVVZFSWLABWtGBIALYslAjMstIA2gDkLlTJALpyoJCwlAAeRJGutNa2pli4zF4Qvv6BlMFhMLwAzHwy2eDQMKAg5E2VOLJ4cEIwABQ5PYj2nmAm9hAAlFWE0-2UAHTkICITs2jLMkA

const fruits = {
  apple: 7,
  banana: 12,
  orange: 5,
};

type GoalType = { apple: number } | { banana: number } | { orange: number };

type AllFruits = typeof fruits;
//     ^?

type Apple = {
  apple: {
    apple: number;
  };
}['apple'];

const fruitWithType: OneOrManyFruits = {
  banana: 1,
  apple: 3,
  orange: 3,
};

for (let fruit in fruits) {
}

export {};
