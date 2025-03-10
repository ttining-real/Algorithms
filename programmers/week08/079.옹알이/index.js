/* -------------------------------------------------------------------------- */
/*                                    옹알이                                   */
/* -------------------------------------------------------------------------- */

const solution = (babbling) => {
  const regex = /^(aya|ye|woo|ma)+$/;
  return babbling.filter((item) => regex.test(item)).length;
};

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
