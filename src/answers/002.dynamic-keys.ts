// https://www.typescriptlang.org/play?#code/MYewdgzgLgBMBOBTAhlRBhZwAWiYF4YAKASgID4YBvAKBjnGji1wC4YAlRUeAEwB5o8AJZgA5gBoYQ0WMqEqAXwDcNOg0ixkvXgWLDe7GeKkA3ZABsAroiNQR4svkq169YC0QBtAwF095taIqvQqau6MsEgAtiCmeIREBnYOYk4u6vS8iBaIaMw43n4hMGHqSFBW8GDUmQW4EnXavI1uMDFxiOphYUA

const createCache = () => {
  const cache: Record<string, string> = {};

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
