/* -------------------------------------------------------------------------- */
/*                         글자 이어 붙여 문자열 만들기                         */
/* -------------------------------------------------------------------------- */

const solution = (str, indices) => {
  return indices.map((index) => str[index]).join("");
};

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
// 'programmers'

console.log(solution("zpiaz", [1, 2, 0, 0, 3]));
// 'pizza'
