/* -------------------------------------------------------------------------- */
/*                               중복된 숫자 개수                              */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (array, n) => {
//   return array.filter((item) => item === n).length;
// };

// (2)
const solution = (array, n) =>
  array.reduce((count, item) => count + (item === n ? 1 : 0), 0);

console.log(solution([1, 1, 2, 3, 4, 5], 1)); // 2
console.log(solution([0, 2, 3, 4], 1)); // 0
