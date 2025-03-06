// 머쓱이는 아이스 아메리카노가 마시고 싶다.

// (1)
// function solution(money) {
//   const iceAmericano = 5500;
//   const count = Math.floor(money / iceAmericano);
//   const change = money % iceAmericano;

//   return [count, change];
// }

// (2)
const solution = (money) => {
  const iceAmericano = 5500;
  const count = Math.floor(money / iceAmericano);
  const change = money - iceAmericano * count;

  return [count, change];
};

console.log(solution(5500)); // [1, 0]
console.log(solution(15000)); // [2, 4000]
