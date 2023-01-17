// https://www.typescriptlang.org/play?#code/MYewdgzgLgBMBOBTAhlRBhZwAWiYF4YAKASgID4YBvAKBjnGji1wOoF8BuGuhyWZABNBbIgEtBALhjR4YsAHMANDABuyADYBXRNNnyFZfJVr16wFogDaEgLpt12xN3pce5xrCQBbEKryE4lIyUHKKRia89IKIGohozDjWdi4wbrxIUFrwYNRRibhK+UKCRWYwPn6IvG5uQA

const createCache = () => {
  const cache = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove
  };
};

export {};
