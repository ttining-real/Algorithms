/* -------------------------------------------------------------------------- */
/*                            잘라서 배열로 저장하기                            */
/* -------------------------------------------------------------------------- */

const solution = (str, n) => {
  const result = [];

  for (let i = 0; i < str.length; i += n) {
    result.push(str.slice(i, i + n));
  }

  return result;
};

console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
