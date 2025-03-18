/* -------------------------------------------------------------------------- */
/*                                 문자열 묶기                                 */
/* -------------------------------------------------------------------------- */

const solution = (strings) => {
  const lengthMap = new Map();

  for (const str of strings) {
    const len = str.length;
    lengthMap.set(len, (lengthMap.get(len) || 0) + 1);
  }

  return Math.max(...lengthMap.values());
};

console.log(solution(["a", "bc", "d", "efg", "hi"])); // 2
