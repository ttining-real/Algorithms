/* -------------------------------------------------------------------------- */
/*                                배열 만들기 2                                */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (l, r) => {
//   const result = [];

//   for (let i = l; i <= r; i++) {
//     if ([...String(i)].every((ch) => ch === "0" || ch === "5")) {
//       result.push(i);
//     }
//   }

//   return result.length ? result : [-1];
// };

// (2)

const solution = (l, r) => {
  const result = [];

  for (let i = l; i <= r; i++) {
    if (/^[05]+$/.test(i.toString())) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
};

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]
