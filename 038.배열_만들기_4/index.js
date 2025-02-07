/* -------------------------------------------------------------------------- */
/*                                배열 만들기 4                                */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (arr) => {
//   const stk = [];

//   let i = 0;

//   while (i < arr.length) {
//     if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
//       stk.push(arr[i]);
//       i++;
//     } else {
//       stk.pop();
//     }
//   }

//   return stk;
// };

// (2)
const solution = (arr) => {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    while (stk.length > 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
    stk.push(arr[i]);
  }

  return stk;
};

console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]
