/* -------------------------------------------------------------------------- */
/*                                배열 만들기 6                                */
/* -------------------------------------------------------------------------- */

const solution = (arr) => {
  const stk = [];

  for (const num of arr) {
    if (stk.length && stk[stk.length - 1] === num) {
      stk.pop();
    } else {
      stk.push(num);
    }
  }

  return stk.length ? stk : [1];
};

console.log(solution([0, 1, 1, 1, 0])); // [0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])); // [0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])); // [-1]
