/* -------------------------------------------------------------------------- */
/*                              문자열 정렬하기 1                              */
/* -------------------------------------------------------------------------- */

const solution = (str) =>
  // str
  //   .split("")
  //   .filter((item) => !isNaN(item))
  //   .map(Number)
  //   .sort((a, b) => a - b);

  (str.match(/\d/g) || []).map(Number).sort((a, b) => a - b);

console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); // [2, 2, 4, 8]
console.log(solution("abcde0")); // [0]
