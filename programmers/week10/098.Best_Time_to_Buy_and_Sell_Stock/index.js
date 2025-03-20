/* -------------------------------------------------------------------------- */
/*                       Best Time to Buy and Sell Stock                      */
/* -------------------------------------------------------------------------- */

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price); // 최저가 갱신
    maxProfit = Math.max(maxProfit, price - minPrice); // 최대 이익 갱신
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
