/* -------------------------------------------------------------------------- */
/*                        등차수열의 특정한 항만 더하기                         */
/* -------------------------------------------------------------------------- */

// const solution = (a, d, included) => {
//   let sum = 0;

//   for (let i = 0; i < included.length; i++) {
//     if (included[i]) {
//       sum += a + i * d;
//     }
//   }

//   return sum;
// };

const solution = (a, d, included) =>
  included.reduce((sum, include, i) => sum + (include ? a + i * d : 0), 0);

console.log(solution(3, 4, [true, false, false, true, true])); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // 10
