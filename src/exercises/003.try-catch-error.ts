// https://www.typescriptlang.org/play?#code/MYewdgzgLgBFBOBPAwgQysAFgEQKYFsQYBeGACmnVwC4YByAM1QEsAbOmAH3ogFdhguXABM6AShIA+GAG8AUDDhJZCxTGYNylKLhLFSjFuwny1aqJnggA7jDC5bAUXhX4ZOgDEjveLgCE4gDcqooAvqqhMMDoWOS4JiEwvlA+YDC4AHT4uBAQqADmuMFhcqGBQA

const tryCatchDemo = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      throw new Error('Failure!');
    }
  } catch (e) {
    return e.message;
  }
};

export {};
