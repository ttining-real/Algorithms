/* -------------------------------------------------------------------------- */
/*                           나누어 떨어지는 숫자 배열                          */
/* -------------------------------------------------------------------------- */

const solution = (nums, divisor) => {
  const arr = nums.filter((num) => num % divisor === 0);

  return arr.length ? arr.sort((a, b) => a - b) : [-1];
};

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]
