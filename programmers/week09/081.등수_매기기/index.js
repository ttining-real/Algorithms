/* -------------------------------------------------------------------------- */
/*                                 등수 매기기                                 */
/* -------------------------------------------------------------------------- */

const solution = (scores) => {
  // 평균
  const average = scores.map(([eng, math]) => (eng + math) / 2);

  // 정렬 (내림차순)
  const sorted = [...average].sort((a, b) => b - a);

  // 등수
  return average.map((score) => sorted.indexOf(score) + 1);
};

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
// [1, 2, 4, 3]
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
// [4, 4, 6, 2, 2, 1, 7]
