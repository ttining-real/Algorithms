/* -------------------------------------------------------------------------- */
/*                               중복된 문자 제거                              */
/* -------------------------------------------------------------------------- */

const solution = (str) => {
  return [...new Set(str)].join("");
};

console.log(solution("people")); // 'peol'
console.log(solution("We are the world")); // 'We arthwold'
