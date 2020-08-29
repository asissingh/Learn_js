const find = (a, b) => {
  let min = 0;
  let max = a.length - 1;
  while (max - min > 1) {
    let middle = Math.floor((min + max) / 2);
    if (a[middle] == b) {
      return middle;
    } else if (a[middle] > b) {
      max = middle;
    } else {
      min = middle;
    }
  }
  return null;
};
