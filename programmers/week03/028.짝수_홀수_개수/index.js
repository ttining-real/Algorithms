/* -------------------------------------------------------------------------- */
/*                               짝수 홀수 개수                                */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (nums) =>
//   nums.reduce(
//     ([even, odd], num) => (num % 2 === 0 ? [even + 1, odd] : [even, odd + 1]),
//     [0, 0]
//   );

// (2)
const solution = (nums) => [
  nums.filter((num) => num % 2 === 0).length,
  nums.filter((num) => num % 2 !== 0).length,
];

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]
