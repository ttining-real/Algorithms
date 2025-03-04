/* -------------------------------------------------------------------------- */
/*                                 꼬리 문자열                                 */
/* -------------------------------------------------------------------------- */

const solution = (strList, ex) => {
  return strList.filter((str) => !str.includes(ex)).join("");
};

console.log(solution(["abc", "def", "ghi"], "ef")); // 'abcghi'
console.log(solution(["abc", "bbc", "cbc"], "c")); // ''
