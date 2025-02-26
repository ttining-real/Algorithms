/* -------------------------------------------------------------------------- */
/*                             공백으로 구분하기 2                             */
/* -------------------------------------------------------------------------- */

const solution = (str) => str.trim().split(/\s+/);

console.log(solution(" i    love  you")); // ["i", "love", "you"]
console.log(solution("    programmers  ")); // ["programmers"]
