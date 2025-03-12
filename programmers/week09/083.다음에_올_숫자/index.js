/* -------------------------------------------------------------------------- */
/*                               다음에 올 숫자                                */
/* -------------------------------------------------------------------------- */

const solution = (common) => {
  const [a, b, c] = common;
  const diff = b - a;
  const ratio = b / a;

  if (c - b === diff) {
    return common.at(-1) + diff;
  }

  return common.at(-1) * ratio;
};

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
