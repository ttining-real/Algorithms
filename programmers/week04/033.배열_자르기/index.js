const solution = (nums, num1, num2) => {
  return nums.slice(num1, num2 + 1);
};

console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
console.log(solution([1, 3, 5], 1, 2)); // [3, 5]
