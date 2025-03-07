/* -------------------------------------------------------------------------- */
/*                                 sum matrix                                 */
/* -------------------------------------------------------------------------- */

const sumMatrix = (matrix) => {
  return matrix.flat().reduce((sum, num) => sum + num, 0);
};

console.log(
  sumMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 45
console.log(sumMatrix([])); // 0
