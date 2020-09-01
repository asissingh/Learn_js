// count all characters in the string

// using for-loop
// eslint-disable-next-line no-unused-vars
const alphaCounter = (x) => {
  const result = {};
  for (let i = 0; i < x.length; i++) {
    if (result[x[i]]) {
      // eslint-disable-next-line no-plusplus
      ++result[x[i]];
    } else {
      result[x[i]] = 1;
    }
  }
  return result;
};

// using array reduce
const alphaCounter2 = (x) => x.split('').reduce((a, b) => {
  if (a[b]) {
    // eslint-disable-next-line no-plusplus
    ++a[b];
  } else {
    a[b] = 1;
  }
  return a;
}, {});

// shortest answer based on my knowledge
// eslint-disable-next-line no-return-assign
const ac = (x) => [...x].reduce((a, b) => (++a[b] || (a[b] = 1), a), {});

alphaCounter2('singhh');
