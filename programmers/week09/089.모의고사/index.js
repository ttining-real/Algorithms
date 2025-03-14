/* -------------------------------------------------------------------------- */
/*                                  모의고사                                   */
/* -------------------------------------------------------------------------- */

const solution = (answers) => {
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supo1[i % supo1.length]) score1++;
    if (answers[i] === supo2[i % supo2.length]) score2++;
    if (answers[i] === supo3[i % supo3.length]) score3++;
  }

  const maxScore = Math.max(score1, score2, score3);
  const result = [];

  if (score1 === maxScore) result.push(1);
  if (score2 === maxScore) result.push(2);
  if (score3 === maxScore) result.push(3);

  return result;
};

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
