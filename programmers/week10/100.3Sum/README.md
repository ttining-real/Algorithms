# 100. 3Sum

> 🌻 Day 46
>
> 📅 2025.03.21

<br>

## 📍 문제 설명

- 정수 배열 `nums`가 주어지면 `i != j`, `i != k`, `j != k`, `nums[i] + nums[j] + nums[k] == 0`이 성립하는
  모든 삼중항 `[nums[i]`, `nums[j]`, `nums[k]]`을 반환한다.
- 반환하는 삼중항에 중복된 요소가 포함되어서는 안된다.
- 예를 들어, `nums = [-1,0,1,2,-1,-4]`일 때,
  `nums`에 -1이 2개 존재하므로 `nums[0] + nums[1] + nums[2] == 0`가 성립하는 조합이
  `[[ -1, -1, 2 ], [ -1, 0, 1 ], [ -1, 0, 1 ]]`처럼 3개 존재하지만
  `[ -1, 0, 1 ]`이 중복되므로 `[[ -1, -1, 2 ], [ -1, 0, 1 ]]`을 반환해야 한다.

<br>

## ⚠️ 제한 사항

- `3 <= nums.length <= 3000`
- `$-10^5$ <= nums[i] <= $10^5$`

<br>

## 👀 입출력 예

### 입출력 예 1️⃣

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

<br>

### 입출력 예 2️⃣

```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

<br>

### 입출력 예 3️⃣

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

<br>
<br>

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  // do something
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
```
