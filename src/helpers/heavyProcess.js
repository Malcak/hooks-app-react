export const heavyProcess = (iterations) => {
  for (let index = 0; index < iterations; index++) {
    console.log('oh no');
  }
  return `${iterations} iterations performed`;
};
