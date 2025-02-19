/* -------------------------------------------------------------------------- */
/*                                 접미사 배열                                 */
/* -------------------------------------------------------------------------- */

const solution = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.push(str.slice(i));
  }

  return arr.sort();
};

console.log(solution("banana")); // ['a', 'ana', 'anana', 'banana', 'na', 'nana']
console.log(solution("programmers")); // ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']
