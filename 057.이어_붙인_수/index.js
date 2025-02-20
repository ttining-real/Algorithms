/* -------------------------------------------------------------------------- */
/*                                 이어 붙인 수                                */
/* -------------------------------------------------------------------------- */

const solution = (nums) => {
  const odd = nums.filter((n) => n % 2 !== 0).join("");
  const even = nums.filter((n) => n % 2 === 0).join("");

  return Number(odd) + Number(even);
};

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581
