// https://www.typescriptlang.org/play?#code/MYewdgzgLgBAZgJwK4EsoRgXhgbwFAwwCGADiQDYCmAXDAOwA0BMARkWO0bQIwBMThEAnYBzGjACseAL548UAJ4lKMAILlyAMWRoM2RcpBx4O9HIMqAyijAiq21LGw5Z8pSoDyYSg7RZczKQU4viEhEFUtGBIALYslAjMstIA2gDkEZRpALpyoJCwlAAeRDHBtF4+pv6hxGSRMHwAzDJ54NAwEDZ2VY4wtNa29tXOzGwcHDyteEA

const fruits = {
  apple: 7,
  banana: 12,
  orange: 5
};

type AllFruits = typeof fruits;

type Apple = {
  apple: {
    apple: number;
  };
}['apple'];

const fruitWithType: SingleFruit = {
  banana: 1,
  apple: 3,
  orange: 3
};

export {};
