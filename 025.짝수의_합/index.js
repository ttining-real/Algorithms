/* -------------------------------------------------------------------------- */
/*                                  짝수의 합                                  */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (n) => {
//   let sum = 0;
//   for (let i = 2; i <= n; i += 2) {
//     sum += i;
//   }
//   return sum;
// };

// (2)
const solution = (n) => {
  const m = n % 2 === 0 ? n : n - 1;
  return (m * (m + 2)) / 4;
};

console.log(solution(10)); // 30
console.log(solution(4)); // 6
console.log(solution(3)); // 2
console.log(solution(1)); // 0
