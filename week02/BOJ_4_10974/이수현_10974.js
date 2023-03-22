// 10974 : 모든 순열
// https://lhoiktiv.tistory.com/446

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));
const [N] = input[0].map((v) => +v);
const answer = [];

function solve(arr) {
  if (arr.length == N) {
    answer.push(arr.join(' '));
    return;
  } else {
    for (let i = 1; i <= N; i++) {
      if (!arr.includes(i)) {
        arr.push(i);
        solve(arr);
        arr.pop();
      }
    }
  }
}

solve([]);
console.log(answer.join('\n'));
