/* -------------------------------------------------------------------------- */
/*                                   average                                  */
/* -------------------------------------------------------------------------- */

const average = (scores) => {
  if (scores.length === 0) return 0;

  const sum = scores.reduce((acc, num) => acc + num, 0);
  return Math.round(sum / scores.length);
};

console.log(average([73, 82, 99])); // 85
console.log(average([50, 100, 90, 45, 70])); // 71
console.log(average([100])); // 100
console.log(average([])); // 0
