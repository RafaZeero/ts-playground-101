// https://www.typescriptlang.org/play?#code/MYewdgzgLgBAZgJwK4EsoRgXhgbwFAwwCGADiQDYCmAXDAOwA0BMARkWO0bQIwBMThEAnYBzGjACseAL548UAJ4lKMAGLI0GbPkKkK4sEgC2LSggDcMmAB9czNhw61DJs5ek27g4WDHPjpggyQA

const fruits = {
  apple: 7,
  banana: 12,
  orange: 5,
}

type GoalType = { apple: number } | { banana: number } | { orange: number }

type AllFruits = typeof fruits
//     ^?

type Apple = {
  apple: {
    apple: number
  }
}['apple']

const fruitWithType: OneOrManyFruits = {
  banana: 1,
  apple: 3,
  orange: 3,
}

for (let fruit in fruits) {
}

export {}
