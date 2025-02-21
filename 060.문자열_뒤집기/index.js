/* -------------------------------------------------------------------------- */
/*                                문자열 뒤집기                                */
/* -------------------------------------------------------------------------- */

const solution = (str, s, e) => {
  const arr = [...str];
  const reversedArr = arr.slice(s, e + 1).reverse();

  arr.splice(s, e - s + 1, ...reversedArr);

  return arr.join("");
};

console.log(solution("Progra21Sremm3", 6, 12)); // 'ProgrammerS123'
console.log(solution("Stanley1yelnatS", 4, 10)); // 'Stanley1yelnatS'
