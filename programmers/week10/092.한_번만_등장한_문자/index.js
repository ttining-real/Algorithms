/* -------------------------------------------------------------------------- */
/*                              한 번만 등장한 문자                             */
/* -------------------------------------------------------------------------- */

const solution = (str) => {
  const count = [];

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return Object.keys(count)
    .filter((char) => count[char] === 1)
    .sort()
    .join("");
};

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"
