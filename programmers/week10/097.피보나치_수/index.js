/* -------------------------------------------------------------------------- */
/*                                 피보나치 수                                 */
/* -------------------------------------------------------------------------- */

const fib = (n) => {
  let prev2 = 0,
    prev1 = 1,
    current;

  for (let i = 2; i <= n; i++) {
    current = (prev1 + prev2) % 1000000007; // 모듈러 연산 적용
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
};

console.log(fib(0)); // 0
console.log(fib(3)); // 2
console.log(fib(5)); // 5
console.log(fib(7)); // 13
console.log(fib(10)); // 55
console.log(fib(30)); // 832040
