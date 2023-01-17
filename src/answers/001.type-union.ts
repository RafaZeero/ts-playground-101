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

type Apple = {
  apple: {
    apple: number;
  };
}['apple'];

const fruitWithType: SingleFruit = {
  banana: 1,
  apple: 3,
  orange: 3,
  aaaa: 5
};
