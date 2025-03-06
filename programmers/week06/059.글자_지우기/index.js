/* -------------------------------------------------------------------------- */
/*                                 글자 지우기                                 */
/* -------------------------------------------------------------------------- */

const solution = (str, indices) => {
  const indicesSet = new Set(indices);
  return [...str].filter((_, i) => !indicesSet.has(i)).join("");
};

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // 'programmers'
