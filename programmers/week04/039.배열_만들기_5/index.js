/* -------------------------------------------------------------------------- */
/*                                배열 만들기 5                                */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (intStrs, k, s, l) => {
//   const result = [];

//   for (let i = 0; i < intStrs.length; i++) {
//     const num = parseInt(intStrs[i].substr(s, l), 10);

//     if (num > k) {
//       result.push(num);
//     }
//   }

//   return result;
// };

// (2)
const solution = (intStrs, k, s, l) =>
  intStrs.map((str) => parseInt(str.substr(s, l), 10)).filter((num) => num > k);

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
// [56789, 99999]
