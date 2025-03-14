# 90. running sum

> 🌻 Day 41
>
> 📅 2025.03.15

<br>

## 📍 문제 설명

- 주어진 배열 nums의 누계 합(running sum)을 runningSum[i] = sum(nums[0]...nums[i])으로 정의합니다.
- nums의 누계 합을 반환합니다.

<br>

### 입출력 예 1️⃣

```bash
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

<br>

### 입출력 예 2️⃣

```bash
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

<br>

### 입출력 예 3️⃣

```bash
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
```

<br>

```javascript
const runningSum = (nums) => {
  // do something
};

console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]
```
