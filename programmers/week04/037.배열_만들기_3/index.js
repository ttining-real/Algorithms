/* -------------------------------------------------------------------------- */
/*                                배열 만들기 3                                */
/* -------------------------------------------------------------------------- */

// (1)
// const solution = (arr, intervals) => {
//   const [a1, b1] = intervals[0];
//   const [a2, b2] = intervals[1];

//   return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
// };

// (2)
const solution = (arr, intervals) => {
  return intervals.reduce(
    (acc, [start, end]) => acc.concat(arr.slice(start, end + 1)),
    []
  );
};

// prettier-ignore
console.log(solution([1, 2, 3, 4, 5], [[1, 3], [0, 4]]));
// [2, 3, 4, 1, 2, 3, 4, 5]
