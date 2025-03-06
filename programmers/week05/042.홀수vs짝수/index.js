/* -------------------------------------------------------------------------- */
/*                                홀수 vs 짝수                                 */
/* -------------------------------------------------------------------------- */

const solution = (nums) => {
  const [odd, even] = nums.reduce(
    ([odd, even], num, idx) =>
      idx % 2 === 0 ? [odd + num, even] : [odd, even + num],
    [0, 0]
  );

  return Math.max(odd, even);
};

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8
