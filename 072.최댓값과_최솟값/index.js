/* -------------------------------------------------------------------------- */
/*                               최댓값과 최솟값                               */
/* -------------------------------------------------------------------------- */

const solution = (str) => {
  const nums = str.split(" ").map(Number);
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
};

console.log(solution("1 2 3 4")); // '1 4'
console.log(solution("-1 -2 -3 -4")); // '-4 -1'
console.log(solution("-1 -1")); // '-1 -1'
