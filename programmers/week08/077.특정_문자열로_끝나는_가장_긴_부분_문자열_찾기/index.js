/* -------------------------------------------------------------------------- */
/*                 특정 문자열로 끝나는 가장 긴 부분 분자열 찾기                 */
/* -------------------------------------------------------------------------- */

const solution = (str, part) => {
  const lastIndex = str.lastIndexOf(part);
  return str.slice(0, lastIndex + part.length);
};

console.log(solution("AbCdEFG", "dE")); // 'AbCdE'
console.log(solution("AAAAaaaa", "a")); // 'AAAAaaaa'
