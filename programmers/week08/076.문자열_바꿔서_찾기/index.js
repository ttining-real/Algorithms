/* -------------------------------------------------------------------------- */
/*                             문자열 바꿔서 찾기                              */
/* -------------------------------------------------------------------------- */

const solution = (str, part) => {
  const swap = [...str].map((i) => (i === "A" ? "B" : "A")).join("");

  return swap.includes(part) ? 1 : 0;
};

console.log(solution("ABBAA", "AABB")); // 1
console.log(solution("ABAB", "ABAB")); // 0
