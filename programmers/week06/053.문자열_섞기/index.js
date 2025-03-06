/* -------------------------------------------------------------------------- */
/*                                 문자열 섞기                                 */
/* -------------------------------------------------------------------------- */

const solution = (str1, str2) => {
  return [...str1].map((item, index) => item + str2[index]).join("");
};

console.log(solution("aaaaa", "bbbbb")); // 'ababababab'
