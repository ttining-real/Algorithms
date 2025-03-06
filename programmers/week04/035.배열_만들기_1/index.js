/* -------------------------------------------------------------------------- */
/*                                배열 만들기 1                                */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (n, k) => {
//   const result = [];

//   for (let i = k; i <= n; i += k) {
//     result.push(i);
//   }

//   return result;
// };

// (2)
const solution = (n, k) => {
  return Array.from({ length: Math.floor(n / k) }, (_, i) => (i + 1) * k);
};

console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]
