// 양꼬치

const solution = (n, k) => {
  const lamb = 12000;
  const drink = 2000;
  const freeDrinks = Math.floor(n / 10);

  const totalCost = lamb * n + drink * (k - freeDrinks);

  return totalCost;
};

console.log(solution(10, 3)); // 124000
console.log(solution(64, 6)); // 768000
