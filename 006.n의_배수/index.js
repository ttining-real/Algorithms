// n의 배수

// (1)
// const solution = (num, n) => {
//   // do something
//   if (num % n === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// (2)
const solution = (num, n) => {
  return num % n === 0 ? 1 : 0;
};

console.log(solution(98, 2)); // 1
console.log(solution(34, 3)); // 0
