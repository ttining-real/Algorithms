// 더 크게 합치기

const solution = (a, b) => {
  const num1 = Number(`${a}${b}`);
  const num2 = Number(`${b}${a}`);

  return num1 >= num2 ? num1 : num2;
};

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898
