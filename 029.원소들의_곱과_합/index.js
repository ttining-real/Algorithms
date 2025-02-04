/* -------------------------------------------------------------------------- */
/*                               원소들의 곱과 합                              */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (nums) => {
//   let product = 1;
//   let sum = 0;

//   for (let num of nums) {
//     product *= num;
//     sum += num;
//   }

//   return product < sum ** 2 ? 1 : 0;
// };

// (2)
const solution = (nums) => {
  const num1 = nums.reduce((acc, num) => acc * num, 1);
  const num2 = nums.reduce((acc, num) => acc + num, 0);

  return num1 < num2 ** 2 ? 1 : 0;
};

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0
