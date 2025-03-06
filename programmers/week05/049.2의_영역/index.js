/* -------------------------------------------------------------------------- */
/*                                  2의 영역                                  */
/* -------------------------------------------------------------------------- */

const solution = (nums) => {
  const start = nums.indexOf(2);
  const end = nums.lastIndexOf(2);

  return start === -1 ? [-1] : nums.slice(start, end + 1);
};

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
