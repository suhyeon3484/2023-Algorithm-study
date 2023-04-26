// 1012 : 유기농 양배추
// https://velog.io/@pletis/%EB%B0%B1%EC%A4%80-1012%EB%B2%88-%EC%9C%A0%EA%B8%B0%EB%86%8D-%EB%B0%B0%EC%B6%94Node.jsJavaScript

const readFile = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';

const input = require('fs')
  .readFileSync(readFile)
  .toString()
  .trim()
  .split('\n');

const num = +input.shift();
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function bfs(startX, startY) {
  //시작 좌표 기준으로 시작
  const queue = [[startX, startY]];
  // queue가 비워지면 탈출
  while (queue.length) {
    const [x, y] = queue.shift();
    // queue의 값을 하나씩 빼서 xy로 저장
    // xy좌표가 0 이면 다시, 1이면 0으로 만들기
    // 인접한 1들 다 0으로 만들기
    if (!map[x][y]) continue;
    else map[x][y] = 0;

    // 상하좌우 탐색하여 1이 있다면 queue에 push
    for (let i = 0; i < 4; i++) {
      const xPos = x + ds[i][0];
      const yPos = y + ds[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= M || yPos >= N) continue;
      if (map[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }
}

for (let i = 0; i < num; i++) {
  let worm = 0;
  var [M, N, K] = input.shift().split(' ').map(Number);
  var map = Array.from(Array(M), () => new Array(N).fill(0));
  for (let j = 0; j < K; j++) {
    let xy = input.shift().split(' ');
    map[xy[0]][xy[1]] = 1;
  }
  for (let k = 0; k < M; k++) {
    for (let l = 0; l < N; l++) {
      //만약 그 좌표가 1이라면 worm을 늘려주고 상하좌우 탐색하여 전부 0으로 만들어준다.
      if (map[k][l]) {
        bfs(k, l);
        worm++;
      }
    }
  }
  console.log(worm);
}
