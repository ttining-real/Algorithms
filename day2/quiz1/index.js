// 머쓱이는 아이스 아메리카노가 마시고 싶다.

function solution(money) {
  const iceAmericano = 5500;
  const count = Math.floor(money / iceAmericano);
  const change = money % iceAmericano;

  let result = [];

  return [count, change];
}

// solution(5500);
// solution(15000);

console.log(solution(5500)); // [1, 0]
console.log(solution(15000)); // [2, 4000]
