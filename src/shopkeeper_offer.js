let totalChocolates = 10;
let totalWrapper = totalChocolates;

while (totalWrapper >= 3) {
  const newChocolates = Math.floor(totalWrapper / 3);
  const remainingWrapper = totalWrapper % 3;
  totalChocolates += newChocolates;
  totalWrapper = newChocolates + remainingWrapper;
}
console.log(totalChocolates);
console.log(totalWrapper);
