// 공배수

const solution = (num, n, m) => {
  // if (num % n === 0 && num % m === 0) {
  //   return 1;
  // } else {
  //   return 0;
  // }

  return num % n === 0 && num % m === 0 ? 1 : 0;
};

console.log(solution(60, 2, 3)); // 1
console.log(solution(55, 10, 5)); // 0
