const a = [92, 48, 75, 102, 195];
const b = [85, 52, 81, 88, 195];
let c = 0;
let d = 0;
let e = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > b[i]) {
    c += 1;
    console.log('Team A is the winner of the match.');
  } else if (a[i] === b[i]) {
    e += 1;
    console.log('This match is draw');
  } else {
    d += 1;
    console.log('Team B is the winner of the match.');
  }
}
console.log(`${c} matches win team a`);
console.log(`${d} matches win by team b`);
console.log(`${e} matches draw between team A & B `);
if (c > d) {
  console.log('Team A is winner of the series');
} else if (c === d) {
  console.log('series is draw');
} else {
  console.log('Team B is winner of the series');
}
