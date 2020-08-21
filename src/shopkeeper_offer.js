let totalChoclates = 10;
let TotalWrapers = totalChoclates;

for (; TotalWrapers >= 3; ) {
  let newChoclates = Math.floor(TotalWrapers / 3);
  let RemaningWraper = TotalWrapers % 3;
  totalChoclates += newChoclates;
  TotalWrapers = newChoclates + RemaningWraper;
}
console.log(totalChoclates);
console.log(TotalWrapers);
