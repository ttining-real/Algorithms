/* -------------------------------------------------------------------------- */
/*                                 외계어 사전                                 */
/* -------------------------------------------------------------------------- */

const solution = (spell, dic) => {
  const target = spell.sort().join("");
  return dic.some((item) => [...item].sort().join("") === target) ? 1 : 2;
};

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); // 2
