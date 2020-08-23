let totalChocolates = 10;
const totalWraper = totalChocolates;

while (totalWraper <= 3) {
  const newChocolates = Math.floor(totalWraper / 3);
  const remainingWarper = totalWraper % 3;
  totalChocolates += newChocolates;
  totalWarpers = newChocolates + remainingWarper;
}
console.log(totalChocolates);
console.log(totalWraper);
