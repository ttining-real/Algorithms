/* -------------------------------------------------------------------------- */
/*                                x 사이의 개수                                */
/* -------------------------------------------------------------------------- */

const solution = (str) => {
  return str.split("x").map((item) => item.length);
};

console.log(solution("oxooxoxxox")); // [1, 2, 1, 0, 1, 0]
console.log(solution("xabcxdefxghi")); // [0, 3, 3, 3]
