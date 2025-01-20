// 두 수의 연산값 비교하기

const solution = (a, b) => {
  const num1 = String(a);
  const num2 = String(b);

  const num = Number(num1 + num2);
  const val = 2 * a * b;
  return num >= val ? num : val;
};

console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
