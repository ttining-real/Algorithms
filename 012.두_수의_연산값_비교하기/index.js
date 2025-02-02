// 두 수의 연산값 비교하기

// (1)
// const solution = (a, b) => {
//   const num1 = String(a);
//   const num2 = String(b);

//   const num = Number(num1 + num2);
//   const val = 2 * a * b;
//   return num >= val ? num : val;
// };

// (2)
const solution = (a, b) => {
  const sumA = Number(`${a}${b}`);
  const sumB = a * 2 * b;

  return sumA >= sumB ? sumA : sumB;
};

console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
