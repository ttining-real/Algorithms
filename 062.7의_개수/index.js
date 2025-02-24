/* -------------------------------------------------------------------------- */
/*                                  7의 개수                                  */
/* -------------------------------------------------------------------------- */

const solution = (nums) => {
  return nums.reduce((count, num) => {
    return count + String(num).split("7").length - 1;
  }, 0);
};

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
