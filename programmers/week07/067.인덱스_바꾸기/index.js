/* -------------------------------------------------------------------------- */
/*                                인덱스 바꾸기                                */
/* -------------------------------------------------------------------------- */

const solution = (str, num1, num2) =>
  // let arr = str.split("");

  // [arr[num1], arr[num2]] = [arr[num2], [arr[num1]]];

  // return arr.join("");

  str
    .split("")
    .map((item, index, arr) =>
      index === num1 ? arr[num2] : index === num2 ? arr[num1] : item
    )
    .join("");

console.log(solution("hello", 1, 2)); // 'hlelo'
console.log(solution("I love you", 3, 6)); // 'I l veoyou'
