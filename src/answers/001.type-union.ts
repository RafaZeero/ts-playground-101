// https://www.typescriptlang.org/play?#code/MYewdgzgLgBAZgJwK4EsoRgXhgbwFAwwCGADiQDYCmAXDAOwA0BMARkWO0bQIwBMThEAnYBzGjACsA4kVk9eAZjwBfANx48UAJ4lKMAILlyAMWRoM2bbpBx4Z9Os069AZRRgRVU6ljZ8hAG0AaRh3GABrSi0bAyNvcwBdWn9CGGDeULAYIKSYMCQAWxZKBHVCNRUAyOjbQxN7CATHUEhYRB8AdTQACwAVZ1o3Dy97LFxmNg4OHmlSCnEFaSFRBdnZLkkVdSA
// https://www.typescriptlang.org/play?#code/MYewdgzgLgBAZgJwK4EsoRgXhgbwFAwwCGADiQDYCmAXDAOwA0BMARkWO0bQIwBMxGUJChNCIBOwDmNGAHIiC2aJgBrFAHcUtKMkp4AvniNQAniUowAskRWUAqmBTgAYghABbADwAVAHxZcAgBtAGkYFDBVShMQOBhvAF1afEIggAVwyJCEmFpvUISCQ30g2xi4xOMzC28AeRYAK0pgWGwUmFLo2mgECMkkwMJUst5unT6BsCR3FkoEZmKjIWgYKHqmlrz15tbBmD4AZl5uA+TmQiQwADcQW7vblAATHgAGBYMl8BXKAA8idwoMmstgcTjArg8nlM5li8GQaAg-jazFIgJ4ynEUhkskOSmYak0tDgRHIEEoyjYHA4PF4Hzwy1goBA5HWATw7UcwEoaTcJBe3GSEQgT0oADkUFyeSA+QKYAAiACSsncxBgnIsJF5coEMAZ+mUoHc7nAUr5o1WumU5CI0FNL1OMAOBiCsnVdu4skK9NuLMaADohSLxZLefyjHBxDAABQMuGoWAROMIgCUe2WzMofvIIEkUcQ8YgQXzaASyeYAHpy0nWv45aiqNqQgBRACaAGUDEA

const fruits = {
  apple: 7,
  banana: 12,
  orange: 5,
  aaaa: 123,
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
  aaaa: 5,
};
