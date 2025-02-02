/* -------------------------------------------------------------------------- */
/*                              n부터 m까지의 합                               */
/* -------------------------------------------------------------------------- */

// (1)
// const sum = (n, m) => {
//   if (n > m) return 0;

//   let result = 0;

//   for (let i = n; i <= m; i++) {
//     result += i;
//   }

//   return result;
// };

// (2)
const sum = (n, m) => {
  if (n > m) return 0;

  return (m * (m + 1)) / 2 - ((n - 1) * n) / 2;
};

console.log(sum(3, 8)); // 33
console.log(sum(3, 3)); // 3
console.log(sum(3, 2)); // 0
