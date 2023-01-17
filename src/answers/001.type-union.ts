// https://www.typescriptlang.org/play?#code/MYewdgzgLgBAZgJwK4EsoRgXhgbwFAwwCGADiQDYCmAXDAOwA0BMARkWO0bQIwBMThEAnYBzGjACsA4kVk9eAZjwBfANx48UAJ4lKMAILlyAMWRoM2bbpBx4Z9Os069AZRRgRVU6ljZ8hAG0AaRh3GABrSi0bAyNvcwBdWn9CGGDeULAYIKSYMCQAWxZKBHVCNRUAyOjbQxN7CATHUEhYRB8AdTQACwAVZ1o3Dy97LFxmNg4OHmlSCnEFaSFRBdnZLkkVdSA

const fruits = {
  apple: 7,
  banana: 12,
  orange: 5,
  aaaa: 123
};

type AllFruits = typeof fruits;

type SingleFruit = {
  [K in keyof AllFruits]: {
    [K2 in K]: number;
  };
}[keyof AllFruits];

const fruitWithType: SingleFruit = {
  banana: 1,
  apple: 3,
  orange: 3,
  aaaa: 5
};
