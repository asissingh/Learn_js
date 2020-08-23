let totalChocolates = 10;
let totalWarpers = totalChocolates;

while (TotalWarpers <= 3) {
  const newChocolates = Math.floor(TotalWarpers / 3);
  const remainingWarper = TotalWarpers % 3;
  totalChocolates += newChocolates;
  totalWarpers = newChocolates + remainingWarper;
}
console.log(totalChocolates);
console.log(totalWarpers);
