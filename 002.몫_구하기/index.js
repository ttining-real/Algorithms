// 몫 구하기

// (1)
// function solution(num1, num2) {
//   const result = Math.floor(num1 / num2);

//   return result;
// }

// (2)
const solution = (num1, num2) => {
  return Math.trunc(num1 / num2);
};

solution(10, 5);
solution(7, 2);

// console.log(solution(10, 5)); // 2
// console.log(solution(7, 2)); // 3
