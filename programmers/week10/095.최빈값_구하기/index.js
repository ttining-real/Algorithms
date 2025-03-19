/* -------------------------------------------------------------------------- */
/*                                최빈값 구하기                                */
/* -------------------------------------------------------------------------- */

const solution = (nums) => {
  const freqMap = new Map();

  // 등장 횟수 카운트
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // 최빈값 찾기
  let maxCount = 0;
  let mode = -1;
  let isMultiple = false;

  for (const [num, count] of freqMap) {
    if (count > maxCount) {
      maxCount = count;
      mode = num;
      isMultiple = false;
    } else if (count === maxCount) {
      isMultiple = true;
    }
  }

  return isMultiple ? -1 : mode;
};

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1
