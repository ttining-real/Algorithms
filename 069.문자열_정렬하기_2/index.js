/* -------------------------------------------------------------------------- */
/*                              문자열 정렬하기 2                              */
/* -------------------------------------------------------------------------- */

const solution = (str) => str.toLowerCase().split("").sort().join("");

console.log(solution("Bcad")); // "abcd"
console.log(solution("heLLo")); // "ehllo"
console.log(solution("Python")); // "hnopty"
